/** 
 * new 做了什么
 * 1. 创建一个对象，继承构造函数的原型
 * 2. 将构造函数内部的 this 指向这个对象
 * 3. 执行构造函数内部代码
 * 4. 返回此对象
 */
/** 
 * @param <Constructor>
 * @return <Instance>
 */
function newFun(constructor,...args){
  const obj = Object.create(constructor.prototype)
  return constructor.apply(obj,args) || obj
}

function Person(name){
  this.name = name
}
const p = newFun(Person,'Any')
console.log('p: ', p); // p:  Person { name: 'Any' }

console.log('p instanceof Person: ', p instanceof Person); // true
