// @flow
import { v1, v3, v4, v5 } from 'uuid';

(v1(): string);
(v1({}): string);
// $ExpectError if buffer is not passed the result is string
(v1(): Array<number>);
(v1(null, [0]): Array<number>);
// $ExpectError if buffer is passed the result is buffer
(v1(null, [0]): string);
(v1({}, [0], 5): Array<number>);

(v3([0], ''): string);
// $ExpectError if buffer is not passed the result is string
(v3('', ''): Array<number>);
(v3('', [0]): string);
(v3('', '', [0]): Array<number>);
// $ExpectError if buffer is passed the result is buffer
(v3('', '', [0]): string);
(v3('', '', [0], 0): Array<number>);
(v3.DNS: string);
(v3.URL: string);
// $ExpectError only DNS and URL static properties exist
(v3.WRONG: string);

(v4(): string);
(v4({}): string);
// $ExpectError if buffer is not passed the result is string
(v4(): Array<number>);
(v4(null, [0]): Array<number>);
// $ExpectError if buffer is passed the result is buffer
(v4(null, [0]): string);
(v4({}, [0], 5): Array<number>);

(v5([0], ''): string);
// $ExpectError if buffer is not passed the result is string
(v5('', ''): Array<number>);
(v5('', [0]): string);
(v5('', '', [0]): Array<number>);
// $ExpectError if buffer is passed the result is buffer
(v5('', '', [0]): string);
(v5('', '', [0], 0): Array<number>);
(v5.DNS: string);
(v5.URL: string);
// $ExpectError only DNS and URL static properties exist
(v5.WRONG: string);

