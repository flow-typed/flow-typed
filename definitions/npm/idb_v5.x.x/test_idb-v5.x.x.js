import { describe, it } from 'flow-typed-test';
import type { DB, ObjectStore, Transaction, Cursor } from 'idb';
import { openDB, deleteDB } from 'idb';

// Make sure to report all changes you make here to the duplicated tests in the
// other file as well.
describe('idb_v5', () => {
  it('checks the openDB return value', async () => {
    // Make sure that `db` is properly type-checked.
    // $FlowExpectedError
    const db: string = await openDB('tmp-db');
  });

  it('works for basic use cases', async () => {
    // Because of a bug in Flow (see https://github.com/facebook/flow/issues/8367)
    // we cast to a DB here. We check that openDB returns the right type in
    // the above test case.
    const db: DB = await openDB('tmp-db', 1, {
      upgrade(db, oldVersion, newVersion, transaction) {
        switch (oldVersion) {
          case 0:
            db.createObjectStore('key-val').put('world', 'hello');
        }
      }
    });

    let tx = db.transaction('key-val', 'readwrite');
    (tx: Transaction<any>);
    (tx.store: ObjectStore);
    // $FlowExpectedError
    (tx.store: string);
    const store = tx.objectStore('key-val');
    (store: ObjectStore);

    // Flow types for IDBKeyRange are severely lacking, IDBKeyRange.only returns
    // any... See https://github.com/facebook/flow/issues/8366
    const range: IDBKeyRange = window.IDBKeyRange.only('foo');

    const value = await store.get('hello');
    store.put({ value: 'foo' });

    store.put('foo', 'some-key');
    store.add({ value: 'foo' });
    store.add('foo', 'some-key');
    // $FlowExpectedError
    store.add('foo', range);
    store.put({ value: 'bar'}, ['key1', 'key2']);
    store.add({ value: 'bar'}, ['key1', 'key2']);
    store.delete(range);
    store.delete('key');
    store.clear();
    store.get(range);
    store.getAll(range);
    store.getAll();
    store.getAll(range, 10);
    store.getAll('foo');
    store.getKey('foo');
    store.getKey(range);
    store.count();
    const itemcount: number = await store.count(range);

    // $FlowExpectedError
    store.get();

    // $FlowExpectedError
    store.getKey();

    const cursor = await store.openCursor(range, 'next');

    await tx.done;

    db.close();

    await deleteDB('tmp-db');
  });

  it('operations with several object stores', async () => {
    const db: DB = await openDB('tmp-db', 1, {
      upgrade(db, oldVersion, newVersion, transaction) {
        switch (oldVersion) {
          case 0: {
            const store1 = db.createObjectStore('key-val');
            store1.put('world', 'hello');
            db.createObjectStore('accounts', { keyPath: 'key', autoIncrement: true });
            // $FlowExpectedError
            db.createObjectStore();
          }
        }
      }
    });

    let tx = db.transaction(['key-val', 'accounts'], 'readonly');
    (tx: Transaction<any>);
    (tx.store: null)
    let store: ObjectStore = tx.objectStore('key-val');

    const value = await store.get('hello');
    store.put('foo', 'some-key');
    store.add('foo', 'some-key');
    store.put({ value: 'bar'}, ['key1', 'key2']);
    store.add({ value: 'bar'}, ['key1', 'key2']);
  });

  it('operations with cursors', async () => {
    const db: DB = await openDB('tmp-db', 1);
    const tx = db.transaction('store', 'readwrite');
    const store = tx.objectStore('store');

    const range: IDBKeyRange = window.IDBKeyRange.bound(0, 3);
    // $FlowExpectedError
    await store.openCursor(range, 'foo');
    let cursor = await store.openCursor(range, 'next');

    await cursor.update('foo');
    await cursor.delete();
    cursor = await cursor.advance(2);
    if (!cursor) {
      return;
    }
    cursor = await cursor.continue('valid-key');
    if (!cursor) {
      return;
    }
    cursor = await cursor.continue();
    if (!cursor) {
      return;
    }
    // theorically we should make this error because this shouldn't be called
    // for object stores.
    cursor = await cursor.continuePrimaryKey('valid-key', 'valid-primary-key');
  })

  it('openDB callbacks', async () => {
    await openDB('tmp-db', 1);
    await openDB('tmp-db', 1, {
      upgrade() {},
      blocked() {},
      blocking() {},
      terminated() {},
    });

    // $FlowExpectedError
    await openDB('tmp-db', 1, {
      foo() {},
    });
  });

  it('operations with index', async () => {
    const db: DB = await openDB('tmp-db', 1, {
      upgrade(db, oldVersion, newVersion, transaction) {
        switch (oldVersion) {
          case 0: {
            const store = db.createObjectStore('accounts', { keyPath: 'key', autoIncrement: true });
            store.createIndex('index1', ['foo', 'bar'], { unique: true });
            store.createIndex('index1', ['foo', 'bar'], { unique: true, multiEntry: false, locale: 'auto' });
            // $FlowExpectedError
            store.createIndex('index1', 'foo', { uniqu: true });
            // $FlowExpectedError
            store.createIndex('foo');
            store.deleteIndex('index1');
            // $FlowExpectedError
            store.deleteIndex();
            // $FlowExpectedError
            store.createIndex();
            // $FlowExpectedError
            store.createIndex('foo');
          }
        }
      }
    });

    let tx = db.transaction('accounts', 'readwrite');
    let store = tx.objectStore('key-val');
    const index = store.index('my-index');
    let count: number;
    count = await index.count();
    count = await index.count('valid-key');
    await index.get('valid-key');

    // Flow types for IDBKeyRange are severely lacking, IDBKeyRange.only returns
    // any... See https://github.com/facebook/flow/issues/8366
    const range: IDBKeyRange = window.IDBKeyRange.bound('key1', 'key2')
    await index.getKey(range);
    await index.getAll();
    const getAllResult = await index.getAll('valid-key', 5);
    getAllResult.forEach(result => result);
    // $FlowExpectedError
    await index.getAll('valid-key', 'string');
    await index.getAllKeys(range);

    let cursor = await index.openCursor();
    await cursor.update('foo');
    await cursor.delete();
    cursor = await cursor.advance(2);
    if (!cursor) {
      return;
    }
    cursor = await cursor.continue('valid-key');
    if (!cursor) {
      return;
    }
    cursor = await cursor.continue();
    if (!cursor) {
      return;
    }
    cursor = await cursor.continuePrimaryKey('valid-key', 'valid-primary-key');
  });

  it('some error cases', async () => {
    const db: DB = await openDB('tmp-db', 1);

    // $FlowExpectedError
    db.transaction('key-val', 'foo');

    const tx = db.transaction('key-val', 'readwrite');
    const store = tx.objectStore('key-val');

    const cursor: Cursor = await store.openCursor();
    // $FlowExpectedError
    cursor.foo();

    // Flow types for IDBKeyRange are severely lacking, IDBKeyRange.only returns
    // any... See https://github.com/facebook/flow/issues/8366
    const range: IDBKeyRange = window.IDBKeyRange.only('foo');

    // Because of https://github.com/facebook/flow/issues/8367 errors appear at
    // the `openDB` position instead of the actual call in error.
    // Therefore we create a new db for each error.
    async function getStore(): Promise<ObjectStore> {
      return (await openDB('tmp-db', 1)).transaction('foo').objectStore('foo');
    }
    // We can put with a key only, not a range
    // $FlowExpectedError
    (await getStore()).put('foo', range);
  });
});

describe('no async iterators', () => {
  it('cannot iterate on stores', async () => {
    const db: DB = await openDB('tmp-db', 1);
    const tx = db.transaction('storeName');

    // $FlowExpectedError
    for await (const cursor of tx.store) {
    }

    // Flow types for IDBKeyRange are severely lacking, IDBKeyRange.only returns
    // any... See https://github.com/facebook/flow/issues/8366
    const range: IDBKeyRange = window.IDBKeyRange.only('foo');
    // $FlowExpectedError
    for await (const cursor of tx.store.iterate(range, 'next')) {
    }
  });

  it('cannot iterate on indexes', async () => {
    const db: DB = await openDB('tmp-db', 1);
    const tx = db.transaction('storeName');
    const index = tx.store.index('author');
    // $FlowExpectedError
    for await (const cursor of index) {
    }

    // Flow types for IDBKeyRange are severely lacking, IDBKeyRange.only returns
    // any... See https://github.com/facebook/flow/issues/8366
    const range: IDBKeyRange = window.IDBKeyRange.only('foo');
    // $FlowExpectedError
    for await (const cursor of index.iterate(range, 'next')) {
    }
  });

  it('cannot iterate on cursors', async () => {
    const db: DB = await openDB('tmp-db', 1);
    const tx = db.transaction('storeName');

    // Flow types for IDBKeyRange are severely lacking, IDBKeyRange.only returns
    // any... See https://github.com/facebook/flow/issues/8366
    const range: IDBKeyRange = window.IDBKeyRange.only('foo');

    // Note: we have to type Cursor here so that the errors are found in the
    // right lines. See https://github.com/facebook/flow/issues/8367
    const firstCursor: Cursor = await tx.store.openCursor(range, 'next');
    // $FlowExpectedError
    for await (const cursor of firstCursor) {
    }
  });
});
