import Component from './Component';
import Effects from '../sprites/effects';
import LightSource from '../sprites/world-items/light-sources/LightSource';

export default class EffectComponent extends Component {
  constructor(gameObject) {
    super(gameObject);

    this.previousEffects = [];

    this.currentEffect = null;
  }

  play(key, config) {
    if (this.currentEffect) this.stop();

    if (key in Effects) this.currentEffect = new Effects[key](this, config);
    else if (key in Effects.LightEffects) {
      if (this.gameObject instanceof LightSource) this.currentEffect = new Effects.LightEffects[key](this, config);
      else console.log(key + ' can only be run by a LightSource');
    } else {
      console.log('No effect with key: ', key);
    }

    if (this.currentEffect) this.currentEffect.play();
  }

  stop() {
    if (this.currentEffect) {
      this.previousEffects.push(this.currentEffect);
      this.currentEffect.stop();
      this.currentEffect = null;
      console.log(this.previousEffects);
    }
  }
}
