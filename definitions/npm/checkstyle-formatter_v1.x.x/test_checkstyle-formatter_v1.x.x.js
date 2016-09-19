// @flow
import checkstyleFormatter from 'checkstyle-formatter'

const results = [
  {
    filename: 'foo.js',
    messages: [
      { line: 1, column: 2, severity: 'warning', message: 'the quick' },
      { line: 3, column: 4, severity: 'error', message: 'brown fox' }
    ]
  },
  {
    filename: 'bar.js',
    messages: [
      { line: 5, column: 6, severity: 'warning', message: 'jumped over' },
      { line: 7, column: 8, severity: 'error', message: 'the lazy dog' }
    ]
  }
];

const output: string = checkstyleFormatter(results);

// $ExpectError
const n: number = checkstyleFormatter(results);

const wrongResultFormat1 = [
  {
    filename: 'foo.js',
    messages: ''
  },
];

// $ExpectError
checkstyleFormatter(wrongResultFormat1);

const wrongResultFormat2 = [
  {
    filename: 'foo.js',
    messages: [ { line: 1, column: 2, severity: 'unknown'} ]
  },
];

// $ExpectError
checkstyleFormatter(wrongResultFormat2);
