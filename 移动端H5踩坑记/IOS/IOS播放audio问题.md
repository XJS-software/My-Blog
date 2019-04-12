### IOS 端播放 audio 的困难
1. 起因
    
    1.1  IOS / Safari 不允许自动播放 audio，只能通过用户交互触发。

    1.2  IOS / Safari 不能循环 / 再次播放 audio

2. 问题 1.1 的解决方式：
- 需要用户手动点击，立即调用 audio.play() 方法才能进行语音播放。
- 针对需要网络请求 audio 资源的，可以通过以下方案：
```javascript
$("#start").on('click',function(){
    audio_success.play();
    audio_success.pause();
    $.get("/test/test", function() {
        audio_success.play();
    });
});
```
- 经过 播放，暂停，在之后的异步请求中进行播放就没有问题。P.S 此方案由网上借鉴而来，实际项目中本人采用如下方法：
> 1. 页面加载就异步请求 audio_url 之后保存，
> 2. 点击播放时，设置 *audio.src = audio_url; audio.paly();* 进行播放。

3. 问题 1.2 的解决方案
- 保存 audio 链接，每次点击播放时进行 *audio.src = audio_url; audio.paly();* 操作。
- P.S 由于项目中没有自动循环播放的需求，所有没有测试如何自动播放音频功能。