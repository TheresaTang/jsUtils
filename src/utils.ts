/**
 * 判断是否数组
 */
export function isArray (params:any) : boolean {
    return Array.isArray ? Array.isArray(params) : Object.prototype.toString.call(params) === '[object Array]'
}
export function isObject (params:any) : boolean {
    return Object.prototype.toString.call(params) === '[object Object]'
}
export function isNull (params:any) : boolean {
    return !params && typeof params === 'object'
}
export default {
    isArray,
    isObject,
    isNull
}