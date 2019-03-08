const Utils = {
  scrapeComplexObjKey: (obj, params, searchKey, callback) => {
    if (Array.isArray(obj)) {
      for (let i = 0; i < obj.length; i++) {
        Utils.scrapeComplexObjKey(obj[i], params, searchKey, callback);
      }
    } else if (obj !== null && typeof obj === 'object') {
      if (searchKey in obj) {
        callback(obj, params);
      } else {
        for (let prop in obj) {
          Utils.scrapeComplexObjKey(obj[prop], params, searchKey, callback);
        }
      }
    }
  },
  findFileNameFromPath: (path) => {
    let nameFirstCharachterPosition = path.lastIndexOf('/') + 1;

    let nameLastCharachterPosition = path.lastIndexOf('.');

    if (nameFirstCharachterPosition === -1) nameFirstCharachterPosition = 0;
    if (nameLastCharachterPosition === -1) return -1;
    let filename = path.slice(nameFirstCharachterPosition, nameLastCharachterPosition);

    return filename;
  }
};

module.exports = Utils;
