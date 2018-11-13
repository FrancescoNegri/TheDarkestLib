(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("TDLib", [], factory);
	else if(typeof exports === 'object')
		exports["TDLib"] = factory();
	else
		root["TDLib"] = factory();
})(window, function() {
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

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _const = _interopRequireDefault(__webpack_require__(/*! ./const */ "./src/const.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @namespace TDLib
 */
var TDLib = {
  Actions: __webpack_require__(/*! ./actions */ "./src/actions/index.js"),
  Components: __webpack_require__(/*! ./components */ "./src/components/index.js"),
  Game: __webpack_require__(/*! ./boot/Game */ "./src/boot/Game.js"),
  Managers: __webpack_require__(/*! ./managers */ "./src/managers/index.js"),
  Rooms: __webpack_require__(/*! ./rooms */ "./src/rooms/index.js"),
  Sprites: __webpack_require__(/*! ./sprites */ "./src/sprites/index.js"),
  Systems: __webpack_require__(/*! ./systems */ "./src/systems/index.js"),
  Utils: __webpack_require__(/*! ./utils */ "./src/utils/index.js")
};
TDLib = Phaser.Utils.Objects.Extend(false, TDLib, _const.default);
module.exports = TDLib;
global.TDLib = TDLib;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/actions/Action.js":
/*!*******************************!*\
  !*** ./src/actions/Action.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Class representing a TDLAction.
 * @memberof TDLib.Components.Actions
 * @since 1.0.0
 */
var Action =
/*#__PURE__*/
function () {
  /**
   * Start a new TDLAction.
   * @param {TDLib.Components.ActionComponent|TDLib.Components.Actions.TDLAction} invoker - The invoker of the action.
   * @param {TDLSprite} actor - The actor who performs the action.
   * @param {Object} config - The config object for the action.
   * @param {Object} config.target - The target of the action.
   * @param {number} config.target.x - The x of the target of the action.
   */
  function Action(invoker, actor) {
    var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, Action);

    /**
     * The invoker of the action.
     * @type {TDLib.Components.ActionComponent|TDLib.Components.Actions.TDLAction}
     * @since 1.0.0
     */
    this.invoker = invoker;
    /**
     * The name of the action.
     * @type {string}
     * @since 1.0.0
     */

    this.name = this.constructor.name;
    /**
     * The actor who performs the action.
     * @type {TDLib.Sprites.TDLSprite}
     * @since 1.0.0
     */

    this.actor = actor;
    /**
     * The target of the action.
     * @type {Object|TDLib.Sprites.TDLSprite}
     * @since 1.0.0
     */

    this.target = config.target;
    /**
     * The config object for the action.
     * @type {Object}
     * @since 1.0.0
     */

    this.config = config;
    /**
     * The queue of actions.
     * @type {Array}
     * @private
     * @since 1.0.0
     */

    this._queue = [];
    /**
     * Tells if the action has been paused.
     * @type {boolean}
     * @since 1.0.0
     */

    this.isPaused = false;
  }
  /**
   * Add one or more new actions to the queue.
   * @param {TDLib.Components.Actions.TDLAction|TDLib.Components.Actions.TDLAction[]|TDLib.Components.Actions.TDLAction.BaseAction|TDLib.Components.Actions.TDLAction.BaseAction[]} actions - The new actions to add.
   * @since 1.0.0
   */


  _createClass(Action, [{
    key: "addActions",
    value: function addActions(actions) {
      var _this = this;

      if (Array.isArray(actions)) {
        actions.forEach(function (action) {
          _this._queue.push(action);
        });
      } else this._queue.push(actions);
    }
    /**
     * The blank action to create new composed and complex actions.
     * @typedef {TDLib.Components.Actions.TDLAction.BaseAction}
     *
     * @property {TDLib.Components.ActionComponent|TDLib.Components.Actions.TDLAction} invoker - The invoker of the action.
     * @property {Function} startCallback - The callback to execute at the beginning of the action.
     * @property {Function} [finishCallback] - The callback to execute at the end of the action.
     * @property {Function} [updateCallback]  - The callback to execute at every update loop.
     * @property {Function} [resumeCallback=startCallback] - The callback to execute when the action is paused.
     * @property {Function} [pauseCallback=finishCallback]  - The callback to execute when the action is resumed.
     * @since 1.0.0
     */

  }, {
    key: "abort",

    /**
     * Abort an uncompleted action.
     * @private
     * @since 1.0.0
     */
    value: function abort() {
      if (this._queue.length > 0) this._queue[0].abort();
    }
    /**
     * Start an action.
     * @private
     * @since 1.0.0
     */

  }, {
    key: "start",
    value: function start() {
      if (this._queue.length > 0) this._queue[0].start();
    }
    /**
     * Finish a completed action.
     * @private
     * @since 1.0.0
     */

  }, {
    key: "finish",
    value: function finish() {
      if (this._queue.length > 0) this._queue[0].finish();
    }
    /**
     * Remove a completed action from the queue.
     * @private
     * @since 1.0.0
     */

  }, {
    key: "remove",
    value: function remove() {
      if (this._queue.length > 0) this._queue.shift();
      if (this._queue.length <= 0) this.invoker.remove();else this._queue[0].start();
    }
    /**
     * Pause an action.
     * @private
     * @since 1.0.0
     */

  }, {
    key: "pause",
    value: function pause() {
      if (this._queue.length > 0) {
        this._queue[0].pause();

        this.isPaused = true;
      }
    }
    /**
     * Resume a paused action.
     * @private
     * @since 1.0.0
     */

  }, {
    key: "resume",
    value: function resume() {
      if (this._queue.length > 0) {
        this.isPaused = false;

        this._queue[0].resume();
      }
    }
    /**
     * Update the currently performed action.
     * @private
     * @since 1.0.0
     */

  }, {
    key: "update",
    value: function update() {
      if (this._queue.length > 0) this._queue[0].update();
    }
  }], [{
    key: "BaseAction",
    get: function get() {
      return (
        /*#__PURE__*/
        function () {
          function BaseAction(invoker, startCallback) {
            var finishCallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
            var updateCallback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};
            var resumeCallback = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : startCallback;
            var pauseCallback = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : finishCallback;

            _classCallCheck(this, BaseAction);

            this.invoker = invoker;
            this.startCallback = startCallback;
            this.finishCallback = finishCallback;
            this.updateCallback = updateCallback;
            this.resumeCallback = resumeCallback;
            this.pauseCallback = pauseCallback;
            this.isPaused = false;
          }

          _createClass(BaseAction, [{
            key: "start",
            value: function start() {
              this.startCallback();
            }
          }, {
            key: "finish",
            value: function finish() {
              this.finishCallback();
              this.invoker.remove();
            }
          }, {
            key: "abort",
            value: function abort() {
              this.finishCallback();
            }
          }, {
            key: "resume",
            value: function resume() {
              this.isPaused = false;
              this.resumeCallback();
            }
          }, {
            key: "pause",
            value: function pause() {
              this.pauseCallback();
              this.isPaused = true;
            }
          }, {
            key: "update",
            value: function update() {
              this.updateCallback();
            }
          }]);

          return BaseAction;
        }()
      );
    }
  }]);

  return Action;
}();

exports.default = Action;
module.exports = exports["default"];

/***/ }),

/***/ "./src/actions/Examine.js":
/*!********************************!*\
  !*** ./src/actions/Examine.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Action2 = _interopRequireDefault(__webpack_require__(/*! ./Action */ "./src/actions/Action.js"));

var _WalkTo = _interopRequireDefault(__webpack_require__(/*! ./WalkTo */ "./src/actions/WalkTo.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Examine =
/*#__PURE__*/
function (_Action) {
  _inherits(Examine, _Action);

  function Examine(invoker, actor, config) {
    var _this;

    _classCallCheck(this, Examine);

    _this = _possibleConstructorReturn(this, (Examine.__proto__ || Object.getPrototypeOf(Examine)).apply(this, arguments));

    _this.addActions([new _WalkTo.default(_this, _this.actor, _this.config), _this.target.behaviour.examine.getAction(_this)]);

    return _this;
  }

  return Examine;
}(_Action2.default);

exports.default = Examine;
module.exports = exports["default"];

/***/ }),

/***/ "./src/actions/FaceTo.js":
/*!*******************************!*\
  !*** ./src/actions/FaceTo.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Action2 = _interopRequireDefault(__webpack_require__(/*! ./Action */ "./src/actions/Action.js"));

var _const = _interopRequireDefault(__webpack_require__(/*! ../const */ "./src/const.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var FaceTo =
/*#__PURE__*/
function (_Action) {
  _inherits(FaceTo, _Action);

  function FaceTo(invoker, actor, config) {
    var _this;

    _classCallCheck(this, FaceTo);

    _this = _possibleConstructorReturn(this, (FaceTo.__proto__ || Object.getPrototypeOf(FaceTo)).apply(this, arguments));

    _this.addActions(new _Action2.default.BaseAction(_this, function () {
      if (Math.abs(_this.actor.x - _this.target.x) > FaceTo.MICRO_MOVEMENT_RADIUS) {
        if (_this.actor.facing === _const.default.RIGHT) {
          if (_this.actor.x > _this.target.x) {
            _this.actor.facing = _const.default.LEFT;

            _this.actor.setFlipX(true); // this.actor.anims.play('idleLeft');

          }
        } else if (_this.actor.facing === _const.default.LEFT) {
          if (_this.actor.x < _this.target.x) {
            _this.actor.facing = _const.default.RIGHT;

            _this.actor.setFlipX(false); // this.actor.anims.play('idleRight');

          }
        }
      }

      _this.finish();
    }));

    return _this;
  }

  _createClass(FaceTo, null, [{
    key: "MICRO_MOVEMENT_RADIUS",
    get: function get() {
      return 6;
    }
  }]);

  return FaceTo;
}(_Action2.default);

exports.default = FaceTo;
module.exports = exports["default"];

/***/ }),

/***/ "./src/actions/Idle.js":
/*!*****************************!*\
  !*** ./src/actions/Idle.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Action2 = _interopRequireDefault(__webpack_require__(/*! ./Action */ "./src/actions/Action.js"));

var _const = _interopRequireDefault(__webpack_require__(/*! ../const */ "./src/const.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Class representing the idle action.
 * @extends TDLib.Components.Actions.Action
 * @memberof TDLib.Components.Actions
 */
var Idle =
/*#__PURE__*/
function (_Action) {
  _inherits(Idle, _Action);

  /**
   * Start a new idle action.
   * @param {Components.ActionComponent|Components.Actions.TDLAction} invoker - The invoker of the action.
   * @param {TDLSprite} actor - The actor who performs the action.
   * @param {Object} config - The config object for the action.
   * @param {Object} config.target - The target of the action.
   * @param {number} config.target.x - The x of the target of the action.
   */
  function Idle(invoker, actor, config) {
    var _this;

    _classCallCheck(this, Idle);

    _this = _possibleConstructorReturn(this, (Idle.__proto__ || Object.getPrototypeOf(Idle)).apply(this, arguments));

    _this.addActions(new _Action2.default.BaseAction(_this, function () {
      _this.actor.body.setVelocity(0);

      switch (_this.actor.facing) {
        case _const.default.LEFT:
          {
            _this.actor.anims.play('idle'); // this.actor.anims.play('idleLeft');

          }
          break;

        case _const.default.RIGHT:
          {
            _this.actor.anims.play('idle'); // this.actor.anims.play('idleRight');

          }
          break;
        // possibili altri casi di facing (es girato di spalle o da davanti)
      }
    }));

    return _this;
  }

  return Idle;
}(_Action2.default);

exports.default = Idle;
module.exports = exports["default"];

/***/ }),

/***/ "./src/actions/Interact.js":
/*!*********************************!*\
  !*** ./src/actions/Interact.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Action2 = _interopRequireDefault(__webpack_require__(/*! ./Action */ "./src/actions/Action.js"));

var _WalkTo = _interopRequireDefault(__webpack_require__(/*! ./WalkTo */ "./src/actions/WalkTo.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Interact =
/*#__PURE__*/
function (_Action) {
  _inherits(Interact, _Action);

  function Interact(invoker, actor, config) {
    var _this;

    _classCallCheck(this, Interact);

    _this = _possibleConstructorReturn(this, (Interact.__proto__ || Object.getPrototypeOf(Interact)).apply(this, arguments));

    _this.addActions([new _WalkTo.default(_this, _this.actor, _this.config), _this.target.behaviour.interact.getAction(_this)]);

    return _this;
  }

  return Interact;
}(_Action2.default);

exports.default = Interact;
module.exports = exports["default"];

/***/ }),

/***/ "./src/actions/Observe.js":
/*!********************************!*\
  !*** ./src/actions/Observe.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Action2 = _interopRequireDefault(__webpack_require__(/*! ./Action */ "./src/actions/Action.js"));

var _FaceTo = _interopRequireDefault(__webpack_require__(/*! ./FaceTo */ "./src/actions/FaceTo.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Observe =
/*#__PURE__*/
function (_Action) {
  _inherits(Observe, _Action);

  function Observe(invoker, actor, config) {
    var _this;

    _classCallCheck(this, Observe);

    _this = _possibleConstructorReturn(this, (Observe.__proto__ || Object.getPrototypeOf(Observe)).apply(this, arguments));

    _this.addActions([new _FaceTo.default(_this, _this.actor, _this.config), _this.target.behaviour.observe.getAction(_this)]);

    return _this;
  }

  return Observe;
}(_Action2.default);

exports.default = Observe;
module.exports = exports["default"];

/***/ }),

/***/ "./src/actions/RunTo.js":
/*!******************************!*\
  !*** ./src/actions/RunTo.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Action2 = _interopRequireDefault(__webpack_require__(/*! ./Action */ "./src/actions/Action.js"));

var _FaceTo = _interopRequireDefault(__webpack_require__(/*! ./FaceTo */ "./src/actions/FaceTo.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// da cambiare e mettere tutta dentro l'AWalkTo e fare un Move to che distingua che azioni chiamare?
var RunTo =
/*#__PURE__*/
function (_Action) {
  _inherits(RunTo, _Action);

  function RunTo(invoker, actor, config) {
    var _this;

    _classCallCheck(this, RunTo);

    _this = _possibleConstructorReturn(this, (RunTo.__proto__ || Object.getPrototypeOf(RunTo)).apply(this, arguments));

    _this.addActions([new _FaceTo.default(_this, _this.actor, _this.config), new _Action2.default.BaseAction(_this, function () {
      if (Math.abs(_this.actor.x - _this.target.x) > RunTo.MICRO_MOVEMENT_RADIUS) {
        if (_this.actor.x < _this.target.x) {
          _this.actor.anims.play('run'); // this.actor.anims.play('runRight');


          _this.actor.body.setVelocity(RunTo.RUN_VELOCITY);
        } else if (_this.actor.x > _this.target.x) {
          _this.actor.anims.play('run'); // this.actor.anims.play('runLeft');


          _this.actor.body.setVelocity(-RunTo.RUN_VELOCITY);
        }

        console.log('start to run to ', config.target.x);
      } else {
        _this.finish();
      }
    }, function () {
      _this.actor.body.setVelocity(0);
    }, function () {
      if ((_this.actor.x - _this.target.x) * _this.actor.body.velocity.x > 0) _this.finish();
    })]);

    return _this;
  }

  _createClass(RunTo, null, [{
    key: "RUN_VELOCITY",
    get: function get() {
      return 240;
    }
  }, {
    key: "MICRO_MOVEMENT_RADIUS",
    get: function get() {
      return 20;
    }
  }]);

  return RunTo;
}(_Action2.default);

exports.default = RunTo;
module.exports = exports["default"];

/***/ }),

/***/ "./src/actions/WalkTo.js":
/*!*******************************!*\
  !*** ./src/actions/WalkTo.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Action2 = _interopRequireDefault(__webpack_require__(/*! ./Action */ "./src/actions/Action.js"));

var _FaceTo = _interopRequireDefault(__webpack_require__(/*! ./FaceTo */ "./src/actions/FaceTo.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var WalkTo =
/*#__PURE__*/
function (_Action) {
  _inherits(WalkTo, _Action);

  function WalkTo(invoker, actor, config) {
    var _this;

    _classCallCheck(this, WalkTo);

    _this = _possibleConstructorReturn(this, (WalkTo.__proto__ || Object.getPrototypeOf(WalkTo)).apply(this, arguments));

    _this.addActions([new _FaceTo.default(_this, _this.actor, _this.config), new _Action2.default.BaseAction(_this, function () {
      if (Math.abs(_this.actor.x - _this.target.x) > WalkTo.MICRO_MOVEMENT_RADIUS) {
        if (_this.actor.x < _this.target.x) {
          _this.actor.anims.play('walk'); // this.actor.anims.play('walkRight');


          _this.actor.body.setVelocity(WalkTo.WALK_VELOCITY);
        } else if (_this.actor.x > _this.target.x) {
          _this.actor.anims.play('walk'); // this.actor.anims.play('walkLeft');


          _this.actor.body.setVelocity(-WalkTo.WALK_VELOCITY);
        }
      } else {
        _this.finish();
      }
    }, function () {
      _this.actor.body.setVelocity(0);
    }, function () {
      if ((_this.actor.x - _this.target.x) * _this.actor.body.velocity.x > 0) _this.finish();
    })]);

    return _this;
  }

  _createClass(WalkTo, null, [{
    key: "WALK_VELOCITY",
    get: function get() {
      return 120;
    }
  }, {
    key: "MICRO_MOVEMENT_RADIUS",
    get: function get() {
      return 20;
    }
  }]);

  return WalkTo;
}(_Action2.default);

exports.default = WalkTo;
module.exports = exports["default"];

/***/ }),

/***/ "./src/actions/index.js":
/*!******************************!*\
  !*** ./src/actions/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Actions = {
  Action: __webpack_require__(/*! ./Action */ "./src/actions/Action.js"),
  Examine: __webpack_require__(/*! ./Examine */ "./src/actions/Examine.js"),
  FaceTo: __webpack_require__(/*! ./FaceTo */ "./src/actions/FaceTo.js"),
  Idle: __webpack_require__(/*! ./Idle */ "./src/actions/Idle.js"),
  Interact: __webpack_require__(/*! ./Interact */ "./src/actions/Interact.js"),
  Observe: __webpack_require__(/*! ./Observe */ "./src/actions/Observe.js"),
  RunTo: __webpack_require__(/*! ./RunTo */ "./src/actions/RunTo.js"),
  WalkTo: __webpack_require__(/*! ./WalkTo */ "./src/actions/WalkTo.js")
};
module.exports = Actions;

/***/ }),

/***/ "./src/boot/DebugHeader.js":
/*!*********************************!*\
  !*** ./src/boot/DebugHeader.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var CONST = __webpack_require__(/*! ../const */ "./src/const.js");

var Settings = __webpack_require__(/*! ./Settings */ "./src/boot/Settings.js");
/**
 * Called automatically by Phaser.Game and responsible for creating the console.log debug header.
 *
 * You can customize or disable the header via the Game Config object.
 *
 * @function Phaser.Boot.DebugHeader
 * @since 3.0.0
 *
 * @param {Phaser.Game} game - The Phaser.Game instance which will output this debug header.
 */


var DebugHeader = function DebugHeader(game) {
  var config = game.config;
  config.bannerBackgroundColor = '#0002e6';
  config.bannerTextColor = '#ffffff';
  config.hidePhaser = false;
  var renderType = 'WebGL';

  if (config.renderType !== 2) {
    renderType = 'NULL';
  }

  var audioConfig = config.audio;
  var deviceAudio = game.device.audio;
  var audioType;

  if (deviceAudio.webAudio && !(audioConfig && audioConfig.disableWebAudio)) {
    audioType = 'Web Audio';
  } else if (audioConfig && audioConfig.noAudio || !deviceAudio.webAudio && !deviceAudio.audioData) {
    audioType = 'No Audio';
  } else {
    audioType = 'HTML5 Audio';
  }

  if (!game.device.browser.ie) {
    var c = '';
    var args = [c];

    if (Array.isArray(config.bannerBackgroundColor)) {
      var lastColor;
      config.bannerBackgroundColor.forEach(function (color) {
        c = c.concat('%c ');
        args.push('background: ' + color);
        lastColor = color;
      }); //  inject the text color

      args[args.length - 1] = 'color: ' + config.bannerTextColor + '; background: ' + lastColor;
    } else {
      c = c.concat('%c ');
      args.push('color: ' + config.bannerTextColor + '; background: ' + config.bannerBackgroundColor);
    } //  URL link background color (always white)


    args.push('background: #fff');

    if (config.gameTitle) {
      c = c.concat(config.gameTitle);

      if (config.gameVersion) {
        c = c.concat(' v' + config.gameVersion);
      }

      if (!config.hidePhaser) {
        c = c.concat(' / ');
      }
    }

    if (!config.hidePhaser) {
      c = c.concat('TDLib v' + CONST.VERSION + ' / Phaser v' + CONST.PHASER_VERSION);
      c = c.concat(' (' + renderType + ' | ' + audioType + ' | ' + Settings.DEVICE + ')');
    }

    c = c.concat(' %c ' + config.gameURL); //  Inject the new string back into the args array

    args[0] = c;
    console.log.apply(console, args);
  }
};

module.exports = DebugHeader;

/***/ }),

/***/ "./src/boot/Game.js":
/*!**************************!*\
  !*** ./src/boot/Game.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Settings = _interopRequireDefault(__webpack_require__(/*! ./Settings */ "./src/boot/Settings.js"));

var _DebugHeader = _interopRequireDefault(__webpack_require__(/*! ./DebugHeader */ "./src/boot/DebugHeader.js"));

var _utils = _interopRequireDefault(__webpack_require__(/*! ../utils */ "./src/utils/index.js"));

var _managers = _interopRequireDefault(__webpack_require__(/*! ../managers */ "./src/managers/index.js"));

var _systems = _interopRequireDefault(__webpack_require__(/*! ../systems */ "./src/systems/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Game =
/*#__PURE__*/
function () {
  function Game(config) {
    _classCallCheck(this, Game);

    this.config = config;

    this._setScreenConfig();

    this._setPhysicsConfig();

    this._setPlugins();

    this._setBoot();

    this._setHeaderProps();

    this._finalizeConfig(); // Aggiungere il device e la funzione per determinarlo


    _Settings.default.GAME = new Phaser.Game(this.config);
    (0, _DebugHeader.default)(_Settings.default.GAME);
    return _Settings.default.GAME;
  }

  _createClass(Game, [{
    key: "_setScreenConfig",
    value: function _setScreenConfig() {
      _Settings.default.SCREEN_PROPS = _utils.default.getScreenProps();
      this.config.width = _Settings.default.SCREEN_PROPS.calculatedWidth;
      this.config.height = _Settings.default.SCREEN_PROPS.calculatedHeight;
      this.config.zoom = _Settings.default.SCREEN_PROPS.calculatedZoom;
      this.config.autoResize = false;
      this.config.backgroundColor = '#000000';
      this.config.pixelArt = true;
    }
  }, {
    key: "_setPhysicsConfig",
    value: function _setPhysicsConfig() {
      this.config.physics = {
        default: 'arcade',
        arcade: {
          debug: false,
          gravity: {
            y: 0,
            x: 0
          }
        }
      };
    }
  }, {
    key: "_setPlugins",
    value: function _setPlugins() {
      this.config.plugins = {
        global: [{
          key: 'RoomSystem',
          plugin: _systems.default.RoomSystem,
          start: false,
          mapping: 'rooms'
        }, {
          key: 'CursorSystem',
          plugin: _systems.default.CursorSystem,
          start: false,
          mapping: 'cursors'
        }],
        scene: [{
          key: 'UpdateManager',
          plugin: _managers.default.UpdateManager,
          mapping: 'updates'
        }, {
          key: 'LightSourceManager',
          plugin: _managers.default.LightSourceManager,
          mapping: 'lightSources'
        }, {
          key: 'LayerManager',
          plugin: _managers.default.LayerManager,
          mapping: 'layers' // { key: 'ActionManager', plugin: ActionManager, mapping: 'actions' }

        }]
      };
    }
  }, {
    key: "_setBoot",
    value: function _setBoot() {
      this.config.scene = [Boot];
    }
  }, {
    key: "_setHeaderProps",
    value: function _setHeaderProps() {
      this.config.banner = false;
    }
  }, {
    key: "_finalizeConfig",
    value: function _finalizeConfig() {
      this.config.type = Phaser.WEBGL;
      this.config.maxLights = 20;
      this.config.parent = 'game';
      this.config.disableContextMenu = true;
    }
  }]);

  return Game;
}();

exports.default = Game;
module.exports = exports["default"];

/***/ }),

/***/ "./src/boot/Settings.js":
/*!******************************!*\
  !*** ./src/boot/Settings.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

var Settings = {
  GAME: '',
  TILE_SIZE: 48,
  ROOM_HEIGHT_IN_TILE: 6,
  INVENTORY_WIDTH_IN_TILES_MOBILE: 1.25,
  INVENTORY_WIDTH_IN_TILES_DESKTOP: 0,
  INVENTORY_HEIGHT_IN_TILES_MOBILE: 0,
  INVENTORY_HEIGHT_IN_TILES_DESKTOP: 1,
  ROOM_FRAME_IN_TILES_DESKTOP: 0.5,
  ROOM_FRAME_IN_TILES_MOBILE: 0.25,
  SCREEN_PROPS: {},
  DEVICE: 'Desktop'
};
module.exports = Settings;

/***/ }),

/***/ "./src/components/ActionComponent.js":
/*!*******************************************!*\
  !*** ./src/components/ActionComponent.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Component2 = _interopRequireDefault(__webpack_require__(/*! ./Component */ "./src/components/Component.js"));

var _actions = _interopRequireDefault(__webpack_require__(/*! ../actions */ "./src/actions/index.js"));

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
 * The actions namespace.
 * @namespace TDLib.Components.Actions
 * @since 1.0.0
 */

/**
 * Class representing a component responsible of every TDLAction preformed.
 * @extends TDLib.Components.TDLComponent
 * @memberof TDLib.Components
 * @since 1.0.0
 */
var ActionComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(ActionComponent, _Component);

  /**
   * Create an ActionComponent.
   * @param {TDLib.Sprites.TDLSprite} actor - The performer of the action.
   */
  function ActionComponent(actor) {
    var _this;

    _classCallCheck(this, ActionComponent);

    _this = _possibleConstructorReturn(this, (ActionComponent.__proto__ || Object.getPrototypeOf(ActionComponent)).call(this, actor));
    /**
     * The performer of the action.
     * @type {TDLib.Sprites.TDLSprite}
     * @since 1.0.0
     */

    _this.actor = actor;
    /**
     * The default action to be played.
     * @type {TDLib.Components.Actions.TDLAction}
     * @since 1.0.0
     */

    _this.defaultAction = new _actions.default.Idle(_this, _this.actor);
    /**
     * The queue of actions.
     * @type {Array}
     * @private
     * @since 1.0.0
     */

    _this._queue = [_this.defaultAction];

    _this._queue[0].start();

    return _this;
  }
  /**
   * The queue is emptied and the new action is immediately performed.
   * @since 1.0.0
   */


  _createClass(ActionComponent, [{
    key: "add",

    /**
     * Start a new action or add that to the queue.
     * @param {TDLib.Components.Actions.TDLAction} action - The action to add or execute.
     * @param {Object} config - The config object for the action.
     * @param {Object} config.target - The target of the action.
     * @param {number} config.target.x - The x of the target of the action.
     * @param {number} [mode=ActionComponent.DEFAULT_MODE] - The mode to execute the action: ActionComponent.DEFAULT_MODE, ActionComponent.QUEUE_MODE or ActionComponent.PAUSE_MODE.
     * @since 1.0.0
     */
    value: function add(Action, config) {
      var mode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ActionComponent.DEFAULT_MODE;
      var newAction = new Action(this, this.actor, config);

      switch (mode) {
        case ActionComponent.DEFAULT_MODE:
          {
            this._queue[0].abort();

            this._queue = [];

            this._queue.push(newAction);

            this._queue[0].start();
          }
          ;
          break;

        case ActionComponent.QUEUE_MODE:
          {
            this._queue.push(newAction);
          }
          ;
          break;

        case ActionComponent.PAUSE_MODE:
          {
            this._queue[0].pause();

            this._queue.unshift(newAction);

            this._queue[0].start();
          }
          ;
          break;
      }

      return newAction;
    }
    /**
     * Remove a completed action from the queue.
     * @private
     * @since 1.0.0
     */

  }, {
    key: "remove",
    value: function remove() {
      this._queue.shift();

      if (this._queue.length <= 0) this._queue.push(this.defaultAction);
      if (this._queue[0].isPaused) this._queue[0].resume();else this._queue[0].start();
    }
    /**
     * Update the currently performed action.
     * @private
     * @since 1.0.0
     */

  }, {
    key: "update",
    value: function update() {
      if (this._queue.length <= 0) this._queue.push(this.defaultAction);else if (this._queue.length > 1 && this._queue[0].name === 'Idle') {
        this._queue.shift();

        if (this._queue[0].isPaused) this._queue[0].resume();else this._queue[0].start();
      }

      this._queue[0].update();
    }
  }], [{
    key: "DEFAULT_MODE",
    get: function get() {
      return 0;
    }
    /**
     * The new action is added to the queue.
     * @since 1.0.0
     */

  }, {
    key: "QUEUE_MODE",
    get: function get() {
      return 1;
    }
    /**
     * The currently performed action is paused and the new action is immediately performed. Then the paused action is resumed.
     * @since 1.0.0
     */

  }, {
    key: "PAUSE_MODE",
    get: function get() {
      return 2;
    }
  }]);

  return ActionComponent;
}(_Component2.default);

exports.default = ActionComponent;
module.exports = exports["default"];

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
  Component: __webpack_require__(/*! ./Component */ "./src/components/Component.js"),
  ActionComponent: __webpack_require__(/*! ./ActionComponent */ "./src/components/ActionComponent.js")
};
module.exports = Components;

/***/ }),

/***/ "./src/const.js":
/*!**********************!*\
  !*** ./src/const.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

var CONST = {
  VERSION: '1.0.0',
  PHASER_VERSION: '3.15.1',
  LEFT: '_left',
  RIGHT: '_right'
};
module.exports = CONST;

/***/ }),

/***/ "./src/managers/TDLManager.js":
/*!************************************!*\
  !*** ./src/managers/TDLManager.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * The plugins namespace.
 * @namespace TDLib.Plugins
 * @since 1.0.0
 */

/**
 * The global plugins namespace.
 * @namespace TDLib.Plugins.GlobalPlugins
 * @since 1.0.0
 */

/**
 * The room plugins namespace.
 * @namespace TDLib.Plugins.RoomPlugins
 * @since 1.0.0
 */

/**
 * Class representing a plugin which manages a room.
 * @extends Phaser.Plugins.ScenePlugin
 * @memberof TDLib.Plugins
 * @since 1.0.0
 */
var TDLManager =
/*#__PURE__*/
function (_Phaser$Plugins$Scene) {
  _inherits(TDLManager, _Phaser$Plugins$Scene);

  /**
   * Create a TDLRoomPlugin.
   * @param {TDLib.Rooms.Room|Phaser.Scene} room - The room which contains the plugin.
   * @param {Phaser.Plugins.PluginManager} pluginManager - A reference to the plugin manager.
   */
  function TDLManager(room, pluginManager) {
    var _this;

    _classCallCheck(this, TDLManager);

    _this = _possibleConstructorReturn(this, (TDLManager.__proto__ || Object.getPrototypeOf(TDLManager)).call(this, room, pluginManager));
    /**
     * The room containing this plugin.
     * @type {TDLib.Rooms.Room}
     * @since 1.0.0
     */

    _this.room = room;
    return _this;
  }

  return TDLManager;
}(Phaser.Plugins.ScenePlugin);

exports.default = TDLManager;
module.exports = exports["default"];

/***/ }),

/***/ "./src/managers/index.js":
/*!*******************************!*\
  !*** ./src/managers/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Managers = {
  LayerManager: __webpack_require__(/*! ./layers/LayerManager */ "./src/managers/layers/LayerManager.js"),
  LightSourceManager: __webpack_require__(/*! ./light-sources/LightSourceManager */ "./src/managers/light-sources/LightSourceManager.js"),
  TDLManager: __webpack_require__(/*! ./TDLManager */ "./src/managers/TDLManager.js"),
  UpdateManager: __webpack_require__(/*! ./updates/UpdateManager */ "./src/managers/updates/UpdateManager.js")
};
module.exports = Managers;

/***/ }),

/***/ "./src/managers/layers/LayerManager.js":
/*!*********************************************!*\
  !*** ./src/managers/layers/LayerManager.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _TDLManager2 = _interopRequireDefault(__webpack_require__(/*! ../TDLManager */ "./src/managers/TDLManager.js"));

var _Settings = _interopRequireDefault(__webpack_require__(/*! ./Settings */ "./src/managers/layers/Settings.js"));

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
 * Class representing the manager of the layers in every room.
 * @extends TDLib.Plugins.TDLRoomPlugin
 * @memberof TDLib.Plugins.RoomPlugins
 * @since 1.0.0
 */
var LayerManager =
/*#__PURE__*/
function (_TDLManager) {
  _inherits(LayerManager, _TDLManager);

  /**
   * Create a new RoomManager.
   * @param {TDLib.Rooms.Room} room - The room in which the layer manager operates.
   * @param {Phaser.Plugins.PluginManager} pluginManager - A reference to the plugin manager.
   */
  function LayerManager(room, pluginManager) {
    var _this;

    _classCallCheck(this, LayerManager);

    _this = _possibleConstructorReturn(this, (LayerManager.__proto__ || Object.getPrototypeOf(LayerManager)).call(this, room, pluginManager));
    /**
     * The size in cells of each layer.
     * @type {number}
     * @since 1.0.0
     */

    _this.layerSize = _Settings.default.layerSize;
    /**
     * The starting depth of layers.
     * @type {number}
     * @since 1.0.0
     */

    _this.strartingDepth = _Settings.default.startingDepth;
    return _this;
  }
  /**
   * Boot all the layers in the correct order.
   * @since 1.0.0
   */


  _createClass(LayerManager, [{
    key: "boot",
    value: function boot() {
      /**
       * The layer containing the background wall.
       * @type {Phaser.GameObjects.Group}
       * @since 1.0.0
       */
      this.backgroundLayer = this.room.add.group();
      /**
       * The layer containing the rear doors.
       * @type {Phaser.GameObjects.Group}
       * @since 1.0.0
       */

      this.rearDoorsLayer = this.room.add.group();
      /**
       * The layer containing the objects fixed to the background wall.
       * @type {Phaser.GameObjects.Group}
       * @since 1.0.0
       */

      this.wallFurnitureLayer = this.room.add.group();
      /**
       * The layer containing the objects in the room.
       * @type {Phaser.GameObjects.Group}
       * @since 1.0.0
       */

      this.roomFurnitureLayer = this.room.add.group();
      /**
       * The layer containing the side doors.
       * @type {Phaser.GameObjects.Group}
       * @since 1.0.0
       */

      this.sideDoorsLayer = this.room.add.group();
      /**
       * The layer containing the NPCs.
       * @type {Phaser.GameObjects.Group}
       * @since 1.0.0
       */

      this.npcLayer = this.room.add.group();
      /**
       * The layer containing the player.
       * @type {Phaser.GameObjects.Group}
       * @since 1.0.0
       */

      this.playerLayer = this.room.add.group();
      /**
       * The layer containing the cieling objects from the roof.
       * @type {Phaser.GameObjects.Group}
       * @since 1.0.0
       */

      this.cielingObjectsLayer = this.room.add.group();
      /**
       * The layer containing the front doors.
       * @type {Phaser.GameObjects.Group}
       * @since 1.0.0
       */

      this.frontDoorsLayer = this.room.add.group();
      /**
       * The layer containing the lateral walls.
       * @type {Phaser.GameObjects.Group}
       * @since 1.0.0
       */

      this.wallsLayer = this.room.add.group();
      /**
       * The layer containing the lateral walls black mask.
       * @type {Phaser.GameObjects.Group}
       * @since 1.0.0
       */

      this.wallsMaskLayer = this.room.add.group();
      /**
       * The layer containing the overall darkness mask.
       * @type {Phaser.GameObjects.Group}
       * @since 1.0.0
       */

      this.overallDarknessLayer = this.room.add.group();
      /**
       * The layer containing the border black masks.
       * @type {Phaser.GameObjects.Group}
       * @since 1.0.0
       */

      this.borderMasksLayer = this.room.add.group();
    }
    /**
     * Set the correct depth for each layer in the right order.
     * @since 1.0.0
     */

  }, {
    key: "setLayersDepth",
    value: function setLayersDepth() {
      var i = this.strartingDepth;
      this.backgroundLayer.setDepth(this.layerSize * i);
      i++;
      this.rearDoorsLayer.setDepth(this.layerSize * i);
      i++;
      this.wallFurnitureLayer.setDepth(this.layerSize * i);
      i++;
      this.roomFurnitureLayer.setDepth(this.layerSize * i);
      i++;
      this.sideDoorsLayer.setDepth(this.layerSize * i);
      i++;
      this.npcLayer.setDepth(this.layerSize * i);
      i++;
      this.playerLayer.setDepth(this.layerSize * i);
      i++;
      this.cielingObjectsLayer.setDepth(this.layerSize * i);
      i++;
      this.frontDoorsLayer.setDepth(this.layerSize * i);
      i++;
      this.wallsLayer.setDepth(this.layerSize * i);
      i++;
      this.wallsMaskLayer.setDepth(this.layerSize * i);
      i++;
      this.overallDarknessLayer.setDepth(this.layerSize * i);
      i++;
      this.borderMasksLayer.setDepth(this.layerSize * i);
      i++;
    }
  }]);

  return LayerManager;
}(_TDLManager2.default);

exports.default = LayerManager;
module.exports = exports["default"];

/***/ }),

/***/ "./src/managers/layers/Settings.js":
/*!*****************************************!*\
  !*** ./src/managers/layers/Settings.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var Settings = {
  layerSize: 10,
  startingDepth: 0
};
module.exports = Settings;

/***/ }),

/***/ "./src/managers/light-sources/LightSourceManager.js":
/*!**********************************************************!*\
  !*** ./src/managers/light-sources/LightSourceManager.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _TDLManager2 = _interopRequireDefault(__webpack_require__(/*! ../TDLManager */ "./src/managers/TDLManager.js"));

var _Settings = _interopRequireDefault(__webpack_require__(/*! ../../boot/Settings */ "./src/boot/Settings.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var LightSourceManager =
/*#__PURE__*/
function (_TDLManager) {
  _inherits(LightSourceManager, _TDLManager);

  function LightSourceManager(room, pluginManager) {
    var _this;

    _classCallCheck(this, LightSourceManager);

    _this = _possibleConstructorReturn(this, (LightSourceManager.__proto__ || Object.getPrototypeOf(LightSourceManager)).call(this, room, pluginManager));
    _this.graphicLights = [];
    _this.diffusedLights = [];
    return _this;
  }

  _createClass(LightSourceManager, [{
    key: "boot",
    value: function boot() {
      this.lightSources = this.room.add.group();
    }
  }, {
    key: "add",
    value: function add(source) {
      this.lightSources.add(source, true);
      this.lightSources.getChildren().forEach(function (lightSource) {
        lightSource.setPipeline('Light2D');
      });
      return source;
    } // Le luci che flickerano o con comportamenti strani vanno contate?

  }, {
    key: "calculateLightsContribuitePoint",
    value: function calculateLightsContribuitePoint(target) {
      var singleLightContributeAccumulator = 0;
      this.lightSources.getChildren().forEach(function (light) {
        if (light.isOn) {
          var singleLightContribute = light.config.diffusedLight.intensity / (Math.abs(light.x + light.config.offset.x - target.x) ^ 2);

          if (light.lightBehaviour.runningBehaviour !== null) {
            singleLightContribute *= light.lightBehaviour.runningBehaviour.behaviourLightContributeFactor;
          }

          singleLightContributeAccumulator += singleLightContribute;
        }
      });
      return Math.floor(singleLightContributeAccumulator * 10000) / 1000;
    }
  }, {
    key: "calculateAverageLightsContribute",
    value: function calculateAverageLightsContribute() {
      var singleLightIntensityAccumulator = 0;
      this.diffusedLights.forEach(function (light) {
        singleLightIntensityAccumulator += light.intensity;
      });
      var averageLightsContribute = 0;
      if (singleLightIntensityAccumulator !== 0) averageLightsContribute = Math.floor(singleLightIntensityAccumulator * 10000 / this.room.layers.wallsLayer.width / _Settings.default.TILE_SIZE * 100) / 100 + 0.3;
      return averageLightsContribute;
    }
  }]);

  return LightSourceManager;
}(_TDLManager2.default);

exports.default = LightSourceManager;
module.exports = exports["default"];

/***/ }),

/***/ "./src/managers/updates/UpdateManager.js":
/*!***********************************************!*\
  !*** ./src/managers/updates/UpdateManager.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _TDLManager2 = _interopRequireDefault(__webpack_require__(/*! ../TDLManager */ "./src/managers/TDLManager.js"));

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
 * Class representing the update plugin.
 * @extends TDLib.Plugins.TDLRoomPlugin
 * @memberof TDLib.Plugins.RoomPlugins
 * @since 1.0.0
 */
var UpdateManager =
/*#__PURE__*/
function (_TDLManager) {
  _inherits(UpdateManager, _TDLManager);

  /**
   * Create a new UpdatePlugin.
   * @param {TDLib.Rooms.Room} room - The room in which the layer manager operates.
   * @param {Phaser.Plugins.PluginManager} pluginManager - A reference to the plugin manager.
   */
  function UpdateManager(room, pluginManager) {
    _classCallCheck(this, UpdateManager);

    return _possibleConstructorReturn(this, (UpdateManager.__proto__ || Object.getPrototypeOf(UpdateManager)).call(this, room, pluginManager));
  }
  /**
   * Boot the plugin.
   * @since 1.0.0
   */


  _createClass(UpdateManager, [{
    key: "boot",
    value: function boot() {
      var events = this.systems.events;
      this.gameObjects = new Phaser.Structs.Set();
      events.on('update', this._sceneUpdate, this);
      events.on('shutdown', this._sceneShutdown, this);
      events.once('destroy', this._sceneDestroy, this);
    }
    /**
     * Update every game object.
     * @param {*} time
     * @param {*} delta
     * @private
     * @since 1.0.0
     */

  }, {
    key: "_sceneUpdate",
    value: function _sceneUpdate(time, delta) {
      this.gameObjects.iterateLocal('update', time, delta);
    }
    /**
     * Called at the shutdown of the scene.
     * @private
     * @since 1.0.0
     */

  }, {
    key: "_sceneShutdown",
    value: function _sceneShutdown() {
      this.gameObjects.clear();
    }
    /**
     * Called when the scene is destroyed.
     * @private
     * @since 1.0.0
     */

  }, {
    key: "_sceneDestroy",
    value: function _sceneDestroy() {
      var events = this.systems.events;
      events.off('update', this._scenePostUpdate, this);
      events.off('shutdown', this._sceneShutdown, this);
      events.off('destroy', this._sceneDestroy, this);
      this.gameObjects = null;
      this.scene = null;
      this.systems = null;
    }
    /**
     * Add an object to the global update loop of the game.
     * @param {TDLib.Sprites.TDLSprite} obj - The object to add to the update loop.
     * @since 1.0.0
     */

  }, {
    key: "add",
    value: function add(obj) {
      obj.once('destroy', this.remove, this);
      this.gameObjects.set(obj);
    }
    /**
     * Add multiple objects to the global update loop of the game.
     * @param {TDLib.Sprites.TDLSprite[]} obj - The objects to add to the update loop.
     * @since 1.0.0
     */

  }, {
    key: "addMultiple",
    value: function addMultiple(objs) {
      objs.forEach(this.add, this);
    }
    /**
     * Remove an object from the global update loop of the game.
     * @param {TDLib.Sprites.TDLSprite} obj - The object to remove from the update loop.
     * @since 1.0.0
     */

  }, {
    key: "remove",
    value: function remove(obj) {
      obj.off('destroy', this.remove, this);
      this.gameObjects.delete(obj);
    }
  }]);

  return UpdateManager;
}(_TDLManager2.default);

exports.default = UpdateManager;
module.exports = exports["default"];

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

var _Settings = _interopRequireDefault(__webpack_require__(/*! ../boot/Settings */ "./src/boot/Settings.js"));

var _Utils = _interopRequireDefault(__webpack_require__(/*! ./Utils */ "./src/rooms/Utils.js"));

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
    var _this2;

    _classCallCheck(this, Room);

    _this2 = _possibleConstructorReturn(this, (Room.__proto__ || Object.getPrototypeOf(Room)).call(this, sceneKey));
    /**
       * This object contains an array with all the assets needed by the room.
       * @type {Object}
       * @since 1.0.0
       */

    _this2.assets = {
      raw: rawAssets,
      array: []
    };
    /**
       * The average contribute of light sources to the room.
       * @type {number}
       * @since 1.0.0
       */

    _this2.averageLightsContribute;
    /**
       * The Settings cursor manager.
       * @type {TDLib.Plugins.SettingsPlugins.CursorManager}
       * @since 1.0.0
       */

    _this2.cursors;
    /**
       * The layer manager of the room.
       * @type {TDLib.Plugins.RoomPlugins.LayerManager}
       * @since 1.0.0
       */

    _this2.layers;
    /**
       * The tilemap of the room.
       * @type {Phaser.Tilemaps.Tilemap}
       * @since 1.0.0
       */

    _this2.map;
    /**
       * The name of the room.
       * @type {string}
       * @since 1.0.0
       */

    _this2.name = _this2.constructor.name;
    /**
       * The instance of the TDLCharacter designated as player for the room.
       * @type {TDLib.Sprites.Characters.TDLCharacter}
       * @since 1.0.0
       */

    _this2.player;
    /**
       * The Settings room manager.
       * @type {TDLib.Plugins.SettingsPlugins.RoomManager}
       * @since 1.0.0
       */

    _this2.rooms;
    return _this2;
  }
  /**
   * The preload function is executed once and load all the assets needed by the room.
   * @since 1.0.0
   */


  _createClass(Room, [{
    key: "preload",
    value: function preload() {
      var _this3 = this;

      this._scrapeAssets();

      this.assets.array.forEach(function (obj) {
        if ('nPath' in obj) {
          _this3.load[obj.type](obj.key, [obj.path, obj.nPath]);
        } else if ('bPath' in obj) {
          _this3.load[obj.type](obj.key, obj.path);

          _this3.load[obj.type](obj.key + '_b', obj.bPath);
        } else {
          _this3.load[obj.type](obj.key, obj.path);
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
      var _this4 = this;

      for (var type in this.assets.raw) {
        _Utils.default.scrapeComplexObjKey(this.assets.raw[type], {
          type: type
        }, 'path', function (obj, params) {
          obj['type'] = params.type;
          obj['key'] = _Utils.default.findFileNameFromPath(obj.path);

          _this4.assets.array.push(obj);
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

      this.scene.bringToTop('CursorScene');

      this._setCameraViewport();

      this._createRoom();

      this._createSprites();

      this._applyBorderMasks();

      this.layers.setLayersDepth(); // Camera bounds, anche il wallsLayer

      this.cameras.main.setBounds(0, 0, this.layers.wallsLayer.width, this.layers.wallsLayer.height);
      this.cameras.main.startFollow(this.player);
      this.cameras.main.setRoundPixels(true); // Physics Bounds, sarà solo lo spazio di gioco (togliamo il wall layer tutto attorno!!)

      this.physics.world.setBounds(_Settings.default.TILE_SIZE, _Settings.default.TILE_SIZE, this.layers.wallsLayer.width - 2 * _Settings.default.TILE_SIZE, this.layers.wallsLayer.height - 2 * _Settings.default.TILE_SIZE);
    }
    /**
     * Set the correct camera viewport.
     * @private
     * @since 1.0.0
     */

  }, {
    key: "_setCameraViewport",
    value: function _setCameraViewport() {
      if (_Settings.default.DEVICE === 'MOBILE') {
        this.cameras.main.setPosition((_Settings.default.ROOM_FRAME_IN_TILES_MOBILE + _Settings.default.INVENTORY_WIDTH_IN_TILES_MOBILE) * _Settings.default.TILE_SIZE, (_Settings.default.ROOM_FRAME_IN_TILES_MOBILE + _Settings.default.INVENTORY_HEIGHT_IN_TILES_MOBILE) * _Settings.default.TILE_SIZE);
        this.cameras.main.setSize(_Settings.default.SCREEN_PROPS.calculatedWidth - 2 * (_Settings.default.ROOM_FRAME_IN_TILES_MOBILE + _Settings.default.INVENTORY_WIDTH_IN_TILES_MOBILE) * _Settings.default.TILE_SIZE, _Settings.default.ROOM_HEIGHT_IN_TILE * _Settings.default.TILE_SIZE);
      } else {
        this.cameras.main.setPosition(_Settings.default.ROOM_FRAME_IN_TILES_DESKTOP * _Settings.default.TILE_SIZE, _Settings.default.ROOM_FRAME_IN_TILES_DESKTOP * _Settings.default.TILE_SIZE);
        this.cameras.main.setSize(_Settings.default.SCREEN_PROPS.calculatedWidth - 2 * _Settings.default.ROOM_FRAME_IN_TILES_DESKTOP * _Settings.default.TILE_SIZE, _Settings.default.ROOM_HEIGHT_IN_TILE * _Settings.default.TILE_SIZE);
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
        key: _Utils.default.findFileNameFromPath(this.assets.raw.tilemapTiledJSON.path),
        tileWidth: _Settings.default.TILE_SIZE,
        tileHeight: _Settings.default.TILE_SIZE
      });
      this.layers.backgroundLayer = this.map.createDynamicLayer('backgroundLayer', this.map.addTilesetImage(_Utils.default.findFileNameFromPath(this.assets.raw.image.tiles.background.path)), 0, 0); // .setPipeline('Light2D');

      this.layers.wallsLayer = this.map.createDynamicLayer('wallsLayer', this.map.addTilesetImage(_Utils.default.findFileNameFromPath(this.assets.raw.image.tiles.walls.path)), 0, 0);
      this.layers.wallsMaskLayer = this.map.createDynamicLayer('wallsMaskLayer', this.map.addTilesetImage(_Utils.default.findFileNameFromPath(this.assets.raw.image.tiles.walls.bPath)), 0, 0);
    }
    /**
     * Create all the objects present in Tiled JSON map.
     * @private
     * @since 1.0.0
     */

  }, {
    key: "_createSprites",
    value: function _createSprites() {
      var _this5 = this;

      var _this = this;

      this.map.objects.forEach(function (layer) {
        layer.objects.forEach(function (element) {
          _this;
          _this5[element.name] = eval('new ' + element.type + '(_this,' + (element.x + element.width / 2) + ', ' + (element.y - element.height / 2) + ');');

          _this5[element.name].setName(element.name);
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
      this.layers.borderMasksLayer.create(this.cameras.main.width - _Settings.default.TILE_SIZE, 0, 'right-border-mask-camera').setScrollFactor(0).setOrigin(0, 0);
      this.layers.borderMasksLayer.create(0, this.cameras.main.height - _Settings.default.TILE_SIZE, 'bottom-border-mask-camera').setScrollFactor(0).setOrigin(0, 0);
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
}(Phaser.Scene);

exports.default = Room;
module.exports = exports["default"];

/***/ }),

/***/ "./src/rooms/Utils.js":
/*!****************************!*\
  !*** ./src/rooms/Utils.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var Utils = {
  scrapeComplexObjKey: function scrapeComplexObjKey(obj, params, searchKey, callback) {
    if (Array.isArray(obj)) {
      for (var i = 0; i < obj.length; i++) {
        Utils.scrapeComplexObjKey(obj[i], params, searchKey, callback);
      }
    } else if (obj !== null && _typeof(obj) === 'object') {
      if (searchKey in obj) {
        callback(obj, params);
      } else {
        for (var prop in obj) {
          Utils.scrapeComplexObjKey(obj[prop], params, searchKey, callback);
        }
      }
    }
  },
  findFileNameFromPath: function findFileNameFromPath(path) {
    var nameFirstCharachterPosition = path.lastIndexOf('/') + 1;
    var nameLastCharachterPosition = path.lastIndexOf('.');
    if (nameFirstCharachterPosition === -1) nameFirstCharachterPosition = 0;
    if (nameLastCharachterPosition === -1) return -1;
    var filename = path.slice(nameFirstCharachterPosition, nameLastCharachterPosition);
    return filename;
  }
};
module.exports = Utils;

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

var _behaviours = _interopRequireDefault(__webpack_require__(/*! ./behaviours */ "./src/sprites/behaviours/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// import BehaviourComponent from '../components';

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
    // this.behaviour = new BehaviourComponent(this, behaviourType, pixelPerfect);

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
      console.log('Created:', this.key, '- Type:', this.type, '- Behaviour:'); // , this.behaviour.type);
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
}(Phaser.Physics.Arcade.Sprite);

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

var _const = _interopRequireDefault(__webpack_require__(/*! ../../const */ "./src/const.js"));

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

    _this.actions = new _components.default.ActionComponent(_this);
    /**
     * The facing of the character.
     * @type {TDLCharacter.FACING}
     * @since 1.0.0
     */

    _this.facing = _const.default.RIGHT;
    return _this;
  }

  _createClass(Character, [{
    key: "create",
    value: function create() {
      _get(Character.prototype.__proto__ || Object.getPrototypeOf(Character.prototype), "create", this).call(this); // this.setPipeline('Light2D');

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
  NPCharacter: __webpack_require__(/*! ./npc-characters/NPCharacter */ "./src/sprites/characters/npc-characters/NPCharacter.js"),
  Player: __webpack_require__(/*! ./players/Player */ "./src/sprites/characters/players/Player.js")
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

/***/ "./src/systems/cursors/CursorSystem.js":
/*!*********************************************!*\
  !*** ./src/systems/cursors/CursorSystem.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _actions = _interopRequireDefault(__webpack_require__(/*! ../../actions */ "./src/actions/index.js"));

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
 * Class representing the cursor manager, able to select always the correct graphic for the cursor and to handle pointer events.
 * @extends Phaser.Plugins.BasePlugin
 * @memberof TDLib.Plugins.GlobalPlugins
 * @since 1.0.0
 */
var CursorSystem =
/*#__PURE__*/
function (_Phaser$Plugins$BaseP) {
  _inherits(CursorSystem, _Phaser$Plugins$BaseP);

  /**
   * Create a new CursorSystem.
   * @param {Phaser.Plugins.PluginManager} pluginManager - A reference to the plugin manager.
   */
  function CursorSystem(pluginManager) {
    var _this;

    _classCallCheck(this, CursorSystem);

    _this = _possibleConstructorReturn(this, (CursorSystem.__proto__ || Object.getPrototypeOf(CursorSystem)).call(this, pluginManager));
    /**
     * The scene containing the cursor.
     * @type {CursorSystem.CURSOR_SCENE}
     * @since 1.0.0
     */

    _this.cursorScene;
    /**
     * The Scene Manager is a Game level system, responsible for creating, processing and updating all of the Scenes in a Game instance.
     * @type {Phaser.Scenes.SceneManager}
     * @since 1.0.0
     */

    _this.sceneManager;
    /**
     * Save the last sprite who called the function setCursor().
     * @type {TDLib.Sprites.TDLSprite}
     * @since 1.0.0
     */

    _this.lastTarget;
    return _this;
  }
  /**
   * It's a Phaser.Scene representing the scene containing the cursor which will be put on the rooms level.
   * @typedef {TDLib.Plugins.GlobalPlugins.CursorSystem.CursorScene}
   * @extends {Phaser.Scenes.Scene}
   * @since 1.0.0
   */


  _createClass(CursorSystem, [{
    key: "configure",

    /**
     * Configure the cursor manager.
     * @param {Phaser.Scenes.SceneManager} sceneManager - The Scene Manager is a Game level system, responsible for creating, processing and updating all of the Scenes in a Game instance.
     * @since 1.0.0
     */
    value: function configure(sceneManager) {
      this.sceneManager = sceneManager;
      this.cursorScene = this.sceneManager.add(CursorSystem.CURSOR_SCENE_KEY, CursorSystem.CursorScene, true);
    }
    /**
     * Handle the pointer down event.
     * @param {TDLib.Sprites.Characters.TDLCharacter} player - The current player.
     * @since 1.0.0
     */

  }, {
    key: "pointerDown",
    value: function pointerDown(player) {
      var pointer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (!player.isBlocked) {
        switch (this.cursorScene.cursor.texture.key) {
          case CursorSystem.DEFAULT_CURSOR:
            {
              if (typeof player.room.input.activePointer.camera !== 'undefined') player.actions.add(_actions.default.WalkTo, {
                target: {
                  x: player.room.input.activePointer.worldX
                }
              });
            }
            break;

          case CursorSystem.EXAMINABLE_CURSOR:
            {
              this.lastTarget.behaviour.observe.abort();
              player.actions.add(_actions.default.Examine, {
                target: this.lastTarget
              });
            }
            break;

          case CursorSystem.INTERACTIVE_CURSOR:
            {
              this.lastTarget.behaviour.observe.abort();
              player.actions.add(_actions.default.Interact, {
                target: this.lastTarget
              });
            }
            break;

          case CursorSystem.TALKABLE_CURSOR:
            {
              player.actions.add(_actions.default.TalkTo, {
                target: this.lastTarget
              });
            }
            break;
        }
      }
    }
    /**
     * Set the correct cursor for the target selected.
     * @param {Object} target - The target of the pointer.sceneManager
     * @param {TDLib.Components.ActionComponent} target.behaviour - The SpriteBehaviourComponent of the target.
     * @param {string} [target.behaviour.type=SpriteBehaviour.INERT] - The type of the sprite behaviour for this target.
     * @since 1.0.0
     */

  }, {
    key: "setCursor",
    value: function setCursor() {
      var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        behaviour: {
          type: SpriteBehaviour.INERT
        },
        room: {}
      };

      if ('room' in target && target !== target.room.player) {
        switch (target.behaviour.type) {
          case SpriteBehaviour.INERT:
            {
              this.cursorScene.cursor.setTexture(CursorSystem.DEFAULT_CURSOR).setOrigin(0.4, 0.33);
            }
            break;

          case SpriteBehaviour.EXAMINABLE:
            {
              this.cursorScene.cursor.setTexture(CursorSystem.EXAMINABLE_CURSOR).setOrigin(0.33, 0.29);
            }
            break;

          case SpriteBehaviour.INTERACTIVE:
            {
              this.cursorScene.cursor.setTexture(CursorSystem.INTERACTIVE_CURSOR).setOrigin(0.4, 0.33);
            }
            break;

          case SpriteBehaviour.TALKABLE:
            {
              this.cursorScene.cursor.setTexture(CursorSystem.TALKABLE_CURSOR);
            }
            break;
        }

        this.lastTarget = target;
      }
    }
    /**
     * Show the cursor.
     * @since 1.0.0
     */

  }, {
    key: "showCursor",
    value: function showCursor() {
      this.cursorScene.cursor.setVisible(true);
    }
    /**
     * Hide the cursor.
     * @since 1.0.0
     */

  }, {
    key: "hideCursor",
    value: function hideCursor() {
      this.cursorScene.cursor.setVisible(false);
    }
  }], [{
    key: "CursorScene",
    get: function get() {
      return (
        /*#__PURE__*/
        function (_Phaser$Scene) {
          _inherits(CursorScene, _Phaser$Scene);

          function CursorScene() {
            var _this2;

            _classCallCheck(this, CursorScene);

            _this2 = _possibleConstructorReturn(this, (CursorScene.__proto__ || Object.getPrototypeOf(CursorScene)).call(this, CursorSystem.CURSOR_SCENE_KEY));
            _this2.cursor;
            return _this2;
          }

          _createClass(CursorScene, [{
            key: "preload",
            value: function preload() {
              this.load.image(CursorSystem.EXAMINABLE_CURSOR, 'assets/Cursors/CursorExamine.png');
              this.load.image(CursorSystem.HOLD_CURSOR, 'assets/Cursors/CursorHold.png');
              this.load.image(CursorSystem.INTERACTIVE_CURSOR, 'assets/Cursors/CursorInteract.png');
              this.load.image(CursorSystem.DEFAULT_CURSOR, 'assets/Cursors/CursorMove.png');
              this.load.image(CursorSystem.TALKABLE_CURSOR, 'assets/Cursors/CursorTalk.png');
              this.load.image(CursorSystem.CHOICE_CURSOR, 'assets/Cursors/CursorChoice.png');
              this.load.image(CursorSystem.CHOICE_PRESSED_CURSOR, 'assets/Cursors/CursorChoicePressed.png');
            }
          }, {
            key: "create",
            value: function create() {
              this.input.setDefaultCursor('none');
              this.cursor = this.add.image(0, 0, CursorSystem.DEFAULT_CURSOR).setOrigin(0.4, 0.33).setDepth(100000);
            }
          }, {
            key: "update",
            value: function update() {
              this.cursor.setPosition(this.input.activePointer.x, this.input.activePointer.y);
            }
          }]);

          return CursorScene;
        }(Phaser.Scene)
      );
    }
    /**
     * The key of the scene containing the cursor.
     * @type {string}
     * @since 1.0.0
     */

  }, {
    key: "CURSOR_SCENE_KEY",
    get: function get() {
      return 'CursorScene';
    }
    /**
     * The key of the inert cursor.
     * @type {string}
     * @since 1.0.0
     */

  }, {
    key: "DEFAULT_CURSOR",
    get: function get() {
      return 'cursorMove';
    }
    /**
     * The key of the examine cursor.
     * @type {string}
     * @since 1.0.0
     */

  }, {
    key: "EXAMINABLE_CURSOR",
    get: function get() {
      return 'cursorExamine';
    }
    /**
     * The key of the interact cursor.
     * @type {string}
     * @since 1.0.0
     */

  }, {
    key: "INTERACTIVE_CURSOR",
    get: function get() {
      return 'cursorInteract';
    }
    /**
     * The key of the hold cursor.
     * @type {string}
     * @since 1.0.0
     */

  }, {
    key: "HOLD_CURSOR",
    get: function get() {
      return 'cursorHold';
    }
    /**
     * The key of the talk cursor.
     * @type {string}
     * @since 1.0.0
     */

  }, {
    key: "TALKABLE_CURSOR",
    get: function get() {
      return 'cursorTalk';
    }
    /**
     * The key of the choice cursor.
     * @type {string}
     * @since 1.0.0
     */

  }, {
    key: "CHOICE_CURSOR",
    get: function get() {
      return 'cursorChoice';
    }
    /**
     * The key of the choice pressed cursor.
     * @type {string}
     * @since 1.0.0
     */

  }, {
    key: "CHOICE_PRESSED_CURSOR",
    get: function get() {
      return 'cursorChoicePressed';
    }
  }]);

  return CursorSystem;
}(Phaser.Plugins.BasePlugin);

exports.default = CursorSystem;
module.exports = exports["default"];

/***/ }),

/***/ "./src/systems/index.js":
/*!******************************!*\
  !*** ./src/systems/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Systems = {
  CursorSystem: __webpack_require__(/*! ./cursors/CursorSystem */ "./src/systems/cursors/CursorSystem.js"),
  RoomSystem: __webpack_require__(/*! ./rooms/RoomSystem */ "./src/systems/rooms/RoomSystem.js")
};
module.exports = Systems;

/***/ }),

/***/ "./src/systems/rooms/RoomSystem.js":
/*!*****************************************!*\
  !*** ./src/systems/rooms/RoomSystem.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Class representing the manager of the rooms
 * @extends Phaser.Plugins.BasePlugin
 * @memberof TDLib.Plugins.GlobalPlugins
 */
var RoomSystem =
/*#__PURE__*/
function (_Phaser$Plugins$BaseP) {
  _inherits(RoomSystem, _Phaser$Plugins$BaseP);

  /**
   * Create a new RoomSystem.
   * @param {Phaser.Plugins.PluginManager} pluginManager - A reference to the plugin manager.
   */
  function RoomSystem(pluginManager) {
    var _this;

    _classCallCheck(this, RoomSystem);

    _this = _possibleConstructorReturn(this, (RoomSystem.__proto__ || Object.getPrototypeOf(RoomSystem)).call(this, pluginManager));
    /**
     * The Scene Manager is a Game level system, responsible for creating, processing and updating all of the Scenes in a Game instance.
     * @type {Phaser.Scenes.SceneManager}
     */

    _this.sceneManager = {};
    return _this;
  }
  /**
   * Add (and start) a new room to the RoomSystem.
   * @param {TDLib.Rooms.Room} room - The class of the new room to add.
   * @param {boolean} [autoStart=true] - Specify if the room has to start.
   */


  _createClass(RoomSystem, [{
    key: "add",
    value: function add(room) {
      var autoStart = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      console.log('Added room:', room.name);
      this.sceneManager.add(room.name, room, autoStart);
    }
    /**
     * Configure the RoomSystem.
     * @param {Phaser.Scenes.SceneManager} sceneManager - The Scene Manager is a Game level system, responsible for creating, processing and updating all of the Scenes in a Game instance.
     */

  }, {
    key: "configure",
    value: function configure(sceneManager) {
      this.sceneManager = sceneManager;
    }
  }]);

  return RoomSystem;
}(Phaser.Plugins.BasePlugin);

exports.default = RoomSystem;
module.exports = exports["default"];

/***/ }),

/***/ "./src/utils/Utils.js":
/*!****************************!*\
  !*** ./src/utils/Utils.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Settings = _interopRequireDefault(__webpack_require__(/*! ../boot/Settings */ "./src/boot/Settings.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getScreenProps = function getScreenProps() {
  var returnValue = {}; // cz : ah = 1 : mh

  if (_Settings.default.DEVICE === 'MOBILE') {
    returnValue.availHeight = window.innerHeight;
    returnValue.availWidth = window.innerWidth;
    returnValue.calculatedZoom = Math.floor(returnValue.availHeight / ((_Settings.default.ROOM_HEIGHT_IN_TILE + _Settings.default.INVENTORY_HEIGHT_IN_TILES_MOBILE + _Settings.default.ROOM_FRAME_IN_TILES_MOBILE * 2) * _Settings.default.TILE_SIZE) * 100) / 100;
  } else {
    returnValue.availHeight = screen.height;
    returnValue.availWidth = screen.width;
    returnValue.calculatedZoom = Math.floor(returnValue.availHeight / ((_Settings.default.ROOM_HEIGHT_IN_TILE + _Settings.default.INVENTORY_HEIGHT_IN_TILES_DESKTOP + _Settings.default.ROOM_FRAME_IN_TILES_DESKTOP * 2) * _Settings.default.TILE_SIZE) * 100) / 100;
  }

  console.log('ZOOM: ' + returnValue.calculatedZoom); // Sono le dimensioni riaggiustate rispetto allo zoom scelto
  // ch : ah = 1 : cz

  returnValue.calculatedHeight = Math.ceil(returnValue.availHeight / returnValue.calculatedZoom);
  returnValue.calculatedWidth = Math.ceil(returnValue.availWidth / returnValue.calculatedZoom);
  console.log('AVAIL-H: ' + returnValue.availHeight + '\nCALC-H: ' + returnValue.calculatedHeight);
  console.log('AVAIL-W: ' + returnValue.availWidth + '\nCALC-W: ' + returnValue.calculatedWidth);
  return returnValue;
};

module.exports = getScreenProps;

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Utils = {
  getScreenProps: __webpack_require__(/*! ./Utils */ "./src/utils/Utils.js")
};
module.exports = Utils;

/***/ })

/******/ });
});
//# sourceMappingURL=the-darkest-lib.js.map