/**
 * @author       Francesco Negri <francesco.negri@outlook.com>
 * @copyright    2019 The Darkest Light
 * @license      {@link https://github.com/FrancescoNegri/TheDarkestLib/blob/master/LICENSE|MIT License}
 */

import Component from './Component';
import Actions from '../sprites/actions';

/**
 * @classdesc
 * Class representing the ActionComponent.
 * ActionComponent is responsible to handle all the actions for a Sprite.
 *
 * @class ActionComponent
 * @memberof TDLib.Components
 * @extends TDLib.Components.Component
 * @constructor
 * @since 1.0.0
 *
 * @param {TDLib.Sprites.Sprite} gameObject - The performer of the action.
 */
export default class ActionComponent extends Component {
  constructor(gameObject) {
    super(gameObject);

    /**
     * The performer of the action.
     * @type {TDLib.Sprites.Sprite}
     * @name TDLib.Components.ActionComponent#gameObject
     * @since 1.0.0
     */
    this.gameObject = gameObject;

    /**
     * The default action to be played, AIdle by default.
     * @type {TDLib.Components.Actions.Action}
     * @name TDLib.Components.ActionComponent#defaultAction
     * @since 1.0.0
     */
    this.defaultAction = new Actions.Idle(this, this.gameObject);

    /**
     * The queue of actions.
     * @type {Array}
     * @name TDLib.Components.ActionComponent#_queue
     * @protected
     * @since 1.0.0
     */
    this._queue = [this.defaultAction];
    this._queue[0]._start();
  }

  /**
   * Using this mode the queue is emptied and the new action is immediately performed.
   * @name TDLib.Components.ActionComponent#DEFAULT_MODE
   * @since 1.0.0
   */
  static get DEFAULT_MODE() {
    return 0;
  }

  /**
   * Using this mode the new action is added to the queue.
   * @name TDLib.Components.ActionComponent#QUEUE_MODE
   * @since 1.0.0
   */
  static get QUEUE_MODE() {
    return 1;
  }

  /**
   * Using this mode the currently performed action is paused and the new action is immediately performed.
   * Then the paused action is resumed.
   * @name TDLib.Components.ActionComponent#PAUSE_MODE
   * @since 1.0.0
   */
  static get PAUSE_MODE() {
    return 2;
  }

  /**
   * Starts a new action or add that to the queue.
   *
   * @method TDLib.Components.ActionComponent#add
   * @param {TDLib.Components.Sprites.Actions.Action} action - The action to add or execute.
   * @param {Object} config - The config object for the action.
   * @param {Object} config.target - The target of the action.
   * @param {number} config.target.x - The x of the target of the action.
   * @param {number} [mode=ActionComponent.DEFAULT_MODE] - The operating mode of the component.
   * @since 1.0.0
   */
  add(Action, config, mode = ActionComponent.DEFAULT_MODE) {

    let newAction = new Action(this, this.gameObject, config);

    switch (mode) {
      case ActionComponent.DEFAULT_MODE: {
        this._queue[0]._abort();
        this._queue = [];
        this._queue.push(newAction);
        this._queue[0]._start();
      };
        break;

      case ActionComponent.QUEUE_MODE: {
        this._queue.push(newAction);
      };
        break;

      case ActionComponent.PAUSE_MODE: {
        this._queue[0]._pause();
        this._queue.unshift(newAction);
        this._queue[0]._start();
      };
        break;
    }

    return newAction;
  }

  /**
   * Remove a completed action from the queue.
   *
   * @method TDLib.Components.ActionComponent#_remove
   * @protected
   * @since 1.0.0
   */
  _remove() {
    this._queue.shift();
    if (this._queue.length <= 0) this._queue.push(this.defaultAction);
    if (this._queue[0].isPaused) this._queue[0]._resume();
    else this._queue[0]._start();
  }

  /**
   * Update the currently performed action.
   *
   * @method TDLib.Components.ActionComponent#_update
   * @protected
   * @since 1.0.0
   */
  _update() {
    if (this._queue.length <= 0) this._queue.push(this.defaultAction);
    else if (this._queue.length > 1 && this._queue[0].name === 'Idle') {
      this._queue.shift();
      if (this._queue[0].isPaused) this._queue[0]._resume();
      else this._queue[0]._start();
    }

    this._queue[0]._update();
  }
}
