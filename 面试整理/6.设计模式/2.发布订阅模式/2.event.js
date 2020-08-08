var EventBus = /** @class */ (function () {
    function EventBus() {
        this.eventMap = Object.create(null);
    }
    /** 订阅事件 */
    EventBus.prototype.on = function (eventName, cb) {
        if (this.eventMap[eventName]) {
            this.eventMap[eventName].push(cb);
        }
        else {
            this.eventMap[eventName] = [cb];
        }
    };
    /** 激活事件 */
    EventBus.prototype.emit = function (eventName) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (this.eventMap[eventName]) {
            this.eventMap[eventName].forEach(function (cb) {
                cb.apply(void 0, args);
            });
        }
        else {
            throw new Error(eventName + " \u4E8B\u4EF6\u672A\u6CE8\u518C");
        }
    };
    /** 移除某事件 */
    EventBus.prototype.off = function (eventName) {
        if (this.eventMap[eventName]) {
            delete this.eventMap[eventName];
        }
    };
    /** 清空缓存事件 */
    EventBus.prototype.clear = function () {
        this.eventMap = Object.create(null);
    };
    return EventBus;
}());
var bus = new EventBus();
bus.on('greet', function (w1, w2) {
    console.log(w1 + w2);
});
bus.emit('greet', 'hello ', 'world');
bus.off('greet');
// export default new EventBus()
