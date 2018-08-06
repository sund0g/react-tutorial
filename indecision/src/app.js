
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp'; // This adds the css reset to ensure all browers start from the same styles.
import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

/*
class OldSyntax {
    constructor() {
        this.name = 'Scott';
        this.getGreeting = this.getGreeting.bind(this);
    }
    getGreeting() {
        return `Hi. my name is ${this.name}`;
    }
}

// Example of ES6 syntax:

const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;
console.log(getGreeting());

// -----------
// Example of Class Properties syntax. This is great for event handlers as they usually have issues maintaining the 'this' binding

class NewSyntax {
    name = 'Angel';
    getGreeting = () => {
        return `Hi. my name is ${this.name}.`;
    }
}

const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;
console.log(newGetGreeting());

*/
