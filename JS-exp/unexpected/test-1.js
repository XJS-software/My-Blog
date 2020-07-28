/** 
 * JSON.stringify
 * 
 * arg2: replacer  Function | Array
 * arg3: space <= 10
 * 
 * arg2: Function (key,value)=>{ return value } 
 *       应该返回对应 value 值, 即不可修改对象属性值
 *       当返回 undefined 时，会忽略此属性，不进行序列化
 * 
 * arg2: Array 
 *       存在于此数组中的属性，将不会被序列化
 */

var foo = {
  bar: 'baz',
  f: 'o'
}

var res1 = JSON.stringify(foo,['bar'],2)
console.log('res1: ', res1);

var res2 = JSON.stringify(foo,function(k,v){
  if(k === 'bar'){
    return undefined
  }
  return v
},2)
console.log('res2: ', res2);