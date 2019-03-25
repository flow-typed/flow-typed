// @flow
import { describe, it } from 'flow-typed-test';
import autobind, { boundMethod, boundClass } from 'autobind-decorator';
import type { TypedPropertyDescriptor } from 'autobind-decorator';

class Foo {
  method(): void {}
  get property(): number { return 1; }
  set property(value: number): void { }
}

/* boundClass */

(boundClass(Foo): typeof(Foo));

function BarCtor() { }
(boundClass(BarCtor): typeof(BarCtor));

//$ExpectError BarCtor is incompatible with Foo
(boundClass(BarCtor): typeof(Foo));

// $ExpectError Foo is incompatible with string
(boundClass(Foo): string);



/* boundMethod */

const methodDescriptor = {
  enumerable: true,
  configurable: true,
  writable: true,
};
(boundMethod(Foo, 'method', methodDescriptor): TypedPropertyDescriptor<any>);

const propertyDescriptor = {
  enumerable: true,
  configurable: true,
  writable: true,
  get: () => 1,
  set: (value) => {},
  value: 1,
};
(boundMethod(Foo, 'property', propertyDescriptor): TypedPropertyDescriptor<number>);

// $ExpectError number is incompatible with string
boundMethod(Foo, 123, propertyDescriptor);

const propertyDescriptorString = {
  enumerable: true,
  configurable: true,
  writable: true,
  get: () => '1',
  set: (value: string) => {},
  value: '1',
};
// $ExpectError string is incompatible with number
(boundMethod(Foo, 'property', propertyDescriptorString): TypedPropertyDescriptor<number>);


/* autobind */

(autobind(Foo): typeof(Foo));

(autobind(Foo, 'method', methodDescriptor): TypedPropertyDescriptor<any>);

// $ExpectError Foo is incompatible with string
(autobind(Foo): string);

// $ExpectError number is incompatible with string
autobind(Foo, 123, propertyDescriptor)
