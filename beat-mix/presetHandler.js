// Use this presets array inside your presetHandler
const presets = require('./presets');

let arr;

const presetHelper = (arr, ind) => {
  presets[ind] = arr;
  return presets[ind];
};

// Complete this function:
const presetHandler = (reqType, arrInd, newPresetArray) => {
  if (arrInd < 0 || arrInd > 15) return [404];

  if (reqType === 'GET') {
    arr = [200, presets[arrInd]];
  } else if (reqType === 'PUT') {
    arr = [200, presetHelper(newPresetArray, arrInd)];
  } else {
    arr = [400];
  }
  return arr;
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
