/**
 * @author       Francesco Negri <francesco.negri@outlook.com>
 * @copyright    2019 The Darkest Light
 * @license      {@link https://github.com/FrancescoNegri/TheDarkestLib/blob/master/LICENSE|MIT License}
 */

/**
 * A Manager is a controller working at a Room level.
 * It is unique in its own Room, but it isn't in the whole game.
 * From Phaser library a Manager is handled as a Phaser.Plugins.ScenePlugin.
 * It has to be added to the game into Game.js through the specified method and it is mapped by a key.
 * @see TDLib.Game#_setPlugins
 * @namespace TDLib.Managers
 */

const Managers = {
  LayerManager: require('./LayerManager'),
  LightSourceManager: require('./LightSourceManager'),
  Manager: require('./Manager'),
  UpdateManager: require('./UpdateManager')
};

module.exports = Managers;
