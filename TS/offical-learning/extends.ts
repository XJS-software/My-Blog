interface ILabel {
  label: string 
}

interface ISome {
  some? :string
}

interface IOption extends ILabel {
  value: number
}

const t1 : IOption = {
  label: 't1',
  value: 1
}

const t2 = <IOption>{}  // 类型断言？
t2.label = 't2'
t2.value = 2

const t3 = {} as IOption // 类型断言


interface collection extends ILabel, ISome {
  co: string
}

interface IMixin {
  (start: number): string 
  interval: number
  reset():void
}

function getMixin():IMixin{
  let mixin = <IMixin>function (i){return i + ''}
  mixin.interval = 1
  mixin.reset = function(){}
  return mixin
}