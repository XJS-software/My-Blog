/** 
 * 实现  ReadOnly 接口
 */
type MyReadOnly<T> = {
    readonly[K in keyof T]: T[K]
}

type Type51 = {
    name: string 
    age: number
}

const test51: MyReadOnly<Type51> = {
    name: 'test51',
    age: 10
}
// test51.name = 'update'  // Cannot assign to 'name' because it is a read-only property
// test51.age = 20         // Cannot assign to 'age' because it is a read-only property

type Type52 = number[]

const test52: MyReadOnly<Type52> = [1,2,3]
// test52.push(3)          // error 
// test52.length = 4       // error
// test52[0] = 1           // error
