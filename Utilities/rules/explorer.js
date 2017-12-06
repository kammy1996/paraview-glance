const autoprefixer = require('autoprefixer');

module.exports = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: [
      { loader: 'babel-loader', options: { presets: ['es2015', ['react']] } },
    ],
  },
  {
    test: /\.mcss$/,
    use: [
      { loader: 'style-loader' },
      { loader: 'css-loader', options: { localIdentName: '[sha512:hash:base32:5]-[name]-[local]', modules: true } },
      { loader: 'postcss-loader', options: { plugins: () => [autoprefixer('last 3 version', 'ie >= 10')] } },
    ],
  },
  {
    test: /\.css$/,
    use: [
      { loader: 'style-loader' },
      { loader: 'css-loader' },
      { loader: 'postcss-loader', options: { plugins: () => [autoprefixer('last 3 version', 'ie >= 10')] } },
    ],
  },
  {
    test: /\.(png|jpg|svg)$/,
    use: 'url-loader?limit=81920',
  },
];
