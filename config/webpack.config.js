const path = require("path");
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: './src',
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "app.js"
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve('src'),
    }
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [path.resolve('src'), path.resolve('test')]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'vue-style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
        
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
]
};