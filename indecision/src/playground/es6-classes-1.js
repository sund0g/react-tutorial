// person

class Person {

    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
//Using template strings with backticks
        return `Hi. I am ${this.name}.`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {

    constructor(name, age, major) {
        super(name, age); // Call parent class
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() { //Overriding parent class method
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`
        }

        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, home) {
        super (name, age);
        this.home = home;
    }

    getGreeting() {
        let greeting = super.getGreeting();

        if (this.home) {
            greeting += ` I\'m visiting from ${this.home}.`;
        }

        return greeting;
    }
}

const me = new Student('Scott', 42, 'CSC');
console.log(me.getDescription());

const other = new Student();
console.log(other.getDescription());

const me1 = new Traveler('Scott', 42, 'Mountain View');
console.log(me1.getGreeting());

const other1 = new Traveler(undefined, undefined, 'Ecalpon');
console.log(other1.getGreeting());
