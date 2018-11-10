/**
 * The namespace of components.
 * @namespace TDLib.Components
 */

/**
 * Class representing a generic TDLComponent. A TDLComponent extends the members and methods of a TDLSprite which uses it.
 * @memberof TDLib.Components
 */
export default class Component {
  /**
   * Creates a new TDLComponent.
   * @param {TDLib.Sprites.TDLSprite} gameObject - The TDLSprite which owns the component.
   */
  constructor(gameObject) {

    /**
     * The name of the component.
     * @type {string}
     */
    this.name = this.constructor.name;

    /**
     * The TDLSprite which owns the component.
     * @type {TDLib.Sprites.TDLSprite}
     */
    this.gameObject = gameObject;
  }
}
