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

zeno2019.concat = function(arr, ...values) {
  let result = [];
  let length = arguments.length;

  if (length === 0) {
    return result;
  }

  for (let arrVal of arr) {
    // result.length 从 0 -> arr.length - 1
    result[result.length] = arrVal;
  }

  // for key in , for val of
  for (let val of values) {
    if (Array.isArray(val)) {
      for (let key in val) {
        result[result.length] = val[key];
      }
    } else {
      result[result.length] = val;
    }
  }

  return result;
}

zeno2019.difference = function(arr, ...values) {
  let result = [];
  let uniVal = [];

  uniVal = zeno2019.concat(...values);

  for (let v of arr) {
    let noSame = 1;
    for (let num of uniVal) {
      if (v === num) {
        noSame = 0;
        break;
      }
    }
    if (noSame) {
      result[result.length] = v;
    }
  }

  return result;
}

zeno2019.drop = function(arr, n = 1) {
  let result = [];

  for (let i = n; i < arr.length; i++) {
    result[result.length] = arr[i];
  }

  return result;
}

zeno2019.dropRight = function(arr, n = 1) {
  let result = [];
  let length = arr.length - 1;
  let j = 0

  for (let i = length - n; i >= 0; i--) {
    result[result.length] = arr[j++];
  }

  return result;
}

zeno2019.fill = function(arr, value, start = 0, end = arr.length) {
  for (let i = start; i < end; i++) {
    arr[i] = value;
  }
  return arr;
}

zeno2019.flatten = function(arr) {
  let result = [];

  for (let arrVal of arr) {
    if (Array.isArray(arrVal)) {
      for (let key in arrVal) {
        result[result.length] = arrVal[key];
      }
    } else {
      result[result.length] = arrVal;
    }
  }

  return result;
}

zeno2019.xxx = function(arr) {}

zeno2019.xxx = function(arr) {}

zeno2019.xxx = function(arr) {}

zeno2019.xxx = function(arr) {}