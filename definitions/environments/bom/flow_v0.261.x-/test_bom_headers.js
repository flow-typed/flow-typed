/* @flow */

// $FlowExpectedError[incompatible-call]
const a = new Headers("'Content-Type': 'image/jpeg'"); // not correct
// $FlowExpectedError[incompatible-call]
const b = new Headers(['Content-Type', 'image/jpeg']); // not correct
const c = new Headers({'Content-Type': 'image/jpeg'}); // correct
const d = new Headers(c); // correct
const e: Headers = new Headers(); // correct
e.append('Content-Type', 'image/jpeg'); // correct
// $FlowExpectedError[incompatible-call]
e.append('Content-Type'); // not correct
// $FlowExpectedError[incompatible-call]
e.append({'Content-Type': 'image/jpeg'}); // not correct
e.set('Content-Type', 'image/jpeg'); // correct
// $FlowExpectedError[incompatible-call]
e.set('Content-Type'); // not correct
// $FlowExpectedError[incompatible-call]
e.set({'Content-Type': 'image/jpeg'}); // not correct

// $FlowExpectedError[incompatible-type]
const f: Headers = e.append('Content-Type', 'image/jpeg'); // not correct

// $FlowExpectedError[incompatible-type]
const g: string = e.get('Content-Type'); // correct
// $FlowExpectedError[incompatible-type]
const h: number = e.get('Content-Type'); // not correct

for (let v of e) {
  const [i, j]: [string, string] = v; // correct
}

for (let v of e.entries()) {
  const [i, j]: [string, string] = v; // correct
}

// $FlowExpectedError[prop-missing]
e.getAll('content-type'); // incorrect
e.forEach((val: string) => val); // correct
e.forEach((val: string, key: string) => `${key}: ${val}`); // correct
e.forEach((val: string, key: string, o: Headers) => {}); // correct
e.forEach(() => {}, {}); // correct
