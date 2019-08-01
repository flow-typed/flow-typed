// $ExpectError
import { Int64 as oha } from 'node-int64';

import Int64 from 'node-int64';

// $ExpectError
new Int64();

var x = new Int64(Int64.MAX_INT);
var y = new Int64(1234567789);

var f: bool = x.equals(y);
