function createGenerator(list) {
    var idx = 0;
    return {
        next: function () {
            var done = idx >= list.length - 1;
            return {
                value: list[idx++],
                done: done
            };
        }
    };
}
var a = [12, 3, 3, 23, 43, 432, 5];
var g = createGenerator(a);
var res1 = g.next();
var res2 = g.next();
var res3 = g.next();
var res4 = g.next();
var res5 = g.next();
var res6 = g.next();
var res7 = g.next();
var res8 = g.next();
var res9 = g.next();
console.log('', res1, res2, res3, res4, res5, res6, res7, res8, res9);
