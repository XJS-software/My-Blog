/** 
 * 数组对象方法
 */

 /** 
  * push
  * pop
  * 
  * unshift
  * shift
  * 
  * reverse
  * 
  * sort([function])  // 改变原数组；默认由小到大排序
  * 
  * concat(args)  // 不改变原数组；可传多参；会打散数组；返回新数组
  * 
  * slice
  * 
  * splice
  * 
  * indexOf
  * lastIndexOf
  * 
  * every, some
  * forEach
  * filter
  * map
  * reduce
  * 
  */


var res1 = new Array(3)   // [undefined,undefined,undefined]
console.log('res1: ', res1);

let arr2 = [1,3,4,2]
var res2 =  arr2.sort()
console.log('res2: ', res2);
var res22 = arr2.sort((a,b)=> b-a)
console.log('res22: ', res22);

var arr3 = [1,4,3,2]
var res3 = arr3.concat(5,8,6,[10,9])
console.log('res3: ', res3);

var arr4 = [4,2,7,1]
var res4 = arr4.slice(1,3)  
console.log('res4: ', res4); // 2,7

var arr5 = [9,4,2]
var res51 = arr5.splice(1,1)  
console.log('res51: ', res51);
console.log('arr5: ', arr5);

var res52 = arr5.splice(1,1,2)
console.log('res52: ', res52);
console.log('arr5: ', arr5);
var res53 = arr5.splice(1)    
console.log('res53: ', res53);
console.log('arr5: ', arr5);

