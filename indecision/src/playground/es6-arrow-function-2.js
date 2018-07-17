// Arguments object - no longer bound with arrow functions

const add = function (a, b){ //Anonymous function could change this to function add (a, b){}
    console.log(arguments);
    return a + b;
}

// If you need access to arguments, you cannot use arrow fn; have to use es5 syntax.
// e.g. the following will not work,
//
//  const add = (a, b) => {
//      console.log(arguments);
//      return a + b;
//  }

console.log(add(55,1));

// This keyword - no longer bound

const user = {
    name: 'Scott',
    cities: ['Irvine', 'Richmond', 'Lexington'],
    printPlacesLived: function () { //This is a method
        console.log(this.name);
        console.log(this.cities);

        const that = this; //es5 workaround because this is not available inside the below function

        this.cities.forEach(function (city) {
            console.log(that.name + ' has lived in ' + city);
        });
    }
};

console.log('\nUsing es5\n\n');

user.printPlacesLived();

// Same as above but with arrow functions

const userArrow = {
    name: 'Scott',
    cities: ['Irvine', 'Richmond', 'Lexington'],
    printPlacesLived () { // es6 allows us new syntax which means we will never use "function" again.
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        });
    }
};

console.log('\nUsing es6\n\n');

userArrow.printPlacesLived();

// Same as above but with arrow functions

const userArrow1 = {
    name: 'Scott',
    cities: ['Irvine', 'Richmond', 'Lexington'],
//    printPlacesLived () {
//        const cityMessages = this.cities.map((city) => {
//            return this.name + ' has lived in ' + city + '!';
//        });
//        return cityMessages;
//
// Simplifying some...

//    printPlacesLived () {
//        return this.cities.map((city) => {
//            return this.name + ' has lived in ' + city + '!';
//        });
//    }

    // Simplifying more...

        printPlacesLived () {
            return this.cities.map((city) => this.name + ' has lived in ' + city + '!');
        }
};

console.log('\nUsing es6 with map method\n\n' + userArrow1.printPlacesLived());

// Challenge

const multiplier = {
    numbers: [1, 2, 3, 4],
    multiplyBy: 2,

    multiply () {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log('\nChallenge:\n\n' + multiplier.multiply());
