/** 
 * 只能实例化一个单例的构造函数
 */

 /** 
  * 使用工厂函数
  * 利用闭包，与重写构造函数
  */
function Singleton(){
  var instance = this 
  Singleton =  function(){
    return instance
  }
}
var s = new Singleton()
var s2 = new Singleton()

console.log('s === s2: ', s === s2);

/** 
 * 使用 class
 */
class Singleton2 {
  constructor(){
    if(Singleton2.instance){
      return Singleton2.instance
    }else{
      Singleton2.instance = this
      return this
    }
  }
}
const s3 = new Singleton2()
const s4 = new Singleton2()
console.log('s3 === s4: ', s3 === s4);

