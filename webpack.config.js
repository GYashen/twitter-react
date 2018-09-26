
// const HtmlWebPackPlugin = require("html-webpack-plugin");
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const CSSExtract = new ExtractTextPlugin('styles.css');
const path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.s?css$/,
        
        use: [
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // new HtmlWebPackPlugin({
    //   template: "./src/index.html",
    //   filename: "./index.html"
    // })
  ],
  devtool: 'inline-source-map',
   devServer: {
     contentBase: path.join(__dirname, 'public'),
     historyApiFallback: true
   }
};