import pathIsAbsolute from 'path-is-absolute';

// Linux
const a: boolean = pathIsAbsolute('/home/foo');
//=> true

// $FlowExpectedError
pathIsAbsolute(42);

// Windows
const b: boolean = pathIsAbsolute.win32('C:/Users/');
//=> true

pathIsAbsolute.win32;
// $FlowExpectedError
pathIsAbsolute.win32(42);

// Any OS
const c: boolean = pathIsAbsolute.posix('/home/foo');
//=> true

pathIsAbsolute.posix;
// $FlowExpectedError
pathIsAbsolute.posix(42);
