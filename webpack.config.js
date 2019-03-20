/* global __dirname, require, module*/

const path = require('path');
const env = require('yargs').argv.env; // use --env with webpack 2
const pkg = require('./package.json');

let libraryName = pkg.name;

let outputFile, mode;

if (env === 'build') {
  mode = 'production';
  outputFile = libraryName + '.min.js';
} else {
  mode = 'development';
  outputFile = libraryName + '.js';
}

const internalLibConfig = {
  mode: mode,
  entry: __dirname + '/src/TDLib.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/lib',
    filename: outputFile,
    library: 'TDLib',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
    extensions: ['.json', '.js']
  },
  externals: {
    phaser: 'phaser'
  }
};

const externalLibConfig = {
  mode: mode,
  entry: __dirname + '/src/TDLib.js',
  devtool: 'source-map',
  output: {
    path: path.resolve('../TheDarkestLight/lib'),
    filename: outputFile,
    library: 'TDLib',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
    extensions: ['.json', '.js']
  },
  externals: {
    phaser: 'phaser'
  }
};

module.exports = [internalLibConfig, externalLibConfig];
