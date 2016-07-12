/* @flow */

import semver from 'semver';

(semver.cmp('1.2.3', '>', '1.2.4'): boolean);

// $ExpectError
semver.cmp('1.2.3', '> ', '1.2.4');

(semver.outside('1.2.3', '1.2', '>'): boolean);

// $ExpectError
semver.outside('1.2.3', '1.2', '> ');
