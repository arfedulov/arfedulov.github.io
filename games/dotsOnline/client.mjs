import { ClientModel } from './Model.mjs';
import initClientConnection from './initClientConnection.mjs';
import Renderer from './Renderer.mjs';

const BOARD_SIZE = 600;
const BOARD_WIDTH = BOARD_SIZE;
const BOARD_HEIGHT = BOARD_SIZE;
const PX_SIZE = 20;

const model = new ClientModel(BOARD_WIDTH, BOARD_HEIGHT, PX_SIZE);
initClientConnection('149.154.70.206', 9876, model);

function main() {
  const mainBoard = document.getElementById('mainBoard');
  if (mainBoard) {
    const ctx = mainBoard.getContext('2d');
    const renderer = new Renderer(ctx, BOARD_WIDTH, BOARD_HEIGHT, PX_SIZE);
    model.addObserver(renderer);
  }
}

main();

window.addEventListener('keydown', (event) => {
  const dx = PX_SIZE;
  const dy = PX_SIZE;
  const obj = model.getUserObject();
  switch(event.key) {
    case 'ArrowDown':
      obj.y = (obj.y + dy) % BOARD_HEIGHT;
      break;
    case 'ArrowUp':
      obj.y = (BOARD_HEIGHT + obj.y - dy) % BOARD_HEIGHT;
      break;
    case 'ArrowLeft':
      obj.x = (BOARD_WIDTH + obj.x - dx) % BOARD_WIDTH;
      break;
    case 'ArrowRight':
      obj.x = (obj.x + dx) % BOARD_WIDTH;
      break;
  }
  model.updateUserObject(obj);
});
