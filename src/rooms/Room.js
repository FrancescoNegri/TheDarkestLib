import Settings from '../boot/Settings';
import Utils from './Utils';
import Phaser from 'phaser';

/**
 * The rooms namespace.
 * @namespace TDLib.Rooms
 * @since 1.0.0
 */

/**
 * Class representing a TDLRoom.
 * @extends Phaser.Scene
 * @memberof TDLib.Rooms
 * @since 1.0.0
 */
export default class Room extends Phaser.Scene {
  /**
   * Create a new TDLRoom.
   * @param {string} sceneKey - The unique key to identify the room.
   * @param {Object} rawAssets - The raw object of assets needed by the room. (Ripensarlo ?)
   */
  constructor(sceneKey, rawAssets) {
    super(sceneKey);

    /**
       * This object contains an array with all the assets needed by the room.
       * @type {Object}
       * @since 1.0.0
       */
    this.assets = { raw: rawAssets, array: [] };

    /**
       * The average contribute of light sources to the room.
       * @type {number}
       * @since 1.0.0
       */
    this.averageLightsContribute;

    /**
       * The Settings cursor manager.
       * @type {TDLib.Plugins.SettingsPlugins.CursorManager}
       * @since 1.0.0
       */
    this.cursors;

    /**
       * The layer manager of the room.
       * @type {TDLib.Plugins.RoomPlugins.LayerManager}
       * @since 1.0.0
       */
    this.layers;

    /**
       * The tilemap of the room.
       * @type {Phaser.Tilemaps.Tilemap}
       * @since 1.0.0
       */
    this.map;

    /**
       * The name of the room.
       * @type {string}
       * @since 1.0.0
       */
    this.name = this.constructor.name;

    /**
       * The instance of the TDLCharacter designated as player for the room.
       * @type {TDLib.Sprites.Characters.TDLCharacter}
       * @since 1.0.0
       */
    this.player;

    /**
       * The Settings room manager.
       * @type {TDLib.Plugins.SettingsPlugins.RoomManager}
       * @since 1.0.0
       */
    this.rooms;
  }

  /**
   * The preload function is executed once and load all the assets needed by the room.
   * @since 1.0.0
   */
  preload() {
    this._scrapeAssets();
    this.assets.array.forEach(obj => {
      if ('nPath' in obj) {
        this.load[obj.type](obj.key, [obj.path, obj.nPath]);
      } else if ('bPath' in obj) {
        this.load[obj.type](obj.key, obj.path);
        this.load[obj.type](obj.key + '_b', obj.bPath);
      } else {
        this.load[obj.type](obj.key, obj.path);
      }
    });

    // Loading Border Camera Masks
    this.load.image('top-border-mask-camera', 'assets/Masks/topMaskCamera.png');
    this.load.image('bottom-border-mask-camera', 'assets/Masks/bottomMaskCamera.png');
    this.load.image('left-border-mask-camera', 'assets/Masks/leftMaskCamera.png');
    this.load.image('right-border-mask-camera', 'assets/Masks/rightMaskCamera.png');
  }

  /**
   * Scrape the object of raw assets.
   * @private
   * @since 1.0.0
   */
  _scrapeAssets() {
    for (let type in this.assets.raw) {
      Utils.scrapeComplexObjKey(
        this.assets.raw[type],
        { type: type },
        'path',
        (obj, params) => {
          obj['type'] = params.type;
          obj['key'] = Utils.findFileNameFromPath(obj.path);
          this.assets.array.push(obj);
        }
      );
    }
  }

  /**
   * The create function is executed once, when the room is initialized.
   * @param {TDLib.Sprites.Characters.TDLCharacter} player - The instance of the player for the room.
   * @since 1.0.0
   */
  create(player) {
    this.player = player.setName('player');
    this.lights.enable(); // Boot Phaser's LightManager
    // this.scene.bringToTop(CursorManager.CURSOR_SCENE_KEY); // Add the cursor to the Room
    this.scene.bringToTop('CursorScene');

    this._setCameraViewport();
    this._createRoom();
    this._createSprites();
    this._applyBorderMasks();
    this.layers.setLayersDepth();

    // Camera bounds, anche il wallsLayer
    this.cameras.main.setBounds(0, 0, this.layers.wallsLayer.width, this.layers.wallsLayer.height);
    this.cameras.main.startFollow(this.player);
    this.cameras.main.setRoundPixels(true);
    // Physics Bounds, sarà solo lo spazio di gioco (togliamo il wall layer tutto attorno!!)
    this.physics.world.setBounds(
      Settings.TILE_SIZE, Settings.TILE_SIZE, this.layers.wallsLayer.width - 2 * Settings.TILE_SIZE,
      this.layers.wallsLayer.height - 2 * Settings.TILE_SIZE
    );
  }

  /**
   * Set the correct camera viewport.
   * @private
   * @since 1.0.0
   */
  _setCameraViewport() {
    if (Settings.DEVICE === 'MOBILE') {
      this.cameras.main.setPosition(
        (Settings.ROOM_FRAME_IN_TILES_MOBILE + Settings.INVENTORY_WIDTH_IN_TILES_MOBILE) * Settings.TILE_SIZE,
        (Settings.ROOM_FRAME_IN_TILES_MOBILE + Settings.INVENTORY_HEIGHT_IN_TILES_MOBILE) * Settings.TILE_SIZE
      );
      this.cameras.main.setSize(
        Settings.SCREEN_PROPS.calculatedWidth - 2 * (Settings.ROOM_FRAME_IN_TILES_MOBILE + Settings.INVENTORY_WIDTH_IN_TILES_MOBILE) * Settings.TILE_SIZE,
        Settings.ROOM_HEIGHT_IN_TILE * Settings.TILE_SIZE
      );
    } else {
      this.cameras.main.setPosition(
        Settings.ROOM_FRAME_IN_TILES_DESKTOP * Settings.TILE_SIZE,
        Settings.ROOM_FRAME_IN_TILES_DESKTOP * Settings.TILE_SIZE
      );
      this.cameras.main.setSize(
        Settings.SCREEN_PROPS.calculatedWidth - 2 * Settings.ROOM_FRAME_IN_TILES_DESKTOP * Settings.TILE_SIZE,
        Settings.ROOM_HEIGHT_IN_TILE * Settings.TILE_SIZE
      );
    }
  }

  /**
   * Create room tilemap and layers.
   * @private
   * @since 1.0.0
   */
  _createRoom() {
    this.map = this.make.tilemap({
      key: Utils.findFileNameFromPath(this.assets.raw.tilemapTiledJSON.path),
      tileWidth: Settings.TILE_SIZE,
      tileHeight: Settings.TILE_SIZE
    });

    this.layers.backgroundLayer = this.map.createDynamicLayer(
      'backgroundLayer',
      this.map.addTilesetImage(Utils.findFileNameFromPath(this.assets.raw.image.tiles.background.path)),
      0, 0
    );// .setPipeline('Light2D');
    this.layers.wallsLayer = this.map.createDynamicLayer(
      'wallsLayer',
      this.map.addTilesetImage(Utils.findFileNameFromPath(this.assets.raw.image.tiles.walls.path)),
      0, 0
    );
    this.layers.wallsMaskLayer = this.map.createDynamicLayer(
      'wallsMaskLayer',
      this.map.addTilesetImage(Utils.findFileNameFromPath(this.assets.raw.image.tiles.walls.bPath)),
      0, 0
    );
  }

  /**
   * Create all the objects present in Tiled JSON map.
   * @private
   * @since 1.0.0
   */
  _createSprites() {
    let _this = this;

    this.map.objects.forEach(layer => {
      layer.objects.forEach(element => {
        _this;
        // eslint-disable-next-line new-cap
        this[element.name] = new Settings.GAME_SPRITES[element.type].default(_this, element.x + element.width / 2, element.y - element.height / 2);
        this[element.name].setName(element.name);
      });
    });
  }

  /**
   * Apply the four border masks to the camera.
   * @private
   * @since 1.0.0
   */
  _applyBorderMasks() {
    this.layers.borderMasksLayer.create(0,
      0,
      'top-border-mask-camera'
    ).setScrollFactor(0).setOrigin(0, 0);

    this.layers.borderMasksLayer.create(0,
      0,
      'left-border-mask-camera'
    ).setScrollFactor(0).setOrigin(0, 0);

    this.layers.borderMasksLayer.create(
      this.cameras.main.width - Settings.TILE_SIZE,
      0,
      'right-border-mask-camera'
    ).setScrollFactor(0).setOrigin(0, 0);

    this.layers.borderMasksLayer.create(
      0,
      this.cameras.main.height - Settings.TILE_SIZE,
      'bottom-border-mask-camera'
    ).setScrollFactor(0).setOrigin(0, 0);
  }

  /**
   * The update function is executed at every cycle of the game loop.
   * @since 1.0.0
   */
  update() {
    this._updateMasksByLightDiffusion();

    // Updates all Actions in  every ActionComponent (if present)
    this.children.list.forEach(element => {
      if ('actions' in element) {
        element.actions._update();
      }
    });
  }

  /**
   * Update the border masks alpha according to the average diffused light in the room.
   * @private
   * @since 1.0.0
   */
  _updateMasksByLightDiffusion() {
    this.averageLightsContribute = this.lightSources.calculateAverageLightsContribute();
    this.layers.wallsMaskLayer.setAlpha(1 - this.averageLightsContribute);
  }
}

