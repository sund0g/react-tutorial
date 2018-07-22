console.log('utils.js is running!');

export const square = (x) => x * x;

export const add = (a, b) => a + b;

// 2 ways to export default function:
// Way 1:
//const subtract = (a, b) => a - b;
//export default subtract;
// Way 2:
export default (a, b) => a - b;

// 2 typed of exports - default and named. can only have one default.

// {} are not objects when using export.
// Also can either export like below or export inline like above.
// export { square, add, subtract as default }; // square and add are named exports.
