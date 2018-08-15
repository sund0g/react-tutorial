//
// Object destructuring
//
const person = {
    name: 'Bugs',
    age: 42,
    location: {
        city1: 'Burbank',
        temp: 92
    }
};

//
//Leveraging ES6 destructuring.
//
// Destructuring makes sense when referencing the same objects multiple times.
//
// demonstrating 3 destructuring concepts here,
// 1. Variable renaming using temp: temperature.
// 2. Default values using name = 'Anonymous' When name is not defined in person above, the default will kick in.
// 3. Combining 1 and 2 using name: firstName = 'Anonymous'
//
// NOTE: for object destructuring, use {}.
//
const { name: firstName = 'Anonymous', age } = person;

// The above ES6 syntax is equivalent to,
// const name = person.name;
// const age = person.age;

console.log(`${firstName} is ${age}.`);

const { temp: temperature, city1 } = person.location;

// Now can reference the destructured variables as needed.

if (temperature && city1) {
    console.log(`It's ${temperature} in ${city1}`);
}

// Challenge

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { name: publisherName = 'self-published' } = book.publisher;

//
// REMEMBER TO USE FREAKING `` in console.log. I HATE FREAKING ``!!!
//
console.log(`${publisherName}`);

//
// Array destructuring
//
// NOTE: for array destructuring, use [].
// Also, the references are matched in order rather than name, like for objects.
// Additionally, there is no renaming syntax for arrays.
// There is a default state.
//
 const address = ['123 Acme Drive', 'Burbank', 'California', '91522'];

 const [, city2, state = 'Florida', zip] = address; // Because of the ordering, this says, skip to first array element.

console.log (`You are in ${city2}, ${state}`);

//
// Challenge
//
const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, ,mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);
