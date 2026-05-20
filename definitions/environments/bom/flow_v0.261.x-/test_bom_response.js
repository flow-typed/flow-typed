/* @flow */
const a: Response = new Response(); // correct
const b: Response = new Response(new Blob()); // correct
const c: Response = new Response(new FormData()); // correct

new Response("", { status: 404 }); // correct
new Response(null, { status: 204 }); // correct
// $FlowExpectedError[incompatible-type]
new Response("", { status: "404" }); // incorrect
// $FlowExpectedError[incompatible-type]
new Response("", { status: null }); // incorrect

const f: Response = new Response("responsebody", {
    status: 404,
    // $FlowExpectedError[incompatible-type]
    headers: "'Content-Type': 'image/jpeg'"
}); // incorrect

const g: Response = new Response("responsebody", {
    status: 404,
    headers: {
        'Content-Type': 'image/jpeg'
    }
}); // correct

const h: Response = new Response("responsebody", {
    status: 404,
    headers: new Headers({
        'Content-Type': 'image/jpeg'
    })
}); // correct, if verbose

// $FlowExpectedError[incompatible-type]
const i: Response = new Response({
    status: 404,
    headers: new Headers({
        'Content-Type': 'image/jpeg'
    })
}); // incorrect

const ok: boolean = h.ok;
const redirected: boolean = h.redirected;
const status: number = h.status;

h.text().then((t: string) => t); // correct
// $FlowExpectedError[incompatible-type]
h.text().then((t: Buffer) => t); // incorrect
h.arrayBuffer().then((ab: ArrayBuffer) => ab); // correct
// $FlowExpectedError[incompatible-type]
h.arrayBuffer().then((ab: Buffer) => ab); // incorrect
