const path = require('path');

module.exports = {
  entry: path.join(__dirname, "/src/index.jsx"),
  output: {
    path: path.join(__dirname, "/public/"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader"
      },
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          }
        ]
      }
    ]
  }
}