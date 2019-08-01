import getit from 'getit';

getit('github://DamonOehlman/getit/README.md', (err, data) => {});
getit('github://DamonOehlman/getit/README.md', {}, (err, data) => {});
getit('github://DamonOehlman/getit/README.md', { cachePath: 'test' }, (err, data) => {});

getit.isRemote('foo');

const result: string = getit.getUrl('github://DamonOehlman/getit/README.md');

getit('github://DamonOehlman/getit/README.md', (err, data) => {
  const happyOutput: string = 'more output' + (data || '');

  // $ExpectError
  const unhappyOutput: string = 'more output' + data;

  // $ExpectError
  const value: number = 5 + data;
});

// $ExpectError
const result: number = getit.getUrl('github://DamonOehlman/getit/README.md');

// $ExpectError
const result: string = getit.getUrl(5);

// $ExpectError
getit('github://DamonOehlman/getit/README.md');

// $ExpectError
getit('github://DamonOehlman/getit/README.md', {
  foo: 'test'
});

// $ExpectError
getit(5);

// $ExpectError
getit({});

// $ExpectError
getit('github://DamonOehlman/getit/README.md', {});

// $ExpectError
getit.isRemote(5);

// $ExpectError
getit.isRemote({});
