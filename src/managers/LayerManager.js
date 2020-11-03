/**
 * @author       Francesco Negri <francesco.negri@outlook.com>
 * @copyright    2019 The Darkest Light
 * @license      {@link https://github.com/FrancescoNegri/TheDarkestLib/blob/master/LICENSE|MIT License}
 */

import Manager from './Manager';

/**
 * @classdesc
 * Class representing a LayerManager, responsible to manage
 * the layers order, such that all the elements are rendered correctly.
 * Layers are Phaser.GameObjects.Group.
 *
 * @class LayerManager
 * @extends TDLib.Managers.Manager
 * @memberof TDLib.Managers
 * @constructor
 * @since 1.0.0
 *
 * @param {TDLib.Rooms.Room|Phaser.Scene} room - The room running the Manager.
 * @param {Phaser.Plugins.PluginManager} pluginManager - A reference to Phaser PluginManager.
 */
export default class LayerManager extends Manager {
  constructor(room, pluginManager) {
    super(room, pluginManager);
    /**
     * The size in cells of each layer.
     * @type {number}
     * @name TDLib.Managers.LayerManager#layerSize
     * @default 10
     * @since 1.0.0
     */
    this.layerSize = 10;

    /**
     * The starting depth of layers.
     * @type {number}
     * @name TDLib.Managers.LayerManager#startingDepth
     * @default 0
     * @since 1.0.0
     */
    this.strartingDepth = 0;
  }

  boot() {
    super.boot();
    /**
     * The Layer containing the background wall.
     * @type {Phaser.GameObjects.Group}
     * @name TDLib.Managers.LayerManager#backgroundLayer
     * @since 1.0.0
     */
    this.backgroundLayer = this.room.add.group();

    /**
     * The Layer containing the rear doors.
     * @type {Phaser.GameObjects.Group}
     * @name TDLib.Managers.LayerManager#rearDoorsLayer
     * @since 1.0.0
     */
    this.rearDoorsLayer = this.room.add.group();

    /**
     * The Layer containing the objects fixed to the background wall.
     * @type {Phaser.GameObjects.Group}
     * @name TDLib.Managers.LayerManager#wallFurnitureLayer
     * @since 1.0.0
     */
    this.wallFurnitureLayer = this.room.add.group();

    /**
     * The Layer containing the objects in the room.
     * @type {Phaser.GameObjects.Group}
     * @name TDLib.Managers.LayerManager#roomFurnitureLayer
     * @since 1.0.0
     */
    this.roomFurnitureLayer = this.room.add.group();

    /**
     * The Layer containing the side doors.
     * @type {Phaser.GameObjects.Group}
     * @name TDLib.Managers.LayerManager#sideDoorsLayer
     * @since 1.0.0
     */
    this.sideDoorsLayer = this.room.add.group();

    /**
     * The Layer containing the NPCs.
     * @type {Phaser.GameObjects.Group}
     * @name TDLib.Managers.LayerManager#npcLayer
     * @since 1.0.0
     */
    this.npcLayer = this.room.add.group();

    /**
     * The Layer containing the Player.
     * @type {Phaser.GameObjects.Group}
     * @name TDLib.Managers.LayerManager#playerLayer
     * @since 1.0.0
     */
    this.playerLayer = this.room.add.group();

    /**
     * The Layer containing the cieling objects from the roof.
     * @type {Phaser.GameObjects.Group}
     * @name TDLib.Managers.LayerManager#cielingObjectsLayer
     * @since 1.0.0
     */
    this.cielingObjectsLayer = this.room.add.group();

    /**
     * The Layer containing the front doors.
     * @type {Phaser.GameObjects.Group}
     * @name TDLib.Managers.LayerManager#frontDoorsLayer
     * @since 1.0.0
     */
    this.frontDoorsLayer = this.room.add.group();

    /**
     * The Layer containing the lateral walls.
     * @type {Phaser.GameObjects.Group}
     * @name TDLib.Managers.LayerManager#wallsLayer
     * @since 1.0.0
     */
    this.wallsLayer = this.room.add.group();

    /**
     * The Layer containing the lateral walls black mask.
     * @type {Phaser.GameObjects.Group}
     * @name TDLib.Managers.LayerManager#wallsMaskLayer
     * @since 1.0.0
     */
    this.wallsMaskLayer = this.room.add.group();

    /**
     * The Layer containing the overall darkness mask.
     * @type {Phaser.GameObjects.Group}
     * @name TDLib.Managers.LayerManager#overallDarknessLayer
     * @since 1.0.0
     */
    this.overallDarknessLayer = this.room.add.group();

    /**
     * The Layer containing the border black masks.
     * @type {Phaser.GameObjects.Group}
     * @name TDLib.Managers.LayerManager#borderMasksLayer
     * @since 1.0.0
     */
    this.borderMasksLayer = this.room.add.group();
  }

  /**
   * Set the correct depth for each Layer in the right order.
   * @method TDLib.Managers.LayerManager#setLayersDepth
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
