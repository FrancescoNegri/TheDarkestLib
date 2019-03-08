import Action from '../Action';
import FaceTo from '../face-to/FaceTo';

export default class Observe extends Action {
  constructor(invoker, actor, config) {
    super(...arguments);
    this.addActions(
      [
        new FaceTo(this, this.actor, this.config),
        this.target.behaviours.observe.getAction(this)
      ]
    );
  }
}
