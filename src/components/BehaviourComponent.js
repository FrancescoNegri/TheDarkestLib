/**
 * @author       Francesco Negri <francesco.negri@outlook.com>
 * @copyright    2019 The Darkest Light
 * @license      {@link https://github.com/FrancescoNegri/TheDarkestLib/blob/master/LICENSE|MIT License}
 */

import Component from './Component';
import Behaviours from '../sprites/behaviours';

/**
 * @classdesc
 * Class representing the BehaviourComponent.
 * BehaviourComponent is responsible to handle all the behaviours of a Sprite.
 * A Sprite can be INERT, OBSERVABLE, EXAMINABLE, INTERACTIVE, INVENTORY, TALKABLE.
 *
 * @class BehaviourComponent
 * @memberof TDLib.Components
 * @constructor
 * @since 1.0.0
 *
 * @param {TDLib.Sprites.Sprite} gameObject - The Sprite that owns the component.
 * @param {string} type - The type of behaviour of the gameObject.
 * @param {Object} [pixelPerfect=null] - If not null enable the pixel perfect pointer hit for the sprite.
 * @param {boolean} [pixelPerfect.alphaTolerance] - The alpha tolerance threshold value.
 */
export default class BehaviourComponent extends Component {
  constructor(gameObject, type, pixelPerfect) {
    super(gameObject);

    /**
     * A reference to the player in the current room.
     * @type {TDLib.Sprites.Characters.Player}
     * @name TDLib.Components.BehaviourComponent#player
     * @since 1.0.0
     */
    this.player;
    if (typeof this.gameObject.room.player === 'undefined') this.player = this.gameObject;
    else this.player = this.gameObject.room.player;

    /**
     * The type of behaviour of the gameObject.
     * @type {string}
     * @name TDLib.Components.BehaviourComponent#type
     * @since 1.0.0
     */
    this.type = type;

    /**
     * If not null enable the pixel perfect pointer hit for the Sprite.
     * @type {string}
     * @name TDLib.Components.BehaviourComponent#pixelPerfect
     * @since 1.0.0
     */
    this.pixelPerfect = pixelPerfect;

    this._addBehaviours();
  }

  /**
   * Select the appropriate behaviour for the gameObject.
   *
   * @method TDLib.Components.BehaviourComponent#_addBehaviours
   * @protected
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
