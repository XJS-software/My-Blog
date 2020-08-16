/** 
 * BFS 深度优先搜索
 * 
 * 最先找到的距离根节点最近
 */

/** 模板 */

/** 
 * @param {Node} root 
 * @param {Any} target
 */
function BFS(root,target){
  let step = 0      // 距根节点距离
  const queue = []  // 队列
  const has = new Map()    // 有些情况下已遍历过的节点不能再次遍历
  queue.push(root)   // 根节点先入队列
  has[root] = true 
  
  while(queue.length > 0){
    step++
    let len = queue.length 
    for(let i=0;i<len;i++){
      let cur = queue.shift()   // 取队列中当前的第一个节点
      let next = cur.next
      if(next === target){
        // 判断此元素是否是目标元素
        return step
      }
      if(cur.next && !has[cur.next]){ 
        // 下个节点存在且没有被遍历过时，推入队列中
        queue.push(cur.next)
        has[cur.next] = true
      }
    }
  }
  return -1 // 未找到
}