module.exports = {
  resolve: {
    extensions: ['.js', '.jsx']
  },
  rules: [
    {
      test: /\.jsx?$/,
      use: {
        loader: 'babel-loader',
        options: {
          plugins: [
            '@babel/plugin-transform-react-jsx'
          ]
        }
      }
    }
  ]
};
