const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src", "index.js"), //Arquivo principal da aplicação
  output: {
    path: path.resolve(__dirname, "public"), //Local do arquivo traspilado
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public")
  },
  module: {
    rules: [
      {
        test: /\.js$/, //Quais arquivos quero transpilar com babel-loader
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ]
      }
    ]
  }
};
