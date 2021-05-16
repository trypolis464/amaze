'use strict';

import {speech} from './tts';
import Timer from './timer';
import {KeyboardInput} from './input.js';
import {KeyEvent} from './keycodes.js';
import {utils} from './utilities';
import {so} from './soundObject';
import {OldTimer} from './oldtimer';

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
        playSteps();
      }
    }
    if (this.input.isJustPressed(KeyEvent.DOM_VK_LEFT)) {
      if (this.walkTimer.elapsed >= this.walkTime) {
        this.walkTimer.restart();
        this.y--;
        playSteps();
      }
    }
    if (this.input.isJustPressed(KeyEvent.DOM_VK_DOWN)) {
      if (this.walkTimer.elapsed >= this.walkTime) {
        this.walkTimer.restart();
        this.x--;
        playSteps();
      }
    }
    if (this.input.isJustPressed(KeyEvent.DOM_VK_RIGHT)) {
      if (this.walkTimer.elapsed >= this.walkTime) {
        this.walkTimer.restart();
        this.y++;
        playSteps();
      }
    }
  }

  render() {
  }
}

function playSteps() {
  let stepSnd = so.create('steps/' + utils.randomInt(1, 5));
  stepSnd.play();
}

export { Game }
