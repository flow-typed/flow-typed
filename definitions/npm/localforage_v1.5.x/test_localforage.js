// @flow

// Taken directly from http://localforage.github.io/localForage/ docs
// at version 1.5.3

import localforage from 'localforage';

localforage.getItem('somekey').then(function(value) {
    // This code runs once the value has been loaded
    // from the offline store.
    console.log(value);
}).catch(function(err) {
    // This code runs if there were any errors
    console.log(err);
});

// Callback version:
localforage.getItem('somekey', function(err, value) {
    // Run this code once the value has been
    // loaded from the offline store.
    console.log(value);
});

localforage.setItem('somekey', 'some value').then(function (value) {
    // Do other things once the value has been saved.
    console.log(value);
}).catch(function(err) {
    // This code runs if there were any errors
    console.log(err);
});

// Unlike localStorage, you can store non-strings.
localforage.setItem('my array', [1, 2, 'three']).then(function(value) {
    // This will output `1`.
    console.log(value[0]);
}).catch(function(err) {
    // This code runs if there were any errors
    console.log(err);
});

localforage.removeItem('somekey').then(function() {
    // Run this code once the key has been removed.
    console.log('Key is cleared!');
}).catch(function(err) {
    // This code runs if there were any errors
    console.log(err);
});

localforage.clear().then(function() {
    // Run this code once the database has been entirely deleted.
    console.log('Database is now empty.');
}).catch(function(err) {
    // This code runs if there were any errors
    console.log(err);
});

localforage.length().then(function(numberOfKeys) {
    // Outputs the length of the database.
    console.log(numberOfKeys);
}).catch(function(err) {
    // This code runs if there were any errors
    console.log(err);
});

localforage.key(2).then(function(keyName) {
    // Name of the key.
    console.log(keyName);
}).catch(function(err) {
    // This code runs if there were any errors
    console.log(err);
});

localforage.keys().then(function(keys) {
    // An array of all the key names.
    console.log(keys);
}).catch(function(err) {
    // This code runs if there were any errors
    console.log(err);
});

// The same code, but using ES6 Promises.
localforage.iterate(function(value, key, iterationNumber) {
    // Resulting key/value pair -- this callback
    // will be executed for every item in the
    // database.
    console.log([key, value]);
}).then(function() {
    console.log('Iteration has completed');
}).catch(function(err) {
    // This code runs if there were any errors
    console.log(err);
});

// Exit the iteration early:
localforage.iterate(function(value, key, iterationNumber) {
    if (iterationNumber < 3) {
        console.log([key, value]);
    } else {
        return [key, value];
    }
}).then(function(result) {
    console.log('Iteration has completed, last iterated pair:');
    console.log(result);
}).catch(function(err) {
    // This code runs if there were any errors
    console.log(err);
});

// Force localStorage to be the backend driver.
localforage.setDriver(localforage.LOCALSTORAGE);

// Supply a list of drivers, in order of preference.
localforage.setDriver([localforage.WEBSQL, localforage.INDEXEDDB]);

// This will rename the database from "localforage"
// to "Hipster PDA App".
localforage.config({
    name: 'Hipster PDA App'
});

// This will force localStorage as the storage
// driver even if another is available. You can
// use this instead of `setDriver()`.
localforage.config({
    driver: localforage.LOCALSTORAGE,
    name: 'I-heart-localStorage'
});

// This will use a different driver order.
localforage.config({
    driver: [localforage.WEBSQL,
             localforage.INDEXEDDB,
             localforage.LOCALSTORAGE],
    name: 'WebSQL-Rox'
});

// Implement the driver here.
var myCustomDriver = {
    _driver: 'customDriverUniqueName',
    _initStorage: function(options) {
        // Custom implementation here...
    },
    clear: function(callback) {
        // Custom implementation here...
    },
    getItem: function(key, callback) {
        // Custom implementation here...
    },
    key: function(n, callback) {
        // Custom implementation here...
    },
    keys: function(callback) {
        // Custom implementation here...
    },
    length: function(callback) {
        // Custom implementation here...
    },
    removeItem: function(key, callback) {
        // Custom implementation here...
    },
    setItem: function(key, value, callback) {
        // Custom implementation here...
    }
}

// Add the driver to localForage.
localforage.defineDriver(myCustomDriver);

(localforage.driver(): string);
// "asyncStorage"

localforage.ready().then(function() {
    // This code runs once localforage
    // has fully initialized the selected driver.
    console.log(localforage.driver()); // LocalStorage
}).catch(function (e) {
    console.log(e); // `No available storage method found.`
    // One of the cases that `ready()` rejects,
    // is when no usable storage driver is found
});

(localforage.supports(localforage.INDEXEDDB): boolean);
// true

var store = localforage.createInstance({
  name: "nameHere"
});

var otherStore = localforage.createInstance({
  name: "otherName"
});

// Setting the key on one of these doesn't affect the other.
store.setItem("key", "value");
otherStore.setItem("key", "value2");

localforage.dropInstance().then(function() {
  console.log('Dropped the store of the current instance');
});

localforage.dropInstance({
  name: "otherName",
  storeName: "otherStore"
}).then(function() {
  console.log('Dropped otherStore');
});

localforage.dropInstance({
  name: "otherName"
}).then(function() {
  console.log('Dropped otherName database');
});

// $ExpectError
localforage.getItem();

// $ExpectError
localforage.setItem();
