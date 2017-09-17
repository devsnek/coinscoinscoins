const path = require('path');
const webpack = require('webpack');

const CleanupPlugin = require('webpack-cleanup-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const SOURCE_DIR = path.join(__dirname, 'src');
const BUILD_DIR = path.join(__dirname, 'build');

const BabelOptions = {
  babelrc: false,
  presets: [
    ['env', { targets: {
      browsers: ['last 2 versions', 'safari >= 7'],
    } }]],
  plugins: [
    ['transform-react-jsx', { pragma: 'h' }],
  ],
};

module.exports = {
  entry: path.join(SOURCE_DIR, 'index.jsx'),
  output: {
    path: BUILD_DIR,
    filename: '[name].js',
    chunkFilename: '[name].js',
    crossOriginLoading: 'anonymous',
  },
  // devtool: 'source-map',
  plugins: [
    new CleanupPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new UglifyJsPlugin({ sourceMap: true }),
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
  resolve: {
    extensions: ['.mjs', '.jsx', '.js', '.json'],
  },
  module: {
    loaders: [
      {
        test: /\.m?jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: BabelOptions,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
