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