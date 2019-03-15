import Manager from '../Manager';

/**
 * Class representing the update plugin.
 * @extends TDLib.Plugins.TDLRoomPlugin
 * @memberof TDLib.Plugins.RoomPlugins
 * @since 1.0.0
 */
export default class UpdateManager extends Manager {
  /**
   * Create a new UpdatePlugin.
   * @param {TDLib.Rooms.Room} room - The room in which the layer manager operates.
   * @param {Phaser.Plugins.PluginManager} pluginManager - A reference to the plugin manager.
   */
  constructor(room, pluginManager) {
    super(room, pluginManager);
  }

  /**
   * Boot the plugin.
   * @since 1.0.0
   */
  boot() {
    super.boot();
    const events = this.systems.events;

    this.gameObjects = new Phaser.Structs.Set();

    events.on('update', this._sceneUpdate, this);
    events.on('shutdown', this._sceneShutdown, this);
    events.once('destroy', this._sceneDestroy, this);
  }

  /**
   * Update every game object.
   * @param {*} time
   * @param {*} delta
   * @private
   * @since 1.0.0
   */
  _sceneUpdate(time, delta) {
    this.gameObjects.iterateLocal('update', time, delta);
  }

  /**
   * Called at the shutdown of the scene.
   * @private
   * @since 1.0.0
   */
  _sceneShutdown() {
    this.gameObjects.clear();
  }

  /**
   * Called when the scene is destroyed.
   * @private
   * @since 1.0.0
   */
  _sceneDestroy() {
    const events = this.systems.events;

    events.off('update', this._scenePostUpdate, this);
    events.off('shutdown', this._sceneShutdown, this);
    events.off('destroy', this._sceneDestroy, this);

    this.gameObjects = null;
    this.scene = null;
    this.systems = null;
  }

  /**
   * Add an object to the global update loop of the game.
   * @param {TDLib.Sprites.TDLSprite} obj - The object to add to the update loop.
   * @since 1.0.0
   */
  add(obj) {
    obj.once('destroy', this.remove, this);
    this.gameObjects.set(obj);
  }

  /**
   * Add multiple objects to the global update loop of the game.
   * @param {TDLib.Sprites.TDLSprite[]} obj - The objects to add to the update loop.
   * @since 1.0.0
   */
  addMultiple(objs) {
    objs.forEach(this.add, this);
  }

  /**
   * Remove an object from the global update loop of the game.
   * @param {TDLib.Sprites.TDLSprite} obj - The object to remove from the update loop.
   * @since 1.0.0
   */
  remove(obj) {
    obj.off('destroy', this.remove, this);
    this.gameObjects.delete(obj);
  }
}
