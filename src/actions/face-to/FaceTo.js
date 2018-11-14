import Action from '../Action';
import CONST from '../../const';
import Settings from './Settings';

export default class FaceTo extends Action {
  constructor(invoker, actor, config) {
    super(...arguments);
    this.addActions(
      new Action.BaseAction(
        this,
        () => {
          if (Math.abs(this.actor.x - this.target.x) > Settings.MICRO_MOVEMENT_RADIUS) {
            if (this.actor.facing === CONST.RIGHT) {
              if (this.actor.x > this.target.x) {
                this.actor.facing = CONST.LEFT;
                this.actor.setFlipX(true);
                // this.actor.anims.play('idleLeft');
              }
            } else if (this.actor.facing === CONST.LEFT) {
              if (this.actor.x < this.target.x) {
                this.actor.facing = CONST.RIGHT;
                this.actor.setFlipX(false);
                // this.actor.anims.play('idleRight');
              }
            }
          }
          this.finish();
        }
      )
    );
  }
}
