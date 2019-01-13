// @flow
console.log('TEST');
import { describe, it } from 'flow-typed-test';
const rll = require('read-last-lines');
describe('read', (done) => {

    rll.read('read-last-lines_v1.x.x.js', 25);
    rll.read('read-last-lines_v1.x.x.js', 25, 'utf-8');
    rll.read('read-last-lines_v1.x.x.js', 25, 'buffer');

    // $ExpectError
    rll.read();
    // $ExpectError
    rll.read('some-file');
});