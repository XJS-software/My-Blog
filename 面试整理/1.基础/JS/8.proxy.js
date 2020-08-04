/** 
 * Proxy
 */
const proxy = new Proxy({},{
  get(target,propKey,receiver){
    // target 被代理的对象,即 {}
    // receiver 当前 proxy 对象
    console.log('target,propKey: ', target,propKey);
    return 1
  },
  set(target,propKey,value,receiver){
    console.log('propKey,value: ', propKey,value);
    target[propKey] = value
  }
})

var a = proxy.a
console.log('a: ', a); // 1

proxy.b = 'b'
