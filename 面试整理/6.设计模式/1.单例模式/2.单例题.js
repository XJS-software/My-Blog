/** 
 * 实现Storage，使得该对象为单例，
 * 基于 localStorage 进行封装。
 * 实现方法 setItem(key,value) 和 getItem(key)。
 */
const getStorage = (
  function(){
    let store = {}
    store.getItem = function(k){
      return store[k]
    }
    store.setItem = function(k,v){
      store[k] = v
    }
    return function(){
      return store
    }
  }
)()

const Storage1 = getStorage()
const Storage2 = getStorage()

console.log('iii: ', Storage2 === Storage1);




