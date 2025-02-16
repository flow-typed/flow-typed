// @flow

// constructor
const a: FormData = new FormData(); // correct
// $FlowExpectedError[incompatible-call]
new FormData(''); // incorrect
// $FlowExpectedError[incompatible-call]
new FormData(document.createElement('input')); // incorrect
new FormData(document.createElement('form')); // correct
new FormData(document.createElement('form'), null); // correct
new FormData(document.createElement('form'), document.createElement("button")); // correct
// $FlowExpectedError[incompatible-call]
new FormData(document.createElement('form'), "submitter"); // incorrect

// has
const b: boolean = a.has('foo'); // correct

// get
const c: ?(string | File) = a.get('foo'); // correct
// $FlowExpectedError[incompatible-type]
const d: string = a.get('foo'); // incorrect
// $FlowExpectedError[incompatible-type]
const e: Blob = a.get('foo'); // incorrect 
const f: ?(string | File | Blob) = a.get('foo'); // incorrect
// $FlowExpectedError[incompatible-call]
a.get(2); // incorrect

// getAll
const a1: Array<string | File> = a.getAll('foo'); // correct
// $FlowExpectedError[incompatible-type]
const a2: Array<string | File | number> = a.getAll('foo'); // incorrect
// $FlowExpectedError[incompatible-type]
const a3: Array<string | Blob | File> = a.getAll('foo'); // incorrect
// $FlowExpectedError[incompatible-call]
a.getAll(23); // incorrect

// set
a.set('foo', 'bar'); // correct
// $FlowExpectedError[incompatible-call]
a.set('foo', {}); // incorrect
// $FlowExpectedError[incompatible-call]
a.set(2, 'bar'); // incorrect
// $FlowExpectedError[incompatible-call]
a.set('foo', 'bar', 'baz'); // incorrect
a.set('bar', new File([], 'q')) // correct
a.set('bar', new File([], 'q'), 'x') // correct
// $FlowExpectedError[incompatible-call]
a.set('bar', new File([], 'q'), 2) // incorrect
a.set('bar', new Blob) // correct
a.set('bar', new Blob, 'x') // correct
// $FlowExpectedError[incompatible-call]
a.set('bar', new Blob, 2) // incorrect

// append
a.append('foo', 'bar'); // correct
// $FlowExpectedError[incompatible-call]
a.append('foo', {}); // incorrect
// $FlowExpectedError[incompatible-call]
a.append(2, 'bar'); // incorrect
// $FlowExpectedError[incompatible-call]
a.append('foo', 'bar', 'baz'); // incorrect
a.append('foo', 'bar'); // correct
a.append('bar', new File([], 'q')) // correct
a.append('bar', new File([], 'q'), 'x') // correct
// $FlowExpectedError[incompatible-call]
a.append('bar', new File([], 'q'), 2) // incorrect
a.append('bar', new Blob) // correct
a.append('bar', new Blob, 'x') // correct
// $FlowExpectedError[incompatible-call]
a.append('bar', new Blob, 2) // incorrect

// delete
a.delete('xx'); // correct
// $FlowExpectedError[incompatible-call]
a.delete(3); // incorrect

// keys
for (let x: string of a.keys()) {} // correct
// $FlowExpectedError[incompatible-type]
for (let x: number of a.keys()) {} // incorrect

// values
for (let x: string | File of a.values()) {} // correct
for (let x: string | File | Blob of a.values()) {} // incorrect

// entries
for (let [x, y]: [string, string | File] of a.entries()) {} // correct
// $FlowExpectedError[incompatible-type]
for (let [x, y]: [string, string | File | Blob] of a.entries()) {} // incorrect
// $FlowExpectedError[incompatible-type]
for (let [x, y]: [number, string] of a.entries()) {} // incorrect
// $FlowExpectedError[incompatible-type]
for (let [x, y]: [string, number] of a.entries()) {} // incorrect
// $FlowExpectedError[incompatible-type]
for (let [x, y]: [number, number] of a.entries()) {} // incorrect
