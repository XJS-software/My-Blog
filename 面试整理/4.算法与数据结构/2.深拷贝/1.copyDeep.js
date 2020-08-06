/** 
 * 深拷贝
 * 
 */
/** 
 * @param <object>
 * @return <deep copy object>
 * 
 * 考虑如下几点
 * - RegExp 、 Date 类型数据、function - 直接返回
 * - 基础数据类型 - 直接返回
 * - object && Array - 递归
 */

function copyDeep(s){
  if(s instanceof RegExp) return new RegExp(s)
  if(s instanceof Date) return new Date(s)
  if(typeof s !== 'object' || s === null) return s 
  let res = Array.isArray(s) ? [] : {}
  for(var i in s){
    if(s.hasOwnProperty(i)){
      res[i] = copyDeep(s[i])
    }
  }
  return res
}

var t = {
  a: {
    b:[1,3,{
      f: 1
    }],
    d: {
      f: 3
    }
  },
  c: 2,
  g: function(){
    console.log('I am run');
  },
  cc: null,
  jj: undefined
}

const res1 =  copyDeep(t)
console.log('res1: ', res1);

/** 
 * 更多实现
 */
function copy(s,hash=new WeakMap()){
  if(s instanceof RegExp) return new RegExp(s)
  if(s instanceof Date) return new Date(s)
  if(typeof s !== 'object' || s === null) return s 
  
  if(hash.has(s)){
    // What is this for... ?
    return hash.get(s)
  }

  const res = new s.constructor() // [] | {}
  
  hash.set(s,res) // ?

  for(var i in s){
    if(s.hasOwnProperty(i)){
      res[i] = copyDeep(s[i])
    }
  }
  return res
}

const res2 = copy(t)
console.log('res2: ', res2);
