/* eslint-disable max-len */
import LightEffect from './LightEffect';

export default class Trembling extends LightEffect {
  constructor(invoker, config) {
    super(invoker, config, 0.8);

    if (!this.config.minTime) this.config.minTime = 10;
    if (!this.config.maxTime) this.config.maxTime = 100;
    if (!this.config.minPercentageIntensity) this.config.minPercentageIntensity = 0.8;
    if (!this.config.maxPercentageIntensity) this.config.maxPercentageIntensity = 1;
    if (!this.config.minPercentageRadius) this.config.minPercentageRadius = 0.8;
    if (!this.config.maxPercentageRadius) this.config.maxPercentageRadius = 1;
    if (!this.config.backToInitialIntensity) this.config.backToInitialIntensity = true;
    if (!this.config.backToInitialRadius) this.config.backToInitialRadius = true;
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
              let newRadiusPercentage = Math.floor((this.config.minPercentageRadius + Math.random() * (this.config.maxPercentageRadius - this.config.minPercentageRadius)) * 100 + 1) / 100;

              this.gameObject.graphicLight.setRadius(this.gameObject.config.graphicLight.radius * newRadiusPercentage);

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
      if (this.config.backToInitialRadius) {
        this.gameObject.graphicLight.setRadius(this.gameObject.config.graphicLight.radius);
      } else {
        this.gameObject.config.graphicLight.radius = this.gameObject.graphicLight.radius;
      }
    });
  }
}
