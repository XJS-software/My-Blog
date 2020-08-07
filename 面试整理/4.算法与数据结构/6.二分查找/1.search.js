/** 
 * 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target
 * 写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  const foo = function(nums,target,left,right){
    if(left > right) return -1
    var half = Number.parseInt((left + right)/2)
    if(nums[half] > target){
      return foo(nums,target,left,half-1)
    }else if(nums[half] < target){
      return foo(nums,target,half+1,right)
    }else{
      return half
    }
  }
  return foo(nums,target,0,nums.length)
};


var nums = [-1,0,3,5,9,12]
var target = 2
var res = search(nums,target)
console.log('res: ', res);