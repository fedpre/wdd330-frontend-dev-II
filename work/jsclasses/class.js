// class Turtle {
//   constructor(name) {
//     this.name = name;
//     this.weapon = 'hands';
//   }
//   sayHi() {
//     return `Hi dude, my name is ${this.name}`;
//   }
//   attack(){
//       return `Feel the power of my ${this.weapon}!`;
//   }
// }

// const leo = new Turtle('leonardo')
// console.log(leo);

// Turtle.prototype.weapon = 'Hands';
// console.log(Turtle.prototype.weapon);

// Turtle.prototype.attack = function(){
//   return `Feel the power of my ${this.weapon}!`;
//   }

// console.log(Turtle.prototype.attack);

// const raph = new Turtle('raph')

// console.log(raph.attack());

class Turtle {
  constructor(name, color) {
    this.name = name;
    let _color = color;
    this.setColor = color => { return _color = color };
    this.getColor = _color;
  }
}

const raph = new Turtle('Raphael', 'Red');
console.log(raph);

console.log(raph.getColor);

Number.prototype.isEven = function () {
    return this%2 === 0;
}

Number.prototype.isOdd = function() {
    return this%2 === 1;
}

console.log(42..isEven())


console.log(765234..isOdd())

// Add the mixin function

function mixin(target, ...objects) {
  for (const object of objects) {
    if(typeof object === 'object') {
      for (const key of Object.keys(object)) {
        if (typeof object[key] === 'object') {
          target[key] = Array.isArray(object[key]) ? [] : {};
          mixin(target[key], object[key]);
        } else {
          Object.assign(target, object)
        }
      }
    }
  }
  return target;
}

const cars = {}

const audi = {a1: 'red', a2: 'blue', a3: 'orange'}

mixin(cars, audi)
console.log(cars.a2)

const funcTest = (...arguments) => {
  const argArray = [...arguments]
  console.log(argArray)
}

funcTest('fede', 2, 'hello', [1, 3, 4])



