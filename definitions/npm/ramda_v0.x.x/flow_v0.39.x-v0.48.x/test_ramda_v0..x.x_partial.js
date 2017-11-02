/* @flow */
/*eslint-disable no-undef, no-unused-vars, no-console*/
import { partial } from "ramda";

// --- Partial ---
const method1 = (foo: string, bah: number, baz: boolean) => baz;

const partial1: Function = partial(method1, ["foo"]);
const partial2: boolean = partial(method1, ["foo"])(4, true);
// $ExpectError
const partial3: Function = partial(method1, [4]);
const partial4: boolean = partial(method1, ["foo", 4])(true);
const partial5: boolean = partial(method1, ["foo", 4, true])();
