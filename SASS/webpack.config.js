const path = require("path");

module.exports = {
  entry: "./src/index",

  output: {
    path: path.resolve(__dirname, "dist"), //wrzuci plik do folderu dist 
    filename: "main.js",
  },

  module:{
    rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.s[ac]ss$/i,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ],
      
  }
};
