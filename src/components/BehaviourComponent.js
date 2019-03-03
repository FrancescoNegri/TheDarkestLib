import Component from './Component';
import Behaviours from '../sprites/behaviours';

/**
 * The behaviours namespace.
 * @namespace TDLib.Components.SpriteBehaviours
 * @since 1.0.0
 */

/**
 * Class representing a component which determines the behaviour of every sprite.
 * @extends TDLib.Components.TDLComponent
 * @memberof TDLib.Components
 * @since 1.0.0
 */
export default class BehaviourComponent extends Component {
  /**
   * Create a new SpriteBehaviourComponent
   * @param {TDLib.Sprites.TDLSprite} gameObject - The sprite which implements the component.
   * @param {string} type - The type of behaviour of the gameObject.
   * @param {Object} [pixelPerfect=null] - If not null enable the pixel perfect pointer hit for the sprite.
   * @param {boolean} [pixelPerfect.alphaTolerance] - The alpha tolerance threshold value.
   */
  constructor(gameObject, type, pixelPerfect) {
    super(gameObject);

    /**
     * A reference to the player in the current room.
     * @type {TDLib.Sprites.Characters.Players.Player}
     * @since 1.0.0
     */
    this.player;
    (typeof this.gameObject.room.player === 'undefined') ? this.player = this.gameObject : this.player = this.gameObject.room.player;

    /**
     * The type of behaviour of the gameObject.
     * @type {string}
     * @since 1.0.0
     */
    this.type = type;

    /**
     * If not null enable the pixel perfect pointer hit for the sprite.
     * @type {string}
     * @since 1.0.0
     */
    this.pixelPerfect = pixelPerfect;

    this._addBehaviours();
  }

  /**
   * Select the appropriate behaviours for the gameObject.
   * @private
   * @since 1.0.0
   */
  _addBehaviours() {
    // Se l'oggetto è osservabile (cioè esaminabile o interagibile) setto il cursore appropriato
    if (this.type === Behaviours.EXAMINABLE || this.type === Behaviours.INTERACTIVE) {
      this.observe = new Behaviours.Observable(this);
      if (this.type === Behaviours.EXAMINABLE) this.examine = new Behaviours.Examinable(this);
      else if (this.type === Behaviours.INTERACTIVE) this.interact = new Behaviours.Interactive(this);
    }
  }
}
