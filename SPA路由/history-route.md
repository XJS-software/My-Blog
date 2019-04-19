### [SPA路由机制详解](https://juejin.im/post/5ba499765188255c6666e619)
> P.S 上述文章已经做出了较为清除的表述，以下进行要点记录

1. SPA 路由机制实现的两种方式

   1.1 利用 URL 的 hash(#) 

   1.2 **利用 H5 新增方法 History interface (本文涉及的内容)**

---

2. history 对象回顾
- back     退后一步
- forward  前进一步
- go(n)    前进 / 退后 n 步，go(0) 刷新

---

3. H5 history 新特性
- **往返缓存**
> 默认情况下，浏览器会缓存当前会话页面，这样当下一个页面点击后退按钮，或前一个页面点击前进按钮，浏览器便会从缓存中提取并加载此页面，这个特性被称为“往返缓存”。

- **pushState(state,title,url)** 往历史记录栈中添加记录

> *state*: 一个 JS 对象（不大于640kB），主要用于在 popstate 事件中作为参数被获取。如果不需要这个对象，此处可以填 null</br>
>
> *title*: 新页面的标题，部分浏览器(比如 Firefox )忽略此参数，因此一般为 null</br>
>
> *url*: 新历史记录的地址，可为页面地址，也可为一个锚点值，新 url 必须与当前 url 处于同一个域，否则将抛出异常，此参数若没有特别标注，会被设为当前文档 url</br>

- 例子:
```javascript
// 现在是 localhost/1.html
const stateObj = { foo: 'bar' };
history.pushState(stateObj, 'page 2', '2.html');

// 浏览器地址栏将立即变成 localhost/2.html
// 但！！！
// 不会跳转到 2.html
// 不会检查 2.html 是否存在
// 不会在 popstate 事件中获取
// 不会触发页面刷新

// 这个方法仅仅是添加了一条最新记录
```
```html
<body>

    </br>
    <button onclick="pushState()">pushState</button>
    </br>

    <script>
        // 以下代码需要在本地服务器中运行
        function pushState(){
            const state = {foo: 'bar'};
            // 此时 url -> localhost:8080/test
            // 点击返回上一页回到 localhost:8080/history-route.html
            history.pushState(state,'page 2','/test'); 
            console.log('--',history.state); // {foo: 'bar'}                   
        }
    </script>

</body>
```

- **replaceState(state, title, url)**改变当前的历史记录

> 参数含义同 pushstate </br>
>
> 改变当前的历史记录而不是添加新的记录</br>
>
> 同样不会触发 popstate</br>

```html
<body>

    </br>
    <button onclick="replaceState()">replaceState</button>
    </br>

    <script>
        // 以下代码需要在本地服务器中运行
        function replaceState() {
            const state = {
                foo: 'bar'
            };
            // 此时 url -> localhost:8080/replace-state
            // 点击返回上一页不能回到 localhost:8080/history-route.html
            history.replaceState(state, 'page 2', '/replace-state');
            console.log('--', history.state); // {foo: 'bar'} 
        }

    </script>

</body>
```

- **history.state** 返回当前历史的 state

- **history.popState** 
> 每当同一个文档的浏览历史（即 history 对象）出现变化时，就会触发 popstate 事件。</br>
>
> 注意：若仅仅调用 pushState 方法或 replaceState 方法 ，并不会触发该事件，只有用户点击浏览器倒退按钮和前进按钮，或者使用 JavaScript 调用 back 、 forward 、 go 方法时才会触发。另外，该事件只针对同一个文档，如果浏览历史的切换，导致加载不同的文档，该事件也不会触发。
```javascript
window.onpopstate = (event) => {
    console.log(event.state) //当前历史记录的state对象
}
```
---
4. 实现 history 路由模式










```javascript

```