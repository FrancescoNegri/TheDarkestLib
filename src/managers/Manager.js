/**
 * @author       Francesco Negri <francesco.negri@outlook.com>
 * @copyright    2019 The Darkest Light
 * @license      {@link https://github.com/FrancescoNegri/TheDarkestLib/blob/master/LICENSE|MIT License}
 */

import Phaser from 'phaser';

/**
 * @classdesc
 * Class representing a generic Manager.
 * A Manager is a controller working at a Room level.
 * It is unique in its own Room, but it isn't in the whole game.
 * From Phaser library a Manager is handled as a Phaser.Plugins.ScenePlugin.
 * It has to be added to the game into Game.js through the specified method..
 *
 * @class Manager
 * @extends Phaser.Plugins.ScenePlugin
 * @memberof TDLib.Managers
 * @constructor
 * @since 1.0.0
 *
 * @param {TDLib.Rooms.Room|Phaser.Scene} room - The room running the Manager.
 * @param {Phaser.Plugins.PluginManager} - A reference to Phaser PluginManager.
 */
export default class Manager extends Phaser.Plugins.ScenePlugin {
  constructor(room, pluginManager) {
    super(room, pluginManager);

    /**
     * The room running the Manager.
     * @type {TDLib.Rooms.Room|Phaser.Scene}
     * @since 1.0.0
     */
    this.room = room;
  }

  /**
   * Default function called by Phaser when booting the plugins.
   * @method TDLib.Managers.Manager#boot
   * @protected
   * @since 1.0.0
   */
  boot() {

  }
}
