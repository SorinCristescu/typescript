let apple: number = 5;
apple = 10;

let speed: string = 'fast';

let hasName: boolean = true;

let nothing: null = null;

let none: undefined = undefined;

let now: Date = new Date();

// Array
let colors: string[] = ['red', 'blue', 'green'];
let numbers: number[] = [1, 2, 3];
let bools: boolean[] = [true, true, false];

// Classes
class Car {}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (n: number) => void = (n: number) => {
  console.log(n);
};

// When to use annotations
// 1) Function that returns any type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);
// 2) When we declare a variable on one line and initializate it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3) Variable whose type cannot be inferred correctly
let numbersArray = [-10, 22, -32];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbersArray.length; i++) {
  if (numbersArray[i] > 0) {
    numberAboveZero = numbersArray[i];
  }
}
