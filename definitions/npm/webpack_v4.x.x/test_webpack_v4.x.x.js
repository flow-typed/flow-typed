import type { WebpackOptions } from 'webpack';

const options: WebpackOptions = {
  output: {
    filename: '[name].bundle.js',
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader',
        query: {
          babelOptions: {
            presets: [],
          },
          useBabel: true,
          useCache: true,
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [],
        },
      },
    ],
  },
};
