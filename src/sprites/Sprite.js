import Behaviours from '../sprites/behaviours';
import BehaviourComponent from '../components/BehaviourComponent';

/**
 * The Darkest Lib.
 * @namespace TDLib
 * @since 1.0.0
 */

/**
 * The actions namespace.
 * @namespace TDLib.Sprites
 * @since 1.0.0
 */

/**
 * Class representing a TDLSprite.
 * @extends Phaser.Physics.Arcade.Sprite
 * @memberof TDLib.Sprites
 * @since 1.0.0
 */
export default class Sprite extends Phaser.Physics.Arcade.Sprite {
  /**
   * Create a TDLSprite.
   * @param {TDLib.Rooms.TDLRoom} room - The room where the sprite is created.
   * @param {number} x - The sprite x coordinate.
   * @param {number} y - The sprite y coordinate.
   * @param {string} texture - The graphic of the sprite.
   * @param {string} [layer=null] - The key of the layer which will contain the sprite.
   * @param {boolean} [hasBody=true] - Specify if the sprite has physics.
   * @param {string} [behaviourType=SpriteBehaviour.INERT] - Specify the behaviour of the sprite.
   * @param {Object} [pixelPerfect=null] - If not null enable the pixel perfect pointer hit for the sprite.
   * @param {boolean} [pixelPerfect.alphaTolerance] - The alpha tolerance threshold value.
   * @param {string|string[]} [observeText] - The text which appears when observing the sprite.
   * @param {string|string[]} [examineOrInteractText] -  The text which appears when examine or interact with the sprite.
   * @param {string} [blockExamineText=null] - If not null it's the blocking text which appears the first time the sprite is examined.
   * @param {string|string[]} [noLightObserveText] -  The text which appears when observing the sprite when the diffused light is not sufficient.
   * @param {string|string[]} [noLightExamineOrInteractText] - The text which appears when examine or interact with the sprite when the diffused light is not sufficient.
   * @param {number} [examineOrInteractOffsetX=0] - The offset on x axis of the examineOrInteractPoint, where the player has to move to examine or interact with the sprite.
   * @param {number} [examineOrInteractThresholdRadius=0] - The radius of the tolerance in reaching the examineOrInteractPoint, where the player has to move to examine or interact with the sprite.
   * @param {number} [minLightLevelToExamineOrInteract=???] - The minimum value of diffused light to examine or interact with the sprite.
   * @param {number} [minLightLevelToObserve=???] - The minimum value of diffused light to observe the sprite.
   * @param {boolean} [precisePosition=false] - Specify if to examine or interact with the sprite it's required to be precisely at the examineOrInteractPoint. (Probably not needed)
   */
  constructor(
    room,
    x, y,
    texture,
    layer = null,
    hasBody = true,
    behaviourType = Behaviours.INERT,
    pixelPerfect = null,
    observeText = Behaviours.DEFAULT_OBSERVE_TEXT,
    examineOrInteractText = Behaviours.DEFAULT_EXAMINE_OR_INTERACT_TEXT,
    blockExamineText = null,
    noLightObserveText = Behaviours.DEFAULT_NO_LIGHT_OBSERVE_TEXT,
    noLightExamineOrInteractText = Behaviours.DEFAULT_NO_LIGHT_EXAMINE_OR_INTERACT_TEXT,
    examineOrInteractOffsetX = 0,
    examineOrInteractThresholdRadius = 0,
    minLightLevelToExamineOrInteract = Behaviours.DEFAULT_MIN_LIGHT_LEVEL_TO_EXAMINE_OR_INTERACT,
    minLightLevelToObserve = Behaviours.DEFAULT_MIN_LIGHT_LEVEL_TO_OBSERVE

  ) {
    super(room, x, y, texture);

    /**
     * The room where the sprite is created.
     * @type {TDLib.Rooms.TDLRoom}
     * @since 1.0.0
     */
    this.room = room;

    /**
     * The name of the sprite, to map it in the room. Usually it's obtained by Tiled.
     * @type {string}
     * @since 1.0.0
     */
    this.name;

    /**
     * The unique key of the sprite, composed by the sprite type and a 4 digits random integer number.
     * @type {string}
     * @since 1.0.0
     */
    this.key = this.constructor.name + (Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000);

    /**
     * The type of the sprite.
     * @type {string}
     * @since 1.0.0
     */
    this.type = this.constructor.name;

    /**
     * The sprite behaviour component instance.
     * @type {TDLib.Components.SpriteBehaviourComponent}
     * @since 1.0.0
     */
    this.behaviours = new BehaviourComponent(this, behaviourType, pixelPerfect);

    /**
     * The text which appears when observing the sprite.
         * @type {string}
         * @since 1.0.0
     */
    this.observeText = observeText;

    /**
 * The text which appears when examine or interact with the sprite.
     * @type {string}
     * @since 1.0.0
 */
    this.examineOrInteractText = examineOrInteractText;

    /**
     * If not null it's the blocking text which appears the first time the sprite is examined.
         * @type {string}
         * @since 1.0.0
     */
    this.blockExamineText = blockExamineText;

    /**
     * The text which appears when observing the sprite when the diffused light is not sufficient.
         * @type {string}
         * @since 1.0.0
     */
    this.noLightObserveText = noLightObserveText;

    /**
 * The text which appears when examine or interact with the sprite when the diffused light is not sufficient.
     * @type {string}
     * @since 1.0.0
     */
    this.noLightExamineOrInteractText = noLightExamineOrInteractText;

    /**
     * The offset on x axis of the examineOrInteractPoint, where the player has to move to examine or interact with the sprite.
         * @type {number}
         * @since 1.0.0
     */
    this.examineOrInteractOffsetX = examineOrInteractOffsetX;

    /**
     * The radius of the tolerance in reaching the examineOrInteractPoint, where the player has to move to examine or interact with the sprite.
         * @type {number}
         * @since 1.0.0
         */
    this.examineOrInteractThresholdRadius = examineOrInteractThresholdRadius;

    /**
     * The minimum value of diffused light to examine or interact with the sprite.
         * @type {number}
         * @since 1.0.0
         */
    this.minLightLevelToExamineOrInteract = minLightLevelToExamineOrInteract;

    /**
 * The minimum value of diffused light to observe the sprite.
     * @type {number}
     * @since 1.0.0
     */
    this.minLightLevelToObserve = minLightLevelToObserve;

    this.room.add.existing(this);
    this.room.updates.add(this);
    if (hasBody) {
      this.room.physics.add.existing(this);
      this.setCollideWorldBounds(true);
      this.setGravityY(10000);
    }

    if (layer != null) {
      if (layer in this.room.layers) {
        this.room.layers[layer].add(this);
        this.room.layers.setLayersDepth();
      } else console.warn('ALERT: layer not found for object', this);
    }

    this.create();
  }

  /**
   * The create function is executed once, immediately after the initialization of the sprite.
   * @since 1.0.0
   */
  create() {
    console.log('Created:', this.key, '- Type:', this.type, '- Behaviour:', this.behaviours.type);
  }

  /**
   * The update is executed at every cycle of the game loop.
   * @since 1.0.0
   */
  update() {

  }

  /**
   * Set the name property of a sprite.
   * @param {string} value - The name which is used to map a sprite in the room.
   * @return {TDLib.Sprites.TDLSprite}
   * @since 1.0.0
   */
  setName(value) {
    this.name = value;
    return this;
  }

  // Poichè è stata aggiunta la pixel perfect collision, valutare l'utilità di questa funzione!
  setHitAreaSize(width = this.width, height = this.height, offsetX = 0, offsetY = 0) {
    this.input.hitArea.setSize(width, height);
    this.input.hitArea.setPosition(((this.width - width) / 2) + offsetX, ((this.height - height) / 2) + offsetY);
  }
}
