import CONST from './const';
/**
 * @namespace TDLib
 */

var TDLib = {
  Actions: require('./actions'),
  Components: require('./components'),
  Game: require('./boot/Game'),
  Rooms: require('./rooms'),
  Sprites: require('./sprites'),
  Utils: require('./utils')
};

TDLib = Phaser.Utils.Objects.Extend(false, TDLib, CONST);

module.exports = TDLib;
global.TDLib = TDLib;
