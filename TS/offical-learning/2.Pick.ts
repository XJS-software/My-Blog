/** 
 * Pick 从类型中摘取 key 形成新的类型
*/
type SomeT = {
    name: string 
    age: number 
    role: string 
}

type SonT = Pick<SomeT, 'name'>