/* @flow */

import semver from 'semver';

(semver.cmp('1.2.3', '>', '1.2.4'): boolean);

// $ExpectError
semver.cmp('1.2.3', '> ', '1.2.4');

(semver.outside('1.2.3', '1.2', '>'): boolean);

// $ExpectError
semver.outside('1.2.3', '1.2', '> ');

const range = new semver.Range('^1.2.x');
(range.set[0][0].semver.version: string);
(range.format(): string);
(range.test('1.2.3'): boolean);
(range.toString(): string);
