/**
 * @author       Francesco Negri <francesco.negri@outlook.com>
 * @copyright    2019 The Darkest Light
 * @license      {@link https://github.com/FrancescoNegri/TheDarkestLib/blob/master/LICENSE|MIT License}
 */

import Manager from './Manager';
import GlobalSettings from '../boot/Settings';
import LightSource from '../sprites/world-items/light-sources/LightSource';

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
   * Add a new light source to the lightSources group,
   * which keeps track of all the LightSource elements in the room.
   *
   * @method TDLib.Managers.LightSourceManager#add
   * @since 1.0.0
   *
   * @param {LightSource} source - The LightSource to add to the group.
   */
  add(source) {
    if (source instanceof LightSource) this.lightSources.add(source, true);
  }

  /**
   * Compute the contribute given by all the lights present
   * in the room for a specified target and returns a number ranging from 0 to 1.
   *
   * @method TDLib.Managers.LightSourceManager#calculateLightsContribuiteAtPoint
   * @since 1.0.0
   *
   * @param {Object} target - The target for which it is computed the light contribute.
   * @param {number} target.x - The x coordinate of the target.
   *
   * @return {number} A number indicating the light contribute for the specified target between 0 and 1.
   */
  calculateLightsContribuiteAtPoint(target) {
    let contributesAccumulator = 0;

    this.lightSources.getChildren().forEach(lightSource => {
      if (lightSource.isOn) {
        // eslint-disable-next-line max-len
        let singleLightContribute = lightSource.diffusedLight.intensity / (Math.abs(lightSource.x + lightSource.config.offset.x - target.x) ^ 2);

        // Contributo modificato in base all'effetto corrente
        if (lightSource.effects.currentEffect) {
          singleLightContribute *= lightSource.effects.currentEffect.contributeFactor;
        }

        contributesAccumulator += singleLightContribute;
      }
    });

    console.log(Math.floor(contributesAccumulator * 10000) / 1000);
    return Math.floor(contributesAccumulator * 10000) / 1000;
  }

  /**
   * Compute the average contribute given by all the lights present
   * in the room and returns a number ranging from 0 to 1.
   *
   * @method TDLib.Managers.LightSourceManager#calculateAverageLightsContribute
   * @since 1.0.0
   *
   * @return {number} The average light contribute in the room between 0 and 1.
   */
  calculateAverageLightsContribute() {
    let contributesAccumulator = 0;

    let averageLightsContribute = 0;

    if (this.lightSources !== null) {
      this.lightSources.getChildren().forEach(lightSource => {
        if (lightSource.isOn) contributesAccumulator += lightSource.diffusedLight.intensity;
      });
      // eslint-disable-next-line max-len
      if (contributesAccumulator !== 0) averageLightsContribute = Math.floor((contributesAccumulator * 10000 / this.room.layers.wallsLayer.width / GlobalSettings.TILE_SIZE) * 100) / 100 + 0.3;
    }

    return averageLightsContribute;
  }
}
