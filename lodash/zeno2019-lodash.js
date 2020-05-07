/**
 *
 *
 */

var zeno2019 = {};

zeno2019.isNull = function (val) {
  return val === null ? true : false;
}

zeno2019.chunk = function (array, size = 1) {
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

zeno2019.compact = function (array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    let x = array[i];
    if (!(x !== x || x === undefined || x === null || x === 0 || x === '' || x === false)) {
      result.push(x);
    }
  }

  return result;
}

zeno2019.concat = function (arr, ...values) {
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

zeno2019.difference = function (arr, ...values) {
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

zeno2019.drop = function (arr, n = 1) {
  let result = [];

  for (let i = n; i < arr.length; i++) {
    result[result.length] = arr[i];
  }

  return result;
}

zeno2019.dropRight = function (arr, n = 1) {
  let result = [];
  let length = arr.length - 1;
  let j = 0

  for (let i = length - n; i >= 0; i--) {
    result[result.length] = arr[j++];
  }

  return result;
}

zeno2019.fill = function (arr, value, start = 0, end = arr.length) {
  for (let i = start; i < end; i++) {
    arr[i] = value;
  }
  return arr;
}

zeno2019.flatten = function (arr) {
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

zeno2019.head = arr => arr[0];

zeno2019.indexOf = function (arr, value, fromIndex = 0) {
  let n = fromIndex >= 0 ? fromIndex : arr.length + fromIndex;

  for (let i = n; i < arr.length; i++) {
    if (arr[i] === value || (arr[i] !== arr[i] && value !== value)) return i;
  }
  return -1;
}

zeno2019.initial = function (arr) {
  let result = [];

  for (let i = 0; i < arr.length - 1; i++) {
    result[result.length] = arr[i];
  }

  return result;
}

/**
 * [xintersection description]
 * 未完成
 * @param  {...[type]} arrays [description]
 * @return {[type]}           [description]
 */
zeno2019.xintersection = function (...arrays) {
  let result = [];

  return result;
}

zeno2019.join = function (arr, separator = ',') {
  let result = '';
  result += arr[0];

  for (let i = 1; i < arr.length; i++) {
    result += '' + separator + arr[i];
  }

  return result;
}

zeno2019.last = arr => arr[arr.length - 1];

zeno2019.lastIndexOf = function (arr, value, fromIndex = arr.length - 1) {

  for (let i = fromIndex; i >= 0; i--) {
    if (arr[i] === value || (arr[i] !== arr[i] && value !== value)) return i;
  }

  return -1;
}

zeno2019.nth = function (arr, n = 0) {
  let N = n >= 0 ? n : arr.length + n;
  return arr[N];
}

/**
 * [pull description]
 * 从第二个参数开始，依次检验是否存在于 arr
 * @param  {[type]}    arr    [description]
 * @param  {...[type]} values [description]
 * @return {[type]}           [description]
 */
zeno2019.pull = function (arr, ...values) {
  for (let val of values) {
    for (let key in arr) {
      if (arr[key] === val) {
        arr.splice(key, 1);
      }
    }
  }

  return arr;
}

zeno2019.pullAll = function (arr, tarArr) {
  for (let val of tarArr) {
    for (let key in arr) {
      if (arr[key] === val) {
        arr.splice(key, 1);
      }
    }
  }

  return arr;
}

zeno2019.reverse = function (arr) {
  let len = arr.length - 1;

  for (let i = 0; i <= arr.length / 2; i++) {
    let t = arr[i];
    arr[i] = arr[len - i];
    arr[len - i] = t;
  }

  return arr;
}

zeno2019.sortedIndex = function (arr, value) {
  if (value > arr[arr.length - 1]) return arr.length;

  for (let key = 0; key < arr.length; key++) {
    if (arr[key] <= value && value <= arr[key + 1]) {
      return key + 1;
    }
  }
}

/**
 * [sortedIndexOf description]
 * 用二分法找到大于前一个数，小于等于后一个数的位置
 * @param  {[type]} arr   [description]
 * @param  {[type]} value [description]
 * @return {[type]}       [description]
 */
zeno2019.sortedIndexOf = function (arr, value) {
  var left = 0;
  var right = arr.length - 1;

  if (arr[left] == value) return left;
  if (arr[right] < value) return -1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] < value) {
      left = mid + 1;
    } else {
      if (arr[mid - 1] < value) {
        return mid;
      }
      right = mid;
    }
  }

  return -1;
}

zeno2019.tail = function (arr) {
  let result = [];

  for (let i = 1; i < arr.length; i++) {
    result[result.length] = arr[i];
  }

  return result;
}

zeno2019.take = function (arr, n = 1) {
  let result = [];

  if (n > arr.length) return arr;

  for (let i = 0; i < n; i++) {
    result[result.length] = arr[i];
  }

  return result;
}

zeno2019.takeRight = function (arr, n = 1) {
  let result = [];

  if (n > arr.length) return arr;

  for (let i = arr.length - n; i < arr.length; i++) {
    result[result.length] = arr[i];
  }

  return result;
}

/**
 * [takeRightWhile description]
 * 未完待续
 * @param  {[type]} arr [description]
 * @return {[type]}     [description]
 */
zeno2019.xtakeRightWhile = function (arr) { }

/**
 * [union description]
 * 创建一个按顺序排列的唯一值组成的数组(非按大小排序)
 * 可以理解成给定的数组的并集
 * @param  {...[type]} arr [description]
 * @return {[type]}        [description]
 */
zeno2019.union = function (...arrays) {
  let numSet = new Set();

  for (let arr of arrays) {
    for (let val of arr) {
      if (!numSet.has(val)) {
        numSet.add(val);
      }
    }
  }

  return [...numSet];
}

/**
 * [uniq description]
 * 返回一个去重的数组，按输入顺序排序
 * @param  {[type]} arr [description]
 * @return {[type]}     [description]
 */
zeno2019.uniq = function (arr) {
  let uniqSet = new Set();

  for (let val of arr) {
    if (!uniqSet.has(val)) {
      uniqSet.add(val);
    }
  }

  return [...uniqSet];
}

/**
 * [unzip description]
 * 返回的数组的第一个元素包含所有输入数组的第一元素,以此类推
 * @param  {[type]} arr [description]
 * @return {[type]}     [description]
 */
zeno2019.unzip = function (arr) {
  let result = new Array();

  for (let i = 0; i < arr[0].length; i++) {
    result[i] = new Array();
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      result[j][i] = arr[i][j];
    }
  }

  return result;
}
