/** 
 * 防抖，节流
 * bind
 */

/** 
 * 防抖
 */
/** 直接等待 ms 后执行 */
function debounce(cb,timeout=200){
  let timer = null
  return function(...args){
    const ctx = this
    if(timer){
      clearTimeout(timer)
      timer = null
    }
    timer = setTimeout(() => {
      cb.apply(ctx,args)
      clearTimeout(timer)
      timer = null
    }, timeout);
  }
}
/** 立即执行后等待 */
function debounceNow(cb,timeout=200){
  let timer = null
  return function(...args){
    const ctx = this
    if(timer){
      clearTimeout(timer)
      timer = setTimeout(() => {
        cb.apply(ctx,args)
        clearTimeout(timer)
        timer = null
      }, timeout);
    }else{
      cb.apply(ctx,args)
      timer = setTimeout(() => {
        clearTimeout(timer)
        timer = null
      }, timeout);
    }
  }
}


/** 
 * 节流
 */
/** 定时结尾执行 */
function throttle(cb,timeout=300){
  let timer = null
  return function(...args){
    const ctx = this 
    if(!timer){
      timer = setTimeout(() => {
        cb.apply(ctx,args)
        clearInterval(timer)
        timer = null
      }, timeout);
    }
  }
}

/** 立即执行 */
function throttleNow(cb,timeout=300){
  let timer = null
  return function(...args){
    const ctx = this 
    if(!timer){
      cb.apply(ctx,args)
      timer = setTimeout(() => {
        clearInterval(timer)
        timer = null
      }, timeout);
    }
  }
}

 /** 
  * 深拷贝
  * 1. JSON 
  * 问题：1. 循环引用时会报错
  *      2. 对象值为函数，undefined 时无法拷贝
  */
function cloneDeep1(obj){
  return JSON.parse(JSON.stringify(obj))
}
const obj1 = {
  b: 1, 
  a: undefined, // 无法拷贝
  c: ()=>{},    // 无法拷贝
  d: ''
}
const obj2 ={
  a: ''
}
/** 循环引用 ，将会报错 */
// obj1.d = obj2 
// obj2.a = obj1

const res1 = cloneDeep1(obj1)
console.log('res1: ', res1);
