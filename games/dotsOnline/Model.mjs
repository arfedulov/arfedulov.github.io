import utils from './utils.mjs';

const OBJ_PROPERTIES = [
  'id',
  'x',
  'y',
];

class ModelBase {
  constructor() {
    this._objects = [];
    this._observers = [];
  }

  addObserver(observer) {
    this._observers.push(observer);
    observer.onModelUpdate(null, this._objects);
  }

  removeObserver(observer) {
    const removeIndex = this._observers.findIndex((obs) => obs === observer);
    if (removeIndex >= 0) {
      this._observers.splice(removeIndex, 1);
    }
  }

  getObjects() {
    return this._objects;
  }

  onWSData(data) {
    this.update(data);
  }

  update(partialObj) {
    this._validatePartialObj(partialObj);
    let needUpdate = this._checkDiff(partialObj);
    if (needUpdate) {
      let obj = this._objects.find((obj) => obj.id === partialObj.id);
      if (!obj) {
        this._validateObj(partialObj);
        this._objects.push(partialObj);
      } else {
        let _obj = { ...obj, ...partialObj };
        obj.x = _obj.x;
        obj.y = _obj.y;
      }
      this._onUpdate(partialObj);
    }

    return needUpdate;
  }

  removeObject(objectId) {
    const removeIndex = this._objects.findIndex((obj) => obj.id === objectId);
    if (removeIndex >= 0) {
      return this._objects.splice(removeIndex, 1)[0];
    }
  }

  /** Return true if partialObj differs from what is stored in model. */
  _checkDiff(partialObj) {
    const obj = this._objects.find((obj) => obj.id === partialObj.id);
    if (!obj) {
      return true;
    }
    if (typeof partialObj.x === 'number' && obj.x !== partialObj.x) {
      return true;
    }
    if (typeof partialObj.y === 'number' && obj.y !== partialObj.y) {
      return true;
    }

    return false;
  }

  _onUpdate(partialObj) {
    this._observers.forEach((observer) => {
      observer.onModelUpdate(partialObj, this._objects);
    });
  }

  _validatePartialObj(partialObj) {
    if (typeof partialObj.id !== 'number') {
      throw Error('Model._validatePartialObj(partialObj): partialObj miss required property id');
    }
  }

  _validateObj(obj) {
    OBJ_PROPERTIES.forEach((reqProp) => {
      if (!obj.hasOwnProperty(reqProp)) {
        throw Error(`Model._validateObj(obj): obj miss required property ${reqProp}`);
      }
    });
  }
}

export class ClientModel extends ModelBase {
  constructor(width, height, pxSize) {
    super();
    this._width = width;
    this._height = height;
    this._pxSize = pxSize;
    this._initUserObj();
  }

  _initUserObj() {
    const randX = Math.floor(Math.random() * this._width);
    const randY = Math.floor(Math.random() * this._height);
    this._userObject = {
      id: utils.getUniqueId(),
      x: randX - (randX % this._pxSize),
      y: randY - (randY % this._pxSize),
    }
    this._objects.push(this._userObject);
    this._onUpdate(this._userObject);
  }

  getUserObject() {
    return { ...this._userObject };
  }

  update(partialObj) {
    if (partialObj.type === 'remove') {
      this.removeObject(partialObj.id);
      return true;
    }
    super.update(partialObj);
  }

  /** Call it when user made some actions. */
  updateUserObject(partial) {
    const needUpdate = this._checkDiff(partial);
    if (needUpdate) {
      // user object stored in this._objects too and it needs to be updated
      this._userObject = { ...this._userObject, ...partial };
      const userObj = this._objects.find((obj) => obj.id === this._userObject.id);
      userObj.x = this._userObject.x;
      userObj.y = this._userObject.y;
      this._onUpdate(partial);
    }
  }

  removeObject(objectId) {
    const obj = super.removeObject(objectId);
    this._observers.forEach((observer) => {
      observer.onModelUpdate({ ...obj, type: 'remove' }, this._objects);
    });
  }
}

export class ServerModel extends ModelBase {
  constructor() {
    super();

    this._connections = [];
  }

  skipConnectionOnce(ws) {
    ws._skip = true;
  }

  unskipConnection(ws) {
    ws._skip = false;
  }

  removeObject(objectId) {
    const obj = super.removeObject(objectId);
    this._connections.forEach((ws) => {
      ws.sendMessage({ ...obj, type: 'remove' });
    });
  }

  /** Call it when model got changed (to save changes and notify observers). */
  update(partialObj) {
    const needUpdate = super.update(partialObj);
    if (needUpdate) {
      this._connections.forEach((ws) => {
        if (!ws._skip) {
          ws.sendMessage(partialObj);
        } else {
          ws._skip = false;
        }
      });
    }
  }

  addConnection(ws) {
    this._connections.push(ws);
  }

  removeConnection(ws) {
    const removeIndex = this._connections.findIndex((connection) => connection === ws);
    if (removeIndex >= 0) {
      this._connections.splice(removeIndex, 1);
    }
  }
}

export default {
  ClientModel,
  ServerModel,
};
