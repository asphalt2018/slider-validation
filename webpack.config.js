const webpack = require('webpack');
const path = require('path');
const webpackConfig = {
  entry: './src/index.ts',
  output: {
    filename: process.env.NODE_ENV === "development" ? 'slider-validation.js' : 'slider-validation.min.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: './',
    library: 'sliderValidation',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".scss"]
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
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({'process.env': process.env.NODE_ENV === "development" ? {NODE_ENV: '"development"'} : {NODE_ENV: '"production"'}})
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