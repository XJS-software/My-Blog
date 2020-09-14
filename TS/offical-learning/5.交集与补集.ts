type User = {
    type: 'user'
    name: string 
    age: number 
    occupation: string
}

type Admin = {
    type: 'admin'
    name: string 
    age: number 
    role: string
}

/** 
 * 联合类型 |
 * 此类型可以为联合成员中的任何一种类型
 * 但注意，不能混杂其他类型成员的属性
 */
type Person = Admin | User

let person: Person = {
    type: 'admin', // 这里 person 是 Admin 类型
    name: 'p',
    age: 30,
    role: 'role'
}

let person2: Person = {
    type: 'user', // 这里 person2 是 User 类型
    name: 'p2',
    age: 20,
    occupation: 'o'
}

type PP = Admin & User // type: 'user' 与 type: 'admin' 无法在一个类型中同时存在，所以 PP 是 Never


type Dog = {
    name: string 
    age: number 
    bake(): void
}

type Cate = {
    name: string 
    age: number 
    miao():void
}

/** 
 * 交叉类型
 * 此类型同时拥有所有类型的属性
 */
type Puppy = Dog & Cate

let puppy1:Puppy = {
    name: 'xixi',
    age: 5,
    bake(){},
    miao(){}
}


