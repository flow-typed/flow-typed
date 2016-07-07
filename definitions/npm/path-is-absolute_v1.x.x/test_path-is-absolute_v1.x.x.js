import pathIsAbsolute from 'path-is-absolute';

// Linux
const a: boolean = pathIsAbsolute('/home/foo');
//=> true

// Windows
const b: boolean = pathIsAbsolute.win32('C:/Users/');
//=> true

// Any OS
const c: boolean = pathIsAbsolute.posix('/home/foo');
//=> true
