import Settings from '../boot/Settings';

const getScreenProps = () => {
  var returnValue = {};

  // cz : ah = 1 : mh
  if (Settings.DEVICE === 'MOBILE') {
    returnValue.availHeight = window.innerHeight;
    returnValue.availWidth = window.innerWidth;
    returnValue.calculatedZoom = Math.floor(returnValue.availHeight / ((Settings.ROOM_HEIGHT_IN_TILE + Settings.INVENTORY_HEIGHT_IN_TILES_MOBILE + Settings.ROOM_FRAME_IN_TILES_MOBILE * 2) * Settings.TILE_SIZE) * 100) / 100;
  } else {
    returnValue.availHeight = screen.height;
    returnValue.availWidth = screen.width;
    returnValue.calculatedZoom = Math.floor(returnValue.availHeight / ((Settings.ROOM_HEIGHT_IN_TILE + Settings.INVENTORY_HEIGHT_IN_TILES_DESKTOP + Settings.ROOM_FRAME_IN_TILES_DESKTOP * 2) * Settings.TILE_SIZE) * 100) / 100;
  }

  console.log('ZOOM: ' + returnValue.calculatedZoom);

  // Sono le dimensioni riaggiustate rispetto allo zoom scelto
  // ch : ah = 1 : cz
  returnValue.calculatedHeight = Math.ceil(returnValue.availHeight / returnValue.calculatedZoom);
  returnValue.calculatedWidth = Math.ceil(returnValue.availWidth / returnValue.calculatedZoom);

  console.log('AVAIL-H: ' + returnValue.availHeight + '\nCALC-H: ' + returnValue.calculatedHeight);
  console.log('AVAIL-W: ' + returnValue.availWidth + '\nCALC-W: ' + returnValue.calculatedWidth);

  return returnValue;
};

module.exports = getScreenProps;
