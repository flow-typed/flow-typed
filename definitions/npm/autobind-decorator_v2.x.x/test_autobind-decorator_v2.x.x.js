// @flow
import { describe, it } from 'flow-typed-test';
import autobind, { boundMethod, boundClass } from 'autobind-decorator';

class Foo { }
(boundClass(Foo): typeof(Foo));

function BarCtor() { }
(boundClass(BarCtor): typeof(BarCtor));

// $ExpectError
(boundClass(string): typeof(Foo));

// $ExpectError
(boundClass(Foo): string);
