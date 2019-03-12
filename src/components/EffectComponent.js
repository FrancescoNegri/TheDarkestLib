/**
 * @author       Francesco Negri <francesco.negri@outlook.com>
 * @copyright    2019 The Darkest Light
 * @license      {@link https://github.com/FrancescoNegri/TheDarkestLib/blob/master/LICENSE|MIT License}
 */

import Component from './Component';
import Effects from '../sprites/effects';
import LightSource from '../sprites/world-items/light-sources/LightSource';

/**
 * @classdesc
 * Class representing the EffectComponent.
 * EffectComponent is responsible to handle all the effects of a Sprite.
 *
 * @class EffectComponent
 * @memberof TDLib.Components
 * @constructor
 * @since 1.0.0
 *
 * @param {TDLib.Sprites.Sprite} gameObject - The Sprite that owns the component.
 */
export default class EffectComponent extends Component {
  constructor(gameObject) {
    super(gameObject);

    /**
     * An array containing all the already played Effects.
     * @type {Array}
     * @name TDLib.Components.EffectComponent#previousEffects
     * @since 1.0.0
     */
    this.previousEffects = [];

    /**
     * The currently played Effect.
     * @type {TDLib.Sprites.Effects.Effect}
     * @name TDLib.Components.EffectComponent#currentEffect
     * @since 1.0.0
     */
    this.currentEffect = null;
  }

  /**
   * Starts a new Effect. If there's an already running Effect it is stopped.
   *
   * @method TDLib.Components.EffectComponent#play
   * @param {string} key - A key identifying an Effect.
   * @param {Object} [duration=-1] - If specified it represents the duration of the Effect.
   * @param {Object} [config] - The configuration object for the Effect.
   * @since 1.0.0
   */
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

  /**
   * Stops the currently played Effect.
   *
   * @method TDLib.Components.EffectComponent#stop
   * @since 1.0.0
   */
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
