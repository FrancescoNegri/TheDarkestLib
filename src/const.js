/**
 * @author       Francesco Negri <francesco.negri@outlook.com>
 * @copyright    2019 The Darkest Light
 * @license      {@link https://github.com/FrancescoNegri/TheDarkestLib/blob/master/LICENSE|MIT License}
 */

import Phaser from 'phaser';

/**
 * Global consts.
 *
 * @ignore
 */
const CONST = {
  /**
   * TheDarkestLib Release Version.
   *
   * @name TDLib.VERSION
   * @const
   * @type {string}
   * @since 1.0.0
   */
  VERSION: require('../package.json').version,
  /**
   * Phaser Release Version.
   *
   * @name TDLib.PHASER_VERSION
   * @const
   * @type {string}
   * @since 1.0.0
   */
  PHASER_VERSION: Phaser.VERSION,
  /**
   * Left direction constant.
   *
   * @name TDLib.LEFT
   * @const
   * @type {string}
   * @since 1.0.0
   */
  LEFT: '_left',
  /**
   * Right direction constant.
   *
   * @name TDLib.RIGHT
   * @const
   * @type {string}
   * @since 1.0.0
   */
  RIGHT: '_right'
};

module.exports = CONST;
