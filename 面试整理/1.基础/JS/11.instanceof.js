// 起舞周刊 - 浅谈 instanceof 和 typeof 的实现原理
// https://mp.weixin.qq.com/s/XeMlGT47uR5eqEHJZNUHbA

/** 
 * instanceof
 * 
 * 判断右边数据的原型是否在左边数据的原型链上
 */
function Person(){}
const p = new Person()

const res = p instanceof Person 
console.log('res: ', res);     // true

/** 
 * 手写
 */
function isInstanceof(left,right){
  const rightProto = right.prototype
  let leftProto = left.__proto__
  while(leftProto){
    if(leftProto === rightProto){
      return true
    }
    leftProto = leftProto.__proto__
  }
  return false
}
const res2 = isInstanceof(p, Person)
console.log('res2: ', res2);   // true

const res3 = isInstanceof(p, Object)
console.log('res3: ', res3);   // true

const res4 = isInstanceof(p, Function)
console.log('res4: ', res4);   // false


/** 
 * 原型链总结
 * 1. 构造函数与原型的关系：
 *    构造函数.prototype -> 原型
 *    原型.constructor  -> 构造函数
 * 
 * 2. 构造函数生成实例
 *    实例.__proto__    -> 原型
 * 
 * 3. 构造函数默认的原型都是 Object 的实例，除非手动修改
 *    Person.prototype.__proto__ === Object.prototype
 */

const res5 = Person.prototype.__proto__ === Object.prototype
console.log('res5: ', res5);   // true

/** 
 * Object.create(obj)
 * 以 obj 对象为原型，生成一个子对象
 */
const fObj = {
  name: 'father'
}
const sObj = Object.create(fObj)

console.log('sObj.name: ', sObj.name);
console.log('sObj.__proto__ === fObj: ', sObj.__proto__ === fObj);

