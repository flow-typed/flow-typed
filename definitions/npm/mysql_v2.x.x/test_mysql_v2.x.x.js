// @flow

import mysql from 'mysql';
import type { Connection, Pool } from 'mysql';

// Connection

let connection: Connection = mysql.createConnection({
  host: 'localhost',
  port: 1234,
  user: 'test_user',
  password: '1234'
});

connection = mysql.createConnection('mysql://root:1111@localhost/test');

connection.connect();
connection.connect((err) => {});

connection.end();
connection.end(() => {});
connection.end((error: ?Error) => {});

connection.destroy();

connection.query('SELECT 1');
connection.query('SELECT * FROM `table` WHERE id = ?', [1]);
connection.query({sql: 'SELECT * FROM `table` WHERE id = ?', nestTables: true});
connection.query('', [1,'d',{a:1},[{b:1}]]);

// Streaming

let query = connection.query('select 1');
query.stream().pipe(process.stdout);

// $ExpectError
connection.query(123);

// $ExpectError
connection.query('123123', 123);

// $ExpectError
connection = mysql.createConnection({
  xyz: 12
});


// Pool

let pool: Pool = mysql.createPool({
  host: 'localhost',
  port: 1234,
  user: 'test_user',
  password: '1234'
});
pool = mysql.createPool({
  host: 'localhost',
  port: 1234,
  user: 'test_user',
  password: '1234',
  connectionLimit: 15,
  acquireTimeout: 15000,
  queueLimit: 10,
  waitForConnections: false
});
// $ExpectError
pool = mysql.createPool({
  host: 'localhost',
  port: 1234,
  user: 'test_user',
  password: '1234',
  connectionLimit: "13"
});
pool = mysql.createPool('mysql://root:1111@localhost/test');

pool.end();
pool.end(() => {});
pool.end((error: ?Error) => {});

pool.query('SELECT 1');
pool.query('SELECT * FROM `table` WHERE id = ?', [1]);
pool.query({sql: 'SELECT * FROM `table` WHERE id = ?', nestTables: true});
pool.query('', [1,'d',{a:1},[{b:1}]]);

// $ExpectError
pool.query(123);

// $ExpectError
pool.query('123123', 123);


// PoolCluster

// create
let poolCluster = mysql.createPoolCluster();
let config = '';
let masterConfig = '';
let slave1Config = '';
let slave2Config = '';

// add configurations (the config is a pool config object)
poolCluster.add(config); // add configuration with automatic name
poolCluster.add('MASTER', masterConfig); // add a named configuration
poolCluster.add('SLAVE1', slave1Config);
poolCluster.add('SLAVE2', slave2Config);

// remove configurations
poolCluster.remove('SLAVE2'); // By nodeId
poolCluster.remove('SLAVE*'); // By target group : SLAVE1-2

// Target Group : ALL(anonymous, MASTER, SLAVE1-2), Selector : round-robin(default)
poolCluster.getConnection(function (err, connection) {});

// Target Group : MASTER, Selector : round-robin
poolCluster.getConnection('MASTER', function (err, connection) {});

// Target Group : SLAVE1-2, Selector : order
// If can't connect to SLAVE1, return SLAVE2. (remove SLAVE1 in the cluster)
poolCluster.on('remove', function (nodeId) {
  console.log('REMOVED NODE : ' + nodeId); // nodeId = SLAVE1
});

// A pattern can be passed with *  as wildcard
poolCluster.getConnection('SLAVE*', 'ORDER', function (err, connection) {});

// The pattern can also be a regular expression
poolCluster.getConnection(/^SLAVE[12]$/, function (err, connection) {});

// of namespace : of(pattern, selector)
poolCluster.of('*').getConnection(function (err, connection) {});

pool = poolCluster.of('SLAVE*', 'RANDOM');
pool.getConnection(function (err, connection) {});
pool.getConnection(function (err, connection) {});

// close all connections
poolCluster.end(function (err) {
  // all connections in the pool cluster have ended
});
