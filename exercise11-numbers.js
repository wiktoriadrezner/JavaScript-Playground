let theNumber = 6.42;

// Number Rounded
let roundedNumber = Math.round(theNumber);

// Number Rounded Up
roundedNumber = Math.ceil(theNumber);

// Number Rounded Down
roundedNumber = Math.floor(theNumber);

// Random Number
let randomNumber = Math.random() * 100;
let roundedRandomNumber = Math.round(randomNumber);

// Defining the Scope in the Brackets
let roundedRandomNumberTwo = Math.floor(random(1000));

console.log("Rounded Number: " + roundedNumber);
console.log("Random Number: " + randomNumber);
console.log("Rounded Random Number 1: " + roundedRandomNumber);
console.log("Rounded Random Number 2: " + roundedRandomNumberTwo);
