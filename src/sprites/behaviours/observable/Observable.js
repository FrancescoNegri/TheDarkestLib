import Behaviour from '../Behaviour';
import Actions from '../../../actions';
import Settings from './Settings';

export default class Observable extends Behaviour {
  constructor(component) {
    super(component);

    this._timer;
  }

  add() {
    super.add();

    this.gameObject.on('pointerover', function (pointer) {
      this.cursors.setCursor(this.gameObject);

      this._timer = this.gameObject.room.time.addEvent({
        delay: Settings.DEFAULT_MIN_TIME_TO_OBSERVE,
        callback: () => {
          if (this.gameObject !== this.room.player && !this.room.player.isBlocked) this.room.player.actions.add(Actions.Observe, { target: this.gameObject });
        },
        callbackScope: this
      });
    }.bind(this));

    this.gameObject.on('pointerout', function (pointer) {
      this._timer.remove(false);
      this.cursors.setCursor();
    }.bind(this));
  }

  /**
   * Delete the timer which starts the AObserve action.
   */
  abort() {
    this._timer.remove(false);
  }

  /**
   * Generate a proper action according to the behaviour and the gameObject settings.
   * @return {TDLib.Components.Actions.TDLAction}
   * @since 1.0.0
   */
  getAction(invoker) {
    return new Actions.Action.BaseAction(
      invoker,
      () => {
        // Fare i controlli su quanta luce c'è nella stanza!
        if (this.checkLight(this.gameObject.minLightLevelToObserve)) console.log(this.gameObject.observeText);
        else console.log(this.gameObject.noLightObserveText);
        invoker.finish();
      }
    );
  }
}
