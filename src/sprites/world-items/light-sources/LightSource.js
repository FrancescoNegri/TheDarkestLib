import WorldItem from '../WorldItem';
import Behaviours from '../../../behaviours';

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
   * @param {Array} allowedBehaviours - List of names of the allowed Behaviour for this light
   * @param {boolean} [isOn=true] - Light created as switched on or off.
   */
  constructor(room, x, y, texture, layer, graphicLightConfig, diffusedLightConfig, offset, allowedBehaviours, isOn = true) {
    super(room, x, y, texture, layer, true, Behaviours.EXAMINABLE);

    this.setGravityY(0);

    this.initialConfig = {
      graphicLight: graphicLightConfig,
      diffusedLight: diffusedLightConfig,
      offset: offset
    };

    this.config = this.initialConfig;

    this.isOn = false;
    if (isOn) {
      this.turnOn();
    }

    // Register this LightSource instance to the Room's LightManager
    this.room.lightSources.add(this);
    this.lightBehaviour = new LightSourceBehaviourComponent(this, allowedBehaviours);
  }

  /**
   * Turn on the lights of the LightSource by creating new ones.
   */
  turnOn() {
    if (!this.isOn) {
      if (this.initialConfig.diffusedLight !== null) {
        this.diffusedLight = this.room.lights.addLight(this.x + this.initialConfig.offset.x, this.y + this.initialConfig.offset.y, this.initialConfig.diffusedLight.radius).setIntensity(this.initialConfig.diffusedLight.intensity);
        this.room.lightSources.diffusedLights.push(this.diffusedLight);
      }

      if (this.initialConfig.graphicLight !== null) {
        this.graphicLight = this.room.lights.addLight(this.x + this.initialConfig.offset.x, this.y + this.initialConfig.offset.y, this.initialConfig.graphicLight.radius).setIntensity(this.initialConfig.graphicLight.intensity);
        this.room.lightSources.graphicLights.push(this.graphicLight);
      }

      this.isOn = true;
    }
  }

  /**
     * Turn off the lights of the LightSource by deleting the existing ones.
     * @param {boolean} [stopBehaviours=true] - If true, turning off the light stops all the behaviours.
     */
  turnOff(stopBehaviours = true) {

    if (stopBehaviours) this.lightBehaviour.stopAllBehaviours();
    if (this.isOn) {
      let diffusedLightindex = this.room.lightSources.diffusedLights.indexOf(this.diffusedLight);

      if (diffusedLightindex > -1) {
        this.room.lightSources.diffusedLights.splice(diffusedLightindex, 1);
        this.room.lights.removeLight(this.diffusedLight);
      }

      let graphicLightindex = this.room.lightSources.graphicLights.indexOf(this.graphicLight);

      if (graphicLightindex > -1) {
        this.room.lightSources.graphicLights.splice(graphicLightindex, 1);
        this.room.lights.removeLight(this.graphicLight);
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
