//import './utils.js'; //This simply import the file, but there is no access to any objects it contains.

import anythingIWant, { square, add } from './utils.js'; // only named imports are in {}.

console.log('app.js is running!');
console.log(square(4));
console.log(add(100, 23));
console.log(anythingIWant(100, 81)); // Default functions can be called anything when imported.

import isSenior, { isAdult, canDrink } from './person.js';

console.log(isAdult(21));
console.log(canDrink(18));
console.log(isSenior(64));
