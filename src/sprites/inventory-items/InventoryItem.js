import Sprite from '../Sprite';

/**
 * The inventory items namespace.
 * @namespace TDLib.Sprites.InventoryItems
 * @since 1.0.0
 */

/**
 * Class representing an InentoryItem.
 * @extends TDLib.Sprites.Sprite
 * @memberof TDLib.Sprites.InventoryItems
 * @since 1.0.0
 */

export default class InentoryItem extends Sprite {
  /**
   * Create a new InvetoryItem.
   * @param {Room} room - The room where the item is created.
   * @param {number} x - The x coordinate of the item.
   * @param {number} y - The y coordinate of the item.
   * @param {string} texture - The item's graphic.
   * @param {string} layer - The item's layer.
   */
  constructor(room, x, y, texture, layer) {
    super(...arguments, false);
  }

  create() {
    super.create();
    this.resetPipeline(); // InventoryItems are not part of the Light2D pipeline!
  }
}
