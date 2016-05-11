// @flow

import WebFont from 'webfontloader';

WebFont.load({});

WebFont.load({
  loading: () => true,
  active: () => true,
  inactive: () => true,
  fontloading: (familyName, fvd) => true,
  fontactive: (familyName, fvd) => true,
  fontinactive: (familyName, fvd) => true,
  classes: true,
  events: true,
  timeouts: 100,

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
