// @flow
import { describe } from 'flow-typed-test';
import rll from 'read-last-lines';
describe('read', () => {
    rll.read('read-last-lines_v1.x.x.js', 25);
    rll.read('read-last-lines_v1.x.x.js', 25, 'utf-8');
    rll.read('read-last-lines_v1.x.x.js', 25, 'buffer');

    // $ExpectError
    rll.read();
    // $ExpectError
    rll.read('some-file');
});
