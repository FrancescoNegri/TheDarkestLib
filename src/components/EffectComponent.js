import Component from './Component';
import Effects from '../sprites/effects';
import LightSource from '../sprites/world-items/light-sources/LightSource';

export default class EffectComponent extends Component {
  constructor(gameObject) {
    super(gameObject);

    this.previousEffects = [];

    this.currentEffect = null;
  }

  play(key, duration = -1, config) {
    if (this.currentEffect) this.stop();

    if (key in Effects) this.currentEffect = new Effects[key](this, config);
    else if (key in Effects.LightEffects) {
      if (this.gameObject instanceof LightSource) this.currentEffect = new Effects.LightEffects[key](this, config);
      else console.log(key + ' can only be run by a LightSource');
    } else {
      console.log('No effect with key: ', key);
    }

    if (this.currentEffect) this.currentEffect.play();

    if (duration > 0) {
      this.timer = this.gameObject.room.time.addEvent({
        delay: duration,
        callback: () => {
          this.stop();
        },
        callbackScope: this,
        repeat: 0
      });
      console.log(this.currentEffect.name + 'Effect started for', duration, 'ms');
    } else if (duration === -1) {
      console.log(this.currentEffect.name + 'Effect started');
    } else {
      console.log('You must use a positive value!');
    }
  }

  stop() {
    if (this.currentEffect) {
      if (this.timer) {
        this.timer.remove();
        this.timer = null;
      }
      this.previousEffects.push(this.currentEffect);
      this.currentEffect.stop();
      console.log(this.currentEffect.name + 'Effect stopped');
      this.currentEffect = null;
      console.log(this.previousEffects);
    }
  }
}
