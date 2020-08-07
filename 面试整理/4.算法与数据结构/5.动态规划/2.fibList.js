/** 
 * 1. 求斐波那契数列
 * 0, 1, 1, 2, 3, 5, 8 ... 
 * 
 * 利用动态规划求解斐波那契数列，明显比递归好
 * 解法中缓存了需要多次复用的值
 */
function gerFib(){
  // 目标 2: 缓存并复用以往结果 
  let fibList = [0,1]

  return function (n){
    if(n<2) return n

    
    if(fibList[n-1]) return fibList[n-1]

    // 目标 3: 按顺序从小规模往大规模计算
    for(let i=2;i<n+1;i++){
      // 目标 1: 建立状态转移方程  f(n) = f(n-1) + f(n-2)
      fibList[i] = fibList[i - 1] + fibList[i-2]
    }
    
    return fibList[fibList.length-1]
  }
}
const fib = gerFib()

// var res = fib(98)
// console.log('res: ', res);

// var res2 = fib(97)
// console.log('res2: ', res2);
