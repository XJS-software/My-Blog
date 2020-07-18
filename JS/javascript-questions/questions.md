源自: [JavaScript Questions](https://github.com/lydiahallie/javascript-questions)

1. 
```javascript
function sayHi() {
  console.log(name);
  console.log(age);
  var name = 'Lydia';
  let age = 21;
}

sayHi();
```
2. 
```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
```

3.
```javascript
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter());
console.log(shape.perimeter()); // attention!
```

4. 
```javascript
+true;
!'Lydia';
```

5.

```javascript
const bird = {
  size: 'small',
};

const mouse = {
  name: 'Mickey',
  small: true,
};

A: mouse.bird.size is not valid
B: mouse[bird.size] is not valid
C: mouse[bird["size"]] is not valid
D: All of them are valid
```

6.
```javascript
let c = { greeting: 'Hey!' };
let d;

d = c;
c.greeting = 'Hello';
console.log(d.greeting);
```

7. 

```javascript
let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b);
console.log(a === b);
console.log(b === c);
```

8. 
```javascript
class Chameleon {
  static colorChange(newColor) {
    this.newColor = newColor;
    return this.newColor;
  }

  constructor({ newColor = 'green' } = {}) {
    this.newColor = newColor;
  }
}

const freddie = new Chameleon({ newColor: 'purple' });
console.log(freddie.colorChange('orange'));
```

9.
```javascript
let greeting;
greetign = {}; // Typo error happend occasionally
console.log(greetign);
```

10.
```javascript
function bark() {
  console.log('Woof!');
}

bark.animal = 'dog';
```
11. 
```javascript
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Person('Lydia', 'Hallie');
Person.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

console.log(member.getFullName());
```

12. 
```javascript
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const lydia = new Person('Lydia', 'Hallie');
const sarah = Person('Sarah', 'Smith');

console.log(lydia);
console.log(sarah);
```

13. 
```javascript
What are the three phases of event propagation?

A: Target > Capturing > Bubbling
B: Bubbling > Target > Capturing
C: Target > Bubbling > Capturing
D: Capturing > Target > Bubbling
```

14.
```javascript
All object have prototypes.

A: true
B: false
```

15.
```javascript
function sum(a, b) {
  return a + b;
}

sum(1, '2');
```

16.
```javascript
let number = 0;
console.log(number++);
console.log(++number);
console.log(number);
```

17.
```javascript
function getPersonInfo(one, two, three) {
  console.log(one);
  console.log(two);
  console.log(three);
}

const person = 'Lydia';
const age = 21;

getPersonInfo`${person} is ${age} years old`;

A: "Lydia" 21 ["", " is ", " years old"]
B: ["", " is ", " years old"] "Lydia" 21
C: "Lydia" ["", " is ", " years old"] 21
```

18. 
```javascript
function checkAge(data) {
  if (data === { age: 18 }) {
    console.log('You are an adult!');
  } else if (data == { age: 18 }) {
    console.log('You are still an adult.');
  } else {
    console.log(`Hmm.. You don't have an age I guess`);
  }
}

checkAge({ age: 18 });

A: You are an adult!
B: You are still an adult.
C: Hmm.. You don't have an age I guess
```

19.
```javascript
function getAge(...args) {
  console.log(typeof args);
}

getAge(21);
```


20.
```javascript
function getAge() {
  'use strict';
  age = 21;
  console.log(age);
}

getAge();
```

21.
```javascript
const sum = eval('10*10+5');
```

22.
```javascript
sessionStorage.setItem('cool_secret', 123);

A: Forever, the data doesn't get lost.
B: When the user closes the tab.
C: When the user closes the entire browser, not only the tab.
D: When the user shuts off their computer.
```

23.
```javascript
var num = 8;
var num = 10;

console.log(num);
```

24.
```javascript
const obj = { 1: 'a', 2: 'b', 3: 'c' };
const set = new Set([1, 2, 3, 4, 5]);

obj.hasOwnProperty('1');
obj.hasOwnProperty(1);
set.has('1');
set.has(1);

A: false true false true
B: false true true true
C: true true false true
D: true true true true
```

25.
```javascript
const obj = { a: 'one', b: 'two', a: 'three' };
console.log(obj);

A: { a: "one", b: "two" }
B: { b: "two", a: "three" }
C: { a: "three", b: "two" }
D: SyntaxError
```

26. 
```javascript
The JavaScript global execution context creates two things for you: the global object, and the "this" keyword.

A: true
B: false
C: it depends
```

27. 
```javascript
for (let i = 1; i < 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
```

28.
```javascript
String.prototype.giveLydiaPizza = () => {
  return 'Just give Lydia pizza already!';
};

const name = 'Lydia';

name.giveLydiaPizza();

A: "Just give Lydia pizza already!"
B: TypeError: not a function
C: SyntaxError
D: undefined
```

29.
```javascript
const a = {};
const b = { key: 'b' };
const c = { key: 'c' };

a[b] = 123;
a[c] = 456;

console.log(a[b]);
```

30.
```javascript
const foo = () => console.log('First');
const bar = () => setTimeout(() => console.log('Second'));
const baz = () => console.log('Third');

bar();
foo();
baz();

```

31.
```javascript
// What is the event.target when clicking the button?

<div onclick="console.log('first div')">
  <div onclick="console.log('second div')">
    <button onclick="console.log('button')">
      Click!
    </button>
  </div>
</div>

A: Outer div
B: Inner div
C: button
D: An array of all nested elements.
```

32.
```javascript
// When you click the paragraph, what's the logged output?

<div onclick="console.log('div')">
  <p onclick="console.log('p')">
    Click here!
  </p>
</div>

A: p div
B: div p
C: p
D: div
```

33. 
```javascript
const person = { name: 'Lydia' };

function sayHi(age) {
  return `${this.name} is ${age}`;
}

console.log(sayHi.call(person, 21));
console.log(sayHi.bind(person, 21));

A: undefined is 21 Lydia is 21
B: function function
C: Lydia is 21 Lydia is 21
D: Lydia is 21 function
```

34.
```javascript
function sayHi() {
  return (() => 0)();
}

console.log(typeof sayHi());
```

35.
```javascript
//  Which of these values are falsy?
0;
new Number(0);
('');
(' ');
new Boolean(false);
undefined;

A: 0, '', undefined
B: 0, new Number(0), '', new Boolean(false), undefined
C: 0, '', new Boolean(false), undefined
D: All of them are falsy
```

36.
```javascript
console.log(typeof typeof 1);

A: "number"
B: "string"
C: "object"
D: "undefined"
```

37.
```javascript
const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);

A: [1, 2, 3, 7 x null, 11]
B: [1, 2, 3, 11]
C: [1, 2, 3, 7 x empty, 11]
D: SyntaxError
```

38.
```javascript
(() => {
  let x, y;
  try {
    throw new Error();
  } catch (x) {
    (x = 1), (y = 2);
    console.log(x);
  }
  console.log(x);
  console.log(y);
})();

A: 1 undefined 2
B: undefined undefined undefined
C: 1 1 2
D: 1 undefined undefined
```

39.
```javascript
// Everything in JavaScript is either a...

A: primitive or object
B: function or object
C: trick question! only objects
D: number or object
```

40.
```javascript
[[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2],
);

A: [0, 1, 2, 3, 1, 2]
B: [6, 1, 2]
C: [1, 2, 0, 1, 2, 3]
D: [1, 2, 6]
```

41.
```javascript
!!null;
!!'';
!!1;

A: false true false
B: false false true
C: false true true
D: true true false
```

42.
```javascript
// What does the setInterval method return in the browser?
setInterval(() => console.log('Hi'), 1000);

A: a unique id
B: the amount of milliseconds specified
C: the passed function
D: undefined
```

43. 
```javascript
// What does this return?
[...'Lydia'];

A: ["L", "y", "d", "i", "a"]
B: ["Lydia"]
C: [[], "Lydia"]
D: [["L", "y", "d", "i", "a"]]
```

44. 
```javascript
function* generator(i) {
  yield i;
  yield i * 2;
}

const gen = generator(10);

console.log(gen.next().value);
console.log(gen.next().value);

A: [0, 10], [10, 20]
B: 20, 20
C: 10, 20
D: 0, 10 and 10, 20
```

45.
```javascript
const firstPromise = new Promise((res, rej) => {
  setTimeout(res, 500, 'one');
});

const secondPromise = new Promise((res, rej) => {
  setTimeout(res, 100, 'two');
});

Promise.race([firstPromise, secondPromise]).then(res => console.log(res));

A: "one"
B: "two"
C: "two" "one"
D: "one" "two"
```

46.
```javascript
let person = { name: 'Lydia' };
const members = [person];
person = null;

console.log(members);

A: null
B: [null]
C: [{}]
D: [{ name: "Lydia" }]
```

47.
```javascript
const person = {
  name: 'Lydia',
  age: 21,
};

for (const item in person) {
  console.log(item);
}

A: { name: "Lydia" }, { age: 21 }
B: "name", "age"
C: "Lydia", 21
D: ["name", "Lydia"], ["age", 21]
```

48.
```javascript
console.log(3 + 4 + '5');

A: "345"
B: "75"
C: 12
D: "12"
```

49.
```javascript
const num = parseInt('7*6', 10);

A: 42
B: "42"
C: 7
D: NaN
```
50.
```javascript
[1, 2, 3].map(num => {
  if (typeof num === 'number') return;
  return num * 2;
});

A: []
B: [null, null, null]
C: [undefined, undefined, undefined]
D: [ 3 x empty ]
```

51.
```javascript
function getInfo(member, year) {
  member.name = 'Lydia';
  year = '1998';
}

const person = { name: 'Sarah' };
const birthYear = '1997';

getInfo(person, birthYear);

console.log(person, birthYear);

A: { name: "Lydia" }, "1997"
B: { name: "Sarah" }, "1998"
C: { name: "Lydia" }, "1998"
D: { name: "Sarah" }, "1997"
```

52.
```javascript
function greeting() {
  throw 'Hello world!';
}

function sayHi() {
  try {
    const data = greeting();
    console.log('It worked!', data);
  } catch (e) {
    console.log('Oh no an error:', e);
  }
}

sayHi();

A: It worked! Hello world!
B: Oh no an error: undefined
C: SyntaxError: can only throw Error objects
D: Oh no an error: Hello world!
```

53.
```javascript
function Car() {
  this.make = 'Lamborghini';
  return { make: 'Maserati' };
}

const myCar = new Car();
console.log(myCar.make);

A: "Lamborghini"
B: "Maserati"
C: ReferenceError
D: TypeError
```

54.
```javascript
(() => {
  let x = (y = 10);
})();

console.log(typeof x);
console.log(typeof y);

A: "undefined", "number"
B: "number", "number"
C: "object", "number"
D: "number", "undefined"
```

55.
```javascript
class Dog {
  constructor(name) {
    this.name = name;
  }
}

Dog.prototype.bark = function() {
  console.log(`Woof I am ${this.name}`);
};

const pet = new Dog('Mara');

pet.bark();

delete Dog.prototype.bark;

pet.bark();

A: "Woof I am Mara", TypeError
B: "Woof I am Mara", "Woof I am Mara"
C: "Woof I am Mara", undefined
D: TypeError, TypeError
```

56.
```javascript
const set = new Set([1, 1, 2, 3, 4]);

console.log(set);

A: [1, 1, 2, 3, 4]
B: [1, 2, 3, 4]
C: {1, 1, 2, 3, 4}
D: {1, 2, 3, 4}
```

57.
```javascript
// counter.js
let counter = 10;
export default counter;

// index.js
import myCounter from './counter';

myCounter += 1;

console.log(myCounter);

A: 10
B: 11
C: Error
D: NaN
```

58.
```javascript
const name = 'Lydia';
age = 21;

console.log(delete name);
console.log(delete age);

A: false, true
B: "Lydia", 21
C: true, true
D: undefined, undefined
```

59.
```javascript
const numbers = [1, 2, 3, 4, 5];
const [y] = numbers;

console.log(y);

A: [[1, 2, 3, 4, 5]]
B: [1, 2, 3, 4, 5]
C: 1
D: [1]
```

60.
```javascript
const user = { name: 'Lydia', age: 21 };
const admin = { admin: true, ...user };

console.log(admin);

A: { admin: true, user: { name: "Lydia", age: 21 } }
B: { admin: true, name: "Lydia", age: 21 }
C: { admin: true, user: ["Lydia", 21] }
D: { admin: true }
```

61.
```javascript
const person = { name: 'Lydia' };

Object.defineProperty(person, 'age', { value: 21 });

console.log(person);
console.log(Object.keys(person));

A: { name: "Lydia", age: 21 }, ["name", "age"]
B: { name: "Lydia", age: 21 }, ["name"]
C: { name: "Lydia"}, ["name", "age"]
D: { name: "Lydia"}, ["age"]
```

62.
```javascript
const settings = {
  username: 'lydiahallie',
  level: 19,
  health: 90,
};

const data = JSON.stringify(settings, ['level', 'health']);
console.log(data);

A: "{"level":19, "health":90}"
B: "{"username": "lydiahallie"}"
C: "["level", "health"]"
D: "{"username": "lydiahallie", "level":19, "health":90}"
```

63.
```javascript
let num = 10;

const increaseNumber = () => num++;
const increasePassedNumber = number => number++;

const num1 = increaseNumber();
const num2 = increasePassedNumber(num1);

console.log(num1);
console.log(num2);

A: 10, 10
B: 10, 11
C: 11, 11
D: 11, 12
```

64.
```javascript
const value = { number: 10 };

const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};

multiply();
multiply();
multiply(value);
multiply(value);
```

65.
```javascript
[1, 2, 3, 4].reduce((x, y) => console.log(x, y));

A: 1 2 and 3 3 and 6 4
B: 1 2 and 2 3 and 3 4
C: 1 undefined and 2 undefined and 3 undefined and 4 undefined
D: 1 2 and undefined 3 and undefined 4
```

66.
```javascript
// With which constructor can we successfully extend the Dog class?

class Dog {
  constructor(name) {
    this.name = name;
  }
};

class Labrador extends Dog {
  // 1
  constructor(name, size) {
    this.size = size;
  }
  // 2
  constructor(name, size) {
    super(name);
    this.size = size;
  }
  // 3
  constructor(size) {
    super(name);
    this.size = size;
  }
  // 4
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }
};

A: 1
B: 2
C: 3
D: 4
```

67.
```javascript
// index.js
console.log('running index.js');
import { sum } from './sum.js';
console.log(sum(1, 2));

// sum.js
console.log('running sum.js');
export const sum = (a, b) => a + b;

A: running index.js, running sum.js, 3
B: running sum.js, running index.js, 3
C: running sum.js, 3, running index.js
D: running index.js, undefined, running sum.js
``` 

68.
```javascript
console.log(Number(2) === Number(2));
console.log(Boolean(false) === Boolean(false));
console.log(Symbol('foo') === Symbol('foo'));

A: true, true, false
B: false, true, false
C: true, false, true
D: true, true, true
```

69.
```javascript
const name = 'Lydia Hallie';
console.log(name.padStart(13));
console.log(name.padStart(2));

A: "Lydia Hallie", "Lydia Hallie"
B: " Lydia Hallie", " Lydia Hallie" ("[13x whitespace]Lydia Hallie", "[2x whitespace]Lydia Hallie")
C: " Lydia Hallie", "Lydia Hallie" ("[1x whitespace]Lydia Hallie", "Lydia Hallie")
D: "Lydia Hallie", "Lyd",
```

70.
```javascript
console.log('🥑' + '💻');

A: "🥑💻"
B: 257548
C: A string containing their code points
D: Error
```

71.
```javascript
// How can we log the values that are commented out after the console.log statement?

function* startGame() {
  const answer = yield 'Do you love JavaScript?';
  if (answer !== 'Yes') {
    return "Oh wow... Guess we're gone here";
  }
  return 'JavaScript loves you back ❤️';
}

const game = startGame();
console.log(/* 1 */); // Do you love JavaScript?
console.log(/* 2 */); // JavaScript loves you back ❤️

A: game.next("Yes").value and game.next().value
B: game.next.value("Yes") and game.next.value()
C: game.next().value and game.next("Yes").value
D: game.next.value() and game.next.value("Yes")
```

72.
```javascript
console.log(String.raw`Hello\nworld`);

A: Hello world!
B: Hello
     world
C: Hello\nworld
D: Hello\n
     world
```

73.
```javascript
async function getData() {
  return await Promise.resolve('I made it!');
}

const data = getData();
console.log(data);

A: "I made it!"
B: Promise {<resolved>: "I made it!"}
C: Promise {<pending>}
D: undefined
```

74.
```javascript
function addToList(item, list) {
  return list.push(item);
}

const result = addToList('apple', ['banana']);
console.log(result);

A: ['apple', 'banana']
B: 2
C: true
D: undefined
```

75.
```javascript
const box = { x: 10, y: 20 };

Object.freeze(box);

const shape = box;
shape.x = 100;

console.log(shape);

A: { x: 100, y: 20 }
B: { x: 10, y: 20 }
C: { x: 100 }
D: ReferenceError
```

76.
```javascript
const { name: myName } = { name: 'Lydia' };

console.log(name);

A: "Lydia"
B: "myName"
C: undefined
D: ReferenceError
```

77.
```javascript
// Is this a pure function?
function sum(a, b) {
  return a + b;
}

A: Yes
B: No
```

78.
```javascript
const add = () => {
  const cache = {};
  return num => {
    if (num in cache) {
      return `From cache! ${cache[num]}`;
    } else {
      const result = num + 10;
      cache[num] = result;
      return `Calculated! ${result}`;
    }
  };
};

const addFunction = add();
console.log(addFunction(10));
console.log(addFunction(10));
console.log(addFunction(5 * 2));

A: Calculated! 20 Calculated! 20 Calculated! 20
B: Calculated! 20 From cache! 20 Calculated! 20
C: Calculated! 20 From cache! 20 From cache! 20
D: Calculated! 20 From cache! 20 Error
```

79.
```javascript
const myLifeSummedUp = ['☕', '💻', '🍷', '🍫'];

for (let item in myLifeSummedUp) {
  console.log(item);
}

for (let item of myLifeSummedUp) {
  console.log(item);
}

A: 0 1 2 3 and "☕" "💻" "🍷" "🍫"
B: "☕" "💻" "🍷" "🍫" and "☕" "💻" "🍷" "🍫"
C: "☕" "💻" "🍷" "🍫" and 0 1 2 3
D: 0 1 2 3 and {0: "☕", 1: "💻", 2: "🍷", 3: "🍫"}
```

80.
```javascript
const list = [1 + 2, 1 * 2, 1 / 2];
console.log(list);

A: ["1 + 2", "1 * 2", "1 / 2"]
B: ["12", 2, 0.5]
C: [3, 2, 0.5]
D: [1, 1, 1]
```

81. 
```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());

A: Hi there,
B: Hi there, undefined
C: Hi there, null
D: ReferenceError
```

82.
```javascript
var status = '😎';

setTimeout(() => {
  const status = '😍';

  const data = {
    status: '🥑',
    getStatus() {
      return this.status;
    },
  };

  console.log(data.getStatus());
  console.log(data.getStatus.call(this));
}, 0);

A: "🥑" and "😍"
B: "🥑" and "😎"
C: "😍" and "😎"
D: "😎" and "😎"
```

83.
```javascript
const person = {
  name: 'Lydia',
  age: 21,
};

let city = person.city;
city = 'Amsterdam';

console.log(person);

A: { name: "Lydia", age: 21 }
B: { name: "Lydia", age: 21, city: "Amsterdam" }
C: { name: "Lydia", age: 21, city: undefined }
D: "Amsterdam"
```

84.
```javascript
function checkAge(age) {
  if (age < 18) {
    const message = "Sorry, you're too young.";
  } else {
    const message = "Yay! You're old enough!";
  }

  return message;
}

console.log(checkAge(21));

A: "Sorry, you're too young."
B: "Yay! You're old enough!"
C: ReferenceError
D: undefined
```

85.
```javascript
fetch('https://www.website.com/api/user/1')
  .then(res => res.json())
  .then(res => console.log(res));

A: The result of the fetch method.
B: The result of the second invocation of the fetch method.
C: The result of the callback in the previous .then().
D: It would always be undefined.
```

86.
```javascript
// Which option is a way to set hasName equal to true, provided you cannot pass true as an argument?
function getName(name) {
  const hasName = // !!name
}

A: !!name
B: name
C: new Boolean(name)
D: name.length
```


87.
```javascript
console.log('I want pizza'[0]);

A: """
B: "I"
C: SyntaxError
D: undefined
```

88.
```javascript
function sum(num1, num2 = num1) {
  console.log(num1 + num2);
}

sum(10);

A: NaN
B: 20
C: ReferenceError
D: undefined
```

89.
```javascript
// module.js
export default () => 'Hello world';
export const name = 'Lydia';

// index.js
import * as data from './module';

console.log(data);

A: { default: function default(), name: "Lydia" }
B: { default: function default() }
C: { default: "Hello world", name: "Lydia" }
D: Global object of module.js
```

90.
```javascript
class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member);

A: "class"
B: "function"
C: "object"
D: "string"
```

91. 
```javascript
let newList = [1, 2, 3].push(4);

console.log(newList.push(5));

A: [1, 2, 3, 4, 5]
B: [1, 2, 3, 5]
C: [1, 2, 3, 4]
D: Error
```

92. 
```javascript
function giveLydiaPizza() {
  return 'Here is pizza!';
}

const giveLydiaChocolate = () =>
  "Here's chocolate... now go hit the gym already.";

console.log(giveLydiaPizza.prototype);
console.log(giveLydiaChocolate.prototype);

A: { constructor: ...} { constructor: ...}
B: {} { constructor: ...}
C: { constructor: ...} {}
D: { constructor: ...} undefined
```

93. 
```javascript
const person = {
  name: 'Lydia',
  age: 21,
};

for (const [x, y] of Object.entries(person)) {
  console.log(x, y);
}

A: name Lydia and age 21
B: ["name", "Lydia"] and ["age", 21]
C: ["name", "age"] and undefined
D: Error
```

94.
```javascript
function getItems(fruitList, ...args, favoriteFruit) {
  return [...fruitList, ...args, favoriteFruit]
}

getItems(["banana", "apple"], "pear", "orange")

A: ["banana", "apple", "pear", "orange"]
B: [["banana", "apple"], "pear", "orange"]
C: ["banana", "apple", ["pear"], "orange"]
D: SyntaxError
```

95. 
```javascript
function nums(a, b) {
  if (a > b) console.log('a is bigger');
  else console.log('b is bigger');
  return;
  a + b;
}

console.log(nums(4, 2));
console.log(nums(1, 2));

A: a is bigger, 6 and b is bigger, 3
B: a is bigger, undefined and b is bigger, undefined
C: undefined and undefined
D: SyntaxError
```

96.
```javascript
class Person {
  constructor() {
    this.name = 'Lydia';
  }
}

Person = class AnotherPerson {
  constructor() {
    this.name = 'Sarah';
  }
};

const member = new Person();
console.log(member.name);

A: "Lydia"
B: "Sarah"
C: Error: cannot redeclare Person
D: SyntaxError
```

97. 
```javascript
const info = {
  [Symbol('a')]: 'b',
};

console.log(info);
console.log(Object.keys(info));

A: {Symbol('a'): 'b'} and ["{Symbol('a')"]
B: {} and []
C: { a: "b" } and ["a"]
D: {Symbol('a'): 'b'} and []
```

98. 
```javascript
const getList = ([x, ...y]) => [x, y]
const getUser = user => { name: user.name, age: user.age }

const list = [1, 2, 3, 4]
const user = { name: "Lydia", age: 21 }

console.log(getList(list))
console.log(getUser(user))

A: [1, [2, 3, 4]] and undefined
B: [1, [2, 3, 4]] and { name: "Lydia", age: 21 }
C: [1, 2, 3, 4] and { name: "Lydia", age: 21 }
D: Error and { name: "Lydia", age: 21 }
```

99. 
```javascript
const name = 'Lydia';

console.log(name());

A: SyntaxError
B: ReferenceError
C: TypeError
D: undefined
```

100.
```javascript
const output = `${[] && 'Im'}possible!
You should${'' && `n't`} see a therapist after so much JavaScript lol`;

A: possible! You should see a therapist after so much JavaScript lol
B: Impossible! You should see a therapist after so much JavaScript lol
C: possible! You shouldn't see a therapist after so much JavaScript lol
D: Impossible! You shouldn't see a therapist after so much JavaScript lol
```

101. 
```javascript
const one = false || {} || null;
const two = null || false || '';
const three = [] || 0 || true;

console.log(one, two, three);

A: false null []
B: null "" true
C: {} "" []
D: null null true
```

102. 
```javascript
const myPromise = () => Promise.resolve('I have resolved!');

function firstFunction() {
  myPromise().then(res => console.log(res));
  console.log('second');
}

async function secondFunction() {
  console.log(await myPromise());
  console.log('second');
}

firstFunction();
secondFunction();

A: I have resolved!, second and I have resolved!, second
B: second, I have resolved! and second, I have resolved!
C: I have resolved!, second and second, I have resolved!
D: second, I have resolved! and I have resolved!, second
```

103. 
```javascript
const set = new Set();

set.add(1);
set.add('Lydia');
set.add({ name: 'Lydia' });

for (let item of set) {
  console.log(item + 2);
}

A: 3, NaN, NaN
B: 3, 7, NaN
C: 3, Lydia2, [object Object]2
D: "12", Lydia2, [object Object]2
```

104. 
```javascript
// What's its value?
Promise.resolve(5);

A: 5
B: Promise {<pending>: 5}
C: Promise {<resolved>: 5}
D: Error
```

105.
```javascript
function compareMembers(person1, person2 = person) {
  if (person1 !== person2) {
    console.log('Not the same!');
  } else {
    console.log('They are the same!');
  }
}

const person = { name: 'Lydia' };

compareMembers(person);

A: Not the same!
B: They are the same!
C: ReferenceError
D: SyntaxError
```

106. 
```javascript
const colorConfig = {
  red: true,
  blue: false,
  green: true,
  black: true,
  yellow: false,
};

const colors = ['pink', 'red', 'blue'];

console.log(colorConfig.colors[1]);

A: true
B: false
C: undefined
D: TypeError
```

107. 
```javascript
console.log('❤️' === '❤️');

A: true
B: false
```

108. 
```javascript
//  Which of these methods modifies the original array?
const emojis = ['✨', '🥑', '😍'];

emojis.map(x => x + '✨');  
emojis.filter(x => x !== '🥑');
emojis.find(x => x !== '🥑');
emojis.reduce((acc, cur) => acc + '✨');
emojis.slice(1, 2, '✨');
emojis.splice(1, 2, '✨');

A: All of them
B: map reduce slice splice
C: map slice splice
D: splice
```

109. 
```javascript
const food = ['🍕', '🍫', '🥑', '🍔'];
const info = { favoriteFood: food[0] };

info.favoriteFood = '🍝';

console.log(food);

A: ['🍕', '🍫', '🥑', '🍔']
B: ['🍝', '🍫', '🥑', '🍔']
C: ['🍝', '🍕', '🍫', '🥑', '🍔']
D: ReferenceError
```

110. 
```javascript
// What does this method do?
JSON.parse();

A: Parses JSON to a JavaScript value
B: Parses a JavaScript object to JSON
C: Parses any JavaScript value to JSON
D: Parses JSON to a JavaScript object only
```