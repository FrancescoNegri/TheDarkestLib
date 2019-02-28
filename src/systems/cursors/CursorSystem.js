import Actions from '../../actions';
import Behaviours from '../../sprites/behaviours';

/**
 * Class representing the CursorSystem, able to select the correct graphic for the cursor and to handle pointer events.
 * @extends Phaser.Plugins.BasePlugin
 * @memberof TDLib.Plugins.GlobalPlugins
 * @since 1.0.0
 */
export default class CursorSystem extends Phaser.Plugins.BasePlugin {
  /**
   * Create a new CursorSystem.
   * @param {Phaser.Plugins.PluginManager} pluginManager - A reference to the plugin manager.
   */
  constructor(pluginManager) {
    super(pluginManager);

    /**
     * The scene containing the cursor.
     * @type {CursorSystem.CURSOR_SCENE}
     * @since 1.0.0
     */
    this.cursorScene;

    /**
     * The Scene Manager is a Game level system, responsible for creating, processing and updating all of the Scenes in a Game instance.
     * @type {Phaser.Scenes.SceneManager}
     * @since 1.0.0
     */
    this.sceneManager;

    /**
     * Save the last sprite who called the function setCursor().
     * @type {TDLib.Sprites.TDLSprite}
     * @since 1.0.0
     */
    this.lastTarget;
  }

  /**
   * It's a Phaser.Scene representing the scene containing the cursor which will be put on the rooms level.
   * @typedef {TDLib.Plugins.GlobalPlugins.CursorSystem.CursorScene}
   * @extends {Phaser.Scenes.Scene}
   * @since 1.0.0
   */
  static get CursorScene() {
    return class CursorScene extends Phaser.Scene {
      constructor() {
        super(CursorSystem.CURSOR_SCENE_KEY);

        this.cursor;
      }

      preload() {
        this.load.image(CursorSystem.EXAMINABLE_CURSOR, 'assets/Cursors/CursorExamine.png');
        this.load.image(CursorSystem.HOLD_CURSOR, 'assets/Cursors/CursorHold.png');
        this.load.image(CursorSystem.INTERACTIVE_CURSOR, 'assets/Cursors/CursorInteract.png');
        this.load.image(CursorSystem.DEFAULT_CURSOR, 'assets/Cursors/CursorMove.png');
        this.load.image(CursorSystem.TALKABLE_CURSOR, 'assets/Cursors/CursorTalk.png');
        this.load.image(CursorSystem.CHOICE_CURSOR, 'assets/Cursors/CursorChoice.png');
        this.load.image(CursorSystem.CHOICE_PRESSED_CURSOR, 'assets/Cursors/CursorChoicePressed.png');
      }

      create() {
        this.input.setDefaultCursor('none');
        this.cursor = this.add.image(0, 0, CursorSystem.DEFAULT_CURSOR).setOrigin(0.4, 0.33).setDepth(100000);
      }

      update() {
        this.cursor.setPosition(this.input.activePointer.x, this.input.activePointer.y);
      }
    };
  }

  /**
   * The key of the scene containing the cursor.
   * @type {string}
   * @since 1.0.0
   */
  static get CURSOR_SCENE_KEY() {
    return 'CursorScene';
  }

  /**
   * The key of the inert cursor.
   * @type {string}
   * @since 1.0.0
   */
  static get DEFAULT_CURSOR() {
    return 'cursorMove';
  }

  /**
   * The key of the examine cursor.
   * @type {string}
   * @since 1.0.0
   */
  static get EXAMINABLE_CURSOR() {
    return 'cursorExamine';
  }

  /**
   * The key of the interact cursor.
   * @type {string}
   * @since 1.0.0
   */
  static get INTERACTIVE_CURSOR() {
    return 'cursorInteract';
  }

  /**
   * The key of the hold cursor.
   * @type {string}
   * @since 1.0.0
   */
  static get HOLD_CURSOR() {
    return 'cursorHold';
  }

  /**
   * The key of the talk cursor.
   * @type {string}
   * @since 1.0.0
   */
  static get TALKABLE_CURSOR() {
    return 'cursorTalk';
  }

  /**
   * The key of the choice cursor.
   * @type {string}
   * @since 1.0.0
   */
  static get CHOICE_CURSOR() {
    return 'cursorChoice';
  }

  /**
   * The key of the choice pressed cursor.
   * @type {string}
   * @since 1.0.0
   */
  static get CHOICE_PRESSED_CURSOR() {
    return 'cursorChoicePressed';
  }

  /**
   * Configure the cursor manager.
   * @param {Phaser.Scenes.SceneManager} sceneManager - The Scene Manager is a Game level system, responsible for creating, processing and updating all of the Scenes in a Game instance.
   * @since 1.0.0
   */
  configure(sceneManager) {
    this.sceneManager = sceneManager;
    this.cursorScene = this.sceneManager.add(CursorSystem.CURSOR_SCENE_KEY, CursorSystem.CursorScene, true);
  }

  /**
   * Handle the pointer down event.
   * @param {TDLib.Sprites.Characters.TDLCharacter} player - The current player.
   * @since 1.0.0
   */
  pointerDown(player, pointer = null) {
    if (!player.isBlocked) {
      switch (this.cursorScene.cursor.texture.key) {
        case CursorSystem.DEFAULT_CURSOR: {
          if (typeof player.room.input.activePointer.camera !== 'undefined') player.actions.add(Actions.WalkTo, { target: { x: player.room.input.activePointer.worldX } });
        }
          break;

        case CursorSystem.EXAMINABLE_CURSOR: {
          this.lastTarget.behaviour.observe.abort();
          player.actions.add(Actions.Examine, { target: this.lastTarget });
        }
          break;

        case CursorSystem.INTERACTIVE_CURSOR: {
          this.lastTarget.behaviour.observe.abort();
          player.actions.add(Actions.Interact, { target: this.lastTarget });
        }
          break;

        case CursorSystem.TALKABLE_CURSOR: {
          player.actions.add(Actions.TalkTo, { target: this.lastTarget });
        }
          break;
      }
    }
  }

  /**
   * Set the correct cursor for the target selected.
   * @param {Object} target - The target of the pointer.sceneManager
   * @param {TDLib.Components.ActionComponent} target.behaviour - The SpriteBehaviourComponent of the target.
   * @param {string} [target.behaviour.type=TDLib.Sprites.Behaviours.INERT] - The type of the sprite behaviour for this target.
   * @since 1.0.0
   */
  setCursor(target = { behaviour: { type: Behaviours.INERT }, room: {} }) {
    if ('room' in target && target !== target.room.player) {
      switch (target.behaviour.type) {
        case Behaviours.INERT: {
          this.cursorScene.cursor.setTexture(CursorSystem.DEFAULT_CURSOR).setOrigin(0.4, 0.33);
        }
          break;

        case Behaviours.EXAMINABLE: {
          this.cursorScene.cursor.setTexture(CursorSystem.EXAMINABLE_CURSOR).setOrigin(0.33, 0.29);
        }
          break;

        case Behaviours.INTERACTIVE: {
          this.cursorScene.cursor.setTexture(CursorSystem.INTERACTIVE_CURSOR).setOrigin(0.4, 0.33);
        }
          break;

        case Behaviours.TALKABLE: {
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
  showCursor() {
    this.cursorScene.cursor.setVisible(true);
  }

  /**
   * Hide the cursor.
   * @since 1.0.0
   */
  hideCursor() {
    this.cursorScene.cursor.setVisible(false);
  }
}
