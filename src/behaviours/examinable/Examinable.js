import Behaviour from '../Behaviour';
import Action from '../../actions/Action';

export default class Examinable extends Behaviour {
  constructor(component) {
    super(component);
  }

  /**
   * Generate a proper action according to the behaviour and the gameObject settings.
   * @return {TDLib.Components.Actions.TDLAction}
   * @since 1.0.0
   */
  getAction(invoker) {
    return new Action.BaseAction(
      invoker,
      () => {
        // Fare i controlli su quanta luce c'è nella stanza!
        if (this.checkLight(this.gameObject.minLightLevelToExamineOrInteract)) console.log(this.gameObject.examineOrInteractText);
        else console.log(this.gameObject.noLightExamineOrInteractText);
        invoker.finish();
      }
    );
  }
}
