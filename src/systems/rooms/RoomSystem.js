import Phaser from 'phaser';

/**
 * Class representing the manager of the rooms
 * @extends Phaser.Plugins.BasePlugin
 * @memberof TDLib.Plugins.GlobalPlugins
 */
export default class RoomSystem extends Phaser.Plugins.BasePlugin {
  /**
   * Create a new RoomSystem.
   * @param {Phaser.Plugins.PluginManager} pluginManager - A reference to the plugin manager.
   */
  constructor(pluginManager) {
    super(pluginManager);

    /**
     * The Scene Manager is a Game level system, responsible for creating, processing and updating all of the Scenes in a Game instance.
     * @type {Phaser.Scenes.SceneManager}
     */
    this.sceneManager = {};
  }

  /**
   * Add (and start) a new room to the RoomSystem.
   * @param {TDLib.Rooms.Room} room - The class of the new room to add.
   * @param {boolean} [autoStart=true] - Specify if the room has to start.
   */
  add(room, autoStart = true) {
    console.log('Added room:', room.name);
    this.sceneManager.add(room.name, room, autoStart);
  }

  /**
   * Configure the RoomSystem.
   * @param {Phaser.Scenes.SceneManager} sceneManager - The Scene Manager is a Game level system, responsible for creating, processing and updating all of the Scenes in a Game instance.
   */
  configure(sceneManager) {
    this.sceneManager = sceneManager;
  }
}
