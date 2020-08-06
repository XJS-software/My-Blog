/** 
 * JSONP
 * 1. script 标签没有跨域问题
 * 2. script 请求到的（合法）js 脚本会立即执行
 */

/** 
 * 使用 script 发送 JSONP
 * 1. 构建 url 
 * 2. 利用 url 生成 script 并加入页面
 * 3. 执行返回的 js 脚本
 * 4. 删除 script 标签
 */
function getJSONP(url:string,cb:Function) : void{
  getJSONP.counter++
  let cbName = 'getJSONP.' + getJSONP.counter
  if(url.indexOf('?') === -1){
    url += `?jsonp=${cbName}`
  }else{
    url += `&jsonp=${cbName}`
  }
  const script:any = document.createElement('script')
  getJSONP[getJSONP.counter] = function(response){
    try{
      cb(response)
    }
    finally{
      getJSONP[getJSONP.counter] = null
      script.parentNode.removeChild(script)
    }
  }
  script.url = url
  document.appendChild(script)
}
getJSONP.counter = 0

