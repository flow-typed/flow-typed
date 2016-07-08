import stripJsonComments from 'strip-json-comments';

const json = '{/*rainbows*/"unicorn":"cake"}';

JSON.parse(stripJsonComments(json));
//=> {unicorn: 'cake'}

JSON.parse(stripJsonComments(json, {
  whitespace: false
}));
//=> {unicorn: 'cake'}
