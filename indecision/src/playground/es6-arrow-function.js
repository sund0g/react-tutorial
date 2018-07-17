// es5 function syntax

function square (x){
    return x * x;
};

console.log(square(8));


// es6 arrow function syntax

const squareArrow = (x) => {
    return x * x;
};

console.log(squareArrow(9));

// arrow fn is great for functions that are very simple

const squareArrow1 = (x) => x * x;

console.log(squareArrow1(4));

// Another example

const fullName = 'Scott Estes';

const firstName = (name) => name.split(' ')[0];

console.log(firstName(fullName));
