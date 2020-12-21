/**
 * @author       Francesco Negri <francesco.negri@outlook.com>
 * @copyright    2019 The Darkest Light
 * @license      {@link https://github.com/FrancescoNegri/TheDarkestLib/blob/master/LICENSE|MIT License}
 */

/**
 * The default Game settings.
 * @namespace TDLib.Settings
 */
var Settings = {
  /**
   * The instance of the Game.
   *
   * @name TDLib.Settings.GAME
   * @const
   * @type {TDLib.Game}
   * @since 1.0.0
   */
  GAME: '',
  /**
   * The size of the tiles.
   *
   * @name TDLib.Settings.TILE_SIZE
   * @const
   * @type {Number}
   * @since 1.0.0
   */
  TILE_SIZE: 48,
  /**
   * The height of a standard room in tiles.
   *
   * @name TDLib.Settings.ROOM_HEIGHT_IN_TILE
   * @const
   * @type {Number}
   * @since 1.0.0
   */
  ROOM_HEIGHT_IN_TILE: 6,
  /**
   * The inventory width in tiles in mobile devices.
   *
   * @name TDLib.Settings.INVENTORY_WIDTH_IN_TILES_MOBILE
   * @const
   * @type {Number}
   * @since 1.0.0
   */
  INVENTORY_WIDTH_IN_TILES_MOBILE: 1.25,
  /**
   * The inventory width in tiles in desktop devices.
   *
   * @name TDLib.Settings.INVENTORY_WIDTH_IN_TILES_DESKTOP
   * @const
   * @type {Number}
   * @since 1.0.0
   */
  INVENTORY_WIDTH_IN_TILES_DESKTOP: 0,
  /**
   * The inventory height in tiles in mobile devices.
   *
   * @name TDLib.Settings.INVENTORY_HEIGHT_IN_TILES_MOBILE
   * @const
   * @type {Number}
   * @since 1.0.0
   */
  INVENTORY_HEIGHT_IN_TILES_MOBILE: 0,
  /**
   * The inventory height in tiles in desktop devices.
   *
   * @name TDLib.Settings.INVENTORY_HEIGHT_IN_TILES_DESKTOP
   * @const
   * @type {Number}
   * @since 1.0.0
   */
  INVENTORY_HEIGHT_IN_TILES_DESKTOP: 1,
  /**
   * The room frame in tiles in desktop devices.
   *
   * @name TDLib.Settings.ROOM_FRAME_IN_TILES_DESKTOP
   * @const
   * @type {Number}
   * @since 1.0.0
   */
  ROOM_FRAME_IN_TILES_DESKTOP: 0.5,
  /**
   * The room frame in tiles in mobile devices.
   *
   * @name TDLib.Settings.ROOM_FRAME_IN_TILES_MOBILE
   * @const
   * @type {Number}
   * @since 1.0.0
   */
  ROOM_FRAME_IN_TILES_MOBILE: 0.25,
  /**
   * The proportions of the used screen.
   *
   * @name TDLib.Settings.SCREEN_PROPS
   * @type {Object}
   * @since 1.0.0
   */
  SCREEN_PROPS: {},
  /**
   * The used device.
   *
   * @name TDLib.Settings.INVENTORY_HEIGHT_IN_TILES_MOBILE
   * @type {String}
   * @since 1.0.0
   */
  DEVICE: null,
  STARTING_SCENE: null,
  GAME_SPRITES: null
};

module.exports = Settings;
