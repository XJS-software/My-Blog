interface IFunc {
  (a: number, b: string):number
}

const fun: IFunc = function(pre,next){
  return pre + next.length
}

const func: (arg: number) => number = function(arg){
  return arg
}

function foo(arg: string):void {
} 

const dd = {
  num: 10,
  names: ['hello','world'],
  genSayName(){
    console.log(this.num);
    return ()=>{
      console.log(`${this.num}, ${this.names.join(', ')}`);
    }
  }
}

const sayName = dd.genSayName()
sayName()

let deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  createCardPicker: function() {
      // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
      return ()=> {
          let pickedCard = Math.floor(Math.random() * 52);
          let pickedSuit = Math.floor(pickedCard / 13);

          return {suit: this.suits[pickedSuit], card: pickedCard % 13};
      }
  }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log("card: " + pickedCard.card + " of " + pickedCard.suit);


