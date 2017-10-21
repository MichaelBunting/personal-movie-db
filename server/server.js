const express = require('express');
const path = require('path');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
const exec = require('child_process').exec;
const app = express();

const compiler = webpack(webpackConfig);

app.use(express.static(path.join(__dirname, '../dist')));

app.use(webpackDevMiddleware(compiler, {
    hot: true,
    filename: 'bundle.js',
    publicPath: '/build',
    stats: {
        colors: true
    },
    historyApiFallback: true
}));

const server = app.listen(3000, 'localhost', function() {
    const host = server.address().address;
    const port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});

process.on('SIGINT', () => {
    exec('killall node');
});