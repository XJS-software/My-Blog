var fun = function (pre, next) {
    return pre + next.length;
};
var func = function (arg) {
    return arg;
};
function foo(arg) {
}
var dd = {
    num: 10,
    names: ['hello', 'world'],
    genSayName: function () {
        var _this = this;
        console.log(this.num);
        return function () {
            console.log(_this.num + ", " + _this.names.join(', '));
        };
    }
};
var sayName = dd.genSayName();
sayName();
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
