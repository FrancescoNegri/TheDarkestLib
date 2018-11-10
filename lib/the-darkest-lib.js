(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("phaser"));
	else if(typeof define === 'function' && define.amd)
		define("TDLib", ["phaser"], factory);
	else if(typeof exports === 'object')
		exports["TDLib"] = factory(require("phaser"));
	else
		root["TDLib"] = factory(root["phaser"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_phaser__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/TDLib.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/TDLib.js":
/*!**********************!*\
  !*** ./src/TDLib.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * @namespace TDLib
 */
var TDLib = {
  boot: __webpack_require__(/*! ./boot */ "./src/boot.js"),
  Rooms: __webpack_require__(/*! ./rooms */ "./src/rooms/index.js"),
  Sprites: __webpack_require__(/*! ./sprites */ "./src/sprites/index.js"),
  Utils: __webpack_require__(/*! ./utils */ "./src/utils/index.js")
};
module.exports = TDLib;
global.TDLib = TDLib;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/boot.js":
/*!*********************!*\
  !*** ./src/boot.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.boot = void 0;

var boot = function boot(config) {
  console.log(config);
};

exports.boot = boot;

/***/ }),

/***/ "./src/components/Component.js":
/*!*************************************!*\
  !*** ./src/components/Component.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The namespace of components.
 * @namespace TDLib.Components
 */

/**
 * Class representing a generic TDLComponent. A TDLComponent extends the members and methods of a TDLSprite which uses it.
 * @memberof TDLib.Components
 */
var Component =
/**
 * Creates a new TDLComponent.
 * @param {TDLib.Sprites.TDLSprite} gameObject - The TDLSprite which owns the component.
 */
function Component(gameObject) {
  _classCallCheck(this, Component);

  /**
   * The name of the component.
   * @type {string}
   */
  this.name = this.constructor.name;
  /**
   * The TDLSprite which owns the component.
   * @type {TDLib.Sprites.TDLSprite}
   */

  this.gameObject = gameObject;
};

exports.default = Component;
module.exports = exports["default"];

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Components = {
  Component: __webpack_require__(/*! ./Component */ "./src/components/Component.js")
};
module.exports = Components;

/***/ }),

/***/ "./src/rooms/Room.js":
/*!***************************!*\
  !*** ./src/rooms/Room.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _phaser = _interopRequireDefault(__webpack_require__(/*! phaser */ "phaser"));

var _ = __webpack_require__(/*! ./ */ "./src/rooms/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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
var Room =
/*#__PURE__*/
function (_Phaser$Scene) {
  _inherits(Room, _Phaser$Scene);

  /**
   * Create a new TDLRoom.
   * @param {string} sceneKey - The unique key to identify the room.
   * @param {Object} rawAssets - The raw object of assets needed by the room. (Ripensarlo ?)
   */
  function Room(sceneKey, rawAssets) {
    var _this;

    _classCallCheck(this, Room);

    _this = _possibleConstructorReturn(this, (Room.__proto__ || Object.getPrototypeOf(Room)).call(this, sceneKey));
    /**
       * This object contains an array with all the assets needed by the room.
       * @type {Object}
       * @since 1.0.0
       */

    _this.assets = {
      raw: rawAssets,
      array: []
    };
    /**
       * The average contribute of light sources to the room.
       * @type {number}
       * @since 1.0.0
       */

    _this.averageLightsContribute;
    /**
       * The Settings cursor manager.
       * @type {TDLib.Plugins.SettingsPlugins.CursorManager}
       * @since 1.0.0
       */

    _this.cursors;
    /**
       * The layer manager of the room.
       * @type {TDLib.Plugins.RoomPlugins.LayerManager}
       * @since 1.0.0
       */

    _this.layers;
    /**
       * The tilemap of the room.
       * @type {Phaser.Tilemaps.Tilemap}
       * @since 1.0.0
       */

    _this.map;
    /**
       * The name of the room.
       * @type {string}
       * @since 1.0.0
       */

    _this.name = _this.constructor.name;
    /**
       * The instance of the TDLCharacter designated as player for the room.
       * @type {TDLib.Sprites.Characters.TDLCharacter}
       * @since 1.0.0
       */

    _this.player;
    /**
       * The Settings room manager.
       * @type {TDLib.Plugins.SettingsPlugins.RoomManager}
       * @since 1.0.0
       */

    _this.rooms;
    return _this;
  }
  /**
   * The preload function is executed once and load all the assets needed by the room.
   * @since 1.0.0
   */


  _createClass(Room, [{
    key: "preload",
    value: function preload() {
      var _this2 = this;

      this._scrapeAssets();

      this.assets.array.forEach(function (obj) {
        if ('nPath' in obj) {
          _this2.load[obj.type](obj.key, [obj.path, obj.nPath]);
        } else if ('bPath' in obj) {
          _this2.load[obj.type](obj.key, obj.path);

          _this2.load[obj.type](obj.key + '_b', obj.bPath);
        } else {
          _this2.load[obj.type](obj.key, obj.path);
        }
      }); // Loading Border Camera Masks

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

  }, {
    key: "_scrapeAssets",
    value: function _scrapeAssets() {
      var _this3 = this;

      for (var type in this.assets.raw) {
        _.Utils.scrapeComplexObjKey(this.assets.raw[type], {
          type: type
        }, 'path', function (obj, params) {
          obj['type'] = params.type;
          obj['key'] = _.Utils.findFileNameFromPath(obj.path);

          _this3.assets.array.push(obj);
        });
      }
    }
    /**
     * The create function is executed once, when the room is initialized.
     * @param {TDLib.Sprites.Characters.TDLCharacter} player - The instance of the player for the room.
     * @since 1.0.0
     */

  }, {
    key: "create",
    value: function create(player) {
      this.player = player.setName('player');
      this.lights.enable(); // Boot Phaser's LightManager
      // this.scene.bringToTop(CursorManager.CURSOR_SCENE_KEY); // Add the cursor to the Room

      this._setCameraViewport();

      this._createRoom();

      this._createSprites();

      this._applyBorderMasks();

      this.layers.setLayersDepth(); // Camera bounds, anche il wallsLayer

      this.cameras.main.setBounds(0, 0, this.layers.wallsLayer.width, this.layers.wallsLayer.height);
      this.cameras.main.startFollow(this.player);
      this.cameras.main.setRoundPixels(true); // Physics Bounds, sarà solo lo spazio di gioco (togliamo il wall layer tutto attorno!!)

      this.physics.world.setBounds(_.Settings.TILE_SIZE, _.Settings.TILE_SIZE, this.layers.wallsLayer.width - 2 * _.Settings.TILE_SIZE, this.layers.wallsLayer.height - 2 * _.Settings.TILE_SIZE);
    }
    /**
     * Set the correct camera viewport.
     * @private
     * @since 1.0.0
     */

  }, {
    key: "_setCameraViewport",
    value: function _setCameraViewport() {
      if (_.Settings.DEVICE === 'MOBILE') {
        this.cameras.main.setPosition((_.Settings.ROOM_FRAME_IN_TILES_MOBILE + _.Settings.INVENTORY_WIDTH_IN_TILES_MOBILE) * _.Settings.TILE_SIZE, (_.Settings.ROOM_FRAME_IN_TILES_MOBILE + _.Settings.INVENTORY_HEIGHT_IN_TILES_MOBILE) * _.Settings.TILE_SIZE);
        this.cameras.main.setSize(_.Settings.SCREEN_PROPS.calculatedWidth - 2 * (_.Settings.ROOM_FRAME_IN_TILES_MOBILE + _.Settings.INVENTORY_WIDTH_IN_TILES_MOBILE) * _.Settings.TILE_SIZE, _.Settings.ROOM_HEIGHT_IN_TILE * _.Settings.TILE_SIZE);
      } else {
        this.cameras.main.setPosition(_.Settings.ROOM_FRAME_IN_TILES_DESKTOP * _.Settings.TILE_SIZE, _.Settings.ROOM_FRAME_IN_TILES_DESKTOP * _.Settings.TILE_SIZE);
        this.cameras.main.setSize(_.Settings.SCREEN_PROPS.calculatedWidth - 2 * _.Settings.ROOM_FRAME_IN_TILES_DESKTOP * _.Settings.TILE_SIZE, _.Settings.ROOM_HEIGHT_IN_TILE * _.Settings.TILE_SIZE);
      }
    }
    /**
     * Create room tilemap and layers.
     * @private
     * @since 1.0.0
     */

  }, {
    key: "_createRoom",
    value: function _createRoom() {
      this.map = this.make.tilemap({
        key: _.Utils.findFileNameFromPath(this.assets.raw.tilemapTiledJSON.path),
        tileWidth: _.Settings.TILE_SIZE,
        tileHeight: _.Settings.TILE_SIZE
      });
      this.layers.backgroundLayer = this.map.createDynamicLayer('backgroundLayer', this.map.addTilesetImage(_.Utils.findFileNameFromPath(this.assets.raw.image.tiles.background.path)), 0, 0); // .setPipeline('Light2D');

      this.layers.wallsLayer = this.map.createDynamicLayer('wallsLayer', this.map.addTilesetImage(_.Utils.findFileNameFromPath(this.assets.raw.image.tiles.walls.path)), 0, 0);
      this.layers.wallsMaskLayer = this.map.createDynamicLayer('wallsMaskLayer', this.map.addTilesetImage(_.Utils.findFileNameFromPath(this.assets.raw.image.tiles.walls.bPath)), 0, 0);
    }
    /**
     * Create all the objects present in Tiled JSON map.
     * @private
     * @since 1.0.0
     */

  }, {
    key: "_createSprites",
    value: function _createSprites() {
      var _this4 = this;

      this.map.objects.forEach(function (layer) {
        layer.objects.forEach(function (element) {
          _this4[element.name] = eval('new ' + element.type + '(this,' + (element.x + element.width / 2) + ', ' + (element.y - element.height / 2) + ');');

          _this4[element.name].setName(element.name);
        });
      });
    }
    /**
     * Apply the four border masks to the camera.
     * @private
     * @since 1.0.0
     */

  }, {
    key: "_applyBorderMasks",
    value: function _applyBorderMasks() {
      this.layers.borderMasksLayer.create(0, 0, 'top-border-mask-camera').setScrollFactor(0).setOrigin(0, 0);
      this.layers.borderMasksLayer.create(0, 0, 'left-border-mask-camera').setScrollFactor(0).setOrigin(0, 0);
      this.layers.borderMasksLayer.create(this.cameras.main.width - _.Settings.TILE_SIZE, 0, 'right-border-mask-camera').setScrollFactor(0).setOrigin(0, 0);
      this.layers.borderMasksLayer.create(0, this.cameras.main.height - _.Settings.TILE_SIZE, 'bottom-border-mask-camera').setScrollFactor(0).setOrigin(0, 0);
    }
    /**
     * The update function is executed at every cycle of the game loop.
     * @since 1.0.0
     */

  }, {
    key: "update",
    value: function update() {
      this._updateMasksByLightDiffusion(); // Updates all Actions in  every ActionComponent (if present)


      this.children.list.forEach(function (element) {
        if ('actions' in element) {
          element.actions.update();
        }
      });
    }
    /**
     * Update the border masks alpha according to the average diffused light in the room.
     * @private
     * @since 1.0.0
     */

  }, {
    key: "_updateMasksByLightDiffusion",
    value: function _updateMasksByLightDiffusion() {
      this.averageLightsContribute = this.lightSources.calculateAverageLightsContribute();
      this.layers.wallsMaskLayer.setAlpha(1 - this.averageLightsContribute);
    }
  }]);

  return Room;
}(_phaser.default.Scene);

exports.default = Room;
module.exports = exports["default"];

/***/ }),

/***/ "./src/rooms/index.js":
/*!****************************!*\
  !*** ./src/rooms/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Rooms = {
  Room: __webpack_require__(/*! ./Room */ "./src/rooms/Room.js")
};
module.exports = Rooms;

/***/ }),

/***/ "./src/sprites/Sprite.js":
/*!*******************************!*\
  !*** ./src/sprites/Sprite.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _phaser = _interopRequireDefault(__webpack_require__(/*! phaser */ "phaser"));

var _behaviours = _interopRequireDefault(__webpack_require__(/*! ./behaviours */ "./src/sprites/behaviours/index.js"));

var _components = _interopRequireDefault(__webpack_require__(/*! ../components */ "./src/components/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * The Darkest Lib.
 * @namespace TDLib
 * @since 1.0.0
 */

/**
 * The actions namespace.
 * @namespace TDLib.Sprites
 * @since 1.0.0
 */

/**
 * Class representing a TDLSprite.
 * @extends Phaser.Physics.Arcade.Sprite
 * @memberof TDLib.Sprites
 * @since 1.0.0
 */
var Sprite =
/*#__PURE__*/
function (_Phaser$Physics$Arcad) {
  _inherits(Sprite, _Phaser$Physics$Arcad);

  /**
   * Create a TDLSprite.
   * @param {TDLib.Rooms.TDLRoom} room - The room where the sprite is created.
   * @param {number} x - The sprite x coordinate.
   * @param {number} y - The sprite y coordinate.
   * @param {string} texture - The graphic of the sprite.
   * @param {string} [layer=null] - The key of the layer which will contain the sprite.
   * @param {boolean} [hasBody=true] - Specify if the sprite has physics.
   * @param {string} [behaviourType=SpriteBehaviour.INERT] - Specify the behaviour of the sprite.
   * @param {Object} [pixelPerfect=null] - If not null enable the pixel perfect pointer hit for the sprite.
   * @param {boolean} [pixelPerfect.alphaTolerance] - The alpha tolerance threshold value.
   * @param {string|string[]} [observeText] - The text which appears when observing the sprite.
   * @param {string|string[]} [examineOrInteractText] -  The text which appears when examine or interact with the sprite.
   * @param {string} [blockExamineText=null] - If not null it's the blocking text which appears the first time the sprite is examined.
   * @param {string|string[]} [noLightObserveText] -  The text which appears when observing the sprite when the diffused light is not sufficient.
   * @param {string|string[]} [noLightExamineOrInteractText] - The text which appears when examine or interact with the sprite when the diffused light is not sufficient.
   * @param {number} [examineOrInteractOffsetX=0] - The offset on x axis of the examineOrInteractPoint, where the player has to move to examine or interact with the sprite.
   * @param {number} [examineOrInteractThresholdRadius=0] - The radius of the tolerance in reaching the examineOrInteractPoint, where the player has to move to examine or interact with the sprite.
   * @param {number} [minLightLevelToExamineOrInteract=???] - The minimum value of diffused light to examine or interact with the sprite.
   * @param {number} [minLightLevelToObserve=???] - The minimum value of diffused light to observe the sprite.
   * @param {boolean} [precisePosition=false] - Specify if to examine or interact with the sprite it's required to be precisely at the examineOrInteractPoint. (Probably not needed)
   */
  function Sprite(room, x, y, texture) {
    var _this;

    var layer = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
    var hasBody = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : true;
    var behaviourType = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : _behaviours.default.INERT;
    var pixelPerfect = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : null;
    var observeText = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : _behaviours.default.DEFAULT_OBSERVE_TEXT;
    var examineOrInteractText = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : _behaviours.default.DEFAULT_EXAMINE_OR_INTERACT_TEXT;
    var blockExamineText = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : null;
    var noLightObserveText = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : _behaviours.default.DEFAULT_NO_LIGHT_OBSERVE_TEXT;
    var noLightExamineOrInteractText = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : _behaviours.default.DEFAULT_NO_LIGHT_EXAMINE_OR_INTERACT_TEXT;
    var examineOrInteractOffsetX = arguments.length > 13 && arguments[13] !== undefined ? arguments[13] : 0;
    var examineOrInteractThresholdRadius = arguments.length > 14 && arguments[14] !== undefined ? arguments[14] : 0;
    var minLightLevelToExamineOrInteract = arguments.length > 15 && arguments[15] !== undefined ? arguments[15] : _behaviours.default.DEFAULT_MIN_LIGHT_LEVEL_TO_EXAMINE_OR_INTERACT;
    var minLightLevelToObserve = arguments.length > 16 && arguments[16] !== undefined ? arguments[16] : _behaviours.default.DEFAULT_MIN_LIGHT_LEVEL_TO_OBSERVE;

    _classCallCheck(this, Sprite);

    _this = _possibleConstructorReturn(this, (Sprite.__proto__ || Object.getPrototypeOf(Sprite)).call(this, room, x, y, texture));
    /**
     * The room where the sprite is created.
     * @type {TDLib.Rooms.TDLRoom}
     * @since 1.0.0
     */

    _this.room = room;
    /**
     * The name of the sprite, to map it in the room. Usually it's obtained by Tiled.
     * @type {string}
     * @since 1.0.0
     */

    _this.name;
    /**
     * The unique key of the sprite, composed by the sprite type and a 4 digits random integer number.
     * @type {string}
     * @since 1.0.0
     */

    _this.key = _this.constructor.name + (Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000);
    /**
     * The type of the sprite.
     * @type {string}
     * @since 1.0.0
     */

    _this.type = _this.constructor.name;
    /**
     * The sprite behaviour component instance.
     * @type {TDLib.Components.SpriteBehaviourComponent}
     * @since 1.0.0
     */

    _this.behaviour = new _components.default(_this, behaviourType, pixelPerfect);
    /**
     * The text which appears when observing the sprite.
         * @type {string}
         * @since 1.0.0
     */

    _this.observeText = observeText;
    /**
    * The text which appears when examine or interact with the sprite.
     * @type {string}
     * @since 1.0.0
    */

    _this.examineOrInteractText = examineOrInteractText;
    /**
     * If not null it's the blocking text which appears the first time the sprite is examined.
         * @type {string}
         * @since 1.0.0
     */

    _this.blockExamineText = blockExamineText;
    /**
     * The text which appears when observing the sprite when the diffused light is not sufficient.
         * @type {string}
         * @since 1.0.0
     */

    _this.noLightObserveText = noLightObserveText;
    /**
    * The text which appears when examine or interact with the sprite when the diffused light is not sufficient.
     * @type {string}
     * @since 1.0.0
     */

    _this.noLightExamineOrInteractText = noLightExamineOrInteractText;
    /**
     * The offset on x axis of the examineOrInteractPoint, where the player has to move to examine or interact with the sprite.
         * @type {number}
         * @since 1.0.0
     */

    _this.examineOrInteractOffsetX = examineOrInteractOffsetX;
    /**
     * The radius of the tolerance in reaching the examineOrInteractPoint, where the player has to move to examine or interact with the sprite.
         * @type {number}
         * @since 1.0.0
         */

    _this.examineOrInteractThresholdRadius = examineOrInteractThresholdRadius;
    /**
     * The minimum value of diffused light to examine or interact with the sprite.
         * @type {number}
         * @since 1.0.0
         */

    _this.minLightLevelToExamineOrInteract = minLightLevelToExamineOrInteract;
    /**
    * The minimum value of diffused light to observe the sprite.
     * @type {number}
     * @since 1.0.0
     */

    _this.minLightLevelToObserve = minLightLevelToObserve;

    _this.room.add.existing(_this);

    _this.room.updates.add(_this);

    if (hasBody) {
      _this.room.physics.add.existing(_this);

      _this.setCollideWorldBounds(true);

      _this.setGravityY(10000);
    }

    if (layer != null) {
      if (layer in _this.room.layers) {
        _this.room.layers[layer].add(_this);

        _this.room.layers.setLayersDepth();
      } else console.warn('ALERT: layer not found for object', _this);
    }

    _this.create();

    return _this;
  }
  /**
   * The create function is executed once, immediately after the initialization of the sprite.
   * @since 1.0.0
   */


  _createClass(Sprite, [{
    key: "create",
    value: function create() {
      console.log('Created:', this.key, '- Type:', this.type, '- Behaviour:', this.behaviour.type);
    }
    /**
     * The update is executed at every cycle of the game loop.
     * @since 1.0.0
     */

  }, {
    key: "update",
    value: function update() {}
    /**
     * Set the name property of a sprite.
     * @param {string} value - The name which is used to map a sprite in the room.
     * @return {TDLib.Sprites.TDLSprite}
     * @since 1.0.0
     */

  }, {
    key: "setName",
    value: function setName(value) {
      this.name = value;
      return this;
    } // Poichè è stata aggiunta la pixel perfect collision, valutare l'utilità di questa funzione!

  }, {
    key: "setHitAreaSize",
    value: function setHitAreaSize() {
      var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.width;
      var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.height;
      var offsetX = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var offsetY = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      this.input.hitArea.setSize(width, height);
      this.input.hitArea.setPosition((this.width - width) / 2 + offsetX, (this.height - height) / 2 + offsetY);
    }
  }]);

  return Sprite;
}(_phaser.default.Physics.Arcade.Sprite);

exports.default = Sprite;
module.exports = exports["default"];

/***/ }),

/***/ "./src/sprites/behaviours/index.js":
/*!*****************************************!*\
  !*** ./src/sprites/behaviours/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var Behaviours = {};
module.exports = Behaviours;

/***/ }),

/***/ "./src/sprites/characters/Character.js":
/*!*********************************************!*\
  !*** ./src/sprites/characters/Character.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Sprite2 = _interopRequireDefault(__webpack_require__(/*! ../Sprite */ "./src/sprites/Sprite.js"));

var _behaviours = _interopRequireDefault(__webpack_require__(/*! ../behaviours */ "./src/sprites/behaviours/index.js"));

var _components = _interopRequireDefault(__webpack_require__(/*! ../../components */ "./src/components/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * The characters namespace.
 * @namespace TDLib.Sprites.Characters
 * @since 1.0.0
 */

/**
 * Class representing a TDLCharacter.
 * @extends TDLib.Sprites.TDLSprite
 * @memberof TDLib.Sprites.Characters
 * @since 1.0.0
 */
var Character =
/*#__PURE__*/
function (_Sprite) {
  _inherits(Character, _Sprite);

  /**
   * Create a new TDLCharacter.
   * @param {Room} room - The room where the character is created.
   * @param {number} x - The x coordinate of the character.
   * @param {number} y - The y coordinate of the character.
   * @param {string} texture - The character's graphic.
   * @param {string} layer - The character's layer.
   */
  function Character(room, x, y, texture, layer) {
    var _ref;

    var _this;

    _classCallCheck(this, Character);

    _this = _possibleConstructorReturn(this, (_ref = Character.__proto__ || Object.getPrototypeOf(Character)).call.apply(_ref, [this].concat(Array.prototype.slice.call(arguments), [true, _behaviours.default.INTERACTIVE, {
      alphaTolerance: 1
    }])));
    /**
     * The ActionComponent for this character.
     * @type {Components.ActionComponent}
     * @since 1.0.0
     */

    _this.actions = new _components.default(_this);
    /**
     * The facing of the character.
     * @type {TDLCharacter.FACING}
     * @since 1.0.0
     */

    _this.facing = Character.FACING().RIGHT;
    return _this;
  }
  /**
   * The possible facing options of the character.
   * @since 1.0.0
   */


  _createClass(Character, [{
    key: "create",
    value: function create() {
      _get(Character.prototype.__proto__ || Object.getPrototypeOf(Character.prototype), "create", this).call(this); // this.setPipeline('Light2D');

    }
  }], [{
    key: "FACING",
    value: function FACING() {
      return {
        RIGHT: 'facing_right',
        LEFT: 'facing_left'
      };
    }
  }]);

  return Character;
}(_Sprite2.default);

exports.default = Character;
module.exports = exports["default"];

/***/ }),

/***/ "./src/sprites/characters/index.js":
/*!*****************************************!*\
  !*** ./src/sprites/characters/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Characters = {
  NPCharacters: __webpack_require__(/*! ./npc-characters */ "./src/sprites/characters/npc-characters/index.js"),
  Players: __webpack_require__(/*! ./players */ "./src/sprites/characters/players/index.js"),
  Character: __webpack_require__(/*! ./Character */ "./src/sprites/characters/Character.js")
};
module.exports = Characters;

/***/ }),

/***/ "./src/sprites/characters/npc-characters/NPCharacter.js":
/*!**************************************************************!*\
  !*** ./src/sprites/characters/npc-characters/NPCharacter.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Character2 = _interopRequireDefault(__webpack_require__(/*! ../Character */ "./src/sprites/characters/Character.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var NPCharacter =
/*#__PURE__*/
function (_Character) {
  _inherits(NPCharacter, _Character);

  function NPCharacter(room, x, y, texture, layer) {
    _classCallCheck(this, NPCharacter);

    return _possibleConstructorReturn(this, (NPCharacter.__proto__ || Object.getPrototypeOf(NPCharacter)).call(this, room, x, y, texture, layer));
  }

  return NPCharacter;
}(_Character2.default);

exports.default = NPCharacter;
module.exports = exports["default"];

/***/ }),

/***/ "./src/sprites/characters/npc-characters/index.js":
/*!********************************************************!*\
  !*** ./src/sprites/characters/npc-characters/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NPCharacters = {
  NPCharacter: __webpack_require__(/*! ./NPCharacter */ "./src/sprites/characters/npc-characters/NPCharacter.js")
};
module.exports = NPCharacters;

/***/ }),

/***/ "./src/sprites/characters/players/Player.js":
/*!**************************************************!*\
  !*** ./src/sprites/characters/players/Player.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Character2 = _interopRequireDefault(__webpack_require__(/*! ../Character */ "./src/sprites/characters/Character.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Player =
/*#__PURE__*/
function (_Character) {
  _inherits(Player, _Character);

  function Player(room, x, y, texture) {
    var _this;

    _classCallCheck(this, Player);

    _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, room, x, y, texture, 'playerLayer'));
    _this.isBlocked = false;
    return _this;
  }

  _createClass(Player, [{
    key: "create",
    value: function create() {
      _get(Player.prototype.__proto__ || Object.getPrototypeOf(Player.prototype), "create", this).call(this);

      this.room.input.on('pointerdown', function (pointer) {
        this.room.cursors.pointerDown(this);
      }, this);
    }
  }]);

  return Player;
}(_Character2.default);

exports.default = Player;
module.exports = exports["default"];

/***/ }),

/***/ "./src/sprites/characters/players/index.js":
/*!*************************************************!*\
  !*** ./src/sprites/characters/players/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Players = {
  Player: __webpack_require__(/*! ./Player */ "./src/sprites/characters/players/Player.js")
};
module.exports = Players;

/***/ }),

/***/ "./src/sprites/index.js":
/*!******************************!*\
  !*** ./src/sprites/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Sprites = {
  Behaviours: __webpack_require__(/*! ./behaviours */ "./src/sprites/behaviours/index.js"),
  Characters: __webpack_require__(/*! ./characters */ "./src/sprites/characters/index.js"),
  InventoryObjects: __webpack_require__(/*! ./inventory-objects */ "./src/sprites/inventory-objects/index.js"),
  WorldObjects: __webpack_require__(/*! ./world-objects */ "./src/sprites/world-objects/index.js"),
  Sprite: __webpack_require__(/*! ./Sprite */ "./src/sprites/Sprite.js")
};
module.exports = Sprites;

/***/ }),

/***/ "./src/sprites/inventory-objects/index.js":
/*!************************************************!*\
  !*** ./src/sprites/inventory-objects/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var InventoryObjects = {};
module.exports = InventoryObjects;

/***/ }),

/***/ "./src/sprites/world-objects/index.js":
/*!********************************************!*\
  !*** ./src/sprites/world-objects/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var WorldObjects = {};
module.exports = WorldObjects;

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

var Utils = {};
module.exports = Utils;

/***/ }),

/***/ "phaser":
/*!*************************!*\
  !*** external "phaser" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_phaser__;

/***/ })

/******/ });
});
//# sourceMappingURL=the-darkest-lib.js.map