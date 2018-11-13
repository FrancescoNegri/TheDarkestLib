import Action from './Action';
import FaceTo from './FaceTo';

// da cambiare e mettere tutta dentro l'AWalkTo e fare un Move to che distingua che azioni chiamare?
export default class RunTo extends Action {
  constructor(invoker, actor, config) {
    super(...arguments);
    this.addActions(
      [
        new FaceTo(this, this.actor, this.config),
        new Action.BaseAction(
          this,
          () => {
            if (Math.abs(this.actor.x - this.target.x) > RunTo.MICRO_MOVEMENT_RADIUS) {
              if (this.actor.x < this.target.x) {
                this.actor.anims.play('run');
                // this.actor.anims.play('runRight');
                this.actor.body.setVelocity(RunTo.RUN_VELOCITY);
              } else if (this.actor.x > this.target.x) {
                this.actor.anims.play('run');
                // this.actor.anims.play('runLeft');
                this.actor.body.setVelocity(-RunTo.RUN_VELOCITY);
              }
              console.log('start to run to ', config.target.x);
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

  static get RUN_VELOCITY() {
    return 240;
  }

  static get MICRO_MOVEMENT_RADIUS() {
    return 20;
  }
}
