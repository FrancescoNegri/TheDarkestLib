import Phaser from 'phaser';
import Settings from './Settings';

export default class Boot extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {

  }

  create() {
    console.log('Booting all game systems...');
    this.cursors.configure(Settings.GAME.scene);
    this.rooms.configure(Settings.GAME.scene);
    this.rooms.start(Settings.STARTING_ROOM); // TEMP NAME
  }
}
