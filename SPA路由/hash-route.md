### [SPA路由机制详解](https://juejin.im/post/5ba499765188255c6666e619)
> P.S 上述文章已经做出了较为清除的表述，以下进行要点记录

1. SPA 路由机制实现的两种方式

   1.1 **利用 URL 的 hash(#) (本文涉及的内容)**

   1.2 利用 H5 新增方法 History interface

---
2. hash(#)
- SPA 监听 hash 变化，进行相应页面的渲染。例如：[网易云音乐](https://music.163.com/)
- hash

```javascript
// 获取 url 中 hash 字符串
window.location.hash
```
```javascript
// http://localhost:8888/#/abc 的 hash 字符串为 #/abc
```
```javascript
// 监听 hash 变化事件：
window.addEventListener('hashchange', e => {        
    // TODO
})
```
---

3. 渲染对应组件
- 手动点击 / 设置修改 hash -> hash 值改变 -> 触发 onhashchange 事件 -> 执行组件加载与渲染

```html
  <div id="id"></div>
  <a href="#/test1">测试1</a>
  <a href="#/test2">测试2</a>
  <a href="#/test3">测试3</a>
  </br>
  <button onclick="autoChangeHash()">定时修改 hash 值</button>

  <script>
    // 监测 hash 变化
    window.addEventListener('hashchange', () => {
      // 获取关键渲染节点
      let div = document.getElementById('id');      
      let hash = window.location.hash;
      // 修改节点，渲染组件
      div.innerHTML = hash;
    })

    /** 
     * 触发 hash 改变的两种方式：
     * 1. 手动点击 a 标签修改 hash 
     * 2. 通过 window.location.hash 修改
     * */
    function autoChangeHash(){
      var i = 0;
      setInterval(()=>{
        window.location.hash = `autoChangeHash-${i++}`;                
        console.log('i->',i);
      },1000)
    }
  </script>
```
---

4. 如何获取渲染组件
- 通过 hash 进行加载不同页面的流程如上三步所示。最后便是如何获取组件内容，多以模块的形式将组件 export 并进行 import 加载；又或者发送 ajax 请求加载对应的 HTML 模板文件。

5. 将以上代码封装

```html
<body>
  <div id="id"></div>
  <a href="#/test1">测试1</a>
  <a href="#/test2">测试2</a>
  <a href="#/test3">测试3</a>
  </br>
  <button onclick="alterHash()">404</button>

  <script>
    // import hashDemo from './hash-demo.js';
    let hashDemo = '我应该从 ./hash-demo.js 导入';

    class MyRoute {
      constructor(){
        this.routes = {}; // 维护注册路由
        this.currentHash = ''; // 保持当前路由
      }

      // 内部注册路由
      registerRoutes(route,callback=()=>{}){
        this.routes[route] = callback;
      }

      // 渲染页面
      render(){
        this.currentHash = window.location.hash.slice(1) || '/';
        if(this.routes[this.currentHash]){
          this.routes[this.currentHash]();
        }else{
          contentBox.innerHTML = '404 未找到资源';
        }        
      }

      // 初始化
      init(){
        window.addEventListener('hashchange',this.render.bind(this),false);
      }
    }
    // 初始化
    window.newRoute = new MyRoute();
    newRoute.init();

    // 获取渲染父节点
    const contentBox = document.getElementById('id');

    // 注册路由
    newRoute.registerRoutes('/test1',()=>{
      contentBox.innerHTML = 'test1';
    })

    newRoute.registerRoutes('/test2',()=>{
      contentBox.innerHTML = hashDemo;
    })
    
    newRoute.registerRoutes('/test3',()=>{
      setTimeout(()=>{
        contentBox.innerHTML = '异步请求内容...';
      },400);
    })

    // 模拟 404
    function alterHash(){
      window.location.hash = '404';
    }

  </script>
</body>

```