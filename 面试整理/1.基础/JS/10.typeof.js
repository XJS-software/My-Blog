/** 
 * typeof 与 instanceof 的原理
 * 1. 对基本数据的类型判断没有问题, null 除外
 * 2. 对于对象的判断不精确
 */
var a = typeof 'a'
var b = typeof 1
var c = typeof true 
var d = typeof undefined
var e = typeof null   // object
var f = typeof Symbol('f')
var g = typeof function(){} // function 
var h = typeof {}  // object
var i = typeof []  // object
console.log(a,b,c,d,e,f,g,h,i);

/** 
 * 原理
 * js 底层存储变量时，会在低 1-3 位存储变量类型信息
 * 000 对象
 * 010 浮点数
 * 100 字符串
 * 110 布尔值
 * 1   整数
 * 
 * null:      机器码均为 0 ，因此 typeof null === 'object'
 * undefined: 用 -2^30 表示
 */

/** 
 * 精确判断数据类型
 */
function getTypeOf(value){
  const res = Object.prototype.toString.call(value)
  const len = res.length 
  return res.substring(8,len-1).toLowerCase()
}
var res1 = getTypeOf('1')
console.log('res1: ', res1);  // string

var res2 = getTypeOf({})
console.log('res2: ', res2);  // object
