import Sprite from '../Sprite';
import Behaviour from '../behaviours';
import ActionComponent from '../../components';

/**
 * The characters namespace.
 * @namespace TDLib.Sprites.Characters
 * @since 1.0.0
 */

/**
 * Class representing a TDLCharacter.
 * @extends TDLib.Sprites.TDLSprite
 * @memberof TDLib.Sprites.Characters
 * @since 1.0.0
 */
export default class Character extends Sprite {
  /**
   * Create a new TDLCharacter.
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
    this.actions = new ActionComponent(this);

    /**
     * The facing of the character.
     * @type {TDLCharacter.FACING}
     * @since 1.0.0
     */
    this.facing = Character.FACING().RIGHT;
  }

  /**
   * The possible facing options of the character.
   * @since 1.0.0
   */
  static FACING() {
    return {
      RIGHT: 'facing_right',
      LEFT: 'facing_left'
    };
  }

  create() {
    super.create();
    // this.setPipeline('Light2D');
  }
}
