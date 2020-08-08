/** 
 * 发布订阅模式，在工作中它的能量超乎你的想象 - 奇舞周刊
 * https://mp.weixin.qq.com/s/pVzuBbB2C7UtC4uCYefDnw
 */

/** 
 * event 结构
 */
interface IEvent {
  /** 缓存事件 */
  eventMap: tEventMap | {}
  /** 订阅事件 */
  on(eventName:string,cb:Function):void
  /** 激活事件 */
  emit(eventName:string,args:any):void
  /** 移除某事件 */
  off(eventName:string):void
  /** 清空缓存事件 */
  clear():void
}

type tEventMap = {
  [propName: string]: Function[]
}

const eventBus = Object.create(null) as IEvent

eventBus.eventMap = Object.create(null)

eventBus.on = function(this:IEvent,eventName,cb){
  if(this.eventMap[eventName]){
    this.eventMap[eventName].push(cb)
  }else{
    this.eventMap[eventName] = [cb]
  }
}

eventBus.emit = function(this:IEvent,eventName:string,...args){
  if(this.eventMap[eventName]){
    this.eventMap[eventName].forEach(cb=>{
      cb(...args)
    })
  }
}

eventBus.off = function(this:IEvent,eventName:string){
  if(this.eventMap[eventName]){
    delete this.eventMap[eventName]
  }
}

eventBus.clear = function(this:IEvent){
  this.eventMap = Object.create(null)
}