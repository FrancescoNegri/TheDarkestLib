import CONST from './const';

var Behaviours = {
  Behaviour: require('./Behaviour'),
  Examinable: require('./examinable/Examinable'),
  Interactive: require('./interactive/Interactive'),
  Observable: require('./observable/Observable'),
  Talkable: require('./talkable/Talkable'),
  Inventory: require('./inventory/Inventory')
};

// eslint-disable-next-line no-undef
Behaviours = Phaser.Utils.Objects.Extend(false, Behaviours, CONST);
module.exports = Behaviours;
