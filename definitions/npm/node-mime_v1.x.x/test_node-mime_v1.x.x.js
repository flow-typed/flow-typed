import mime from 'mime';

mime.lookup('file.txt');
mime.load('./file.txt');
mime.extension('application/json');

// $FlowExpectedError
mime.lookup(3);

// $FlowExpectedError
mime.lookup('file.txt', 3);

// $FlowExpectedError
mime.extension(3);

// $FlowExpectedError
mime.load(5);

// $FlowExpectedError
mime.load(true);