/**
 *
 *
 */

var zeno2019 = {};

zeno2019.isNull = function (val) {
  return val === null ? true : false;
}

zeno2019.chunk = function (array, size = 1) {
  var result = [];

  if (array == null || size < 1) {
    return result;
  }

  var length = array.length;
  var tempArray = [];
  var arrIndex = 0;
  var rIndex = 0;

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
