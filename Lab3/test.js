//function constructor
//(this) refers to object creted
// function Person(name, dofb) {
//     this.name = name;
//     this.dofb = dofb;
// }

// const person = new Person('kamal', new Date());

// Person('hamada', new Date())

/*
  1.
  Create a method for all arrays to sum an array of numbers.
  If any element in the array is not a number, the method should
  throw an error with a message: 'Target array must contain numbers only'.

[1, 2, 3].sum() // Output: 6
*/
function doSmth() {
    let sumElements = 0;
    for (let i = 0; i < this.length; i++) {
        if (typeof (this[i]) != 'number') {
            return 'Target array must contain numbers only';
        }
        else {
            sumElements += this[i];
        }
    }
    return sumElements;
}

Array.prototype.sum = doSmth;
[1, 2, 3].sum();


/*
  2. When trying to convert an object to string, the output is always '[object object]'.
  a. Change the default output for all objects to be 'This is an object'.

const obj = {};
String(obj); // Output: 'This is an object'.
*/

function modifyObjectMessage() {
    return 'This is an object.'
}
Object.prototype.toString = modifyObjectMessage;
obj = {};
String(obj);

/*
// b. Make String(obj) of only the following object return the content of the message
// while the all other objects still return 'This is an object'.
const obj = { message: 'This is a message' };
String(obj) // Output: 'This is a message'.
*/

const sampleObject = {
    message: 'This is message'
};

function displayObjectMessage() {
    if (this.message) {
        return this.message;
    }
    return 'This an object.';
}

Object.prototype.toString = displayObjectMessage;
String(sampleObject);

/*
  3.
  a. You're developing a game which has different types of animals. All animals can walk, run,
  eat and attack. They also have color and weight properties.
  The game also has birds which do all these actions in addition to flying.
  Represent this data using OOP. 
  
  Notes:
  - Write the code twice; using ES5 function constructors and using ES6 classes.
  - Leave the implementation of the 'walk', 'run', 'eat' and 'attack' methods empty
  or write a console.log statement inside each of them.
  - Maintain the count of all created animals in the code and limit the number of
  total created animals to 100. Throw an error if the code tries to create the 101st animal.

  b. Write a function that detects wether an animal is a bird or not.
  isBird(animal) // Output: true or false.
*/


/* ==========================Using ES5=================================== */
/*let val = 0;
function counter()
{
    val++;
    return val;
}

function Animal(color, weight)
{
    this.color = color;
    this.weight = weight;
}

Animal.prototype.walk = () => console.log('I can walk');
Animal.prototype.run = () => console.log('I can reun');
Animal.prototype.attack = () => console.log('I can attack');
Animal.prototype.countInstance = counter();*/

/* ==========================Using ES6=================================== */
class Animal {
    constructor(color, weight) {
        this.color = color;
        this.weight = weight;
        if (Animal.count >= 100) {
            throw new Error('Not Allowed');
        } else {
            Animal.count++;
        }
    }

    walk() {
        console.log('I can walk');
    }
    run() {
        console.log('I can reun');
    }
    eat() {
        console.log('I can eat');
    }
    attack() {
        console.log('I can attack');
    }

    static count = 0;
}

class Bird extends Animal {

    constructor(color, weight) {

        super(color, weight);
        this.flying = true;
    }

    fly() { }
}

function isBird(animal) {
    return animal instanceof Bird;
}

let dog = new Animal('gray', '8 kg');
console.log(dog);