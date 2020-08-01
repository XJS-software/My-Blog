/** 
 * 滑动窗口
 */

 /** 
  * 练习1.
  * 给定一个整数数组，
  * 计算长度为 'k' 的连续子数组的最大总和。
  */
const arr = [1,2,4,6,2,4,1,3,8,6,3,4,6,9,5,10,2,4,6,3,9,1,6]

/** 
 * 1. 双循环
 */
function getMaxSum(arr:Array<number>,k:number):number{
  if(k > arr.length){
    throw new Error('k 值输入错误')
  }
  var len = arr.length
  var sum:number = 0
  for(var i=0;i<len-k+1;i++){
    var temp: number = 0
    for(var j=0;j<k;j++){
      temp += arr[i+j]
    }
    if(i===0){
      sum = temp
    }
    sum = Math.max(sum,temp)
  }
  return sum
}

/** 
 * 2. 滑动窗口
 */
function getMaxSum2(arr:Array<number>,k:number):number{
  let len = arr.length
  if(k > len){
    throw new Error('k 值输入错误')
  }
  let temp:number = 0
  /** 计算第一个窗口的值 */
  for(let i=0;i<k;i++){
    temp += arr[i]
  }
  let sum = temp

  /** 
   * 移动窗口
   * sum 为上一个窗口的和 + 新移入数据 - 前一个移出的数据
   * */
  for(let i=k;i<len;i++){
    temp += arr[i] - arr[i-k]
    sum = Math.max(sum,temp)
  }
  return sum
}

const k:number = 1

var res1:number = getMaxSum(arr,k)
console.log('res1: ', res1);

const res2 = getMaxSum(arr,k)
console.log('res2: ', res2);


/** 
 * 练习2. 
 * 给定一个字符串 S 和一个字符串 T，
 * 请在 S 中找出包含 T 所有字母的最小子串。(minimum-window-substring)
 */