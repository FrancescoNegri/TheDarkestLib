/**
 * @author       Francesco Negri <francesco.negri@outlook.com>
 * @copyright    2019 The Darkest Light
 * @license      {@link https://github.com/FrancescoNegri/TheDarkestLib/blob/master/LICENSE|MIT License}
 */

import CONST from './const';

/**
 * @namespace TDLib
 */

var TDLib = {
  Components: require('./components'),
  Game: require('./boot/Game'),
  Managers: require('./managers'),
  Rooms: require('./rooms'),
  Sprites: require('./sprites'),
  Systems: require('./systems'),
  Utils: require('./utils')
};

// Merge the consts
// eslint-disable-next-line no-undef
TDLib = Phaser.Utils.Objects.Extend(false, TDLib, CONST);

// Export the module
module.exports = TDLib;
global.TDLib = TDLib;
