import Action from '../Action';
import WalkTo from '../walk-to/WalkTo';

export default class Interact extends Action {
  constructor(invoker, actor, config) {
    super(...arguments);
    this.addActions(
      [
        new WalkTo(this, this.actor, this.config),
        this.target.behaviour.interact.getAction(this)
      ]
    );
  }
}
