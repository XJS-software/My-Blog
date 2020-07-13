interface lengthwise {
  length : number
}

//  <T>  泛型
function identity<T extends lengthwise> (arg: T):T {
  console.log(arg.length); // 
  // console.log(arg.width); // error
  return arg
}

identity({length:2, width:3})
// identity(2) // error


interface iT<T>{
  key: T
}
const obj: iT<number> = {
  key: 33
}

function getKeys<T,K extends keyof T>(o:T,name:K):T[K]{
  return o[name]
}

