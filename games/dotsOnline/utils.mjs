const COORDS_AND_ID_REGEX = /^x=(-?\d+)&y=(-?\d+)&id=(\d+)$/;

function parseCoords(message) {
    if (typeof message === 'string') {
        let result = {};
        const matchCoordsAndId = message.trim().match(COORDS_AND_ID_REGEX);
        if (matchCoordsAndId) {
            result.x = parseInt(matchCoordsAndId[1], 10);
            result.y = parseInt(matchCoordsAndId[2], 10);
            result.id = parseInt(matchCoordsAndId[3], 10);
            return result;
        }
    }
}

function writeMessage(coords) {
    if (coords
      && typeof coords.x === 'number'
      && typeof coords.y === 'number'
      && typeof coords.id === 'number') {
        return `x=${coords.x}&y=${coords.y}&id=${coords.id}`;
    }
    return 'invalid params';
}

function getUniqueId() {
    const range = 10 ** 6;
    return Math.floor(Math.random() * range);
}

export default {
    parseCoords,
    writeMessage,
    getUniqueId,
}
