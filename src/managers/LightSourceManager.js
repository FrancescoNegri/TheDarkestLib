/**
 * @author       Francesco Negri <francesco.negri@outlook.com>
 * @copyright    2019 The Darkest Light
 * @license      {@link https://github.com/FrancescoNegri/TheDarkestLib/blob/master/LICENSE|MIT License}
 */

import Manager from './Manager';
import GlobalSettings from '../boot/Settings';

/**
 * @classdesc
 * Class representing a LightSourceManager, responsible to manage
 * the light sources in the active room.
 * It does not act on the Phaser lights.
 * In particular this manager compute the amount of light in a specific point
 * and the overall average light in the room.
 *
 * @class LightSourceManager
 * @extends TDLib.Managers.Manager
 * @memberof TDLib.Managers
 * @constructor
 * @since 1.0.0
 *
 * @param {TDLib.Rooms.Room|Phaser.Scene} room - The room running the Manager.
 * @param {Phaser.Plugins.PluginManager} pluginManager - A reference to Phaser PluginManager.
 */
export default class LightSourceManager extends Manager {
  constructor(room, pluginManager) {
    super(room, pluginManager);

    /**
     * An array containing all the graphic lights present in the room.
     * Graphic lights do not contribute to light computations.
     * They only have an esthetic function and usually display a high intensity and a low radius.
     * @type {Phaser.GameObjects.Light[]}
     * @name TDLib.Managers.LightSourceManager#graphicLights
     * @since 1.0.0
     */
    this.graphicLights = [];

    /**
     * An array containing all the diffused lights present in the room.
     * Diffused lights contribute to light computations.
     * They usually display a low intensity and a large radius.
     * @type {Phaser.GameObjects.Light[]}
     * @name TDLib.Managers.LightSourceManager#diffusedLights
     * @since 1.0.0
     */
    this.diffusedLights = [];
  }

  boot() {
    super.boot();

    /**
     * A group containing all the light sources in the current room.
     * @type {Phaser.GameObjects.Group}
     * @name TDLib.Managers.LightSourceManager#lightSources
     * @since 1.0.0
     */
    this.lightSources = this.room.add.group();
  }

  /**
   * Add a new light source to the light sources group.
   * @method TDLib.Managers.LightSourceManager#add
   * @since 1.0.0
   */
  add(source) {
    this.lightSources.add(source, true);

    return source;
  }

  calculateLightsContribuiteAtPoint(target) {
    let contributesAccumulator = 0;

    this.lightSources.getChildren().forEach(light => {
      if (light.isOn) {
        // eslint-disable-next-line max-len
        let singleLightContribute = light.config.diffusedLight.intensity / (Math.abs(light.x + light.config.offset.x - target.x) ^ 2);

        // Contributo modificato in base all'effetto corrente
        if (light.effects.currentEffect) {
          singleLightContribute *= light.effects.currentEffect.contributeFactor;
        }

        contributesAccumulator += singleLightContribute;
      }
    });

    return Math.floor(contributesAccumulator * 10000) / 1000;
  }

  calculateAverageLightsContribute() {
    let contributesAccumulator = 0;

    this.diffusedLights.forEach(light => {
      contributesAccumulator += light.intensity;
    });
    let averageLightsContribute = 0;

    // eslint-disable-next-line max-len
    if (contributesAccumulator !== 0) averageLightsContribute = Math.floor((contributesAccumulator * 10000 / this.room.layers.wallsLayer.width / GlobalSettings.TILE_SIZE) * 100) / 100 + 0.3;
    return averageLightsContribute;
  }
}
