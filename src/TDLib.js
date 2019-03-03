import CONST from './const';
/**
 * @namespace TDLib
 */

var TDLib = {
  Actions: require('./actions'),
  Behaviours: require('./behaviours'),
  Components: require('./components'),
  Game: require('./boot/Game'),
  Managers: require('./managers'),
  Rooms: require('./rooms'),
  Sprites: require('./sprites'),
  Systems: require('./systems'),
  Utils: require('./utils')
};

TDLib = Phaser.Utils.Objects.Extend(false, TDLib, CONST);

module.exports = TDLib;
global.TDLib = TDLib;
