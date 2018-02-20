var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });

var babelPlugins = [["transform-runtime", {
    "helpers": false, // defaults to true
    "polyfill": false, // defaults to true
    "regenerator": false, // defaults to true
    "moduleName": "babel-runtime" // defaults to "babel-runtime"
}]];

module.exports = {
    entry: './index.js',
    target: 'node',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'backend.js'
    },
    module      : {
        loaders: [
            {
                loader : 'babel-loader',
                exclude: /node_modules/,
                query: {
                    plugins: babelPlugins,
                  "presets": ["react",  "es2017", "stage-0", "node8"],
                }
            },
            {
                test: /\.css$/, loader: "style-loader!css-loader"
            },
        ]
    },
    externals: nodeModules,
    plugins: [
        new webpack.IgnorePlugin(/\.(css|less)$/),
        new webpack.BannerPlugin({banner: 'require("source-map-support").install();', raw: true, entryOnly: false })
    ],
    devtool: 'sourcemap'
}