import Action from '../Action';
import CONST from '../../const';

/**
 * Class representing the idle action.
 * @extends TDLib.Components.Actions.Action
 * @memberof TDLib.Components.Actions
 */
export default class Idle extends Action {
  /**
   * Start a new idle action.
   * @param {Components.ActionComponent|Components.Actions.TDLAction} invoker - The invoker of the action.
   * @param {TDLSprite} actor - The actor who performs the action.
   * @param {Object} config - The config object for the action.
   * @param {Object} config.target - The target of the action.
   * @param {number} config.target.x - The x of the target of the action.
   */
  constructor(invoker, actor, config) {
    super(...arguments);
    this.addActions(
      new Action.BaseAction(
        this,
        () => {
          this.actor.body.setVelocity(0);
          switch (this.actor.facing) {

            case CONST.LEFT: {
              this.actor.anims.play('idle');
              // this.actor.anims.play('idleLeft');
            }
              break;

            case CONST.RIGHT: {
              this.actor.anims.play('idle');
              // this.actor.anims.play('idleRight');
            }
              break;

            // possibili altri casi di facing (es girato di spalle o da davanti)
          }
        }
      )
    );
  }
}
