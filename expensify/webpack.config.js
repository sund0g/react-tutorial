const path = require('path');

// console.log(__dirname); // Used to find absolute path needed for config below.

module.exports = {
//    entry: './src/app.js',
    entry: './src/playground/redux-expensify.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: { // https://webpack.js.org/configuration/module/#module-rules
        // set up our module as follows, for any .js files in our app, load them, with babel-loader, except for the auto-generated node_modules.
        rules: [{
            loader: 'babel-loader', // here we only need a single loader.
            test: /\.js$/, // include any file with .js extension.
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,   // include any files with .scss  or .css extension.
                                // the '?' makes the 's' optional so webpack will include both.
            use: [ // here we need multiple loaders. Do this with an array.
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map', // https://webpack.js.org/configuration/devtool/
    devServer: { // https://webpack.js.org/configuration/dev-server/#src/components/Sidebar/Sidebar.jsx
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true    // We're telling devServer to handle routing via client side code.
                                    // therefore it should return index.html for all 404 routes.
    }
};
