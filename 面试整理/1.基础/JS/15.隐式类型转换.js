/** 
 * 有对象存在的类型转换
 */
var r1 = [] == {} // false => '' == [object Object]
console.log('r1: ', r1);

var r2 = [] == 0  // true => '' == 0
console.log('r2: ', r2);

var r3 = {} == 0  // false => [object Object] == 0
console.log('r3: ', r3);

var r4 = {} == 1 // false => [object Object] == 1
console.log('r4: ', r4);

var r5 = {} == true // false => [object Object] => true => NaN == 1
console.log('r5: ', r5);

var r6 = [] == true // false => '' == true => 0 == 1
console.log('r6: ', r6);


/** ------ 修改对象 valueOf 方法 ------ */
var a = [] 
a.valueOf = function(){
  return 'array'
}
var res1 = a == 'array'
console.log('res1: ', res1);  // true

var b = {}
b.valueOf = function(){
  return 'object'
}
var res2 = b == 'object'
console.log('res2: ', res2); // true


/** -------- 为对象新增 Symbol.toPrimitive --------- */
var o = {}
o[Symbol.toPrimitive] = function(){
  console.log('Symbol.toPrimitive is run');
  return 'object'  
}
var res3 = o == 'object'
console.log('res3: ', res3); // Symbol.toPrimitive is run true


