/** 
 * Pick 从类型中摘取 key 形成新的类型
*/
type SomeT = {
    name: string 
    age: number 
    role: string 
}

type SonT = Pick<SomeT, 'name'>

/** Pick 原理 */
type MyPick<T,K extends keyof T> = {
    [P in K]: T[P]
} 

type SonT2 = MyPick<SomeT, 'name'>