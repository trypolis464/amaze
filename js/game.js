'use strict';

import {speech} from './tts';
import Timer from './timer';
import {KeyboardInput} from './input.js';
import {KeyEvent} from './keycodes.js';

class Game {
  constructor() {
    this.input = new KeyboardInput();
    this.input.init();
    this.timer = Timer({
      update: () => this.update(),
      render: () => this.render()
    }, 1 / 60);
    this.level = 1;
  }

  start() {
    this.timer.start();
  }

  update(dt) {
    if (this.input.isJustPressed(KeyEvent.DOM_VK_L)) {
      speech.speak('Level ' + this.level + '.');
    }
    if (this.input.isJustReleased(KeyEvent.DOM_VK_L)) {
    }
  }

  render() {
  }
}

export { Game }
