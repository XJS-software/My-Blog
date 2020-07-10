interface labeledValue {
  label: string
}

function say(params: labeledValue):void{
  console.log(params.label);
}

const test = {
  label: 'a Label',
  value: 1     
}

say(test) // Its ok to log 'a Label'

say({
  label: 'haha',
  // value: 2 // error
})
// 作为参数传递时，会对对象进行额外类型检查；
// 但是将对象赋值给一个变量之后，进行参数传递就不会进行额外类型检查


const test2 : labeledValue = {
  label: 'some label',
  // value: 1  // error to assign value
}