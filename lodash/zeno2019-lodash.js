/**
 *
 *
 */

var zeno2019 = {};

zeno2019.isNull = function (val) {
  return val === null ? true : false;
}

zeno2019.isNaN = function (val) {
  let t = Number(val);

  if (t !== t && val !== undefined) return true;
  return false;
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
zeno2019.xtakeRightWhile = function (arr) {}

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

zeno2019.without = function (arr, ...values) {
  let res = [];

  for (let num of arr) {
    let same = 0;
    for (let val of values) {
      if (val == num) {
        same = 1;
      }
    }
    if (!same) {
      res[res.length] = num;
    }
  }

  return res;
}

zeno2019.xor = function (...arrays) {
  const map = {};
  const res = [];

  for (let arr of arrays) {
    for (let num of arr) {
      if (map[num]) {
        map[num]++;
      } else {
        map[num] = 1;
      }
    }
  }

  for (let key in map) {
    if (map[key] == 1) {
      res[res.length] = Number(key);
    }
  }

  return res;
}

/**
 * [zip description]
 * 创建一个分组元素的数组，其第一个元素包含所有给定数组的第一个元素，数组的第二个元素包含所有给定数组的第二个元素，以此类推
 * @param  {...[type]} arrays [description]
 * @return {[type]}           [description]
 */
zeno2019.zip = function (...arr) {
  let res = [];
  let max = 0;

  for (let elem of arr) {
    if (max < elem.length) max = elem.length;
  }

  for (let i = 0; i < max; i++) {
    res[i] = new Array();
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < max; j++) {
      res[j][i] = arr[i][j];
    }
  }

  return res;
}

zeno2019.zipObject = function (propsArr = [], values = []) {
  const map = {};
  let item = 0;

  for (let prop of propsArr) {
    map[prop] = values[item++];
  }

  return map;
}


zeno2019.identity = function (value) {
  return value;
}

/**
 * [filter description]
 * 未完待续
 * @param  {[type]} collect   [description]
 * @param  {[type]} predicate [description]
 * @return {[type]}           [description]
 */
zeno2019.xfilter = function (collect, predicate = zeno2019.identity) {
  let res = [];

  return res;
}

function ObjectJudge(args) {
  return Object.prototype.toString.call(args);
}

/**
 * [findIndex description]
 * 该方法返回第一个通过 predicate 判断为真值的元素的索引
 * 未完待续，可能需要原型链的知识
 * @param  {[type]} arr       [description]
 * @param  {[type]} predicate [description]
 * @param  {Number} fromIndex [description]
 * @return {[type]}           [description]
 */
zeno2019.findIndex = function (arr, predicate = zeno2019.identity, fromIndex = 0) {
  if (arr.length == 0) return -1;

  if (ObjectJudge(predicate) == '[object Object]') {
    for (let i = fromIndex; i < arr.length; i++) {
      let test = 1;
      for (let key in arr[i]) {
        if (predicate[key] != arr[i][key]) test = 0;
      }
      if (test) return i;
    }
  } else if (ObjectJudge(predicate) == '[object Function]') {
    for (let i = fromIndex; i < arr.length; i++) {
      if (predicate(arr[i])) return i;
    }
  } else if (ObjectJudge(predicate) == '[object String]') {
    for (let i = fromIndex; i < arr.length; i++) {
      if (arr[i][predicate]) return i;
    }
  } else {
    for (let i = fromIndex; i < arr.length; i++) {
      if (arr[i][predicate[0]] == predicate[1]) return i;
    }
  }

  return -1;
}

/**
 * [findLastIndex description]
 * 该方法返回第一个通过 predicate 判断为真值的元素的索引
 * 未完待续，可能需要原型链的知识
 * @param  {[type]} arr       [description]
 * @param  {[type]} predicate [description]
 * @param  {Number} fromIndex [description]
 * @return {[type]}           [description]
 */
zeno2019.findLastIndex = function (arr, predicate = zeno2019.identity, fromIndex = arr.length - 1) {

  if (arr.length == 0) return -1;
  if (fromIndex > arr.length - 1) fromIndex = arr.length - 1;

  if (ObjectJudge(predicate) == '[object Object]') {
    for (let i = fromIndex; i >= 0; i--) {
      let test = 1;
      for (let key in arr[i]) {
        if (predicate[key] != arr[i][key]) test = 0;
      }
      if (test) return i;
    }
  } else if (ObjectJudge(predicate) == '[object Function]') {
    for (let i = fromIndex; i >= 0; i--) {
      if (predicate(arr[i])) return i;
    }
  } else if (ObjectJudge(predicate) == '[object String]') {
    for (let i = fromIndex; i >= 0; i--) {
      if (arr[i][predicate]) return i;
    }
  } else {
    for (let i = fromIndex; i >= 0; i--) {
      if (arr[i][predicate[0]] == predicate[1]) return i;
    }
  }

  return -1;
}

zeno2019.includes = function (collect, value, fromIndex = 0) {

  if (fromIndex < 0) fromIndex += collect.length;

  if (Array.isArray(collect)) {
    for (let key = fromIndex; key < collect.length; key++) {
      if (collect[key] == value) return true;
    }
  } else if (ObjectJudge(collect) == '[object Object]') {
    for (let key in collect) {
      if (collect[key] == value || key == value) return true;
    }
  } else if (typeof (collect) == 'string') {
    let regex = new RegExp(value);
    return regex.test(collect);
  }

  return false;
}

/**
 * [flattenDeep description]
 * 未完成
 * @param   {[type]}  arr  [arr description]
 * @return  {[type]}       [return description]
 */
zeno2019.xflattenDeep = function (arr) {}

/**
 * [sample description]
 * @param   {[type]}  collect  [collect description]
 * @return  {[type]}           [return description]
 */
zeno2019.sample = function (collect) {
  let r = Math.floor(Math.random() * collect.length);
  return collect[r];
}

/**
 * [sampleSize description]
 * @param   {[type]}  collect  [collect description]
 * @param   {[type]}  n        [n description]
 * @return  {[type]}           [return description]
 */
zeno2019.sampleSize = function (collect, n = 1) {
  let colSet = new Set();

  n = n > collect.length ? collect.length : n;
  while (colSet.size < n) {
    let r = Math.floor(Math.random() * collect.length);
    if (!colSet.has(collect[r])) colSet.add(collect[r]);
  }

  return [...colSet];
}

/**
 * [shuffle description]
 * @param   {[type]}  collect  [collect description]
 * @return  {[type]}           [return description]
 */
zeno2019.shuffle = function (collect) {
  let colSet = new Set();

  while (colSet.size < collect.length) {
    let r = Math.floor(Math.random() * collect.length);
    if (!colSet.has(collect[r])) colSet.add(collect[r]);
  }

  return [...colSet];
}

zeno2019.size = function (collect) {
  let cnt = 0;

  for (let key in collect) {
    cnt++;
  }
  return cnt;
}

/**
 * [eq description]
 * 判断是否 value 和 other 是否相等的函数
 * @param  {[type]} value [description]
 * @param  {[type]} other [description]
 * @return {[type]}       [description]
 */
zeno2019.eq = function (value, other) {
  if (value !== value && other !== other) {
    return value !== undefined && other !== undefined;
  }
  return value === other;
}

zeno2019.gt = (value, other) => value > other;

zeno2019.gte = (value, other) => value >= other;

zeno2019.lt = (value, other) => value < other;

zeno2019.lte = (value, other) => value <= other;

zeno2019.add = (value, other) => value + other;

zeno2019.subtract = (value, other) => value - other;

zeno2019.multiply = (value, other) => value * other;

zeno2019.divide = (value, other) => value / other;

zeno2019.max = function (arr) {
  if (arr.length == 0) return undefined;

  let res = -Infinity;

  for (let val of arr) {
    if (typeof (val) !== 'number' || val === false) return undefined;
    if (res < val) res = val;
  }

  return res;
}

zeno2019.min = function (arr) {
  if (arr.length == 0) return undefined;

  let res = Infinity;

  for (let val of arr) {
    if (typeof (val) !== 'number' || val === false) return undefined;
    if (res > val) res = val;
  }

  return res;
}

zeno2019.sum = function (arr) {
  let res = 0;
  for (let val of arr) {
    res += val;
  }
  return res;
}

zeno2019.mean = function (arr) {
  let res = 0;
  for (let val of arr) {
    res += val;
  }
  return res / arr.length;
}

zeno2019.meanBy = function (arr, iteratee = zeno2019.identity) {
  let res = 0;

  for (let val of arr) {
    if (typeof (iteratee) === 'string') {
      res += val[iteratee];
    } else {
      res += iteratee(val);
    }
  }

  return res / arr.length;
}

/**
 * [ceil description]
 * 未完待续
 * @param  {[type]} value     [description]
 * @param  {Number} precision [description]
 * @return {[type]}           [description]
 */
zeno2019.xceil = function (value, precision = 0) {}

/**
 * [floor description]
 * 未完待续
 * @param  {[type]} value     [description]
 * @param  {Number} precision [description]
 * @return {[type]}           [description]
 */
zeno2019.xfloor = function (value, precision = 0) {}

/**
 * [round description]
 * @param  {[type]} num       [description]
 * @param  {Number} precision [description]
 * @return {[type]}           [description]
 */
zeno2019.xround = function (num, precision = 0) {}

/**
 * [at description]
 * @param  {[type]} obj   [description]
 * @param  {[type]} paths [description]
 * @return {[type]}       [description]
 */
zeno2019.xat = function (obj, paths) {}

/**
 * [defaults description]
 * 大概可以理解为，把第二个参数里的对象，添加进第一个参数里，但已有键值对的不添加
 * 这里 Object.keys() 返回 obj 的所有 keys 组成的数组
 * @param  {[type]}    obj     [description]
 * @param  {...[type]} sources [description]
 * @return {[type]}            [description]
 */
zeno2019.defaults = function (obj, ...sources) {
  for (let elem of sources) {
    for (let key in elem) {
      if (!(Object.keys(obj)).includes(key)) obj[key] = elem[key];
    }
  }

  return obj;
}

/**
 * [get description]
 * 貌似是解析， path 是不是字符串，如果是 则按对象返回对应值， 解析值是 undefined 就返回 default 值
 * 如果是数组，则解析里面是不是字符串
 * 未完待续
 * @param  {[type]} obj          [description]
 * @param  {[type]} path         [description]
 * @param  {String} defaultValue [description]
 * @return {[type]}              [description]
 */
zeno2019.xget = function (obj, path, defaultValue) {}

/**
 * [set description]
 * @param  {[type]} obj          [description]
 * @param  {[type]} path         [description]
 * @param  {[type]} value        [description]
 * @return {[type]}              [description]
 */
zeno2019.xset = function (obj, path, value) {}

/**
 * [has description]
 * @param  {[type]}  obj  [description]
 * @param  {[type]}  path [description]
 * @return {Boolean}      [description]
 */
zeno2019.xhas = function (obj, path) {}

/**
 * [hasIn description]
 * @param  {[type]} obj  [description]
 * @param  {[type]} path [description]
 * @return {[type]}      [description]
 */
zeno2019.xhasIn = function (obj, path) {}

zeno2019.invert = function (obj) {
  let res = {};

  for (let key in obj) {
    res[obj[key]] = key;
  }

  return res;
}

zeno2019.keys = function (obj) {
  let keysName = [];

  for (let key in obj) {
    keysName[keysName.length++] = key;
  }

  return keysName;
}
