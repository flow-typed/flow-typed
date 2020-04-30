// Derived from the library tests from https://github.com/jakearchibald/idb/blob/c8bab898f01bacab96097f87c1e42a0c19e01425/test/idb.js

import type {DB, ObjectStore, Transaction} from 'idb';
import idb from 'idb';

async function test() {
  let db: DB = await idb.open('tmp-db', 1, upgradeDb => {
    switch (upgradeDb.oldVersion) {
      case 0:
        upgradeDb.createObjectStore('key-val').put('world', 'hello');
    }
  });

  let tx: Transaction = db.transaction('key-val', 'readwrite');
  let store: ObjectStore = tx.objectStore('key-val');

  store.put(await store.get('hello'), 'foo');

  // $ExpectError
  store.getKey();

  // $ExpectError
  store.iterateCursor();

  // $ExpectError
  store.createIndex();
  // $ExpectError
  store.createIndex('foo');

  const range: IDBKeyRange = (null: any);

  const cursor = await store.openCursor(range, 'next');

  store.iterateCursor(range, cursor => {
    if (!cursor) return;
    cursor.continue();
  });

  store.iterateCursor(cursor => {
    if (!cursor) return;
    cursor.continue();
  });

  await tx.complete;

  (db.transaction('key-val'): Transaction);

  (db.close(): void);
}
