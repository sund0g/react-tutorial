const path = require('path');

// console.log(__dirname); // Used to find absolute path needed for config below.

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: { // https://webpack.js.org/configuration/module/#module-rules
        // set up our module as follows, for any .js files in our app, load them, with babel-loader, except for the auto-generated node_modules.
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }]
    }
};
