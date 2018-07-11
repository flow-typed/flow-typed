// @flow
import layouts from 'metalsmith-layouts';
import type { Plugin } from 'metalsmith';

layouts({
  default: 'base.html.hbs',
  directory: './layouts',
  pattern: '**/*.html',
  engineOptions: {
    cache: false
  }
});

const plugin: Plugin = layouts({
  default: 'base.html.hbs',
  directory: './layouts',
  pattern: ['**/*.html', '**/*.htm']
});

// $ExpectError
layouts({
  default: ['base.html.hbs', 'default.html.hbs'],
  directory: ['./layouts', './templates']
});
