/** 
 * 汉明重量
 * 一串符号中非零符号的数量
 */
function haimingWeight(n){
  let num = 0
  while(n !== 0){
    n &= (n-1)
    num++
  }
  return num
}
var a = 4
var res = haimingWeight(a)
console.log('res: ', res);