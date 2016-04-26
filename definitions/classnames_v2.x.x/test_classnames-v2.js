// @flow
import classnames from 'classnames';

const x: string = classnames('foo bar', 'batz', { x: true, y: false });
// $ExpectError
const y: string = classnames({ foo: '' });
