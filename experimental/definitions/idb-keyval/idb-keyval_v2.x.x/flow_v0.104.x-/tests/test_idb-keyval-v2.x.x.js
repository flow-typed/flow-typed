// Derived from the usage docs:
// https://github.com/jakearchibald/idb-keyval/blob/b49b4e9fbf2f5deb63598f9cf0d9899d2f89dc95/README.md

import idbKeyval from 'idb-keyval';

async function test() {
  idbKeyval.set('hello', 'world');
  (idbKeyval.set('foo', 'bar'): Promise<void>);

  await idbKeyval.set('baz', 'foo');

  idbKeyval.set('hello', 'world')
    .then(() => console.log('It worked!'))
    .catch(err => console.log('It failed!', err));

  idbKeyval.get('hello').then(val => (val: any));

  const baz = await idbKeyval.get('baz');

  // $ExpectError
  await idbKeyval.get();

  idbKeyval.keys().then(keys => keys.map(k => k.toUpperCase()));

  idbKeyval.delete('hello');
  idbKeyval.clear();
}
