import EffectComponent from '../../components/EffectComponent';

export default class Effect {
  constructor(invoker, config = {}) {

    this.invoker = invoker;

    this.config = config;

    this.gameObject = invoker.gameObject;

    this.name = this.constructor.name;
  }

  play(callback = () => { }) {
    if (this.invoker instanceof EffectComponent) {
      callback();
      console.log(this.name + 'Effect started');
    } else console.log('Effects can only be played by the EffectComponent');
  }

  stop(callback = () => { }) {
    if (this.invoker instanceof EffectComponent) {
      callback();
      console.log(this.name + 'Effect stopped');
    } else console.log('Effects can only be stopped by the EffectComponent');
  }
}
