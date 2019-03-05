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
              if (this.gameObject.initialConfig.graphicLight !== null) {
                if (this.gameObject.graphicLight.intensity === 0) this.gameObject.graphicLight.setIntensity(this.gameObject.initialConfig.graphicLight.intensity);
                else this.gameObject.graphicLight.setIntensity(0);
              }

              if (this.gameObject.initialConfig.diffusedLight !== null) {
                if (this.gameObject.diffusedLight.intensity === 0) this.gameObject.diffusedLight.setIntensity(this.gameObject.initialConfig.diffusedLight.intensity);
                else this.gameObject.diffusedLight.setIntensity(0);
              }
              setTimer(this);
            }
          },
          callbackScope: this,
          repeat: 0
        });
      };

      setTimer(this);
    });
  }

  stop() {
    super.stop(() => {
      if (this.config.finalState === 'on') {
        if (this.gameObject.initialConfig.graphicLight !== null) {
          this.gameObject.graphicLight.setIntensity(this.gameObject.initialConfig.graphicLight.intensity);
        }
        if (this.gameObject.initialConfig.diffusedLight !== null) {
          this.gameObject.diffusedLight.setIntensity(this.gameObject.initialConfig.diffusedLight.intensity);
        }
      } else if (this.config.finalState === 'off') {
        this.gameObject.turnOff();
      }
    });
  }
}
