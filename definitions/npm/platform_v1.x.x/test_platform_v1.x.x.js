// @flow
import platform from 'platform';

// $FlowExpectedError
(platform.version: string);
// $FlowExpectedError
(platform.description: string);
// $FlowExpectedError
(platform.description: string);
// $FlowExpectedError
(platform.layot: string);
// $FlowExpectedError
(platform.manufacturer: string);
// $FlowExpectedError
(platform.name: string);
// $FlowExpectedError
(platform.prerelease: string);
// $FlowExpectedError
(platform.product: string);
// $FlowExpectedError
(platform.ua: string);
// $FlowExpectedError
(platform.version: string);
(platform.toString(): string);

const os = platform.os;

(os.toString(): string);
// $FlowExpectedError
(os.architecture:  number);
// $FlowExpectedError
(os.version:  string);
// $FlowExpectedError
(os.family:  string);

const other: typeof platform = platform.parse('something');

// $FlowExpectedError
platform.layoyt

const obj: typeof platform = other.parse('foo');

platform.hasOwnProperty('version');

// $FlowExpectedError
const fail: string = platform.os.version;

const s: string = other.os.version || '';
