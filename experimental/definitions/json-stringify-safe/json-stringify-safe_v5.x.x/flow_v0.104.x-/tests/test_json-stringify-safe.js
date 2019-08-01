import safeStringify from "json-stringify-safe";

const a: string = safeStringify({});
// $ExpectError
const b: boolean = safeStringify({});
