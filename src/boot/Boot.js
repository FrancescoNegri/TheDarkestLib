import Phaser from 'phaser';
import Settings from './Settings';

export default class Boot extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {

  }

  create() {
    this.cursors.configure(Settings.GAME.scene);
    this.rooms.configure(Settings.GAME.scene);
    this.rooms.add(Settings.STARTING_ROOM); // TEMP NAME
  }
}
