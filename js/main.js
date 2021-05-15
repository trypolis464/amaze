export var gameID = '';

import {speech} from './tts';
import {Game} from './game';

export var ttsVoice;
export var ttsRate = 1;

document.addEventListener('DOMContentLoaded', setup);
async function setup() {
  document.getElementById('app').focus();
  const game = new Game();
  game.start();
  console.log('Success!');
}
