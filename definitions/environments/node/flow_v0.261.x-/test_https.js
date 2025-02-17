// @flow

{
const https = require('https');
const url = 'http://nodejs.org/dist/index.json';

https.get({});
https.get({host: 'localhost'});
https.get(url);
https.get(url, () => {});
https.get(url, {}, () => {});
https.get(url, {host: 'localhost'}, () => {});

// $FlowExpectedError[incompatible-call]
https.get(-1); // error
// $FlowExpectedError[incompatible-call]
https.get({port: 'expects number'}); // error
// $FlowExpectedError[incompatible-call]
https.get(url, {}, -1); // error
// $FlowExpectedError[incompatible-call]
https.get(url, {port: 'expects number'}, () => {}); // error
}

{
const https = require('https');
const url = 'http://nodejs.org/dist/index.json';

https.request({});
https.request({host: 'localhost'});
https.request(url);
https.request(url, () => {});
https.request(url, {}, () => {});
https.request(url, {host: 'localhost'}, () => {});

// $FlowExpectedError[incompatible-call]
https.request(-1); // error
// $FlowExpectedError[incompatible-call]
https.request({port: 'expects number'}); // error
// $FlowExpectedError[incompatible-call]
https.request(url, {}, -1); // error
// $FlowExpectedError[incompatible-call]
https.request(url, {port: 'expects number'}, () => {}); // error
}

{
const https = require('https');

const server = https.createServer((req, res) => {
  res.end();
});

// server.listen(handle[, callback])
// -
// server.listen(handle);
server.listen({});
server.listen({port: 8443, host: 'localhost', backlog: 123, exclusive: true});
server.listen({fd: '/var/run/mysocket'});
// server.listen(handle, callback);
server.listen({}, () => {});
server.listen({}, function() {});
server.listen({port: 8443, host: 'localhost', backlog: 123, exclusive: true}, () => {});
server.listen({port: 8443, host: 'localhost', backlog: 123, exclusive: true}, function() {});
server.listen({fd: '/var/run/mysocket'}, () => {});
server.listen({fd: '/var/run/mysocket'}, function() {});

// server.listen(path[, callback])
// -
// server.listen(path);
server.listen('/var/run/mysocket');
// server.listen(path, callback);
server.listen('/var/run/mysocket', () => {});
server.listen('/var/run/mysocket', function() {});

// server.listen([port][, hostname][, backlog][, callback])
// -
// server.listen()
server.listen();
// server.listen(port)
server.listen(8000);
// server.listen(callback)
server.listen(() => {});
server.listen(function() {});
// server.listen(hostname)
server.listen('localhost');
// server.listen(port, callback)
server.listen(8000, () => {});
server.listen(8000, function() {});
// server.listen(port, hostname, callback)
server.listen(8000, 'localhost', function() {});
server.listen(8000, 'localhost');
// server.listen(port, backlog, callback)
server.listen(8000, 123, () => {});
server.listen(8000, 123, function() {});
// server.listen(port, hostname, backlog, callback)
server.listen(8000, 'localhost', 123, function() {});
server.listen(8000, 'localhost', 123, function() {});

// These should pass to ensure we don't break code passing undefined
server.listen(8000, undefined, undefined, undefined);
server.listen(8000, undefined, undefined, () => {});
server.listen(8000, undefined, undefined, function() {});
server.listen(8000, 'localhost', undefined, () => {});
server.listen(8000, 'localhost', undefined, function() {});
server.listen(8000, 'localhost', 123, () => {});
server.listen(8000, 'localhost', 123, function() {});
server.listen(8000, undefined, 123, () => {});
server.listen(8000, undefined, 123, function() {});

// These should fail
server.listen(() => {}, {});
server.listen(function() {}, {});
// $FlowExpectedError[incompatible-call]
server.listen({}, () => {}, 'localhost', 123);
// $FlowExpectedError[incompatible-call]
server.listen({}, function() {}, 'localhost', 123);
// $FlowExpectedError[incompatible-call]
server.listen({}, () => {}, 123);
// $FlowExpectedError[incompatible-call]
server.listen({}, function() {}, 123);
server.listen(() => {}, 123);
server.listen(function() {}, 123);
// $FlowExpectedError[incompatible-call]
server.listen(() => {}, 'localhost', 123);
// $FlowExpectedError[incompatible-call]
server.listen(function() {}, 'localhost', 123);
server.listen(() => {}, 'localhost');
server.listen(function() {}, 'localhost');
// $FlowExpectedError[incompatible-call]
server.listen(8443, () => {}, 'localhost', 123);
// $FlowExpectedError[incompatible-call]
server.listen(8443, function() {}, 'localhost', 123);
// $FlowExpectedError[incompatible-call]
server.listen(8443, () => {}, 123);
// $FlowExpectedError[incompatible-call]
server.listen(8443, function() {}, 123);
// $FlowExpectedError[incompatible-call]
server.listen(8443, () => {}, 'localhost');
// $FlowExpectedError[incompatible-call]
server.listen(8443, function() {}, 'localhost');
}
