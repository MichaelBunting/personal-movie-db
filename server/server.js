/* eslint no-console: 0 */

const express = require('express');
const path = require('path');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
const { exec } = require('child_process');
const {
  MongoClient,
} = require('mongodb');
const routes = require('./routes');

const app = express();

const compiler = webpack(webpackConfig);

app.use(express.static(path.join(__dirname, '../dist')));

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/build',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

MongoClient.connect('mongodb://localhost:27017/mongo-todo', (err, database) => {
  if (!err) {
    console.log(`Connected to ${database.databaseName}`);

    routes(app, database);

    app.listen(3000, 'localhost', () => {
      console.log('App listening at: http://localhost:3000');
    });
  } else {
    console.error('No connection');
  }
});

process.on('SIGINT', () => {
  exec('killall node');
});
