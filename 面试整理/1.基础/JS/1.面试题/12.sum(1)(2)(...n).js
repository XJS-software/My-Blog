/** 
 * 实现一个求和函数:
 * sum(1)(2)(3)...(n)
 */
/** 
 * @params <number>
 * @return function
 * 
 */
function sum(...n){
  let total = n.reduce((pre,next)=>(pre+next))
  const foo = function(...num){
    total += num.reduce((pre,next)=>(pre+next))
    return foo
  }

  foo.toString = ()=>total
  return foo
}


var res1 = sum(1,2)(1)(2,3,4)
console.log('res1: ', res1);
var res2 = sum(1)(2)(1,2,3)
console.log('res2: ', res2);
