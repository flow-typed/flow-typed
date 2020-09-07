// Derived from TS typings at https://github.com/jakearchibald/idb/blob/c8bab898f01bacab96097f87c1e42a0c19e01425/lib/idb.d.ts
// Updated for changes between v2 and v5.

declare type $idb$IDBArrayKey = $ReadOnlyArray<$idb$IDBValidKey>;
declare type $idb$IDBValidKey = number | string | Date | $idb$IDBArrayKey;

// TODO: upstream this to Flow DOM definitions
declare class $idb$DOMStringList {
  +length: number;
  // Comment syntax here as @@iterator is invalid syntax for eslint and babylon
  /*:: @@iterator(): Iterator<string>; */
  contains(str: string): boolean;
  item(index: number): string | null;
  [index: number]: string;
  @@iterator(): Iterator<string>;
}

/** Similar to equivalent IDBDatabase. */
declare class $idb$DB<ObjectStore: $idb$ObjectStore<any, any>> {
  /** A DOMString that contains the name of the connected database. */
  +name: string;

  /** A 64-bit integer that contains the version of the connected database. When a database is first created, this attribute is an empty string. */
  +version: number;

  /** A DOMStringList that contains a list of the names of the object stores currently in the connected database. */
  +objectStoreNames: $idb$DOMStringList;

  /** Returns immediately and closes the connection to a database in a separate thread. */
  close(): void;

  /**
   * Creates and returns a new object store or index.
   * Throws a "InvalidStateError" DOMException if not called within an upgrade transaction.
   * @param name The name of the new object store to be created. Note that it is possible to create an object store with an empty name.
   * @param optionalParameters Optional. An options object whose attributes are optional parameters to the method.
   * @returns The new object store.
   */
  createObjectStore(
    name: string,
    optionalParameters?: $Shape<{|
     +keyPath: string,
     +autoIncrement: boolean,
    |}>
  ): ObjectStore;

  /**
   * Destroys the object store with the given name in the connected database, along with any indexes that reference it.
   * Throws a "InvalidStateError" DOMException if not called within an upgrade transaction.
   * @param name The name of the object store to be removed.
   */
  deleteObjectStore(name: string): void;

  /**
   * Immediately returns a transaction object (Transaction) containing the IDBTransaction.objectStore method, which you can use to access your object store. Runs in a separate thread.
   * @param storeNames The names of object stores and indexes that are in the scope of the new transaction, declared as an array of strings. Specify only the object stores that you need to access.
   * If you need to access only one object store, you can specify its name as a string.
   * @param mode Optional. The types of access that can be performed in the transaction. Transactions are opened in one of three modes: 'readonly' or 'readwrite'. 'versionchange' mode can't be specified here. If you don't provide the parameter, the default access mode is readonly. To avoid slowing things down, don't open a readwrite transaction unless you actually need to write into the database.
   * @returns The transaction object.
   */
  transaction(
    storeNames: string,
    mode?: 'readonly' | 'readwrite'
  ): $idb$Transaction<ObjectStore, ObjectStore>;
  transaction(
    storeNames: Array<string>,
    mode?: 'readonly' | 'readwrite'
  ): $idb$Transaction<ObjectStore, null>;

  /*---
   * These are the objectstore shortcuts: they're the same prototypes of the
   * functions in ObjectStore except they also take the store name as first
   * parameter.
   *--- */
  /**
   * Returns a Promise of an IDBRequest object that (in a separate thread) creates a structured clone of the value, and updates the cloned value in the object store.
   * This is for updating existing records in an object store when the transaction's mode is readwrite.
   * @param storeName the store to use.
   * @param value The value to be stored.
   * @param key Optional. The key to use to identify the record. If unspecified, it results to null.
   * @returns A promise that resolves with the new key when the underlying put IDBRequest is successful.
   */
  put(storeName: string, value: mixed, key?: $idb$IDBValidKey): Promise<$idb$IDBValidKey>;

  /**
   * Returns a Promise of an IDBRequest object that (in a separate thread) creates a structured clone of the value, and stores the cloned value in the object store.
   * This is for adding new records to an object store.
   * @param storeName the store to use.
   * @param value The value to be stored.
   * @param key Optional. The key to use to identify the record. If unspecified, it results to null.
   * @returns A promise that resolves with the new key when the underlying add IDBRequest is successful.
   */
  add(storeName: string, value: mixed, key?: $idb$IDBValidKey): Promise<$idb$IDBValidKey>;

  /**
   * Returns a Promise of an IDBRequest object that (in a separate thread) deletes the store object specified.
   * This is for deleting individual records out of an object store.
   * @param storeName the store to use.
   * @param key The key of the record to be deleted, or an IDBKeyRange to delete all records with keys in range.
   * @returns A promise that resolves when the underlying delete IDBRequest is successful.
   */
  delete(storeName: string, key: IDBKeyRange | $idb$IDBValidKey): Promise<void>;

  /**
   * Returns a Promise of an IDBRequest object that (in a separate thread) clears the object store.
   * This is for deleting all current records out of an object store.
   * @param storeName the store to use.
   * @returns A promise that resolves when the underlying clear IDBRequest is successful.
   */
  clear(storeName: string): Promise<void>;

  /**
   * Returns a Promise of an IDBRequest object that (in a separate thread) resolves with the store object store selected by the specified key.
   * This is for retrieving specific records from an object store.
   * @param storeName the store to use.
   * @param key The key or key range that identifies the record to be retrieved.
   * @returns A promise that resolves with the item when the underlying get IDBRequest is successful.
   */
  get(storeName: string, key: IDBKeyRange | $idb$IDBValidKey): Promise<any>;

  /**
   * Returns a Promise of an IDBRequest object that (in a separate thread) resolves with the objects in the object store matching the specified parameter or all objects in the store if no parameters are given.
   * @param storeName the store to use.
   * @param query Optional. A key or IDBKeyRange to be queried. If nothing is passed, this will default to a key range that selects all the records in this object store.
   * @param count Optional. Specifies the number of values to return if more than one is found. If it is lower than 0 or greater than 232-1 a TypeError exception will be thrown.
   * @returns A promise that resolves with the items when the underlying getAll IDBRequest is successful.
   */
  getAll(
    storeName: string,
    query?: IDBKeyRange | $idb$IDBValidKey,
    count?: number
  ): Promise<Array<any>>;

  /**
   * Returns a Promise of an IDBRequest object that (in a separate thread) finds either the given key or the primary key, if key is an IDBKeyRange.
   * @param storeName the store to use.
   * @param key The key or key range that identifies the record to be retrieved.
   * @returns A promise that resolves with the item when the underlying get IDBRequest is successful.
   */
  getKey(storeName: string, key: IDBKeyRange | $idb$IDBValidKey): Promise<any>;

  /**
   * Returns a Promise of an IDBRequest object that (in a separate thread) resolves with record keys for all the objects matching the specified parameter or all record keys in the store if no parameters are given.
   * @param storeName the store to use.
   * @param query Optional. A key or IDBKeyRange to be queried. If nothing is passed, this will default to a key range that selects all the records in this object store.
   * @param count Optional. Specifies the number of values to return if more than one is found. If it is lower than 0 or greater than 232-1 a TypeError exception will be thrown.
   * @returns A promise that resolves with the record keys when the underlying getAllKeys IDBRequest is successful.
   */
  getAllKeys(storeName: string, query?: IDBKeyRange, count?: number): Promise<Array<any>>;

  /**
   * Returns a Promise of an IDBRequest object that (in a separate thread) counts the matching records.
   * If no arguments are provided, it returns the total number of records in the store.
   * @param storeName the store to use.
   * @param key A key or IDBKeyRange object that specifies a range of records you want to count.
   * @returns A promise that resolves with the total when the underlying count IDBRequest is successful.
   */
  count(storeName: string, key?: IDBKeyRange | $idb$IDBValidKey): Promise<number>;

  /*---
   * These are the index shortcuts: they're the same prototypes of the
   * functions in Index except they also take the store and index names as
   * first parameters.
   *--- */
  /**
   * Returns a Promise of an IDBRequest object that (in a separate thread) counts the matching records.
   * If no arguments are provided, it returns the total number of records in the store.
   * @param storeName the store to use.
   * @param indexName the index to use.
   * @param key A key or IDBKeyRange object that specifies a range of records you want to count.
   * @returns A promise that resolves with the total when the underlying count IDBRequest is successful.
   */
  countFromIndex(storeName: string, indexName: string, key?: IDBKeyRange | $idb$IDBValidKey): Promise<number>;

  /**
   * Returns a Promise of an IDBRequest object that (in a separate thread) resolves with the store object store selected by the specified key.
   * This is for retrieving specific records from an object store.
   * @param storeName the store to use.
   * @param indexName the index to use.
   * @param key The key or key range that identifies the record to be retrieved.
   * @returns A promise that resolves with the item when the underlying get IDBRequest is successful.
   */
  getFromIndex(storeName: string, indexName: string, key: IDBKeyRange | $idb$IDBValidKey): Promise<any>;

  /**
   * Returns a Promise of an IDBRequest object that (in a separate thread) finds either the given key or the primary key, if key is an IDBKeyRange.
   * @param storeName the store to use.
   * @param indexName the index to use.
   * @param key The key or key range that identifies the record to be retrieved.
   * @returns A promise that resolves with the item when the underlying get IDBRequest is successful.
   */
  getKeyFromIndex(storeName: string, indexName: string, key: IDBKeyRange | $idb$IDBValidKey): Promise<any>;

  /**
   * Returns a Promise of an IDBRequest object that (in a separate thread) resolves with the objects in the object store matching the specified parameter or all objects in the store if no parameters are given.
   * @param storeName the store to use.
   * @param indexName the index to use.
   * @param query Optional. A key or IDBKeyRange to be queried. If nothing is passed, this will default to a key range that selects all the records in this object store.
   * @param count Optional. Specifies the number of values to return if more than one is found. If it is lower than 0 or greater than 232-1 a TypeError exception will be thrown.
   * @returns A promise that resolves with the items when the underlying getAll IDBRequest is successful.
   */
  getAllFromIndex(
    storeName: string,
    indexName: string,
    query?: IDBKeyRange | $idb$IDBValidKey,
    count?: number
  ): Promise<Array<any>>;

  /**
   * Returns a Promise of an IDBRequest object that (in a separate thread) resolves with record keys for all the objects matching the specified parameter or all record keys in the store if no parameters are given.
   * @param storeName the store to use.
   * @param indexName the index to use.
   * @param query Optional. A key or IDBKeyRange to be queried. If nothing is passed, this will default to a key range that selects all the records in this object store.
   * @param count Optional. Specifies the number of values to return if more than one is found. If it is lower than 0 or greater than 232-1 a TypeError exception will be thrown.
   * @returns A promise that resolves with the record keys when the underlying getAllKeys IDBRequest is successful.
   */
  getAllKeysFromIndex(storeName: string, indexName: string, query?: IDBKeyRange, count?: number): Promise<Array<any>>;
}

type $idb$OpenDBCallbacks<ObjectStore: $idb$ObjectStore<any, any>> = {|
  /**
   * Called if this version of the database has never been opened before. Use it to specify the
   * schema for the database.
   *
   * @param database A database instance that you can use to add/remove stores and indexes.
   * @param oldVersion Last version of the database opened by the user.
   * @param newVersion Whatever new version you provided.
   * @param transaction The transaction for this upgrade. This is useful if you need to get data
   * from other stores as part of a migration.
   */
  upgrade(
    database: $idb$DB<ObjectStore>,
    oldVersion: number,
    newVersion: number | null,
    transaction: $idb$Transaction<ObjectStore, null>
  ): void,
  /**
   * Called if there are older versions of the database open on the origin, so this version cannot
   * open.
   */
  blocked(): void,
  /**
   * Called if this connection is blocking a future version of the database from opening.
   */
  blocking(): void,
  /**
   * Called if the browser abnormally terminates the connection.
   * This is not called when `db.close()` is called.
   */
  terminated(): void,
|};

/** Wrapper of IDBTransaction that presents the asynchronous operations as a Promise. */
declare class $idb$Transaction<ObjectStore: $idb$ObjectStore<any, any>, StoreType: ObjectStore | null> {
  /** Resolves when transaction completes, rejects if transaction aborts or errors. */
  +done: Promise<void>;
  +store: StoreType;

  /** Returns a DOMStringList of the names of IDBObjectStore objects. */
  +objectStoreNames: $idb$DOMStringList;

  /** The mode for isolating access to data in the object stores that are in the scope of the transaction. For possible values, see the Constants section below. The default value is readonly. */
  +mode: 'readonly' | 'readwrite' | 'versionchange';

  /** Rolls back all the changes to objects in the database associated with this transaction. If this transaction has been aborted or completed, then this method throws an error event. */
  abort(): void;

  /**
   * Returns an ObjectStore object representing an object store that is part of the scope of this transaction.
   * @param name The name of the requested object store.
   * @returns The object store in the context of the transaction.
   */
  objectStore(name: string): ObjectStore;
}

/** Common interface for ObjectStore and Index, since both provide these cursor methods */
declare class $idb$HasCursor<Cursor: $idb$Cursor> {
  /**
   * Returns a Promise of an IDBRequest object that (in a separate thread) resolves a new cursor object.
   * Used for iterating through an object store by primary key with a cursor.
   * @param range Optional. A key or IDBKeyRange to be queried. If a single valid key is passed, this will default to a range containing only that key. If nothing is passed, this will default to a key range that selects all the records in this object store.
   * @param direction Optional. An IDBCursorDirection² telling the cursor what direction to travel. Defaults to "next".
   * @returns A promise that resolves with the cursor once it has been opened.
   */
  openCursor(
    range?: IDBKeyRange | $idb$IDBValidKey | null,
    direction?: 'next' | 'nextunique' | 'prev' | 'prevunique'
  ): Promise<Cursor>;

  /**
   * Returns a Promise of an IDBRequest object that (in a separate thread) resolves a new cursor object.
   * Used for iterating through an object store with a key.
   * @param range Optional. A key or IDBKeyRange to be queried. If a single valid key is passed, this will default to a range containing only that key. If nothing is passed, this will default to a key range that selects all the records in this object store.
   * @param direction Optional. An IDBCursorDirection telling the cursor what direction to travel. Defaults to "next".
   * @returns A promise that resolves with the cursor once it has been opened.
   */
  openKeyCursor(
    range?: IDBKeyRange | $idb$IDBValidKey | null,
    direction?: 'next' | 'nextunique' | 'prev' | 'prevunique'
  ): Promise<Cursor>;
}

/** Wrapper of IDBObjectStore that presents the asynchronous operations as Promises. */
declare class $idb$ObjectStore<Cursor: $idb$Cursor, Index: $idb$Index<Cursor>> extends $idb$HasCursor<Cursor> {
  /** The name of this object store. Settable only during upgrades. */
  name: string;

  /** The key path of this object store. If this attribute is null, the application must provide a key for each modification operation. */
  +keyPath: string | Array<string>;

  /** A list of the names of indexes on objects in this object store. */
  +indexNames: $idb$DOMStringList;

  /** The value of the auto increment flag for this object store. */
  +autoIncrement: boolean;

  /**
   * Returns a Promise of an IDBRequest object that (in a separate thread) creates a structured clone of the value, and updates the cloned value in the object store.
   * This is for updating existing records in an object store when the transaction's mode is readwrite.
   * @param value The value to be stored.
   * @param key Optional. The key to use to identify the record. If unspecified, it results to null.
   * @returns A promise that resolves with the new key when the underlying put IDBRequest is successful.
   */
  put(value: mixed, key?: $idb$IDBValidKey): Promise<$idb$IDBValidKey>;

  /**
   * Returns a Promise of an IDBRequest object that (in a separate thread) creates a structured clone of the value, and stores the cloned value in the object store.
   * This is for adding new records to an object store.
   * @param value The value to be stored.
   * @param key Optional. The key to use to identify the record. If unspecified, it results to null.
   * @returns A promise that resolves with the new key when the underlying add IDBRequest is successful.
   */
  add(value: mixed, key?: $idb$IDBValidKey): Promise<$idb$IDBValidKey>;

  /**
   * Returns a Promise of an IDBRequest object that (in a separate thread) deletes the store object specified.
   * This is for deleting individual records out of an object store.
   * @param key The key of the record to be deleted, or an IDBKeyRange to delete all records with keys in range.
   * @returns A promise that resolves when the underlying delete IDBRequest is successful.
   */
  delete(key: IDBKeyRange | $idb$IDBValidKey): Promise<void>;

  /**
   * Returns a Promise of an IDBRequest object that (in a separate thread) clears the object store.
   * This is for deleting all current records out of an object store.
   * @returns A promise that resolves when the underlying clear IDBRequest is successful.
   */
  clear(): Promise<void>;

  /**
   * Returns a Promise of an IDBRequest object that (in a separate thread) resolves with the store object store selected by the specified key.
   * This is for retrieving specific records from an object store.
   * @param key The key or key range that identifies the record to be retrieved.
   * @returns A promise that resolves with the item when the underlying get IDBRequest is successful.
   */
  get(key: IDBKeyRange | $idb$IDBValidKey): Promise<any>;

  /**
   * Returns a Promise of an IDBRequest object that (in a separate thread) resolves with the objects in the object store matching the specified parameter or all objects in the store if no parameters are given.
   * @param query Optional. A key or IDBKeyRange to be queried. If nothing is passed, this will default to a key range that selects all the records in this object store.
   * @param count Optional. Specifies the number of values to return if more than one is found. If it is lower than 0 or greater than 232-1 a TypeError exception will be thrown.
   * @returns A promise that resolves with the items when the underlying getAll IDBRequest is successful.
   */
  getAll(
    query?: IDBKeyRange | $idb$IDBValidKey,
    count?: number
  ): Promise<Array<any>>;

  /**
   * Returns a Promise of an IDBRequest object that (in a separate thread) finds either the given key or the primary key, if key is an IDBKeyRange.
   * @param key The key or key range that identifies the record to be retrieved.
   * @returns A promise that resolves with the item when the underlying get IDBRequest is successful.
   */
  getKey(key: IDBKeyRange | $idb$IDBValidKey): Promise<any>;

  /**
   * Returns a Promise of an IDBRequest object that (in a separate thread) resolves with record keys for all the objects matching the specified parameter or all record keys in the store if no parameters are given.
   * @param query Optional. A key or IDBKeyRange to be queried. If nothing is passed, this will default to a key range that selects all the records in this object store.
   * @param count Optional. Specifies the number of values to return if more than one is found. If it is lower than 0 or greater than 232-1 a TypeError exception will be thrown.
   * @returns A promise that resolves with the record keys when the underlying getAllKeys IDBRequest is successful.
   */
  getAllKeys(query?: IDBKeyRange, count?: number): Promise<Array<any>>;

  /**
   * Returns a Promise of an IDBRequest object that (in a separate thread) counts the matching records.
   * If no arguments are provided, it returns the total number of records in the store.
   * @param key A key or IDBKeyRange object that specifies a range of records you want to count.
   * @returns A promise that resolves with the total when the underlying count IDBRequest is successful.
   */
  count(key?: IDBKeyRange | $idb$IDBValidKey): Promise<number>;

  /**
   * Creates a new index during a version upgrade, returning a new Index object in the connected database.
   * @param name The name of the index to create. It is possible to create an index with an empty name.
   * @param keyPath The key path for the index to use. It is possible to create an index with an empty keyPath, and also to pass in an array as a keyPath.
   * @param optionalParameters Additional options: unique and multiEntry.
   * @returns The newly created index.
   */
  createIndex(
    name: string,
    keyPath: string | Array<string>,
    optionalParameters?: $Shape<{|
     +unique: boolean,
     +multiEntry: boolean,
     +locale: string | 'auto' | null,
    |}>
  ): Index;

  /**
   * Destroys the specified index in the connected database, used during a version upgrade.
   * @param indexName The name of the existing index to remove.
   */
  deleteIndex(indexName: string): void;

  /**
   * Opens an index from this object store after which it can, for example, be used to return a sequence of records sorted by that index using a cursor.
   * @param name The name of the existing index to get.
   * @returns The specified index.
   */
  index(name: string): Index;
}

/** Wrapper of IDBIndex that presents the asynchronous operations as Promises. */
declare class $idb$Index<Cursor: $idb$Cursor> extends $idb$HasCursor<Cursor> {
  /** The name of this index. */
  +name: string;

  /** The key path of this index. If null, this index is not auto-populated. */
  +keyPath: string | Array<string>;

  /**
   * Affects how the index behaves when the result of evaluating the index's key path yields an array.
   * If true, there is one record in the index for each item in an array of keys.
   * If false, then there is one record for each key that is an array.
   */
  +multiEntry: boolean;

  /** If true, this index does not allow duplicate values for a key. */
  +unique: boolean;

  /**
   * Returns a Promise of an IDBRequest object that (in a separate thread) counts the matching records.
   * If no arguments are provided, it returns the total number of records in the store.
   * @param key A key or IDBKeyRange object that specifies a range of records you want to count.
   * @returns A promise that resolves with the total when the underlying count IDBRequest is successful.
   */
  count(key?: IDBKeyRange | $idb$IDBValidKey): Promise<number>;

  /**
   * Returns a Promise of an IDBRequest object that (in a separate thread) resolves with the store object store selected by the specified key.
   * This is for retrieving specific records from an object store.
   * @param key The key or key range that identifies the record to be retrieved.
   * @returns A promise that resolves with the item when the underlying get IDBRequest is successful.
   */
  get(key: IDBKeyRange | $idb$IDBValidKey): Promise<any>;

  /**
   * Returns a Promise of an IDBRequest object that (in a separate thread) finds either the given key or the primary key, if key is an IDBKeyRange.
   * @param key The key or key range that identifies the record to be retrieved.
   * @returns A promise that resolves with the item when the underlying get IDBRequest is successful.
   */
  getKey(key: IDBKeyRange | $idb$IDBValidKey): Promise<any>;

  /**
   * Returns a Promise of an IDBRequest object that (in a separate thread) resolves with the objects in the object store matching the specified parameter or all objects in the store if no parameters are given.
   * @param query Optional. A key or IDBKeyRange to be queried. If nothing is passed, this will default to a key range that selects all the records in this object store.
   * @param count Optional. Specifies the number of values to return if more than one is found. If it is lower than 0 or greater than 232-1 a TypeError exception will be thrown.
   * @returns A promise that resolves with the items when the underlying getAll IDBRequest is successful.
   */
  getAll(
    query?: IDBKeyRange | $idb$IDBValidKey,
    count?: number
  ): Promise<Array<any>>;

  /**
   * Returns a Promise of an IDBRequest object that (in a separate thread) resolves with record keys for all the objects matching the specified parameter or all record keys in the store if no parameters are given.
   * @param query Optional. A key or IDBKeyRange to be queried. If nothing is passed, this will default to a key range that selects all the records in this object store.
   * @param count Optional. Specifies the number of values to return if more than one is found. If it is lower than 0 or greater than 232-1 a TypeError exception will be thrown.
   * @returns A promise that resolves with the record keys when the underlying getAllKeys IDBRequest is successful.
   */
  getAllKeys(query?: IDBKeyRange, count?: number): Promise<Array<any>>;
}

/** Wrapper of IDBCursor that presents the asynchronous operations as Promises. */
declare class $idb$Cursor {
  /** The key for the record at the cursor's position. If the cursor is outside its range, this is set to undefined. The cursor's key can be any data type. */
  +key: IDBKeyRange | $idb$IDBValidKey;

  /** The cursor's current effective primary key. If the cursor is currently being iterated or has iterated outside its range, this is set to undefined. The cursor's primary key can be any data type. */
  +primaryKey: any;

  /** The direction of traversal of the cursor. */
  +direction: 'next' | 'nextunique' | 'prev' | 'prevunique';

  /** The current value under the cursor. */
  +value: any;

  /** Returns the IDBObjectStore or IDBIndex the cursor was opened from. */
  +source: $idb$Index<Class<this>> | $idb$ObjectStore<Class<this>, $idb$Index<Class<this>>>;

  /**
   * Returns a Promise of an IDBRequest object that (in a separate thread) deletes the record at the cursor's position, without changing the cursor's position.
   * This can be used to delete specific records.
   * @returns A promise that resolves when the underlying delete IDBRequest is successful.
   */
  delete(): Promise<void>;

  /**
   * Returns a Promise of an IDBRequest object that (in a separate thread) updates the value at the current position of the cursor in the object store.
   * This can be used to update specific records.
   * @param value The value to write over the current cursor location.
   * @returns A promise that resolves when the underlying update IDBRequest is successful.
   */
  update(value: any): Promise<void>;

  /**
   * Sets the number times a cursor should move its position forward.
   * @param count The number of times to move the cursor forward.
   * @returns The cursor after having been moved forward the specified number of times.
   */
  advance(count: number): Promise<this | null>;

  /**
   * Advances the cursor to the next position along its direction, to the item whose key matches the optional key parameter.
   * @param key Optional. The key to position the cursor at. If no key is specified, the cursor advances to the immediate next position, based on the its direction.
   * @returns The cursor after having been continued to the next or specified record.
   */
  continue(key?: IDBKeyRange | $idb$IDBValidKey): Promise<this | null>;

  /**
   * Sets the cursor to the given index key and primary key given as arguments.
   * @param key The key to position the cursor at.
   * @param primaryKey The primary key to position the cursor at.
   * @returns The cursor after having been continued to the next or specified record.
   */
  continuePrimaryKey(
    key: IDBKeyRange | $idb$IDBValidKey,
    primaryKey: IDBKeyRange | $idb$IDBValidKey
  ): Promise<this | null>;
}

declare module 'idb' {
  declare export type ObjectStore = $idb$ObjectStore<Cursor, Index>;
  declare export type DB = $idb$DB<ObjectStore>;
  declare export type Index = $idb$Index<Cursor>;
  declare export type Cursor = $idb$Cursor;
  declare export type Transaction<T> = $idb$Transaction<ObjectStore, T>;

  declare type OpenDBCallbacks = $idb$OpenDBCallbacks<ObjectStore>;

  /**
   * This method returns a promise that resolves to a DB.
   * @param name The name of the database.
   * @param version Optional. The version to open the database with. If the version is not provided and the database exists, then a connection to the database will be opened without changing its version. If the version is not provided and the database does not exist, then it will be created with version 1.
   * @param upgradeCallback Optional. Called if version is greater than the version last opened. It's similar to IDB's onupgradeneeded. The callback receives an instance of UpgradeDB.
   * @returns A Promise that passes the DB once it has been opened.
   */
  declare export function openDB(
    name: string,
    version: number,
    options?: $Shape<OpenDBCallbacks>,
  ): Promise<DB>;

  /**
   * Behaves like indexedDB.deleteDatabase, but returns a promise.
   * @param name The name of the database.
   * @returns A Promise that completes once the DB has been removed.
   */
  declare export function deleteDB(name: string): Promise<void>;

  declare export var wrap: {|
    (IDBDatabase): DB;
    (IDBTransaction): Transaction<null>;
    (IDBObjectStore): ObjectStore;
    (IDBIndex): Index;
    (IDBRequest): Promise<any>; // Unfortunately the default Flow types for IDB are severaly lacking, so we can't do better.
  |};

  declare export var unwrap: {|
    (DB): IDBDatabase;
    (Transaction<any>): IDBTransaction;
    (ObjectStore): IDBObjectStore;
    (Index): IDBIndex;
    (Promise<any>): IDBRequest;
  |};
}

declare module 'idb/with-async-ittr.js' {
  declare class HasAsyncCursor {
    @@asyncIterator(): AsyncIterator<Cursor>;
    iterate(
      range?: IDBKeyRange | $idb$IDBValidKey | null,
      direction?: 'next' | 'nextunique' | 'prev' | 'prevunique'
    ): AsyncIterable<Cursor>;
  }

  declare export class ObjectStore extends $idb$ObjectStore<Cursor, Index> mixins HasAsyncCursor {}
  declare export class Index extends $idb$Index<Cursor> mixins HasAsyncCursor {}
  declare export class Cursor extends $idb$Cursor {
    @@asyncIterator(): AsyncIterator<Cursor>;
  }

  declare export type DB = $idb$DB<ObjectStore>;
  declare export type Transaction<T> = $idb$Transaction<ObjectStore, T>;

  declare type OpenDBCallbacks = $idb$OpenDBCallbacks<ObjectStore>;

  /**
   * This method returns a promise that resolves to a DB.
   * @param name The name of the database.
   * @param version Optional. The version to open the database with. If the version is not provided and the database exists, then a connection to the database will be opened without changing its version. If the version is not provided and the database does not exist, then it will be created with version 1.
   * @param upgradeCallback Optional. Called if version is greater than the version last opened. It's similar to IDB's onupgradeneeded. The callback receives an instance of UpgradeDB.
   * @returns A Promise that passes the DB once it has been opened.
   */
  declare export function openDB(
    name: string,
    version: number,
    options?: $Shape<OpenDBCallbacks>,
  ): Promise<DB>;

  /**
   * Behaves like indexedDB.deleteDatabase, but returns a promise.
   * @param name The name of the database.
   * @returns A Promise that completes once the DB has been removed.
   */
  declare export function deleteDB(name: string): Promise<void>;

  declare export var wrap: {|
    (IDBDatabase): DB;
    (IDBTransaction): Transaction<null>;
    (IDBObjectStore): ObjectStore;
    (IDBIndex): Index;
    (IDBRequest): Promise<any>; // Unfortunately the default Flow types for IDB are severaly lacking, so we can't do better.
  |};

  declare export var unwrap: {|
    (DB): IDBDatabase;
    (Transaction<any>): IDBTransaction;
    (ObjectStore): IDBObjectStore;
    (Index): IDBIndex;
    (Promise<any>): IDBRequest;
  |};
}
