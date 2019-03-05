import Effect from '../Effect';

export default class LightEffect extends Effect {
  constructor(invoker, config, contributeFactor = 1) {
    super(invoker, config);

    this.contributeFactor = contributeFactor;
  }

  play(callback) {
    super.play(() => {
      this.stopped = false;
      callback();
    });
  }

  stop(callback) {
    super.stop(() => {
      this.stopped = true;
      callback();
    });
  }
}
