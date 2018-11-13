import Action from './Action';
import WalkTo from './WalkTo';

export default class Examine extends Action {
  constructor(invoker, actor, config) {
    super(...arguments);
    this.addActions(
      [
        new WalkTo(this, this.actor, this.config),
        this.target.behaviour.examine.getAction(this)
      ]
    );
  }
}
