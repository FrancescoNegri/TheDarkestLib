/* eslint-disable max-len */
import WorldItem from '../WorldItem';
import Behaviours from '../../behaviours';
import EffectComponent from '../../../components/EffectComponent';

export default class LightSource extends WorldItem {
  /**
   * constructor of the class
   * @param {Room} room - Room in which will be created the LightSource.
   * @param {number} x - X position of the sprite.
   * @param {number} y - Y position of the sprite.
   * @param {string} texture - Name of the sprite for the LightSource.
   * @param {string} layer - Name of the Layer in which will be put the LightSource.
   * @param {Object} graphicLightConfig - Configuration of the graphic light of the LightSource.
   * @param {number} graphicLightConfig.intensity - Intensity of the graphic light.
   * @param {number} graphicLightConfig.radius - Radius of the graphic light.
   * @param {Object} diffusedLightConfig - Configuration of the diffused light of the LightSource.
   * @param {number} diffusedLightConfig.intensity - Intensity of the diffused light.
   * @param {number} diffusedLightConfig.radius - Radius of the diffused light.
   * @param {Object} offset - Offset of the graphic light respect the center of the sprite.
   * @param {number} offset.x - X offset.
   * @param {number} offset.y - Y offset.
   * @param {boolean} [isOn=true] - Light created as switched on or off.
   */
  constructor(room, x, y, texture, layer, graphicLightConfig, diffusedLightConfig, offset, isOn = true) {
    super(room, x, y, texture, layer, true, Behaviours.EXAMINABLE);

    this.setGravityY(0);

    this.config = {
      graphicLight: graphicLightConfig,
      diffusedLight: diffusedLightConfig,
      offset: offset
    };

    this.diffusedLight = null;
    this.graphicLight = null;

    this.isOn = false;
    if (isOn) {
      this.turnOn();
    }

    // Register this LightSource instance to the Room's LightManager
    this.room.lightSources.add(this);
    this.effects = new EffectComponent(this);
  }

  /**
   * Turn on the lights of the LightSource by creating new ones if null or adjusting intensity.
   */
  turnOn() {
    if (!this.isOn) {

      if (this.diffusedLight === null) {
        if (this.config.diffusedLight !== null) {
          this.diffusedLight = this.room.lights.addLight(this.x + this.config.offset.x, this.y + this.config.offset.y, this.config.diffusedLight.radius).setIntensity(this.config.diffusedLight.intensity);
        }
      } else this.diffusedLight.setIntensity(this.config.diffusedLight.intensity);

      if (this.graphicLight === null) {
        if (this.config.graphicLight !== null) {
          this.graphicLight = this.room.lights.addLight(this.x + this.config.offset.x, this.y + this.config.offset.y, this.config.graphicLight.radius).setIntensity(this.config.graphicLight.intensity);
        }
      } else this.graphicLight.setIntensity(this.config.graphicLight.intensity);

      this.isOn = true;
    }
  }

  /**
     * Turn off the lights of the LightSource by deleting the existing ones.
     */
  turnOff() {
    this.effects.stop();

    if (this.isOn) {
      if (this.diffusedLight !== null) {
        this.diffusedLight.setIntensity(0);
      }

      if (this.graphicLight !== null) {
        this.graphicLight.setIntensity(0);
      }

      this.isOn = false;
    }
  }

  /**
   * If the light source is on, turn it off and vice versa.
   */
  switch() {
    if (this.isOn) this.turnOff();
    else this.turnOn();
  }
}
