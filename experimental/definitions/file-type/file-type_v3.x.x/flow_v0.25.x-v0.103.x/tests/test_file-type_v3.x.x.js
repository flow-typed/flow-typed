import fileType from 'file-type';

const buffer = new Buffer(1);
const array = new Uint8Array(buffer);

const type1 = fileType(buffer);
if (type1) {
  type1.ext;
}
const type2 = fileType(array);
// $ExpectError
type2.ext;
if (type2) {
  type2.mime;
}

// $ExpectError
fileType('');
