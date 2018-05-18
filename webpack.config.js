var webpack = require('webpack');
var path = require('path');
var webpackConfig = {
  entry: './src/index.ts',
  output: {
    filename: process.env.NODE_ENV === "development" ? 'slider-validation.js' : 'slider-validation.min.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: './',
    library: 'sliderValidation',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".scss"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 15000,
        }
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "typings-for-css-modules-loader?modules&sass"
        }, {
          loader: "sass-loader" // compiles Sass to CSS
        }]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({'process.env': process.env.NODE_ENV === "development" ? {NODE_ENV: '"development"'} : {NODE_ENV: '"production"'}}),
  ]
};
if (process.env.NODE_ENV === "production") {
  webpackConfig.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true
    })
  )
}
module.exports = webpackConfig;