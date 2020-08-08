/** 
 * 数组打平
 */
var arr = [1,2,[3,[4,5,]],[6,[7,[8,[9]]]],[undefined,null,[{a:1}]]]

/** 
 * 1. toString
 * 会把元素转化为字符串，较差的方法
 */
var res1 = arr.toString().split(',')
// console.log('res1: ', res1);

/** 
 * 递归
 */
function flatten(arr,deepth){
  var deep = 1
  function flat(arr){
    if(deepth && deep > deepth) return arr
    deep++
    var res = []
    for(var item of arr ){
      if(Array.isArray(item)){
        res.push(...flat(item))
      }else{
        res.push(item)
      }
    }
    return res
  }
  return flat(arr)
}
var res2 = flatten(arr)
console.log('res2: ', res2);
