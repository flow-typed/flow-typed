// @flow

declare var indexedDB: IDBFactory;

if (indexedDB.databases) {
    indexedDB.databases().then(databases => {
        databases.forEach(db => console.log(db))
    });
}

const openRequest = indexedDB.open('dbName', 1);

openRequest.onsuccess = function (e) {
    const db = e.target.result as IDBDatabase;

    const storeName = 'storeName';
    const transaction = db.transaction(storeName, 'readonly', {durability: 'relaxed'});

    // $FlowExpectedError[prop-missing]
    transaction.objectStore(storeName).getAll();
    // $FlowExpectedError[prop-missing]
    transaction.objectStore(storeName).getAll('q');
    // $FlowExpectedError[prop-missing]
    transaction.objectStore(storeName).getAll(undefined, 3);
    // $FlowExpectedError[prop-missing]
    transaction.objectStore(storeName).getAll('q', 3);
}
