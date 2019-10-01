import webpack from 'webpack';

import type { WebpackError, Stats, WebpackOptions } from 'webpack';

const options: WebpackOptions = {
  devServer: {
    compress: true
  },
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
  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV', 'DEBUG']),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      DEBUG: false
    }),
    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /moment$/,
    }),
    new webpack.IgnorePlugin(/.*\.md/),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"',
    }),
    new webpack.SourceMapDevToolPlugin({
      append: '\n//# sourceMappingURL=[url]',
      columns: false,
      filename: null,
      module: true,
      moduleFilenameTemplate: 'file://[absolute-resource-path]',
      fallbackModuleFilenameTemplate: 'file://[absolute-resource-path]?',
      noSources: false,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ContextReplacementPlugin(
      /highlight\.js\/lib\/languages$/,
      /^\.\/(javascript|typescript|xml)/
    ),
  ],
};

webpack(options, function(err: WebpackError, stats: Stats) {
  if (err) {
    console.error(err.stack || err);
    if (err.details) {
      console.error(err.details);
    }
    return;
  }

  const info = stats.toJson();

  if (stats.hasErrors()) {
    console.error(info.errors);
  }

  if (stats.hasWarnings()) {
    console.warn(info.warnings);
  }
});

const compiler1 = webpack(options);
compiler1.run(function(err: WebpackError, stats: Stats) {});

const compiler2 = webpack(options);
const watching2 = compiler2.watch({}, function(err: WebpackError, stats: Stats) {});
watching2.invalidate();
watching2.close();

const compiler3 = webpack([options, options]);
const watching3 = compiler3.watch({}, function(err: WebpackError, stats: Stats) {});
watching3.invalidate();
watching3.close();
