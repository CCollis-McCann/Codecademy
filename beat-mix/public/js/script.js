// Drum Arrays
let kicks = Array(16).fill(false);
let snares = Array(16).fill(false);
let hiHats = Array(16).fill(false);
let rideCymbals = Array(16).fill(false);

const getDrumArray = (arr) => {
  if (arr === 'kicks') {
    return kicks;
  } else if (arr === 'snares') {
    return snares;
  } else if (arr === 'hiHats') {
    return hiHats;
  } else if (arr === 'rideCymbals') {
    return rideCymbals;
  } else return;
};

const toggleDrum = (arr, ind) => {
  const drumArr = getDrumArray(arr);

  if (!drumArr || ind < 0 || ind > 15) {
    return;
  }
  drumArr[ind] = !drumArr[ind];
};

const clear = (arr) => {
  const drumArr = getDrumArray(arr);

  if (drumArr) {
    drumArr.fill(false);
  }
};

const invert = (arr) => {
  const drumArr = getDrumArray(arr);
  if (!drumArr) {
    return;
  }
  drumArr.forEach((flip, i) => (drumArr[i] = !drumArr[i]));
};

const getNeighborPads = (x, y, size) => {
  if (x >= size || x < 0 || y >= size || y < 0) return [];

  //corners
  if (x === 0 && y === 0) {
    return [
      [x + 1, y],
      [x, y + 1],
    ];
  } else if (x === 4 && y === 0) {
    return [
      [x - 1, y],
      [x, y + 1],
    ];
  } else if (x === 0 && y === 4) {
    return [
      [x - 1, y],
      [x, y - 1],
    ];
  } else if (x === 4 && y === 4) {
    return [
      [x - 1, y],
      [x, y - 1],
    ];
    // 3 neighbors
  } else if (x === 0 && y === 1) {
    return [
      [x, y + 1],
      [x, y - 1],
      [x + 1, y],
    ];
  } else if (x === 0 && y === 2) {
    return [
      [x, y + 1],
      [x, y - 1],
      [x + 1, y],
    ];
  } else if (x === 0 && y === 3) {
    return [
      [x, y + 1],
      [x, y - 1],
      [x + 1, y],
    ];
  } else if (x === 4 && y === 1) {
    return [
      [x, y + 1],
      [x, y - 1],
      [x - 1, y],
    ];
  } else if (x === 4 && y === 2) {
    return [
      [x, y + 1],
      [x, y - 1],
      [x - 1, y],
    ];
  } else if (x === 4 && y === 3) {
    return [
      [x, y + 1],
      [x, y - 1],
      [x - 1, y],
    ];
  } else if (x === 1 && y === 0) {
    return [
      [x + 1, y],
      [x - 1, y],
      [x, y + 1],
    ];
  } else if (x === 2 && y === 0) {
    return [
      [x + 1, y],
      [x - 1, y],
      [x, y + 1],
    ];
  } else if (x === 3 && y === 0) {
    return [
      [x + 1, y],
      [x - 1, y],
      [x, y + 1],
    ];
  } else if (x === 1 && y === 4) {
    return [
      [x + 1, y],
      [x - 1, y],
      [x, y - 1],
    ];
  } else if (x === 2 && y === 4) {
    return [
      [x + 1, y],
      [x - 1, y],
      [x, y - 1],
    ];
  } else if (x === 3 && y === 4) {
    return [
      [x + 1, y],
      [x - 1, y],
      [x, y - 1],
    ];
  } else {
    return [
      [x + 1, y],
      [x - 1, y],
      [x, y + 1],
      [x, y - 1],
    ];
  }
};
