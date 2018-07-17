var nameVar = 'Scott';

console.log('nameVar', nameVar);

// Block scoping

const fullName = 'Scott Estes';
let firstName = '';

if (fullName){
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);
