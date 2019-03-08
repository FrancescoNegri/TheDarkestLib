import Action from '../Action';
import WalkTo from '../walk-to/WalkTo';

export default class Examine extends Action {
  constructor(invoker, actor, config) {
    super(...arguments);
    this.addActions(
      [
        new WalkTo(this, this.actor, this.config),
        this.target.behaviours.examine.getAction(this)
      ]
    );
  }
}
