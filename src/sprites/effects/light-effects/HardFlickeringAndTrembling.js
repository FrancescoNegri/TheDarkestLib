import LightEffect from './LightEffect';
import HardFlickering from './HardFlickering';
import Trembling from './Trembling';

export default class HardFlickeringAndTrembling extends LightEffect {
  constructor(invoker, config) {
    super(invoker, config, 0.5);

    this.hardFlickering = new HardFlickering(this.invoker, this.config);
    this.trembling = new Trembling(this.invoker, this.config);
  }

  play() {
    super.play(() => {
      this.hardFlickering.play();
      this.trembling.play();
    });
  }

  stop() {
    super.stop(() => {
      this.hardFlickering.stop();
      this.trembling.stop();
    });
  }
}
