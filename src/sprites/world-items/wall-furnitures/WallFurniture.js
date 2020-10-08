/* eslint-disable max-len */
import WorldItem from '../WorldItem';

/**
 * The wall furnitures namespace.
 * @namespace TDLib.Sprites.Objects.WorldObjects.WallFurnitures
 * @since 1.0.0
 */

/**
 * Class representing a WallFurniture.
 * @extends TDLib.Sprites.Objects.WorldObjects.WorldObject
 * @memberof TDLib.Sprites.Objects.WorldObjects.WallFurnitures
 * @since 1.0.0
 */
export default class WallFurniture extends WorldItem {
  /**
   * Create a WallFurniture.
   * @param {TDLib.Rooms.TDLRoom} room - The room where the sprite is created.
   * @param {number} x - The sprite x coordinate.
   * @param {number} y - The sprite y coordinate.
   * @param {string} texture - The graphic of the sprite.
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
   */
  constructor(room, x, y, texture, behaviourType, pixelPerfect, observeText, examineOrInteractText, blockExamineText, noLightObserveText, noLightExamineOrInteractText, examineOrInteractOffsetX, examineOrInteractThresholdRadius, minLightLevelToExamineOrInteract, minLightLevelToObserve) {
    super(
      room,
      x, y,
      texture,
      'wallFurnitureLayer',
      true,
      behaviourType,
      pixelPerfect,
      observeText,
      examineOrInteractText,
      blockExamineText,
      noLightObserveText,
      noLightExamineOrInteractText,
      examineOrInteractOffsetX,
      examineOrInteractThresholdRadius,
      minLightLevelToExamineOrInteract,
      minLightLevelToObserve
    );

    this.setGravityY(0);
  }
}
