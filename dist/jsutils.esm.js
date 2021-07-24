/**
 * 判断是否数组
 */
function isArray(params) {
  return Array.isArray ? Array.isArray(params) : Object.prototype.toString.call(params) === '[object Array]';
}
function isObject(params) {
  return Object.prototype.toString.call(params) === '[object Object]';
}
function isNull(params) {
  return !params && typeof params === 'object';
}

export { isArray, isNull, isObject };
//# sourceMappingURL=jsutils.esm.js.map
