var path = require('path');
var webpack = require('webpack');

var plugins = [
    new webpack.optimize.CommonsChunkPlugin({
        name:      'main',
        children:  true,
        minChunks: 2,
    }),
];


module.exports = {
    entry:  './src',
    output: {
      path:          'builds',
      filename:      'bundle.js',
      chunkFilename: '[name]-[chunkhash].js',
      publicPath:    'builds/',
    },
    plugins: plugins,
    module: {
      loaders: [
        {
          test: /\.(js|jsx)$/,
          loader: 'babel',
          include: [
            path.resolve(__dirname, "src"),
          ]
        },
      ],
    }
};
