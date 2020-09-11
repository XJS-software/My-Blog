/** 
 * Partial 获取某类的部分 key
*/

type TT = {
    name: string 
    age: number 
}

type Ti = Partial<TT>

/** Partial 原理 */
type MyPartial<T> = {
    [k in keyof T]? : T[k]
}

type Tii = MyPartial<TT>
