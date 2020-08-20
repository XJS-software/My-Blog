/** 
 * String 的原型方法
 * 
 * substr(start, [length])
 * substring(start, [end])
 * 
 * split
 * 
 * slice(start, [end])
 * 
 * charAt
 * charCodeAt
 * 
 * toUpperCase
 * toLowerCase
 * 
 * indexOf(s)
 * 
 * trim()
 * 
 * replace(Reg, str)
 * 
 * match()
 * 
 */

let str = 'some string code'

let res1 = str.substr(1,3)     // ome
console.log('res1: ', res1);
let res2 = str.substring(1,3)  // om
console.log('res2: ', res2);

let res3 = str.charAt(0) 
console.log('res3: ', res3);   // s
let res4 = str.charCodeAt(1)
console.log('res4: ', res4);   // 111

let res5 = str.split(' ')      
console.log('res5: ', res5);   // ['some', 'string', 'code']

let res6 = str.slice(1,8) 
console.log('res6: ', res6);   // ome str

let res7 = str.indexOf('i')
console.log('res7: ', res7);   // 8

let res8 = str.replace(/i/,'-')
console.log('res8: ', res8);   // some str-ng code