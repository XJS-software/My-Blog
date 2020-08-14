/** 
 * 手动实现一个生成器
 */
interface IIteratore{
  next():IIteratoreRes
}

interface IIteratoreRes {
  value: any 
  done: boolean
}

function createGenerator(list:Array<any>):IIteratore{
  let idx = 0
  return {
    next():IIteratoreRes{
      let done = idx >= list.length - 1
      return {
        value: list[idx++],
        done
      }
    }
  }
}

var a = [12,3,3,23,43,432,5]
let g = createGenerator(a)

let res1 =  g.next()
let res2 =  g.next()
let res3 =  g.next()
let res4 =  g.next()
let res5 =  g.next()
let res6 =  g.next()
let res7 =  g.next()
let res8 =  g.next()
let res9 =  g.next()

console.log('', res1,res2,res3,res4,res5,res6,res7,res8,res9,);


