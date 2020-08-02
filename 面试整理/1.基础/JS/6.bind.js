/** 
 * bind 
 * 1. bind 返回一个函数，并为其绑定上下文
 * 2. bind 可预置参数
 * 3. bind 返回的函数若被 new ，可改变新对象的 this 指向
 */
Function.prototype.myBind = function(ctx,...args){
  const that = this 
  const B = function(){
    const _this = (this instanceof B) ? this : ctx
    return that.apply(_this,[...args,...arguments])
  }

}