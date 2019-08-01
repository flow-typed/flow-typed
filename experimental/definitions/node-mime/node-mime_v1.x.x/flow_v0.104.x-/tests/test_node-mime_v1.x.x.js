import mime from 'mime';

mime.lookup('file.txt');
mime.load('./file.txt');
mime.extension('application/json');

// $ExpectError
mime.lookup(3);

// $ExpectError
mime.lookup('file.txt', 3);

// $ExpectError
mime.extension(3);

// $ExpectError
mime.load(5);

// $ExpectError
mime.load(true);