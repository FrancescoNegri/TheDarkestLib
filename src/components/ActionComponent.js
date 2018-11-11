import Component from './Component';
import Actions from '../actions';

/**
 * The actions namespace.
 * @namespace TDLib.Components.Actions
 * @since 1.0.0
 */

/**
 * Class representing a component responsible of every TDLAction preformed.
 * @extends TDLib.Components.TDLComponent
 * @memberof TDLib.Components
 * @since 1.0.0
 */
export default class ActionComponent extends Component {
  /**
   * Create an ActionComponent.
   * @param {TDLib.Sprites.TDLSprite} actor - The performer of the action.
   */
  constructor(actor) {
    super(actor);

    /**
     * The performer of the action.
     * @type {TDLib.Sprites.TDLSprite}
     * @since 1.0.0
     */
    this.actor = actor;

    /**
     * The default action to be played.
     * @type {TDLib.Components.Actions.TDLAction}
     * @since 1.0.0
     */
    this.defaultAction = new Actions.Idle(this, this.actor);

    /**
     * The queue of actions.
     * @type {Array}
     * @private
     * @since 1.0.0
     */
    this._queue = [this.defaultAction];
    this._queue[0].start();
  }

  /**
   * The queue is emptied and the new action is immediately performed.
   * @since 1.0.0
   */
  static get DEFAULT_MODE() {
    return 0;
  }

  /**
   * The new action is added to the queue.
   * @since 1.0.0
   */
  static get QUEUE_MODE() {
    return 1;
  }

  /**
   * The currently performed action is paused and the new action is immediately performed. Then the paused action is resumed.
   * @since 1.0.0
   */
  static get PAUSE_MODE() {
    return 2;
  }

  /**
   * Start a new action or add that to the queue.
   * @param {TDLib.Components.Actions.TDLAction} action - The action to add or execute.
   * @param {Object} config - The config object for the action.
   * @param {Object} config.target - The target of the action.
   * @param {number} config.target.x - The x of the target of the action.
   * @param {number} [mode=ActionComponent.DEFAULT_MODE] - The mode to execute the action: ActionComponent.DEFAULT_MODE, ActionComponent.QUEUE_MODE or ActionComponent.PAUSE_MODE.
   * @since 1.0.0
   */
  add(Action, config, mode = ActionComponent.DEFAULT_MODE) {

    let newAction = new Action(this, this.actor, config);

    switch (mode) {
      case ActionComponent.DEFAULT_MODE: {
        this._queue[0].abort();
        this._queue = [];
        this._queue.push(newAction);
        this._queue[0].start();
      };
        break;

      case ActionComponent.QUEUE_MODE: {
        this._queue.push(newAction);
      };
        break;

      case ActionComponent.PAUSE_MODE: {
        this._queue[0].pause();
        this._queue.unshift(newAction);
        this._queue[0].start();
      };
        break;
    }

    return newAction;
  }

  /**
   * Remove a completed action from the queue.
   * @private
   * @since 1.0.0
   */
  remove() {
    this._queue.shift();
    if (this._queue.length <= 0) this._queue.push(this.defaultAction);
    if (this._queue[0].isPaused) this._queue[0].resume();
    else this._queue[0].start();
  }

  /**
   * Update the currently performed action.
   * @private
   * @since 1.0.0
   */
  update() {
    if (this._queue.length <= 0) this._queue.push(this.defaultAction);
    else if (this._queue.length > 1 && this._queue[0].name === 'Idle') {
      this._queue.shift();
      if (this._queue[0].isPaused) this._queue[0].resume();
      else this._queue[0].start();
    }

    this._queue[0].update();
  }
}
