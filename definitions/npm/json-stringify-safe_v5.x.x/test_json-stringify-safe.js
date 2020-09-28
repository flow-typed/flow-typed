import safeStringify from "json-stringify-safe";

const a: string = safeStringify({});
// $FlowExpectedError
const b: boolean = safeStringify({});
