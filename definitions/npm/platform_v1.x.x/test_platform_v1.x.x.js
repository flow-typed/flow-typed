// @flow
import platform from 'platform';
import type { $Platform } from 'platform';

// $ExpectError
(platform.version: string);
// $ExpectError
(platform.description: string);
// $ExpectError
(platform.description: string);
// $ExpectError
(platform.layoyt: string);
// $ExpectError
(platform.manufacturer: string);
// $ExpectError
(platform.name: string);
// $ExpectError
(platform.prerelease: string);
// $ExpectError
(platform.product: string);
// $ExpectError
(platform.ua: string);
// $ExpectError
(platform.version: string);
(platform.toString(): string);

const os = platform.os;

(os.toString(): string);
// $ExpectError
(os.architecture:  number);
// $ExpectError
(os.version:  string);
// $ExpectError
(os.family:  string);

const other: $Platform = platform.parse('something');


const obj: $Platform = other.parse('foo');

platform.hasOwnProperty('version');

// $ExpectError
const fail: string = platform.os.version;

const s: string = other.os.version || '';
