/* @flow */
// $FlowExpectedError[incompatible-call]
const a: Request = new Request(); // incorrect
const b: Request = new Request('http://example.org'); // correct
const c: Request = new Request(b); // correct
const d: Request = new Request(c.clone()); // correct (doesn't make much sense though)
// $FlowExpectedError[incompatible-call]
// $FlowExpectedError[incompatible-variance]
// $FlowExpectedError[class-object-subtyping]
const e: Request = new Request(b, c); // incorrect

// $FlowExpectedError[incompatible-call]
const f: Request = new Request({}) // incorrect
const g: Request = new Request('http://example.org', {}) // correct
new Request(new URL('http://example.org')); // correct

const h: Request = new Request('http://example.org', {
  method: 'GET',
  headers: {
    'Content-Type': 'image/jpeg'
  },
  mode: 'cors',
  cache: 'default'
}) // correct

var bodyUsed: boolean = h.bodyUsed;

h.text().then((t: string) => t); // correct
// $FlowExpectedError[incompatible-call]
h.text().then((t: Buffer) => t); // incorrect
h.arrayBuffer().then((ab: ArrayBuffer) => ab); // correct
// $FlowExpectedError[incompatible-call]
h.arrayBuffer().then((ab: Buffer) => ab); // incorrect

const i: Request = new Request('http://example.org', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/octet-stream'
  },
  body: new ArrayBuffer(10),
}); // correct

const j: Request = new Request('http://example.org', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/octet-stream'
  },
  body: new Uint8Array(10),
}); // correct

const k: Request = new Request('http://example.org', {
  method: 'POST',
  headers: {
    'Content-Type': 'image/jpeg'
  },
  body: new URLSearchParams("key=value"),
  mode: 'cors',
  cache: 'default'
}) // correct

const l: Request = new Request('http://example.org', {
  method: 'GET',
  // $FlowExpectedError[incompatible-call]
  headers: 'Content-Type: image/jpeg',
  mode: 'cors',
  cache: 'default'
}) // incorrect - headers is string

new Request('/', { method: 'post' }); // correct
new Request('/', { method: 'hello' }); // correct
// $FlowExpectedError[incompatible-call]
new Request('/', { method: null }); // incorrect
