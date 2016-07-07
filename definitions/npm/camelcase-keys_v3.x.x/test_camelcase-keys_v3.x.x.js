import camelcaseKeys from 'camelcase-keys';

const result: Object = camelcaseKeys({ 'foo-bar': true });
//=> {fooBar: true}
