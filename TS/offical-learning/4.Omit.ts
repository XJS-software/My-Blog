/** 
 * Omit 从某类型中移除某 key 
 * https://mariusschulz.com/articles/the-omit-helper-type-in-typescript
*/

type TTi = {
    name: string 
    age: number 
}

type TTii = Omit<TTi,'name'>

/** Omit 原理： Exclude */
