import Phaser from 'phaser';
import Room from '../rooms/Room';

/**
 * The screens namespace.
 * @namespace TDLib.Screens
 * @since 1.0.0
 */

/**
 * Class representing a TDLScreen.
 * @extends Phaser.Scene
 * @memberof TDLib.Screens
 * @since 1.0.0
 */
export default class Screen extends Phaser.Scene {
  /**
   * Create a new TDLScreen.
   * @param {string} sceneKey - The unique key to identify the room.
   */
  constructor(sceneKey) {
    super(sceneKey);

    /**
       * The Settings cursor manager.
       * @type {TDLib.Plugins.SettingsPlugins.CursorManager}
       * @since 1.0.0
       */
    this.cursors;

    /**
       * The layer manager of the room.
       * @type {TDLib.Plugins.RoomPlugins.LayerManager}
       * @since 1.0.0
       */
    this.layers;

    /**
       * The Settings room manager.
       * @type {TDLib.Plugins.SettingsPlugins.RoomManager}
       * @since 1.0.0
       */
    this.rooms;

    this.key = sceneKey;
  }

  /**
   * The preload function is executed once and load all the assets needed.
   * @since 1.0.0
   */
  preload() {

  }

  /**
   * The create function is executed once, when the screen is initialized.
   * @since 1.0.0
   */
  create() {
    this.scene.bringToTop('CursorScene');
    console.log('Starting screen:', this.key);
    // this.layers.setLayersDepth();
  }

  /**
   * The update function is executed at every cycle of the game loop.
   * @since 1.0.0
   */
  update() {

  }

  change(newScene) {
    this.scene.remove(this.key);
    if (newScene.prototype instanceof Room) {
      this.rooms.start(newScene, true);
    } else {
      this.scene.add(newScene.key, newScene, true);
    }
  }
}

