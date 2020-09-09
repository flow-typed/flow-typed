import camelcaseKeys from 'camelcase-keys';

const result: Object = camelcaseKeys({ 'foo-bar': true });
//=> {fooBar: true}

// $FlowExpectedError
(camlcaseKeys({asdf: 42}): {asdf: '42'});
