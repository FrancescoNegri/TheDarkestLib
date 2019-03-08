/**
 * @author       Francesco Negri <francesco.negri@outlook.com>
 * @copyright    2019 The Darkest Light
 * @license      {@link https://github.com/FrancescoNegri/TheDarkestLib/blob/master/LICENSE|MIT License}
 */

/**
 * Components are attachable to Sprites in order to extend their capabilities.
 * @namespace TDLib.Components
 */

const Components = {
  Component: require('./Component'),
  ActionComponent: require('./ActionComponent'),
  BehaviourComponent: require('./BehaviourComponent'),
  EffectComponent: require('./EffectComponent')
};

module.exports = Components;
