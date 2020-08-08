/** 
 * 实现继承的几种方式
 */
 
/** 
 * 1. 原型继承
 * 子类的原型为父类的实例
 * 
 * 缺点：
 * 1. 父类的实例变成原型之后，其私有实例属性变成了
 *    子类的原型属性
 * */
function Sup(){}

function Sub(){}
Sub.prototype = new Sup()
Sub.prototype.constructor = Sub

var s1 = new Sub() 
var r1 = s1 instanceof Sub
console.log('r1: ', r1);   // true
var r2 = s1 instanceof Sup
console.log('r2: ', r2);   // true


/** 
 * 2. 组合继承
 * 
 * 好处: 复用父类构造函数
 * 缺点: 同上
 */
function Super(name){
  this.name = name
}

function Suber(name,age){
  Super.call(this,name)
  this.age = age 
}

Suber.prototype = new Super()
Suber.prototype.constructor = Suber 

/** 
 * 3. 原型式继承
 * 
 * 利用 Object.create 直接创建一个对象的子对象，
 * 不需要写构造函数
 */
var person = {
  name: 'person',
  say(){
    console.log('I am a person');
  }
}

var stu = Object.create(person)
console.log('stu.__proto__ === person: ', stu.__proto__ === person);  // true
