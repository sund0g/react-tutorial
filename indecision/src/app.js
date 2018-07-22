// When importing external modules have to do 3 things, install -> import -> use.
// Also when calling an external module, do not use the relative path name.
// Validator link: https://www.npmjs.com/package/validator

//import validator from 'validator'

//console.log(validator.isEmail('test@gmail.com'));

// Now moving on to importing react and react-dom.
// https://www.npmjs.com/package/react
// https://www.npmjs.com/package/react-dom
import React from 'react';
import ReactDOM from 'react-dom';

const template = <p>THIS IS JSX FROM WEBPACK!</p>;

ReactDOM.render(template, document.getElementById('app'))
