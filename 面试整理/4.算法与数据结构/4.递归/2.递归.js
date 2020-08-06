/** 
 * 利用递归求解下面题目
 */

/** 
 * 求斐波那契数列的第 n 项
 * 1 1 2 3 5 8 ...
 */
function fib(n){
  if(n === 1 || n === 2) return 1
  if(n === 3) return 2
  return fib(n-1) + fib(n-2)
}
var n1 = 12
// var res1 = fib(n1)
// console.log('res1: ', res1);

/** 
 * 求 n 的阶乘
 */
function getN(n){
  if(n <= 2) return n
  return n * getN(n-1)
}
var n2 = 9
// var res2 = getN(n2)
// console.log('res2: ', res2);

/** 
 * 小青蛙跳台阶
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级。
 * 求该青蛙跳上一个n级的台阶总共有多少种跳法。
 */
function getNum(n){
  if(n === 1 ) return 1
  if( n === 2) return 2
  return getNum(n-2) + getNum(n-1)
}
var n3 = 3
var res3 = getNum(n3)
console.log('res3: ', res3);

