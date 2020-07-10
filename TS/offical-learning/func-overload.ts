function foo(x:string) : string
function foo(x:number) : number

function foo(x:string | number):any{
  if(typeof x === 'number'){
    return x * x
  }else if(typeof x === 'string'){
    return x
  }
}
const res = foo('3')

interface Card {
  suit: string;
  card: number;
  someArg: string
}
interface Deck {
  suits: string[];
  cards: number[];
  createCardPicker(this: Deck,someArg:string): () => Card;
}
let decks: Deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  // NOTE: The function now explicitly specifies that its callee must be of type Deck
  createCardPicker: function(this: Deck,someArg:string) {
      return () => {
          let pickedCard = Math.floor(Math.random() * 52);
          let pickedSuit = Math.floor(pickedCard / 13);

          return {suit: this.suits[pickedSuit], card: pickedCard % 13, someArg};
      }
  }
}

let cp = decks.createCardPicker(' I am a arg');
let pc = cp();

console.log("card: " + pc.card + " of " + pc.suit + pc.someArg);