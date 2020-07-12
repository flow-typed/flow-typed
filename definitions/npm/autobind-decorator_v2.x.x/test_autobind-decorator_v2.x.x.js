// @flow
import { describe, it } from 'flow-typed-test';
import autobind, { boundMethod, boundClass } from 'autobind-decorator';
import type { TypedPropertyDescriptor } from 'autobind-decorator';

class Foo {
  method(): void { }
  get property(): number { return 1; }
  set property(value: number): void { }
}

function BarCtor() { }

describe('boundClass', () => {
  it('returns result of correct type', () => {
    (boundClass(Foo): typeof (Foo));

    (boundClass(BarCtor): typeof (BarCtor));
  });

  it('errors when types incompatible', () => {
    // $FlowExpectedError BarCtor is incompatible with Foo
    (boundClass(BarCtor): typeof (Foo));

    // $FlowExpectedError Foo is incompatible with string
    (boundClass(Foo): string);
  });
});


const methodDescriptor = {
  enumerable: true,
  configurable: true,
  writable: true,
};

const propertyDescriptor = {
  enumerable: true,
  configurable: true,
  writable: true,
  get: () => 1,
  set: (value) => { },
  value: 1,
};

describe('boundMethod', () => {
  it('returns result of correct type', () => {
    (boundMethod(Foo, 'method', methodDescriptor): TypedPropertyDescriptor<any>);

    (boundMethod(Foo, 'property', propertyDescriptor): TypedPropertyDescriptor<number>);
  });

  it('errors when types incompatible', () => {
    // $FlowExpectedError number is incompatible with string
    boundMethod(Foo, 123, propertyDescriptor);

    const propertyDescriptorString = {
      enumerable: true,
      configurable: true,
      writable: true,
      get: () => '1',
      set: (value: string) => { },
      value: '1',
    };
    // $FlowExpectedError string is incompatible with number
    (boundMethod(Foo, 'property', propertyDescriptorString): TypedPropertyDescriptor<number>);
  });
});



describe('autobind', () => {
  it('returns result of correct type', () => {
    (autobind(Foo): typeof (Foo));

    (autobind(Foo, 'method', methodDescriptor): TypedPropertyDescriptor<any>);
  });

  it('errors when types incompatible', () => {
    // $FlowExpectedError Foo is incompatible with string
    (autobind(Foo): string);

    // $FlowExpectedError number is incompatible with string
    autobind(Foo, 123, propertyDescriptor);
  });
});




