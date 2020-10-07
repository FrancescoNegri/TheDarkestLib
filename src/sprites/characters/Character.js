import Sprite from '../Sprite';
import Behaviour from '../behaviours';
import Components from '../../components';
import CONST from '../../const';

/**
 * The characters namespace.
 * @namespace TDLib.Sprites.Characters
 * @since 1.0.0
 */

/**
 * Class representing a Character.
 * @extends TDLib.Sprites.Sprite
 * @memberof TDLib.Sprites.Characters
 * @since 1.0.0
 */
export default class Character extends Sprite {
  /**
   * Create a new Character.
   * @param {Room} room - The room where the character is created.
   * @param {number} x - The x coordinate of the character.
   * @param {number} y - The y coordinate of the character.
   * @param {string} texture - The character's graphic.
   * @param {string} layer - The character's layer.
   */
  constructor(room, x, y, texture, layer) {
    super(...arguments, true, Behaviour.INTERACTIVE, { alphaTolerance: 1 });

    /**
     * The ActionComponent for this character.
     * @type {Components.ActionComponent}
     * @since 1.0.0
     */
    this.actions = new Components.ActionComponent(this);

    /**
     * The facing of the character.
     * @type {TDLCharacter.FACING}
     * @since 1.0.0
     */
    this.facing = CONST.RIGHT;
  }

  create() {
    super.create();
  }
}
