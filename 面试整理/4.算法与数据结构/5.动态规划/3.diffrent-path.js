/** 
 * leetCode: 不同路径
 * https://leetcode-cn.com/problems/unique-paths
 */

/** 
一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。
机器人每次只能向下或者向右移动一步。
机器人试图达到网格的右下角（在下图中标记为“Finish”）。
问总共有多少条不同的路径？
 */

/** 使用递归（差），时间复杂度 O(2^n) */
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  if(m === 1) return 1
  if(n === 1) return 1
  return uniquePaths(m-1,n) + uniquePaths(m,n-1)
};
// let res1 = uniquePaths(7,3)
// console.log('res1: ', res1);


/** 使用动态规划 O(m * n) */
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  // 缓存所有点的所有可能走法数
  let res = [[]]
  if(m === 1) return 1
  if(n === 1) return 1

  // 从小规模，到大规模求解
  for(var i=1;i<m;i++){
    res[i] = []
    for(var j=1;j<n;j++){
      // 1. 找出状态方程
      res[i][j] = (res[i-1][j] || 1 )+ (res[i][j-1] || 1)
    }
  }
  return res[m-1][n-1]
};
// var res2 = uniquePaths(10,7)
// console.log('res2: ', res2);
