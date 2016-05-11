// @flow

import WebFont from 'webfontloader';

WebFont.load({});

WebFont.load({
  loading: () => null,
  active: () => null,
  inactive: () => null,
  fontloading: (familyName, fvd) => null,
  fontactive: (familyName, fvd) => null,
  fontinactive: (familyName, fvd) => null,
  classes: true,
  events: true,
  timeouts: number,

  custom: {
    families: ['foo', 'bar'],
    urls: ['foo', 'bar'],
    testStrings: { 'foo': 'bar' },
  },

  fontdeck: {
    id: '123',
  },

  monotype: {
    projectId: '123',
    version: 5,
  },

  google: {
    families: ['foo', 'bar'],
    text: 'foo',
  },

  typekit: {
    id: 'foo',
  },
});


// $ExpectError
WebFont.load();

// $ExpectError
WebFont.load({
  loading: 'foo'
});
