import {speech} from './tts';
import Timer from './timer';
import $ from 'jquery';
import {utils} from './utilities';
import {ScrollingText} from './scrollingText';
import {KeyboardInput} from './input.js';
import {KeyEvent} from './keycodes.js';
import {so} from './soundObject';

class Game {
  constructor() {
    this.input = new KeyboardInput();
    this.input.init();
    this.timer = Timer({
      update: () => this.update(),
      render: () => this.render()
    }, 1 / 60);
  }

  start() {
    this.sound = so.create('menu_music');
    this.sound.loop = true;
    this.sound.play();
    this.timer.start();
  }

  update(dt) {
    if (this.input.isJustPressed(KeyEvent.DOM_VK_UP)) {
      speech.speak('Pitch up.');
      this.sound.playbackRate += 0.01;
    }
    if (this.input.isJustReleased(KeyEvent.DOM_VK_UP)) {
    }
    if (this.input.isJustPressed(KeyEvent.DOM_VK_DOWN)) {
      speech.speak('Pitch down.');
      this.sound.playbackRate -= 0.01;
    }
    if (this.input.isJustReleased(KeyEvent.DOM_VK_DOWN)) {
    }
  }

  render() {
  }
}

export { Game }
