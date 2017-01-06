import MurmurHash3 from 'imurmurhash';

const hashState = new MurmurHash3('string');

hashState.hash('more strings');

hashState.reset().hash('and').hash('some').hash('more');

([
  MurmurHash3().result(),
  MurmurHash3('abc').result(),
  MurmurHash3('abc', 123).result(),
  MurmurHash3(null, 123).result(),
  MurmurHash3('abc', null).result(),
  new MurmurHash3().result(),
  new MurmurHash3('abc').result(),
  new MurmurHash3('abc', 123).result(),
  new MurmurHash3(null, 123).result(),
  new MurmurHash3('abc', null).result(),
]: number[]);


// $ExpectError
MurmurHash3(123);

// $ExpectError
hashState.result().hash('abc');
