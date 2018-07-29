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
            loader: 'babel-loader', // here we only need a single loader.
            test: /\.js$/, // include any file with .js extension.
            exclude: /node_modules/
        }, {
            test: /\.scss$/, // include any files with .scss extension.
            use: [ // here we need multiple loaders. Do this with an array.
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map', // https://webpack.js.org/configuration/devtool/
    devServer: { // https://webpack.js.org/configuration/dev-server/#src/components/Sidebar/Sidebar.jsx
        contentBase: path.join(__dirname, 'public')
    }
};
