import LightEffect from './LightEffect';

export default class SoftFlickering extends LightEffect {
  constructor(invoker, config) {
    super(invoker, config, 0.8);

    if (!this.config.minTime) this.config.minTime = 10;
    if (!this.config.maxTime) this.config.maxTime = 100;
    if (!this.config.minPercentageIntensity) this.config.minPercentageIntensity = 0.8;
    if (!this.config.maxPercentageIntensity) this.config.maxPercentageIntensity = 1;
    if (!this.config.backToInitialIntensity) this.config.backToInitialIntensity = true;
  }

  play() {
    super.play(() => {
      let setTimer = () => {
        this.gameObject.room.time.addEvent({
          delay: Math.floor(Math.random() * (this.config.maxTime - this.config.minTime)) + this.config.minTime,
          callback: () => {
            if (!this.stopped) {
              let newIntensityPercentage = Math.floor((this.config.minPercentageIntensity + Math.random() * (this.config.maxPercentageIntensity - this.config.minPercentageIntensity)) * 100 + 1) / 100;

              this.gameObject.graphicLight.setIntensity(this.gameObject.config.graphicLight.intensity * newIntensityPercentage);
              this.gameObject.diffusedLight.setIntensity(this.gameObject.config.diffusedLight.intensity * newIntensityPercentage);
              setTimer();
            }
          },
          callbackScope: this,
          repeat: 0
        });
      };

      setTimer();
    });
  }

  stop() {
    super.stop(() => {
      if (this.config.backToInitialIntensity) {
        this.gameObject.graphicLight.setIntensity(this.gameObject.config.graphicLight.intensity);
        this.gameObject.diffusedLight.setIntensity(this.gameObject.config.diffusedLight.intensity);
      } else {
        this.gameObject.config.graphicLight.intensity = this.gameObject.graphicLight.intensity;
        this.gameObject.config.diffusedLight.intensity = this.gameObject.diffusedLight.intensity;
      }
    });
  }
}
