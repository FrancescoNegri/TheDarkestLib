import LightEffect from './LightEffect';

export default class HardFlickering extends LightEffect {
  constructor(invoker, config) {
    super(invoker, config, 0.5);

    if (!this.config.minTime) this.config.minTime = 10;
    if (!this.config.maxTime) this.config.maxTime = 400;
    if (!this.config.finalState) this.config.finalState = 'on';
  }

  play() {
    super.play(() => {
      let setTimer = () => {
        this.gameObject.room.time.addEvent({
          delay: Math.floor(Math.random() * (this.config.maxTime - this.config.minTime)) + this.config.minTime,
          callback: () => {
            if (!this.stopped) {
              if (this.gameObject.config.graphicLight !== null) {
                if (this.gameObject.graphicLight.intensity === 0) {
                  this.gameObject.graphicLight.setIntensity(this.gameObject.config.graphicLight.intensity);
                } else this.gameObject.graphicLight.setIntensity(0);
              }

              if (this.gameObject.config.diffusedLight !== null) {
                if (this.gameObject.diffusedLight.intensity === 0) {
                  this.gameObject.diffusedLight.setIntensity(this.gameObject.config.diffusedLight.intensity);
                } else this.gameObject.diffusedLight.setIntensity(0);
              }
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
      if (this.config.finalState === 'on') {
        if (this.gameObject.config.graphicLight !== null) {
          this.gameObject.graphicLight.setIntensity(this.gameObject.config.graphicLight.intensity);
        }
        if (this.gameObject.config.diffusedLight !== null) {
          this.gameObject.diffusedLight.setIntensity(this.gameObject.config.diffusedLight.intensity);
        }
      } else if (this.config.finalState === 'off') {
        this.gameObject.turnOff();
      }
    });
  }
}
