interface IReadonly {
  readonly name : string 
  age: number 
}

const ming: IReadonly = {
  name: 'xiaoming',
  age: 19
}

// ming.name = 'hua' // error
ming.age = 20

const ary: ReadonlyArray<number> = [1,2,3,4]
// ary.push(1) // Property 'push' does not exist on type 'readonly number[]'.
// ary[1] = 2 // error