/** 
 * DFS  深度优先遍历
 * 可以使用 BFS 的都可以使用 DFS
 * 但是第一个找到的可能不是离根节点最近的那个
 */

/** 模板一： 递归 */
function DFS(root,target,map){
  if(root === target) return true 
  for(var i=0;i<root.children.length;i++){
    if(!map.has(root.children[i])){
      return DFS(root.children[i],target,map)
    }
  }
}

/** 模板二：栈 */

