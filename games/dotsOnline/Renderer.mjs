class Renderer {
  constructor(ctx, width, height, pxSize) {
    this._ctx = ctx;
    this._width = width;
    this._height = height;
    this._pxSize = pxSize;
  }

  onModelUpdate(partialObj, objects) {
    if (objects) {
      this._render(objects);
    }
  }

  _render(objects) {
    this._ctx.clearRect(0, 0, this._width, this._height);
    this._ctx.fillStyle = 'gray';
    objects.forEach((obj) => {
      this._ctx.fillRect(obj.x, obj.y, this._pxSize, this._pxSize);
    });
  }
}

export default Renderer;
