import Manager from '../Manager';
import GlobalSettings from '../../boot/Settings';

export default class LightSourceManager extends Manager {
  constructor(room, pluginManager) {
    super(room, pluginManager);

    this.graphicLights = [];
    this.diffusedLights = [];
  }

  boot() {
    super.boot();
    this.lightSources = this.room.add.group();
  }

  add(source) {
    this.lightSources.add(source, true);
    this.lightSources.getChildren().forEach(lightSource => {
      lightSource.setPipeline('Light2D');
    });

    return source;
  }

  // Le luci che flickerano o con comportamenti strani vanno contate?
  calculateLightsContribuitePoint(target) {
    let singleLightContributeAccumulator = 0;

    this.lightSources.getChildren().forEach(light => {
      if (light.isOn) {
        // eslint-disable-next-line max-len
        let singleLightContribute = light.config.diffusedLight.intensity / (Math.abs(light.x + light.config.offset.x - target.x) ^ 2);

        // COSE
        if (light.effects.currentEffect) {
          singleLightContribute *= light.effects.currentEffect.contributeFactor;
        }

        singleLightContributeAccumulator += singleLightContribute;
      }
    });

    return Math.floor(singleLightContributeAccumulator * 10000) / 1000;
  }

  calculateAverageLightsContribute() {
    let singleLightIntensityAccumulator = 0;

    this.diffusedLights.forEach(light => {
      singleLightIntensityAccumulator += light.intensity;
    });
    let averageLightsContribute = 0;

    // eslint-disable-next-line max-len
    if (singleLightIntensityAccumulator !== 0) averageLightsContribute = Math.floor((singleLightIntensityAccumulator * 10000 / this.room.layers.wallsLayer.width / GlobalSettings.TILE_SIZE) * 100) / 100 + 0.3;
    return averageLightsContribute;
  }
}
