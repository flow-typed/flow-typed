// @flow
import { describe, it, test } from 'flow-typed-test';
import type { WebpackOptions } from 'webpack';

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

describe('webpack-bundle-analyzer', () => {
  it('works', () => {
    ({
      plugins: [
        new BundleAnalyzerPlugin(),
      ],
    }: WebpackOptions);
  });

  test('options', () => {
    new BundleAnalyzerPlugin({});
    new BundleAnalyzerPlugin({
      analyzerMode: 'server',
      analyzerHost: 'test',
      analyzerPort: 'auto',
      reportFilename: 'test',
      reportTitle: 'test',
      defaultSizes: 'parsed',
      openAnalyzer: true,
      generateStatsFile: true,
      statsFilename: 'test',
      statsOptions: null,
      excludeAssets: null,
      logLevel: 'info',
    });
    new BundleAnalyzerPlugin({
      analyzerPort: 123,
    });
    new BundleAnalyzerPlugin({
      reportTitle: () => '',
    });
    new BundleAnalyzerPlugin({
      statsOptions: { all: true },
    });
    new BundleAnalyzerPlugin({
      excludeAssets: / /,
    });

    // $FlowExpectedError[prop-missing]
    new BundleAnalyzerPlugin({
      foo: 'bar',
    });
    new BundleAnalyzerPlugin({
      // $FlowExpectedError[incompatible-call]
      analyzerMode: 'test',
    });
    new BundleAnalyzerPlugin({
      // $FlowExpectedError[incompatible-call]
      analyzerHost: 123,
    });
    new BundleAnalyzerPlugin({
      // $FlowExpectedError[incompatible-call]
      analyzerPort: 'test',
    });
    new BundleAnalyzerPlugin({
      // $FlowExpectedError[incompatible-call]
      reportFilename: 123,
    });
    new BundleAnalyzerPlugin({
      // $FlowExpectedError[incompatible-call]
      reportTitle: 123,
    });
    new BundleAnalyzerPlugin({
      // $FlowExpectedError[incompatible-call]
      defaultSizes: 'test',
    });
    new BundleAnalyzerPlugin({
      // $FlowExpectedError[incompatible-call]
      openAnalyzer: 'test',
    });
    new BundleAnalyzerPlugin({
      // $FlowExpectedError[incompatible-call]
      generateStatsFile: 'test',
    });
    new BundleAnalyzerPlugin({
      // $FlowExpectedError[incompatible-call]
      statsFilename: 123,
    });
    new BundleAnalyzerPlugin({
      // $FlowExpectedError[incompatible-call]
      statsOptions: 'test',
    });
    new BundleAnalyzerPlugin({
      // $FlowExpectedError[incompatible-call]
      excludeAssets: 123,
    });
    new BundleAnalyzerPlugin({
      // $FlowExpectedError[incompatible-call]
      logLevel: 'test',
    });
  });
});
