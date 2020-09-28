import safeStringify from "fast-safe-stringify";

const a: string = safeStringify({});
// $FlowExpectedError
const b: boolean = safeStringify({});
