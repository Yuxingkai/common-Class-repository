exports.Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0
};

exports.DOES_NOT_EXIST = -1;

exports.lesserEquals = function (a, b, compareFn) {
  const comp = compareFn(a, b);
  return comp === Compare.LESS_THAN || comp === Compare.EQUALS;
}

exports.biggerEquals = function (a, b, compareFn) {
  const comp = compareFn(a, b);
  return comp === Compare.BIGGER_THAN || comp === Compare.EQUALS;
}

exports.defaultCompare = function (a, b) {
  if (a === b) {
    return Compare.EQUALS;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

exports.defaultEquals = function (a, b) {
  return a === b;
}

exports.defaultToString = function (item) {
  if (item === null) {
    return 'NULL';
  } else if (item === undefined) {
    return 'UNDEFINED';
  } else if (typeof item === 'string' || item instanceof String) {
    return `${item}`;
  }
  return item.toString();
}

exports.swap = function (array, a, b) {
  /* const temp = array[a];
  array[a] = array[b];
  array[b] = temp; */
  [array[a], array[b]] = [array[b], array[a]];
}
exports.reverseCompare = function (compareFn) {
  return (a, b) => compareFn(b, a);
}

exports.defaultDiff = function (a, b) {
  return Number(a) - Number(b);
}
