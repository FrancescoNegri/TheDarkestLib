import TDLManager from '../TDLManager';
import Settings from './Settings';

/**
 * Class representing the manager of the layers in every room.
 * @extends TDLib.Plugins.TDLRoomPlugin
 * @memberof TDLib.Plugins.RoomPlugins
 * @since 1.0.0
 */
export default class LayerManager extends TDLManager {
  /**
   * Create a new RoomManager.
   * @param {TDLib.Rooms.Room} room - The room in which the layer manager operates.
   * @param {Phaser.Plugins.PluginManager} pluginManager - A reference to the plugin manager.
   */
  constructor(room, pluginManager) {
    super(room, pluginManager);
    /**
     * The size in cells of each layer.
     * @type {number}
     * @since 1.0.0
     */
    this.layerSize = Settings.layerSize;

    /**
     * The starting depth of layers.
     * @type {number}
     * @since 1.0.0
     */
    this.strartingDepth = Settings.startingDepth;
  }

  /**
   * Boot all the layers in the correct order.
   * @since 1.0.0
   */
  boot() {
    /**
     * The layer containing the background wall.
     * @type {Phaser.GameObjects.Group}
     * @since 1.0.0
     */
    this.backgroundLayer = this.room.add.group();

    /**
     * The layer containing the rear doors.
     * @type {Phaser.GameObjects.Group}
     * @since 1.0.0
     */
    this.rearDoorsLayer = this.room.add.group();

    /**
     * The layer containing the objects fixed to the background wall.
     * @type {Phaser.GameObjects.Group}
     * @since 1.0.0
     */
    this.wallFurnitureLayer = this.room.add.group();

    /**
     * The layer containing the objects in the room.
     * @type {Phaser.GameObjects.Group}
     * @since 1.0.0
     */
    this.roomFurnitureLayer = this.room.add.group();

    /**
     * The layer containing the side doors.
     * @type {Phaser.GameObjects.Group}
     * @since 1.0.0
     */
    this.sideDoorsLayer = this.room.add.group();

    /**
     * The layer containing the NPCs.
     * @type {Phaser.GameObjects.Group}
     * @since 1.0.0
     */
    this.npcLayer = this.room.add.group();

    /**
     * The layer containing the player.
     * @type {Phaser.GameObjects.Group}
     * @since 1.0.0
     */
    this.playerLayer = this.room.add.group();

    /**
     * The layer containing the cieling objects from the roof.
     * @type {Phaser.GameObjects.Group}
     * @since 1.0.0
     */
    this.cielingObjectsLayer = this.room.add.group();

    /**
     * The layer containing the front doors.
     * @type {Phaser.GameObjects.Group}
     * @since 1.0.0
     */
    this.frontDoorsLayer = this.room.add.group();

    /**
     * The layer containing the lateral walls.
     * @type {Phaser.GameObjects.Group}
     * @since 1.0.0
     */
    this.wallsLayer = this.room.add.group();

    /**
     * The layer containing the lateral walls black mask.
     * @type {Phaser.GameObjects.Group}
     * @since 1.0.0
     */
    this.wallsMaskLayer = this.room.add.group();

    /**
     * The layer containing the overall darkness mask.
     * @type {Phaser.GameObjects.Group}
     * @since 1.0.0
     */
    this.overallDarknessLayer = this.room.add.group();

    /**
     * The layer containing the border black masks.
     * @type {Phaser.GameObjects.Group}
     * @since 1.0.0
     */
    this.borderMasksLayer = this.room.add.group();
  }

  /**
   * Set the correct depth for each layer in the right order.
   * @since 1.0.0
   */
  setLayersDepth() {
    let i = this.strartingDepth;

    this.backgroundLayer.setDepth(this.layerSize * i);
    i++;
    this.rearDoorsLayer.setDepth(this.layerSize * i);
    i++;
    this.wallFurnitureLayer.setDepth(this.layerSize * i);
    i++;
    this.roomFurnitureLayer.setDepth(this.layerSize * i);
    i++;
    this.sideDoorsLayer.setDepth(this.layerSize * i);
    i++;
    this.npcLayer.setDepth(this.layerSize * i);
    i++;
    this.playerLayer.setDepth(this.layerSize * i);
    i++;
    this.cielingObjectsLayer.setDepth(this.layerSize * i);
    i++;
    this.frontDoorsLayer.setDepth(this.layerSize * i);
    i++;
    this.wallsLayer.setDepth(this.layerSize * i);
    i++;
    this.wallsMaskLayer.setDepth(this.layerSize * i);
    i++;
    this.overallDarknessLayer.setDepth(this.layerSize * i);
    i++;
    this.borderMasksLayer.setDepth(this.layerSize * i);
    i++;
  }
}
