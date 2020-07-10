function foo(x) {
    if (typeof x === 'number') {
        return x * x;
    }
    else if (typeof x === 'string') {
        return x;
    }
}
var res = foo('3');
var decks = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    // NOTE: The function now explicitly specifies that its callee must be of type Deck
    createCardPicker: function (someArg) {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13, someArg: someArg };
        };
    }
};
var cp = decks.createCardPicker('I am a arg');
var pc = cp();
console.log("card: " + pc.card + " of " + pc.suit + pc.someArg);
