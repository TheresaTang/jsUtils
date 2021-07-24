'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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

exports.isArray = isArray;
exports.isNull = isNull;
exports.isObject = isObject;
//# sourceMappingURL=jsutils.cjs.development.js.map
