var CONST = require('../const');
var Settings = require('./Settings');

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
var DebugHeader = function (game) {
  let config = game.config;

  config.bannerBackgroundColor = '#0002e6';
  config.bannerTextColor = '#ffffff';
  config.hidePhaser = false;

  let renderType = 'WebGL';

  if (config.renderType !== 2) {
    renderType = 'NULL';
  }

  let audioConfig = config.audio;
  let deviceAudio = game.device.audio;

  let audioType;

  if (deviceAudio.webAudio && !(audioConfig && audioConfig.disableWebAudio)) {
    audioType = 'Web Audio';
  } else if ((audioConfig && audioConfig.noAudio) || (!deviceAudio.webAudio && !deviceAudio.audioData)) {
    audioType = 'No Audio';
  } else {
    audioType = 'HTML5 Audio';
  }

  if (!game.device.browser.ie) {
    let c = '';
    let args = [c];

    if (Array.isArray(config.bannerBackgroundColor)) {
      let lastColor;

      config.bannerBackgroundColor.forEach(function (color) {
        c = c.concat('%c ');

        args.push('background: ' + color);

        lastColor = color;

      });

      //  inject the text color
      args[args.length - 1] = 'color: ' + config.bannerTextColor + '; background: ' + lastColor;
    } else {
      c = c.concat('%c ');

      args.push('color: ' + config.bannerTextColor + '; background: ' + config.bannerBackgroundColor);
    }

    //  URL link background color (always white)
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

    c = c.concat(' %c ' + config.gameURL);

    //  Inject the new string back into the args array
    args[0] = c;

    console.log.apply(console, args);
  }
};

module.exports = DebugHeader;
