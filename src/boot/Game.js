/**
 * @author       Francesco Negri <francesco.negri@outlook.com>
 * @copyright    2019 The Darkest Light
 * @license      {@link https://github.com/FrancescoNegri/TheDarkestLib/blob/master/LICENSE|MIT License}
 */

import Settings from './Settings';
import DebugHeader from './DebugHeader';
import Utils from '../utils';
import Managers from '../managers';
import Systems from '../systems';
import Boot from './Boot';
import Phaser from 'phaser';
import filterObj from 'filter-obj';

/**
 * @classdesc
 * The TDLib.Game instance is the main controller for the entire game. It create an instace
 * of Phaser.Game with a default configuration of various parameters.
 *
 * @class Game
 * @memberof TDLib
 * @constructor
 * @since 1.0.0
 *
 * @param {Object} [config] - The configuration object for your TDLib Game instance.
 * @param {Object} [config.title] - The title of your game.
 * @param {Object} [config.url] - The url of your online game or website.
 * @param {Object} [config.version] - The version of your game.
 */
export default class Game {
  constructor(config) {
    /**
     * The parsed Game Configuration object.
     *
     * The values stored within this object are read-only and should not be changed at run-time.
     *
     * @name TDLib.Game#config
     * @type {Object}
     * @readonly
     * @since 1.0.0
     */
    this.config = config;
    this._setScreenConfig();
    this._setPhysicsConfig();
    this._setPlugins();
    this._setBoot();
    this._setHeaderProps();
    this._finalizeConfig();

    /** ************ TODO: Aggiungere il device e la funzione per determinarlo **************/
    Settings.STARTING_ROOM = this.config.starting_room;
    Settings.GAME_SPRITES = this._setGameSprites(Phaser.Utils.Objects.Clone(this.config.sprites));
    console.log(this.config.sprites, Settings.GAME_SPRITES);
    Settings.GAME = new Phaser.Game(this.config);

    DebugHeader(Settings.GAME);
    return Settings.GAME;
  }

  /**
   * This method is called automatically and configure the screen proportions and settings for the Game.
   *
   * @method TDLib.Game#_setScreenConfig
   * @protected
   * @since 1.0.0
   */
  _setScreenConfig() {
    Settings.SCREEN_PROPS = Utils.getScreenProps();

    this.config.width = Settings.SCREEN_PROPS.calculatedWidth;
    this.config.height = Settings.SCREEN_PROPS.calculatedHeight;
    this.config.zoom = Settings.SCREEN_PROPS.calculatedZoom;

    this.config.autoResize = false;
    this.config.backgroundColor = '#000000';
    this.config.pixelArt = true;
  }

  /**
   * This method is called automatically and configure physics for the Game using the Arcade engine of Phaser.
   *
   * @method TDLib.Game#_setPhysicsConfig
   * @protected
   * @since 1.0.0
   */
  _setPhysicsConfig() {
    this.config.physics = {
      default: 'arcade',
      arcade: {
        debug: false,
        gravity: { y: 0, x: 0 }
      }
    };
  }

  /**
   * This method is called automatically and configure the plugins for the Game.
   * Global plugins are called Systems.
   * Scene plugins are called Managers.
   *
   * @method TDLib.Game#_setPlugins
   * @protected
   * @since 1.0.0
   */
  _setPlugins() {
    this.config.plugins = {
      // Systems
      global: [
        { key: 'RoomSystem', plugin: Systems.RoomSystem, start: false, mapping: 'rooms' },
        { key: 'CursorSystem', plugin: Systems.CursorSystem, start: false, mapping: 'cursors' }
      ],
      // Managers
      scene: [
        { key: 'UpdateManager', plugin: Managers.UpdateManager, mapping: 'updates' },
        { key: 'LightSourceManager', plugin: Managers.LightSourceManager, mapping: 'lightSources' },
        { key: 'LayerManager', plugin: Managers.LayerManager, mapping: 'layers' }
      ]
    };
  }

  /**
   * This method is called automatically and configure the Phaser.Scene Boot to start the Systems.
   *
   * @method TDLib.Game#_setBoot
   * @protected
   * @since 1.0.0
   */
  _setBoot() {
    this.config.scene = [Boot]; /** ****** TODO: Valutare come spostare il Boot dentro alla libreria*******/
  }

  /**
   * This method is called automatically and turn off the default Phaser header/banner.
   *
   * @method TDLib.Game#_setHeaderProps
   * @protected
   * @since 1.0.0
   */
  _setHeaderProps() {
    this.config.banner = false;
  }

  _setGameSprites(obj) {
    function haveChildObject(father) {
      let flag = false;

      // eslint-disable-next-line eqeqeq
      if (Object.keys(filterObj(obj, (key, value) => (
        // eslint-disable-next-line eqeqeq
        typeof value == 'object' &&
        // eslint-disable-next-line eqeqeq
        typeof value.default != 'function' &&
        Object.keys(value).length > 0))).length > 0) flag = true;
      return flag;
    }

    function getChildrenFromFather(father) {
      let output = [];

      for (let key in father) {
        output.push(father[key]);
      }

      return output;
    }

    if (haveChildObject(obj)) {
      // eslint-disable-next-line eqeqeq
      let objectsObj = filterObj(obj, (key, value) => (typeof value == 'object' && typeof value.default != 'function'));

      let temp = getChildrenFromFather(objectsObj);

      temp.forEach(element => {
        obj = Phaser.Utils.Objects.Extend(false, obj, element);
      });

      for (let key in objectsObj) delete obj[key];

      return this._setGameSprites(obj);
    }
    return obj;

  }

  /**
   * This method is called automatically and finalize the config passed to Phaser.Game.
   *
   * @method TDLib.Game#_finalizeConfig
   * @protected
   * @since 1.0.0
   */
  _finalizeConfig() {
    // eslint-disable-next-line no-undef
    this.config.type = Phaser.WEBGL;
    this.config.maxLights = 20;
    this.config.parent = 'game';
    this.config.disableContextMenu = true;
  }
}
