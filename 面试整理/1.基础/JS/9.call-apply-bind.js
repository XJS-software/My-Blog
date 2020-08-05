/** 
 * 手写 call / apply / bind
 */
/** 
 * call
 */
Function.prototype.myCall = function(ctx,...args){
  const key = Symbol('key')
  const cb = this 
  if(ctx === undefined || ctx === null){
    ctx = window
  }else{
    ctx = Object(ctx) // 基本类型会被转换为对应的包装类型
  }
  ctx[key] = cb 
  const res = ctx[key](...args)
  delete ctx[key]
  return res
}

var obj = {
  name: 'obj'
}

function sayName (greet){
  console.log(greet + '  ' + this.name);
}

sayName.myCall(obj,'hello')

/** 
 * apply
 */
Function.prototype.myApply = function(ctx,arr){
  const key = Symbol('unionKey')
  if(ctx === undefined || ctx === null){
    ctx = window
  }else{
    ctx = Object(ctx)
  }
  ctx[key] = this 
  const res = ctx[key](...arr)
  delete ctx[key]
  return res
}
sayName.myApply(obj,['hello'])

/** 
 * bind
 */
Function.prototype.myBind = function(ctx,...args){
  const cb = this 
  const outputFun = function(){
    ctx = this instanceof outputFun ? this : ctx
    return cb.apply(ctx,[...args,...arguments])
  }
  outputFun.prototype = Object.create(cb.prototype)
  return outputFun
}

function son (name,age){
  this.name = name 
  this.age = age
  console.log('son is run');
}
son.prototype.sayName = function () {
  console.log( ' my name: ',this.name);
  return this.name
}

const father = {
  name: 'father'
}
const son1 = son.myBind(father)
son1()

const sonIns = new son1('jj',24)
sonIns.sayName()