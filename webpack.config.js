const path = require('path');
const exec =  require('child_process').exec;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
    entry: [
        './src/index.js',
        './src/scss/styles.scss'
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        'env',
                        'react',
                    ]
                }
            }
        }, {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: ExtractTextPlugin.extract({
                use: [{
                    loader: 'css-loader',
                    options: {
                        url: false,
                    }
                }, {
                    loader: 'sass-loader'
                }]
            })
        }]
    },
    plugins: [
        function() {
            this.plugin('done', function(stats) {
                if (typeof stats.compilation.errors !== 'undefined' && stats.compilation.errors.length > 0) {
                    exec('open -a ' + process.env.TERM_PROGRAM);
                }
            });
        },
        new WebpackNotifierPlugin({
            alwaysNotify: true
        }),
        new ExtractTextPlugin({
            filename: 'styles.css'
        }),
    ],
    devServer: {
        port: 3000
    }
}