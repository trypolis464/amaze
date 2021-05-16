process.env.HMR_PORT=0;process.env.HMR_HOSTNAME="localhost";parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"CLUq":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.utils=void 0,require("babel-polyfill");class t{calculateDelta(t,e,r=0){(e+=r)<t&&(delta=t-e),e>t&&(delta=e-t)}progressPan(t,e){return(200*t/e-100)/100}progressPitch(t,e,r,n,a){return t/(e+r)*(a-n)+n}progressVolume(t,e,r,n,a){return t>r?0:t/(e+r)*(a-n)+n}getProportion(t,e,r,n,a){return t>r?0:t/(e+r)*(a-n)+n}distance3D(t,e,r,n,a,o){return Math.sqrt((n-t)*(n-t)+(a-e)*(a-e)+(o-r)*(o-r))}distance(t,e,r,n){return Math.sqrt((t-r)*(t-r)+(e-n)*(e-n))}calculateAngle(t,e,r,n){let a=Math.atan2(n-e,r-t);return a=a>=0?0:2*Math.PI+a}isCollide3D(t,e){return t.x<=e.x+e.width&&t.x+t.width>=e.x&&t.y<=e.y+e.height&&t.y+t.height>=e.y&&t.z<=e.z+e.depth&&t.z+t.depth>=e.z}randomInt(t,e){return Math.floor(Math.random()*(e-t+1))+t}getRandomArbitrary(t,e){return Math.random()*(e-t)+t}sleep(t){return new Promise(e=>setTimeout(e,t))}percent(t,e){return 100*t/e}percentOf(t,e){return e*t/100}percentage(t,e){return e*t/100}average(t,e=0){const r=t.length;let n=0,a=0;if(t.length<e)return-1;for(let o=e;o<t.length;o++)n+=t[o];return a=n/(r-e)}averageInt(t,e=0){const r=t.length;let n=0,a=0;if(t.length<e)return-1;for(let o=e;o<t.length;o++)n+=t[o];return a=n/(r-e),Math.floor(a)}neg(t){return t>=0?0==t?0:1:-1}numericSort(t,e){return t<e?-1:t==e?0:1}shuffle(t){for(let e=t.length-1;e>0;e--){const r=Math.floor(Math.random()*(e+1));[t[e],t[r]]=[t[r],t[e]]}return t}objSize(t){let e,r=0;for(e in t)t.hasOwnProperty(e)&&r++;return r}copyObject(t){return Object.assign(Object.create(Object.getPrototypeOf(t)),t)}arraysEqual(t,e){for(var r=0;r<t.length;r++)if(t[r]!==e[r])return!1;return!0}pauseTimeout(t){Date.now();clearTimeout(t)}resumeTimeout(t){return remaining-=Date.now()-start,window.setTimeout(callback,remaining)}randomProperty(t){var e=Object.keys(t);return t[e[e.length*Math.random()<<0]]}async findFiles(t,e=""){let r=[],n="";return await walk.filesSync(t,(t,a,o,l)=>{""==e?r.push(a):(n=a.substr(0-e.length,e.length))==e&&r.push(a)}),r}async findFolders(t){let e=[];return await walk.dirsSync(t,(t,r,n,a)=>{e.push(r)}),e}getReadableTime(t){t=Math.floor(t);let e=Math.floor(t/1e3%60),r=Math.floor(t/6e4%60),n=Math.floor(t/36e5%24),a=parseInt(t/1e3/60/60/24);a=Math.floor(a),n=Math.floor(n),r=Math.floor(r),e=Math.floor(e);let o="";a>0&&(o=parseInt(a).toString()+":");let l="";n>0&&(l=parseInt(n).toString()+" "+this.plural(n,"hour","hours")+", ");let u="";return r>0&&(u=parseInt(r).toString()+" "+this.plural(r,"minute","minutes")+", "),parseInt(e).toString()+" "+this.plural(e,"second","seconds")}plural(t,e,r){return 1==t||-1==t?e:r}}var e=new t;exports.utils=e;
},{}],"XFNl":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.KeyEvent=void 0;const _={DOM_VK_CANCEL:3,DOM_VK_HELP:6,DOM_VK_BACK_SPACE:8,DOM_VK_TAB:9,DOM_VK_CLEAR:12,DOM_VK_RETURN:13,DOM_VK_ENTER:14,DOM_VK_SHIFT:16,DOM_VK_CONTROL:17,DOM_VK_ALT:18,DOM_VK_PAUSE:19,DOM_VK_CAPS_LOCK:20,DOM_VK_ESCAPE:27,DOM_VK_SPACE:32,DOM_VK_PAGE_UP:33,DOM_VK_PAGE_DOWN:34,DOM_VK_END:35,DOM_VK_HOME:36,DOM_VK_LEFT:37,DOM_VK_UP:38,DOM_VK_RIGHT:39,DOM_VK_DOWN:40,DOM_VK_PRINTSCREEN:44,DOM_VK_INSERT:45,DOM_VK_DELETE:46,DOM_VK_0:48,DOM_VK_1:49,DOM_VK_2:50,DOM_VK_3:51,DOM_VK_4:52,DOM_VK_5:53,DOM_VK_6:54,DOM_VK_7:55,DOM_VK_8:56,DOM_VK_9:57,DOM_VK_SEMICOLON:59,DOM_VK_EQUALS:61,DOM_VK_A:65,DOM_VK_B:66,DOM_VK_C:67,DOM_VK_D:68,DOM_VK_E:69,DOM_VK_F:70,DOM_VK_G:71,DOM_VK_H:72,DOM_VK_I:73,DOM_VK_J:74,DOM_VK_K:75,DOM_VK_L:76,DOM_VK_M:77,DOM_VK_N:78,DOM_VK_O:79,DOM_VK_P:80,DOM_VK_Q:81,DOM_VK_R:82,DOM_VK_S:83,DOM_VK_T:84,DOM_VK_U:85,DOM_VK_V:86,DOM_VK_W:87,DOM_VK_X:88,DOM_VK_Y:89,DOM_VK_Z:90,DOM_VK_CONTEXT_MENU:93,DOM_VK_NUMPAD0:96,DOM_VK_NUMPAD1:97,DOM_VK_NUMPAD2:98,DOM_VK_NUMPAD3:99,DOM_VK_NUMPAD4:100,DOM_VK_NUMPAD5:101,DOM_VK_NUMPAD6:102,DOM_VK_NUMPAD7:103,DOM_VK_NUMPAD8:104,DOM_VK_NUMPAD9:105,DOM_VK_MULTIPLY:106,DOM_VK_ADD:107,DOM_VK_SEPARATOR:108,DOM_VK_SUBTRACT:109,DOM_VK_DECIMAL:110,DOM_VK_DIVIDE:111,DOM_VK_F1:112,DOM_VK_F2:113,DOM_VK_F3:114,DOM_VK_F4:115,DOM_VK_F5:116,DOM_VK_F6:117,DOM_VK_F7:118,DOM_VK_F8:119,DOM_VK_F9:120,DOM_VK_F10:121,DOM_VK_F11:122,DOM_VK_F12:123,DOM_VK_F13:124,DOM_VK_F14:125,DOM_VK_F15:126,DOM_VK_F16:127,DOM_VK_F17:128,DOM_VK_F18:129,DOM_VK_F19:130,DOM_VK_F20:131,DOM_VK_F21:132,DOM_VK_F22:133,DOM_VK_F23:134,DOM_VK_F24:135,DOM_VK_NUM_LOCK:144,DOM_VK_SCROLL_LOCK:145,DOM_VK_COMMA:188,DOM_VK_PERIOD:190,DOM_VK_SLASH:191,DOM_VK_BACK_QUOTE:192,DOM_VK_OPEN_BRACKET:219,DOM_VK_BACK_SLASH:220,DOM_VK_CLOSE_BRACKET:221,DOM_VK_QUOTE:222,DOM_VK_META:224};exports.KeyEvent=_;
},{}],"efjR":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.KeyboardInput=void 0;var e=s(require("jquery"));function s(e){return e&&e.__esModule?e:{default:e}}const t=require("events");class h extends t{constructor(){super(),this.keyDown=[],this.justPressed=[],this.chars=[],this.justReleased=[],this.justPressedEventCallback=null,this.charEventCallback=null}init(){const e=this;document.addEventListener("keydown",s=>{e.handleKeyDown(s)}),document.addEventListener("keyup",s=>{e.handleKeyUp(s)}),document.addEventListener("keypress",s=>{e.handleChar(s)})}pause(){this.isPaused=!0}resume(){this.isPaused=!1}handleKeyDown(e){1==this.keyDown[e.which]&&void 0!==this.keyDown[e.which]||(this.keyDown[e.which]=!0,this.justPressed[e.which]=!0,this.emit(e.which),this.justReleased[e.which]=!1,void 0!==this.justPressedEventCallback&&null!=this.justPressedEventCallback&&this.justPressedEventCallback(e.which))}handleChar(e){console.log("char handled",e),e.which<48||e.which>122||""!=String.fromCharCode(e.which)&&(this.chars+=String.fromCharCode(e.which),this.emit("chr"+String.fromCharCode(e.which)),void 0!==this.charEventCallback&&null!=this.charEventCallback&&this.charEventCallback(String.fromCharCode(e.which)))}handleKeyUp(e){1==this.keyDown[e.which]&&(this.keyDown[e.which]=!1,this.justPressed[e.which]=!1,this.justReleased[e.which]=!0,this.emit("!"+e.which)),this.chars=""}destroy(){this.charEventCallback=null,this.justPressedEventCallback=null}isDown(e){return!this.isPaused&&this.keyDown[e]}isJustPressed(e){return!this.isPaused&&(1==this.justPressed[e]&&(this.justPressed[e]=!1,!0))}isJustReleased(e){return!!this.justReleased[e]&&(this.justReleased[e]=!1,!0)}keysDown(){const e=[];return this.keyDown.forEach((s,t)=>{s&&e.push(t)}),e}getChars(){const e=this.chars;return this.chars="",e}keysPressed(){const e=[];return this.justPressed.forEach((s,t)=>{s&&e.push(t)}),this.justPressed.splice(),e}releaseAllKeys(){}keysReleased(){const e=[];return this.justReleased.forEach((s,t)=>{s&&e.push(t)}),this.justReleased.splice(),e}}exports.KeyboardInput=h;
},{}],"pOT6":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.so=void 0,require("babel-polyfill");var e=require("./main"),s=require("./tts"),t=d(require("sono/effects/panner")),i=d(require("sono")),n=require("./input"),o=require("./keycodes"),u=require("./utilities");function d(e){return e&&e.__esModule?e:{default:e}}const a=require("events");var h;t.default.defaults={panningModel:"HRTF",maxDistance:50},i.default.playInBackground=!0;class l extends a{constructor(e,s=0,t=0,n=!1){super(),this.duckingFirstTime=!0,this.stream=n,this.panner=null,this.fileName=e,"string"==typeof e?(n||(this.sound=i.default.create({src:e,onComplete:()=>{this.doneLoading()}}),this.timeout=setTimeout(()=>{this.checkProgress()},2e3),this.loaded=!1,this.callback=s,this.tag=t),n&&(this.loaded=!0,this.callback=s,this.tag=t,this.sound=i.default.create(new Audio(e)),this.doneLoading())):"object"==typeof e&&(this.sound=i.default.create(""),this.sound.data=e,this.loaded=!1,this.callback=s,this.tag=t,this.doneLoading())}get playbackRate(){return this.sound.playbackRate}set playbackRate(e){return this.sound.playbackRate=e}get pitch(){return this.sound.playbackRate}set pitch(e){return this.sound.playbackRate=e}set loop(e){this.sound.loop=e}checkProgress(){this.stream||(0==this.sound.progress&&(this.sound.destroy(),this.sound=i.default.create({src:this.fileName,onComplete:()=>{this.doneLoading()}},this.stream)),1==this.sound.progress?this.doneLoading():this.timeout=setTimeout(()=>{this.checkProgress()},500))}doneLoading(){this.stream||clearTimeout(this.timeout),this.loaded=!0,0!=this.callback&&this.callback()}replay(){this.sound.stop(),this.sound.play()}play(){try{this.sound.play()}catch(e){this.stream&&(this.sound=i.default.create(new Audio(this.fileName))),this.stream||(this.sound=i.default.create({src:this.fileName,onComplete:()=>{this.doneLoading()}})),this.sound.play()}}stop(){this.sound.stop()}pause(){this.sound.pause()}resume(){this.sound.resume()}destroy(){try{this.sound.destroy()}catch(e){}}unload(){this.sound.destroy()}duck(e){this.duckingFirstTime&&(this.oldVolume=this.volume),this.duckingFirstTime=!1,this.sound.fade(.3,.15)}unduck(e){this.sound.fade(this.oldVolume,.15)}async fade(e){return this.sound.fade(0,e/1e3),new Promise(s=>{setTimeout(()=>{this.sound.stop(),s("ok")},e)})}pos(e,s,t){}forcePlay(){this.sound.stop(),this.sound.play()}async playSync(e=!1){const s=new n.KeyboardInput;return s.init(),this.sound.play(),s.justPressedEventCallback=(e=>{e!=o.KeyEvent.DOM_VK_Q&&e!=o.KeyEvent.DOM_VK_X&&e!=o.KeyEvent.DOM_VK_ESCAPE&&e!=o.KeyEvent.DOM_VK_SPACE&&e!=o.KeyEvent.DOM_VK_ENTER||(this.sound.stop(),s.justPressedEventCallback=null)}),new Promise(t=>{this.sound.once("ended",()=>{this.sound.removeAllListeners(),e&&this.sound.destroy(),t("ok"),s.justPressedEventCallback=null}),this.sound.once("stop",()=>{this.sound.removeAllListeners(),e&&this.sound.destroy(),t("ok"),s.justPressedEventCallback=null})})}get active(){return!!this.sound.loaded&&(!(this.sound.progress<1)&&(!!this.sound.loaded||void 0))}get playing(){return this.sound.playing}get pan(){return this.panner?this.currentPan:(this.panner=this.sound.effects.add((0,t.default)()),this.currentPan=0,0)}set pan(e){return this.panner||(this.panner=this.sound.effects.add((0,t.default)())),this.currentPan=e,this.panner.set(e)}get volume(){return this.sound.volume}set volume(e){this.sound.volume=e}seek(e){return this.sound.seek(e)}get currentTime(){return this.sound.currentTime}get duration(){return 1e3*this.sound.duration}get position(){return this.sound.currentTime}set currentTime(e){return this.sound.seek(e)}}class r{constructor(){this.sounds=new Array,this.loadingQueue=!1,this.queueCallback=0,this.loadedSounds=0,this.loadingSounds=0,this.loadedCallback=0,this.queue=new Array,this.queueLength=0,this.statusCallback=null,this.directory="./sounds/",this.extension=".ogg",this.oneShots=new Array,this.debug=!1,this.oneShotSound=null}setStatusCallback(e){this.statusCallback=e}findSound(e){for(let s=0;s<this.sounds.length;s++)if(this.sounds[s].fileName==e&&this.sounds[s].loaded)return this.sounds[s];return-1}findSoundIndex(e){for(const s in this.sounds)if(this.sounds[s].fileName==e)return s;return-1}resetQueuedInstance(){for(let e=0;e<this.sounds.length;e++)void 0!==this.sounds[e]&&1==this.sounds[e].tag&&(this.sounds[e].sound.destroy(),this.sounds.splice(e,1));this.loadingQueue=!1,this.queueCallback=0,this.loadedSounds=0,this.loadingSounds=0,this.loadedCallback=0,this.queue=new Array,this.queueLength=0,this.statusCallback=null}create(e,s=!1){e=this.directory+e+this.extension;let t=-1,i=null;return-1==(t=this.findSound(e))||null==t.sound.data?(i=new l(e,()=>{s||this.doneLoading()},0,s),this.sounds.push(i)):(i=new l(t.sound.data,()=>{s||this.doneLoading()},0,s)).fileName=t.fileName,i.fileName=e,i}async loadQueueSync(){return new Promise(e=>{c.setQueueCallback(()=>{e(!0)}),c.loadQueue()})}async createSync(e,s=!1){return new Promise(t=>{e=this.directory+e+this.extension;let i=-1;i=this.findSound(e);let n=null;-1==i||null==i.sound.data?(n=new l(e,()=>{s||this.doneLoading()},0,s),this.sounds.push(n),s&&t(n)):(n=new l(i.sound.data,()=>{s||this.doneLoading()},0,s),t(n)),n.fileName=e,s&&t(n),s||n.sound.once("loaded",()=>{t(n),this.doneLoading()})})}async playSync(e){let s=await c.createSync(e);await s.playSync(),s.destroy()}enqueue(e,s=!1){e=this.directory+e+this.extension,this.queue.push({file:e,stream:s}),this.queueLength=this.queue.length}loadQueue(){this.handleQueue(),this.loadingQueue=!0}setQueueCallback(e){this.queueCallback=e}resetQueue(){this.queue=[],this.loadingQueue=!1}handleQueue(){if(this.queue.length>0){if(void 0!==this.statusCallback&&null!=this.statusCallback&&this.statusCallback(1-this.queue.length/this.queueLength),-1!=this.findSound(this.queue[0].file))return this.queue.splice(0,1),void this.handleQueue();let e=this.queue[0].file,s=this.queue[0].stream;this.queue.splice(0,1),this.sounds.push(new l(e,()=>{this.handleQueue()},1,s))}else this.loadingQueue=!1,void 0!==this.queueCallback&&0!=this.queueCallback&&this.queueCallback()}setCallback(e){this.loadedCallback=e}doneLoading(){1==this.isLoading()&&void 0!==this.loadedCallback&&0!=this.loadedCallback&&null!=this.loadedCallback&&this.loadedCallback()}isLoading(){this.loadedSounds=0,this.loadingSounds=0;new Array;for(let e=0;e<this.sounds.length;e++)void 0!==this.sounds[e]&&(0==this.sounds[e].loaded?this.loadingSounds++:this.loadedSounds++);return this.loadedSounds/this.sounds.length}playOnce(e){this.oneShotSound=this.create(e).sound,this.oneShotSound.stop(),this.oneShotSound.play(),this.oneShotSound.on("ended",()=>{0==this.oneShotSound.playing&&this.oneShotSound.destroy()})}destroy(e,s=0){let t=!1;const i=this.directory+e+this.extension;for(;!t;){const e=this.findSoundIndex(i);-1==e?t=!0:(this.sounds[e].sound.unload(),this.sounds.splice(e,1))}0!=s&&s()}kill(e=0){for(;this.sounds.length>0;)this.sounds.splice(0,1);i.default.destroyAll(),0!=e&&e()}}let c=new r;exports.so=c;
},{"./main":"epB2","./tts":"wjcX","./input":"efjR","./keycodes":"XFNl","./utilities":"CLUq"}],"Pzgz":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"speech",{enumerable:!0,get:function(){return i.speech}}),exports.ScrollingText=void 0,require("babel-polyfill");var e=r(require("jquery")),t=require("./keycodes"),s=require("./soundObject"),i=require("./tts"),n=r(require("copy-to-clipboard"));function r(e){return e&&e.__esModule?e:{default:e}}if(null==a)var a=0;class c{constructor(e,t="\n",i=0){this.callback=i,this.text=e,this.delimiter=t,this.splitText=this.text.split(t),this.currentLine=0,this.sndOpen=s.so.create("ui/textOpen"),this.sndContinue=s.so.create("ui/textScroll"),this.sndClose=s.so.create("ui/textClose");document.getElementById("touchArea");if(this.init(),0==this.callback)return this.prom=new Promise(e=>{this.res=e})}init(){a=this,document.addEventListener("keydown",this.handleKeys),this.sndOpen.play(),this.currentLine=0,this.readCurrentLine()}handleKeys(e){switch(e.which){case t.KeyEvent.DOM_VK_UP:case t.KeyEvent.DOM_VK_DOWN:case t.KeyEvent.DOM_VK_LEFT:case t.KeyEvent.DOM_VK_RIGHT:a.readCurrentLine();break;case t.KeyEvent.DOM_VK_C:a.copyCurrentLine();break;case t.KeyEvent.DOM_VK_RETURN:a.advance()}}handleTap(e){0==e&&this.readCurrentLine(),1==e&&this.advance()}readCurrentLine(){if("!"==this.splitText[this.currentLine][0]){const e=this.splitText[this.currentLine].substr(1),t=s.so.create(e,!0);t.play(),t.sound.once("end",()=>{this.advance()})}else i.speech.speak(this.splitText[this.currentLine])}copyCurrentLine(){(0,n.default)(this.splitText[this.currentLine]),this.advance()}advance(){this.currentLine<this.splitText.length-1?(this.currentLine++,this.sndContinue.play(),this.readCurrentLine()):(this.sndClose.play(),this.sndClose.unload(),this.sndOpen.unload(),this.sndContinue.unload(),document.removeEventListener("keydown",this.handleKeys),0!=this.callback?this.callback():this.res())}}exports.ScrollingText=c;
},{"./keycodes":"XFNl","./soundObject":"pOT6","./tts":"wjcX"}],"EYbI":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.strings=void 0;var e=require("./main"),s=require("./utilities"),t=require("./tts"),i=require("./scrollingText");class r{constructor(){this.strings={},this.strings[1]={selectVoice:"%1 voices available, use the up and down arrows to select a voice, enter when you're done.",mSelectVoice:"text to speech voice",mLang:"Change language",newUpdate:"There is a new version available! You have version %1, version %2 is available.",mSapi:"Use text to speech for the game",mReader:"Use your screen reader for the game",newRate:"This is a text to speech rate test. Please press enter when done",rating:"Press right and left arrow keys to change the rate. Press enter when done",mRate:"Change speech rate",K:"king",Q:"queen",A:"ace",J:"jack",cspades:"spades",cdiamonds:"diamonds",cclubs:"clubs",chearts:"hearts",dq:"This is a game of risk. You will risk losing %1 beatcoins. Continue?",lang:"English",langs:"Select your language",mainmenu:"main menu: arrow keys to select options, page up and page down raise and lower the music volume. You can also use the first letter of an option to move to it",mSelect:"Please select",mBack:"go back",mStart:"Start Game",yes:"Yes",no:"no",ok:"ok"},this.strings[2]={}}get(s,t=[]){let i;if(void 0!==this.strings[e.lang][s])i=this.strings[e.lang][s];else{if(void 0===this.strings[1][s])return s;i=this.strings[1][s]}return t.forEach((e,s)=>{const t=Number(s)+1;i=i.replace("%"+t,e)}),i}speak(s,i=[]){let r;void 0!==this.strings[e.lang][s]?r=this.strings[e.lang][s]:void 0!==this.strings[1][s]?r=this.strings[1][s]:t.speech.speak(s),i.forEach((e,s)=>{const t=Number(s)+1;r=r.replace("%"+t,e)}),t.speech.speak(r)}async check(e){s.utils.objSize(this.strings);for(const s in this.strings[1])this.strings[e].hasOwnProperty(s)||await new i.ScrollingText(s+": "+this.strings[1][s])}}var a=new r;exports.strings=a;
},{"./main":"epB2","./utilities":"CLUq","./tts":"wjcX","./scrollingText":"Pzgz"}],"wjcX":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.speech=exports.TTS=void 0,require("babel-polyfill");var e=require("./main"),t=require("./strings"),s=require("./utilities"),i=require("./input.js"),n=require("./keycodes"),r=h(require("speak-tts"));function h(e){return e&&e.__esModule?e:{default:e}}const{app:a}=require("electron").remote,c=!0;class o{constructor(t=!0){this.voices=[],this.speechController=new i.KeyboardInput,this.speechController.init(),this.ducking=!1,1==e.lang&&(this.lang="en"),2==e.lang&&(this.lang="es"),this.webTTS=t,this.synth=new r.default,this.rate=2,this.speechController.justPressedEventCallback=(e=>{this.interrupt&&this.speak("",!1),e!=n.KeyEvent.VK_CONTROL&&e!=n.KeyEvent.DOM_VK_ESCAPE||this.speak("",!1)}),this.synth.init({lang:this.lang,rate:this.rate,splitSentences:!1}).then(e=>{this.voices=e.voices}).catch(t=>{(0,e.report)(t)})}setLanguage(t){try{1==t&&(this.lang="en"),2==t&&(this.lang="es"),this.synth.setLanguage(this.lang)}catch(s){(0,e.report)(s)}}setRate(e){let t=e;e>10&&(t=10),this.rate=t,this.synth.setRate(t)}speak(e,t=!1){let s=a.accessibilitySupportEnabled;if(s&&(this.webTTS=!1),s||(this.webTTS=!0),this.webTTS)try{"number"==typeof e&&(e+="."),this.synth.speak({text:e,queue:t,listeners:{onstart:()=>{this.duck()},onend:()=>{this.unduck()},onerror:e=>!1}})}catch{}else{this.duck(),document.getElementById("speech").innerHTML="";const t=document.createElement("p");t.appendChild(document.createTextNode(e)),document.getElementById("speech").appendChild(t)}}setWebTTS(e){this.webTTS=e}stop(){this.webTTS&&this.synth.cancel()}async changeRate(){let e=u.rate;const r=new i.KeyboardInput;for(r.init(),t.strings.speak("rating");!r.isJustPressed(n.KeyEvent.DOM_VK_RETURN);)await s.utils.sleep(5),r.isJustPressed(n.KeyEvent.DOM_VK_RIGHT)&&((e+=.25)>10&&(e=10),u.setRate(e),t.strings.speak("newRate")),r.isJustPressed(n.KeyEvent.DOM_VK_LEFT)&&((e-=.25)<1&&(e=1),u.setRate(e),t.strings.speak("newRate"))}changeVoice(e){let t=[];for(var s in this.voices)t.push(this.voices[s].name);t.includes(e)&&u.synth.setVoice(e)}setVoice(s,r=!1){let h="en";1==e.lang&&(h="en"),2==e.lang&&(h="es");let a=[];for(var c in this.voices){this.voices[c].lang.split("-")[0]==h&&a.push(this.voices[c].name)}r||u.speak(t.strings.get("selectVoice",[a.length]));let o=new i.KeyboardInput,l=-1;if(o.init(),r)try{return this.synth.setVoice(a[0]),a[0]}catch(d){return(0,e.report)(d),this.synth.setVoice(a[1]),a[1]}else o.justPressedEventCallback=(e=>{if(e==n.KeyEvent.DOM_VK_DOWN&&++l>=a.length&&(l=0),e==n.KeyEvent.DOM_VK_UP&&--l<=-1&&(l=a.length-1),e==n.KeyEvent.DOM_VK_RETURN||e!=n.KeyEvent.DOM_VK_UP&&e!=n.KeyEvent.DOM_VK_DOWN){if(-1!=l)return o.destroy(),void 0!==s&&s(a[l]),a[l]}else this.synth.setVoice(a[l]),u.speak(a[l])})}duck(){this.ducking||(this.ducking=!0,void 0!==this.ducker&&this.ducker.duck())}unduck(){this.ducking=!1,void 0!==this.ducker&&this.ducker.unduck()}}exports.TTS=o;const u=new o(!1);exports.speech=u;
},{"./main":"epB2","./strings":"EYbI","./utilities":"CLUq","./input.js":"efjR","./keycodes":"XFNl"}],"XCzN":[function(require,module,exports) {
function n(n,e){let t,i=0,o=!1,r=0,u=0,a=e||1/120;function c(e){if(null!==i)for(r+=(e-i)/1e3;r>a;)n.update(a,u),u+=1,r-=a;i=e,n.render(),o&&(t=requestAnimationFrame(c))}function f(){i=null,o=!0,t=requestAnimationFrame(c)}function l(){o=!1,cancelAnimationFrame(t)}return{start:f,stop:l,change:function(n){r=a=n||1/60,u=0,l(),f()}}}module.exports=n;
},{}],"fFYo":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.OldTimer=void 0;class e{constructor(e=!0){this.elapsed,e&&(this.paused=!1),e||(this.paused=!0),this.lastTime=0,this.pauseWhen=0,this.started=e}isActive(){return!paused&started}get elapsed(){return this.paused?this.pauseWhen-this.lastTime:performance.now()-this.lastTime}pause(){this.paused=!0,this.pauseWhen=performance.now()}reset(){this.lastTime=performance.now(),this.pauseWhen=0,this.paused=!1,this.started=!0}restart(){this.lastTime=performance.now(),this.pauseWhen=0,this.paused=!1,this.started=!0}resume(){this.paused=!1,this.started=!0,this.lastTime+=performance.now()-this.pauseWhen}}exports.OldTimer=e;
},{}],"quTw":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Map=void 0;class s{constructor(s,t){this.maxX=s,this.maxY=t,this.tiles=[]}spawnPlatform(s,e,i,l,h){this.tiles.push(new t(s,e,i,l,h)),console.log("Tiles list: "+this.tiles)}getTileAt(s,t){let e="";for(let i=0;i<this.tiles.length;i++)this.tiles[i].here(s,t)&&(e=this.tiles[i].surface);return console.log("Tile is "+e),e}}exports.Map=s;class t{constructor(s,t,e,i,l){this.minX=s,this.maxX=t,this.minY=e,this.maxY=i,this.surface=l}here(s,t){return s>=this.minX&&s<=this.maxX&&t>=this.minY&&t<=this.maxY}}
},{}],"QcRT":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Game=void 0;var e=require("./tts"),t=p(require("./timer")),s=require("./input.js"),i=require("./keycodes.js"),r=require("./utilities"),a=require("./soundObject"),h=require("./oldtimer"),l=require("./map");function p(e){return e&&e.__esModule?e:{default:e}}class u{constructor(){this.input=new s.KeyboardInput,this.input.init(),this.timer=(0,t.default)({update:()=>this.update(),render:()=>this.render()},1/60),this.level=1,this.x=0,this.y=0,this.walkTime=50,this.walkTimer=new h.OldTimer,this.map=new l.Map,this.gameTimer=new h.OldTimer}start(){this.timer.start(),this.map.spawnPlatform(-1,51,-1,51,"wall"),this.map.spawnPlatform(0,50,0,50,"tile")}update(t){this.input.isJustPressed(i.KeyEvent.DOM_VK_L)&&e.speech.speak("Level "+this.level+"."),this.input.isJustPressed(i.KeyEvent.DOM_VK_C)&&e.speech.speak(this.x+", "+this.y+"."),this.input.isJustPressed(i.KeyEvent.DOM_VK_UP)&&this.walkTimer.elapsed>=this.walkTime&&(this.walkTimer.restart(),this.y++,this.playSteps("up")),this.input.isJustPressed(i.KeyEvent.DOM_VK_LEFT)&&this.walkTimer.elapsed>=this.walkTime&&(this.walkTimer.restart(),this.x--,this.playSteps("left")),this.input.isJustPressed(i.KeyEvent.DOM_VK_DOWN)&&this.walkTimer.elapsed>=this.walkTime&&(this.walkTimer.restart(),this.y--,this.playSteps("down")),this.input.isJustPressed(i.KeyEvent.DOM_VK_RIGHT)&&this.walkTimer.elapsed>=this.walkTime&&(this.walkTimer.restart(),this.x++,this.playSteps("right"))}render(){}playSteps(e){if("wall"==this.map.getTileAt(this.x,this.y)){a.so.create("steps/wall").play(),"up"==e?this.y--:"left"==e?this.x++:"down"==e?this.y++:"right"==e&&this.x--}else{a.so.create("steps/"+r.utils.randomInt(1,5)).play()}}}exports.Game=u;
},{"./tts":"wjcX","./timer":"XCzN","./input.js":"efjR","./keycodes.js":"XFNl","./utilities":"CLUq","./soundObject":"pOT6","./oldtimer":"fFYo","./map":"quTw"}],"epB2":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ttsRate=exports.ttsVoice=exports.gameID=void 0;var e,t=require("./tts"),s=require("./game"),o="";exports.gameID=o,exports.ttsVoice=e;var r=1;async function a(){document.getElementById("app").focus(),(new s.Game).start(),console.log("Success!")}exports.ttsRate=r,document.addEventListener("DOMContentLoaded",a);
},{"./tts":"wjcX","./game":"QcRT"}]},{},["epB2"], null)
//# sourceMappingURL=/main.js.map