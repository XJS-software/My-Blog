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





