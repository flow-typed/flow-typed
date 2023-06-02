// @flow

import { describe, it } from 'flow-typed-test';
import { Db } from 'mongodb';

// http://mongodb.github.io/node-mongodb-native/3.5/quick-start/quick-start/
describe('Quick Start', () => {
  it('connect', () => {
    const MongoClient = require('mongodb').MongoClient;
    const assert = require('assert');

    // Connection URL
    const url = 'mongodb://localhost:27017';

    // Database Name
    const dbName = 'myproject';

    // Create a new MongoClient
    const client = new MongoClient(url);

    // Use connect method to connect to the Server
    client.connect(function(err) {
      assert.equal(null, err);
      console.log("Connected successfully to server");

      const db = client.db(dbName);

      client.close();
    });
  });

  it('insertDocuments', (db: typeof Db, callback: () => void) => {
    const assert = require('assert');
    // Get the documents collection
    const collection = db.collection('documents');
    // Insert some documents
    collection.insertMany([
      {a : 1}, {a : 2}, {a : 3}
    ], function(err, result) {
      assert.equal(err, null);
      assert.equal(3, result.result.n);
      assert.equal(3, result.ops.length);
      console.log("Inserted 3 documents into the collection");
      callback();
    });
  });

  it('findDocuments', (db: typeof Db, callback: () => void) => {
    const assert = require('assert');
    // Get the documents collection
    const collection = db.collection('documents');
    // Find some documents
    collection.find({'a': 3}).toArray(function(err, docs) {
      assert.equal(err, null);
      console.log("Found the following records");
      console.log(docs);
      callback();
    });
  });

  it('updateDocument', (db: typeof Db, callback: () => void) => {
    const assert = require('assert');
    // Get the documents collection
    const collection = db.collection('documents');
    // Update document where a is 2, set b equal to 1
    collection.updateOne({ a : 2 }, { $set: { b : 1 } }, function(err, result) {
      assert.equal(err, null);
      assert.equal(1, result.result.n);
      console.log("Updated the document with the field a equal to 2");
      callback();
    });
  });

  it('removeDocument', (db: typeof Db, callback: () => void) => {
    const assert = require('assert');
    // Get the documents collection
    const collection = db.collection('documents');
    // Delete document where a is 3
    collection.deleteOne({ a : 3 }, function(err, result) {
      assert.equal(err, null);
      assert.equal(1, result.result.n);
      console.log("Removed the document with the field a equal to 3");
      callback();
    });
  });

  it('indexCollection', (db: typeof Db, callback: () => void) => {
    db.collection('documents').createIndex(
      { "a": 1 },
        null,
        function(err, results) {
          console.log(results);
          callback();
      }
    );
  });
})