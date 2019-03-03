/**
 * Class representing a TDLAction.
 * @memberof TDLib.Components.Actions
 * @since 1.0.0
 */
export default class Action {
  /**
   * Start a new TDLAction.
   * @param {TDLib.Components.ActionComponent|TDLib.Components.Actions.TDLAction} invoker - The invoker of the action.
   * @param {TDLSprite} actor - The actor who performs the action.
   * @param {Object} config - The config object for the action.
   * @param {Object} config.target - The target of the action.
   * @param {number} config.target.x - The x of the target of the action.
   */
  constructor(invoker, actor, config = {}) {
    /**
     * The invoker of the action.
     * @type {TDLib.Components.ActionComponent|TDLib.Components.Actions.TDLAction}
     * @since 1.0.0
     */
    this.invoker = invoker;

    /**
     * The name of the action.
     * @type {string}
     * @since 1.0.0
     */
    this.name = this.constructor.name;

    /**
     * The actor who performs the action.
     * @type {TDLib.Sprites.TDLSprite}
     * @since 1.0.0
     */
    this.actor = actor;

    /**
     * The target of the action.
     * @type {Object|TDLib.Sprites.TDLSprite}
     * @since 1.0.0
     */
    this.target = config.target;

    /**
     * The config object for the action.
     * @type {Object}
     * @since 1.0.0
     */
    this.config = config;

    /**
     * The queue of actions.
     * @type {Array}
     * @private
     * @since 1.0.0
     */
    this._queue = [];

    /**
     * Tells if the action has been paused.
     * @type {boolean}
     * @since 1.0.0
     */
    this.isPaused = false;
  }

  /**
   * Add one or more new actions to the queue.
   * @param {TDLib.Components.Actions.TDLAction|TDLib.Components.Actions.TDLAction[]|TDLib.Components.Actions.TDLAction.BaseAction|TDLib.Components.Actions.TDLAction.BaseAction[]} actions - The new actions to add.
   * @since 1.0.0
   */
  addActions(actions) {
    if (Array.isArray(actions)) {
      actions.forEach(action => {
        this._queue.push(action);
      });
    } else this._queue.push(actions);
  }

  /**
   * The blank action to create new composed and complex actions.
   * @typedef {TDLib.Components.Actions.TDLAction.BaseAction}
   *
   * @property {TDLib.Components.ActionComponent|TDLib.Components.Actions.TDLAction} invoker - The invoker of the action.
   * @property {Function} startCallback - The callback to execute at the beginning of the action.
   * @property {Function} [finishCallback] - The callback to execute at the end of the action.
   * @property {Function} [updateCallback]  - The callback to execute at every update loop.
   * @property {Function} [resumeCallback=startCallback] - The callback to execute when the action is paused.
   * @property {Function} [pauseCallback=finishCallback]  - The callback to execute when the action is resumed.
   * @since 1.0.0
   */
  static get BaseAction() {
    return class BaseAction {
      constructor(invoker, startCallback, finishCallback = () => { }, updateCallback = () => { }, resumeCallback = startCallback, pauseCallback = finishCallback) {
        this.invoker = invoker;

        this.startCallback = startCallback;
        this.finishCallback = finishCallback;
        this.updateCallback = updateCallback;
        this.resumeCallback = resumeCallback;
        this.pauseCallback = pauseCallback;

        this.isPaused = false;
      }

      start() {
        this.startCallback();
      }

      finish() {
        this.finishCallback();
        this.invoker.remove();
      }

      abort() {
        this.finishCallback();
      }

      resume() {
        this.isPaused = false;
        this.resumeCallback();
      }

      pause() {
        this.pauseCallback();
        this.isPaused = true;
      }

      update() {
        this.updateCallback();
      }
    };
  }

  /**
   * Abort an uncompleted action.
   * @private
   * @since 1.0.0
   */
  abort() {
    if (this._queue.length > 0) this._queue[0].abort();
  }

  /**
   * Start an action.
   * @private
   * @since 1.0.0
   */
  start() {
    if (this._queue.length > 0) this._queue[0].start();
  }

  /**
   * Finish a completed action.
   * @private
   * @since 1.0.0
   */
  finish() {
    if (this._queue.length > 0) this._queue[0].finish();
  }

  /**
   * Remove a completed action from the queue.
   * @private
   * @since 1.0.0
   */
  remove() {
    if (this._queue.length > 0) this._queue.shift();

    if (this._queue.length <= 0) this.invoker.remove();
    else this._queue[0].start();
  }

  /**
   * Pause an action.
   * @private
   * @since 1.0.0
   */
  pause() {
    if (this._queue.length > 0) {
      this._queue[0].pause();
      this.isPaused = true;
    }
  }

  /**
   * Resume a paused action.
   * @private
   * @since 1.0.0
   */
  resume() {
    if (this._queue.length > 0) {
      this.isPaused = false;
      this._queue[0].resume();
    }
  }

  /**
   * Update the currently performed action.
   * @private
   * @since 1.0.0
   */
  update() {
    if (this._queue.length > 0) this._queue[0].update();
  }
}
