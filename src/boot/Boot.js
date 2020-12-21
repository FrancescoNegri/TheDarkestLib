/**
 * @author       Francesco Negri <francesco.negri@outlook.com>
 * @copyright    2019 The Darkest Light
 * @license      {@link https://github.com/FrancescoNegri/TheDarkestLib/blob/master/LICENSE|MIT License}
 */
import Phaser from 'phaser';
import Settings from './Settings';

/**
 * @classdesc
 * The TDLib.Boot instance is a Phaser.Scene configuring the in-game systems, such as the cursors and the rooms.
 * It also starts the first room.
 * Boot is launched by TDLib.Game class as a Phaser.Scene.
 *
 * @class Boot
 * @memberof TDLib
 * @private
 * @constructor
 * @since 1.0.0
 */
export default class Boot extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  /**
   * Preload method.
   *
   * @method TDLib.Boot#preload
   * @since 1.0.0
   */
  preload() {

  }

  /**
   * Cursors are configured.
   * Rooms are configured.
   * The initial room is started.
   *
   * @method TDLib.Boot#create
   * @since 1.0.0
   */
  create() {
    console.log('Booting game systems...');
    this.cursors.configure(Settings.GAME.scene);
    this.rooms.configure(Settings.GAME.scene);
    this.rooms.start(Settings.STARTING_ROOM); // TEMP NAME
  }
}
