import LightEffect from './LightEffect';
import SoftFlickering from './SoftFlickering';
import Trembling from './Trembling';

export default class SoftDefaultFlickeringAndtrembling extends LightEffect {
  constructor(invoker, config) {
    super(invoker, config, 0.5);

    this.softFlickering = new SoftFlickering(this.invoker, this.config);
    this.trembling = new Trembling(this.invoker, this.config);
  }

  play() {
    super.play(() => {
      this.softFlickering.play();
      this.trembling.play();
    });
  }

  stop() {
    super.stop(() => {
      this.softFlickering.stop();
      this.trembling.stop();
    });
  }
}
