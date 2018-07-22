const path = require('path');

// console.log(__dirname); // Used to find absolute path needed for config below.

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    }
};
