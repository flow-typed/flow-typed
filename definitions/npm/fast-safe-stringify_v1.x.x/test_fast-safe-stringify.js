import safeStringify from "fast-safe-stringify";

const a: string = safeStringify({});
// $ExpectError
const b: boolean = safeStringify({});
