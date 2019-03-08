/**
 * @author       Francesco Negri <francesco.negri@outlook.com>
 * @copyright    2019 The Darkest Light
 * @license      {@link https://github.com/FrancescoNegri/TheDarkestLib/blob/master/LICENSE|MIT License}
 */

/**
 * @classdesc
 * Class representing a generic Component.
 * A Component is bound to a Sprite and extends the members and methods of it.
 * To access the component you have to use a specific key.
 *
 * @class Component
 * @memberof TDLib.Components
 * @constructor
 * @since 1.0.0
 *
 * @param {TDLib.Sprites.Sprite} gameObject - The Sprite using the Component.
 */
export default class Component {
  constructor(gameObject) {

    /**
     * The name of the Component.
     * @type {string}
     * @name TDLib.Components.Component#name
     * @since 1.0.0
     */
    this.name = this.constructor.name;

    /**
     * The Sprite using the Component.
     * @type {TDLib.Sprites.Sprite}
     * @name TDLib.Components.Component#gameObject
     * @since 1.0.0
     */
    this.gameObject = gameObject;
  }
}
