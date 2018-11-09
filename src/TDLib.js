/**
 * @namespace TDLib
 */

const TDLib = {
  boot: require('./boot'),
  Rooms: require('./rooms'),
  Sprites: require('./sprites'),
  Utils: require('./utils')
};

module.exports = TDLib;
global.TDLib = TDLib;
