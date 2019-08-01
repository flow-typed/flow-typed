import { Accumulator, BunserBuf, loadFromBuffer, dumpToBuffer } from 'bser';

// $ExpectError
loadFromBuffer();

var result = loadFromBuffer('\x00\x01\x03\x28');

// $ExpectError
dumpToBuffer();

var result2: Accumulator = dumpToBuffer(123456);

var o = new BunserBuf();

o.on('change', () => {});

// $ExpectError
o.doesnotexist('change');
