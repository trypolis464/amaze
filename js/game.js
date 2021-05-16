'use strict';

import {speech} from './tts';
import Timer from './timer';
import {KeyboardInput} from './input.js';
import {KeyEvent} from './keycodes.js';
import {utils} from './utilities';
import {so} from './soundObject';
import {OldTimer} from './oldtimer';
import {Map} from './map';

class Game {
  constructor() {
    this.input = new KeyboardInput();
    this.input.init();
    this.timer = Timer({
      update: () => this.update(),
      render: () => this.render()
    }, 1 / 60);
    this.level = 1;
    this.x = 0;
    this.y = 0;
    this.walkTime = 50;
    this.walkTimer = new OldTimer();
    this.map = new Map();
  }

  start() {
    this.timer.start();
  }

  update(dt) {
    if (this.input.isJustPressed(KeyEvent.DOM_VK_L)) {
      speech.speak('Level ' + this.level + '.');
    }
    if (this.input.isJustPressed(KeyEvent.DOM_VK_C)) {
      speech.speak(this.x + ', ' + this.y + '.');
    }
    if (this.input.isJustPressed(KeyEvent.DOM_VK_UP)) {
      if (this.walkTimer.elapsed >= this.walkTime) {
        this.walkTimer.restart();
        this.x++;
        this.playSteps('up');
      }
    }
    if (this.input.isJustPressed(KeyEvent.DOM_VK_LEFT)) {
      if (this.walkTimer.elapsed >= this.walkTime) {
        this.walkTimer.restart();
        this.y--;
        this.playSteps('left');
      }
    }
    if (this.input.isJustPressed(KeyEvent.DOM_VK_DOWN)) {
      if (this.walkTimer.elapsed >= this.walkTime) {
        this.walkTimer.restart();
        this.x--;
        this.playSteps('down');
      }
    }
    if (this.input.isJustPressed(KeyEvent.DOM_VK_RIGHT)) {
      if (this.walkTimer.elapsed >= this.walkTime) {
        this.walkTimer.restart();
        this.y++;
        this.playSteps('right');
      }
    }
  }

  render() {
  }

  playSteps(dir) {
    if (this.map.getTileAt(this.x, this.y) == 'wall') {
      let stepSnd = so.create('steps/wall');
      stepSnd.play();
      if (dir == 'up') {
        this.y--;
      } else if (dir == 'left') {
        this.x++;
      } else if (dir == 'down') {
        this.y++;
      } else if (dir == 'right') {
        this.x--
      }
    } else {
      let stepSnd = so.create('steps/' + utils.randomInt(1, 5));
      stepSnd.play();
    }
  }
}

export { Game }
