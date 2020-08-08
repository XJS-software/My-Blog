
/** 
 * event 结构
 */
interface IEvent {
  /** 缓存事件 */
  eventMap: IEventMap | {}
  /** 订阅事件 */
  on(eventName:string,cb:Function):void
  /** 激活事件 */
  emit(eventName:string,args:any):void
  /** 移除某事件 */
  off(eventName:string):void
  /** 清空缓存事件 */
  clear():void
}

type IEventMap = {
  [propName: string]: Function[]
}


class EventBus{
  /** 缓存事件 */
  eventMap: IEventMap | {}
 
  constructor(){
    this.eventMap = Object.create(null)
  }
  /** 订阅事件 */
  on(this:IEvent,eventName:string,cb:Function):void{
    if(this.eventMap[eventName]){
      this.eventMap[eventName].push(cb)
    }else{
      this.eventMap[eventName] = [cb]
    }
  }
  /** 激活事件 */
  emit(this:IEvent,eventName:string,...args:any[]):void{
    if(this.eventMap[eventName]){
      this.eventMap[eventName].forEach(cb=>{
        cb(...args)
      })
    }else{
      throw new Error(`${eventName} 事件未注册`);
    }
  }
  /** 移除某事件 */
  off(this:IEvent,eventName:string):void{
    if(this.eventMap[eventName]){
      delete this.eventMap[eventName]
    }
  }
  /** 清空缓存事件 */
  clear(this:IEvent,):void{
    this.eventMap = Object.create(null)
  }
}

const bus = new EventBus()

bus.on('greet',function(w1,w2){
  console.log(w1 + w2);
})

bus.emit('greet','hello ','world')

bus.off('greet')

// export default new EventBus()