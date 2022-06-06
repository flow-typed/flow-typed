// @flow
import { describe, it } from 'flow-typed-test';
import * as React from 'react';

describe('jsx', () => {
  describe('HTMLElement', () => {
    it('is inexact by default', () => {
      type Props = {
        ...jsx$HTMLElement,
        foo: string,
        ...
      };

      type ErrorProps = {|
        ...jsx$HTMLElement,
        foo: string,
      |};
    });

    it('can be cast to exact', () => {
      type Props = {|
        ...$Exact<jsx$HTMLElement>,
        foo: string,
      |};
    });

    it('can override an attribute', () => {
      type Props = {|
        ...jsx$HTMLElement,
        accessKey?: number,
        className: string,
      |};
    });
  });

  describe('HTMLInputElement', () => {
    it('has input props', () => {
      type Props = {|
        ...$Exact<jsx$HTMLInputElement>,
        foo: string,
      |};

      const Input = ({
        foo,
        // $FlowExpectedError[prop-missing]
        bar,
        ...otherProps
      }: Props) => {
        return (
          <input foo={foo} {...otherProps} />
        );
      };
    });

    it('input type can be extended', () => {
      type Props = {|
        ...$Exact<jsx$HTMLInputElement>,
        type: jsx$HTMLInputElement$Type | 'extra',
      |};

      const Input = ({
        type,
        ...otherProps
      }: Props) => {
        return (
          <input type={type} {...otherProps} />
        );
      };

      const a = <Input type="text" />
      const b = <Input type="extra" />
      // $FlowExpectedError[incompatible-type]
      const c = <Input type="random" />
    });
  });

  describe('HTMLTextAreaElement', () => {
    it('has textarea props', () => {
      type Props = {|
        ...$Exact<jsx$HTMLTextAreaElement>,
        foo?: string,
      |};

      const TextArea = ({
        foo,
        // $FlowExpectedError[prop-missing]
        bar,
        ...otherProps
      }: Props) => {
        return (
          <textarea foo={foo} {...otherProps} />
        );
      };

      (<TextArea autoComplete="on" />);
      // $FlowExpectedError[incompatible-type]
      (<TextArea autoComplete={true} />);
      // $FlowExpectedError[incompatible-type]
      (<TextArea autoComplete="yes" />);
    });
  });
});
