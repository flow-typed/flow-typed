// @flow

var React = require('react');

const { whyDidYouUpdate } = require('why-did-you-update');

// $ExpectError missing argument
whyDidYouUpdate();

whyDidYouUpdate(React);
