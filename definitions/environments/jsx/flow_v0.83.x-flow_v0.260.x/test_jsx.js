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
        ...$Exact<jsx$HTMLElement>,
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
        ...$Exact<jsx$HTMLElement>,
        accessKey?: number,
        className: string,
      |};
    });
  });

  describe('hidden property', () => {
    it('should accept all valid spec usages', () => {
      type Props = {|
        ...$Exact<jsx$HTMLElement>,
      |};

      const Foo = (props: Props) => <p {...props} />;

      <>
        <Foo hidden />
        <Foo hidden="" />
        <Foo hidden="hidden" />
        <Foo hidden="until-found" />
      </>;
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
        return <input foo={foo} {...otherProps} />;
      };
    });

    it('input type can be extended', () => {
      type Props = {|
        ...$Exact<jsx$HTMLInputElement>,
        type: jsx$HTMLInputElement$Type | 'extra',
      |};

      const Input = ({ type, ...otherProps }: Props) => {
        return <input type={type} {...otherProps} />;
      };

      const a = <Input type="text" />;
      const b = <Input type="extra" />;
      // $FlowExpectedError[incompatible-type]
      const c = <Input type="random" />;
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
        return <textarea foo={foo} {...otherProps} />;
      };

      <TextArea autoComplete="on" />;
      // $FlowExpectedError[incompatible-type]
      <TextArea autoComplete={true} />;
      // $FlowExpectedError[incompatible-type]
      <TextArea autoComplete="yes" />;
      <TextArea
        value="foo"
        onChange={evt => {
          (evt.currentTarget.rows: number);
        }}
      />;
    });
  });

  describe('HTMLButtonElement', () => {
    it('has button props', () => {
      type Props = {|
        ...$Exact<jsx$HTMLButtonElement>,
        foo?: string,
      |};

      const Button = ({
        foo,
        // $FlowExpectedError[prop-missing]
        bar,
        ...otherProps
      }: Props) => {
        return <button foo={foo} {...otherProps} />;
      };

      <Button type="button" />;
      // $FlowExpectedError[incompatible-type]
      <Button type={true} />;
      // $FlowExpectedError[incompatible-type]
      <Button type="fail" />;
    });
  });

  describe('HTMLAnchorElement', () => {
    it('has button props', () => {
      type Props = {|
        ...$Exact<jsx$HTMLAnchorElement>,
        foo?: string,
      |};

      const Link = ({
        foo,
        // $FlowExpectedError[prop-missing]
        bar,
        ...otherProps
      }: Props) => {
        return <a foo={foo} {...otherProps} />;
      };

      <Link href="/" />;
      // $FlowExpectedError[incompatible-type]
      <Link href={true} />;
    });
  });
});
