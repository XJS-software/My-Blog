// 普通解法
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMagicIndex = function(nums) {
  var idx = -1
  var len = nums.length
  for(var i = 0;i<len;i++){
      if(nums[i] === i){
          idx = i
          break 
      }
  }
  return idx
};

/** 
 * 优化
 * 使用间隔跳跃查找
 */
var findMagicIndex2 = function(nums) {
  var len = nums.length
  for(var i = 0;i<len;){
      if(nums[i] === i){
          return i
      }else{
        i = Math.max(nums[i],i+1)
      }
  }
  return -1
};
