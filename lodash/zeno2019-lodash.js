/**
 *
 *
 */

var zeno2019 = {};

zeno2019.isNull = function(val) {
  return val === null ? true : false;
}

zeno2019.chunk = function(array, size = 1) {
  let result = [];

  if (array == null || size < 1) return result;

  let length = array.length;
  let tempArray = [];
  let arrIndex = 0;
  let rIndex = 0;

  while (arrIndex < length) {
    tempArray.push(array[arrIndex++]);
    if (arrIndex % size == 0) {
      result[rIndex++] = tempArray;
      tempArray = [];
    }
  }
  if (length % size > 0) {
    result[rIndex] = tempArray;
  }

  return result;
}

zeno2019.compact = function(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    let x = array[i];
    if (!(x !== x || x === undefined || x === null || x === 0 || x === '' || x === false)) {
      result.push(x);
    }
  }

  return result;
}

zeno2019.concat = function(array, ...values) {
  let result = [];
  let length = arguments.length;

  if (length === 0) {
    return result;
  }
  result[0] = array;
  let rIndex = length - 1;

  while (rIndex > 0) {
    result[rIndex] = arguments[rIndex];
    rIndex--;
  }

  return result;
}

zeno2019.xxx = function(val) {

}

zeno2019.xxx = function(val) {

}

zeno2019.xxx = function(val) {

}

zeno2019.xxx = function(val) {

}