import Settings from './Settings';
import DebugHeader from './DebugHeader';
import Utils from '../utils';

export default class Game {
  constructor(config) {
    this.config = config;
    this._setScreenConfig();
    this._setPhysicsConfig();
    this._setPlugins();
    this._setBoot();
    this._setHeaderProps();
    this._finalizeConfig();

    // Aggiungere il device e la funzione per determinarlo

    Settings.GAME = new Phaser.Game(this.config);

    DebugHeader(Settings.GAME);
    return Settings.GAME;
  }

  _setScreenConfig() {
    Settings.SCREEN_PROPS = Utils.getScreenProps();

    this.config.width = Settings.SCREEN_PROPS.calculatedWidth;
    this.config.height = Settings.SCREEN_PROPS.calculatedHeight;
    this.config.zoom = Settings.SCREEN_PROPS.calculatedZoom;

    this.config.autoResize = false;
    this.config.backgroundColor = '#000000';
    this.config.pixelArt = true;
  }

  _setPhysicsConfig() {
    this.config.physics = {
      default: 'arcade',
      arcade: {
        debug: false,
        gravity: { y: 0, x: 0 }
      }
    };
  }

  _setPlugins() {
    this.config.plugins = {
      global: [
        { key: 'RoomManager', plugin: RoomManager, start: false, mapping: 'rooms' },
        { key: 'CursorManager', plugin: CursorManager, start: false, mapping: 'cursors' }
      ],
      scene: [
        { key: 'UpdatePlugin', plugin: UpdatePlugin, mapping: 'updates' },
        { key: 'LightSourceManager', plugin: LightSourceManager, mapping: 'lightSources' },
        { key: 'LayerManager', plugin: LayerManager, mapping: 'layers' },
        { key: 'ActionManager', plugin: ActionManager, mapping: 'actions' }
      ]
    };
  }

  _setBoot() {
    this.config.scene = [Boot];
  }

  _setHeaderProps() {
    this.config.banner = false;
  }

  _finalizeConfig() {
    this.config.type = Phaser.WEBGL;
    this.config.maxLights = 20;
    this.config.parent = 'game';
    this.config.disableContextMenu = true;
  }
}
