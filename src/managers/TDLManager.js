/**
 * The plugins namespace.
 * @namespace TDLib.Plugins
 * @since 1.0.0
 */

/**
 * The global plugins namespace.
 * @namespace TDLib.Plugins.GlobalPlugins
 * @since 1.0.0
 */

/**
 * The room plugins namespace.
 * @namespace TDLib.Plugins.RoomPlugins
 * @since 1.0.0
 */

/**
 * Class representing a plugin which manages a room.
 * @extends Phaser.Plugins.ScenePlugin
 * @memberof TDLib.Plugins
 * @since 1.0.0
 */
export default class TDLManager extends Phaser.Plugins.ScenePlugin {
  /**
   * Create a TDLRoomPlugin.
   * @param {TDLib.Rooms.Room|Phaser.Scene} room - The room which contains the plugin.
   * @param {Phaser.Plugins.PluginManager} pluginManager - A reference to the plugin manager.
   */
  constructor(room, pluginManager) {
    super(room, pluginManager);

    /**
     * The room containing this plugin.
     * @type {TDLib.Rooms.Room}
     * @since 1.0.0
     */
    this.room = room;
  }
}
