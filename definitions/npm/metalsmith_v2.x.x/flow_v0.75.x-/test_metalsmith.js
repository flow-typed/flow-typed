// @flow
import Metalsmith from 'metalsmith';
import type { DoneCallback, File, FilesMap } from 'metalsmith';

import * as fs from 'fs';

const file: File = {
  contents: new Buffer('Hello, world!'),
  mode: '0644',
  stats: fs.statSync('.dummy'),
  foo: 42,
  bar: 'allons-y!',
};

// $ExpectError
const file: File = {
  mode: '0644',
};

const dummyPlugin = (files: FilesMap, ms: Metalsmith, done: DoneCallback) => {
  const dest: string = ms.destination();
  const meta: {} = ms.metadata();
  // $ExpectError
  const src: number = ms.source();

  const mode: ?string = files['index'].mode;
  const extra = files['index'].extra;
  // $ExpectError
  const data: ?string = files['index'].contents;

  done();
};

const dummyAsyncPlugin = async (files: FilesMap, ms: Metalsmith, done: DoneCallback) => {
  done();
};

Metalsmith(__dirname)
  .source('pages')
  .destination('public')
  .concurrency(3)
  .clean(true)
  .frontmatter(false)
  .ignore('README.adoc')
  .ignore(['.trash', '.tmp'])
  .ignore((filename, stats) => false)
  .ignore([(filename, stats) => false, filename => true])
  // $ExpectError
  .ignore([123])
  .use(dummyPlugin)
  .use(dummyAsyncPlugin)
  // $ExpectError
  .use(null)
  .build(err => {
    if (err) {
      throw err;
    } else {
      console.log('Done!');
    }
  });

Metalsmith(__dirname)
  .source()
  // $ExpectError
  .destination('public');
