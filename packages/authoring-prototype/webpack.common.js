const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const buildConfig = {
  bundleName: 'app',
  outputFilename: 'index.html',
  entryFilename: './src/index.tsx',
  templateFilename: './src/index-template.html',
};

const entry = {
  [buildConfig.bundleName]: buildConfig.entryFilename,
};

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  filename: buildConfig.outputFilename,
  template: buildConfig.templateFilename,
});

module.exports = {
  entry,
  module: {
    rules: [
      { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
    publicPath: '/',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          chunks: 'all',
          enforce: true,
          filename: 'vendor.[chunkhash].js',
          name: false,
          test: /[\\/]node_modules[\\/]/,
        },
      },
    },
  },
  plugins: [htmlWebpackPlugin],
};
