import Action from '../Action';
import FaceTo from '../face-to/FaceTo';
import Settings from './Settings';

export default class WalkTo extends Action {
  constructor(invoker, actor, config) {
    super(...arguments);
    this.addActions(
      [
        new FaceTo(this, this.actor, this.config),
        new Action.BaseAction(
          this,
          () => {
            if (Math.abs(this.actor.x - this.target.x) > Settings.MICRO_MOVEMENT_RADIUS) {
              if (this.actor.x < this.target.x) {
                this.actor.anims.play('walk');
                // this.actor.anims.play('walkRight');
                this.actor.body.setVelocity(Settings.WALK_VELOCITY);
              } else if (this.actor.x > this.target.x) {
                this.actor.anims.play('walk');
                // this.actor.anims.play('walkLeft');
                this.actor.body.setVelocity(-Settings.WALK_VELOCITY);
              }
            } else {
              this.finish();
            }
          },
          () => {
            this.actor.body.setVelocity(0);
          },
          () => {
            if ((this.actor.x - this.target.x) * this.actor.body.velocity.x > 0) this.finish();
          }
        )
      ]
    );
  }
}
