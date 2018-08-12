const person = {
    name: 'Bugs',
    age: 42,
    location: {
        city: 'Burbank',
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
const { name: firstName = 'Anonymous', age } = person;

// The above ES6 syntax is equivalent to,
// const name = person.name;
// const age = person.age;

console.log(`${firstName} is ${age}.`);

const { temp: temperature, city } = person.location;

// Now can reference the destructured variables as needed.

if (temperature && city) {
    console.log(`It's ${temperature} in ${city}`);
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
