// @flow

import React from 'react';
import { render, Simulate, wait } from 'react-testing-library';
import { describe, it } from 'flow-typed-test';

describe('wait()', () => {
  it('should fail on invalid inputs', () => {
    // $ExpectError
    wait(1);
    // $ExpectError
    wait(() => {}, 1);
  });

  it('should pass on correct inputs', () => {
    wait(() => {});
    wait(() => {}, { timeout: 1 });
  });
});

describe('render()', () => {
  class Component extends React.Component<{}> {}
  const {
    container,
    unmount,
    queryByTestId,
    getByTestId,
    queryByText,
    getByText,
    queryByPlaceholderText,
    getByPlaceholderText,
    queryByLabelText,
    getByLabelText,
    queryByAltText,
    getByAltText
  } = render(<Component/>);

  it('unmount() should has 0 arguments', () => {
    unmount();
    // $ExpectError
    unmount(1);
  });

  it('container should be an html element', () => {
    // $ExpectError
    const a: number = container;
    const b: HTMLElement = container;
  });

  it('queryByTestId should return maybe html element', () => {
    // $ExpectError
    const a: HTMLElement = queryByTestId('1');
    const b: ?HTMLElement = queryByTestId('2');
  });

  it('getByTestId should return html element', () => {
    const a: HTMLElement = getByTestId('1');
  });

  it('queryByText should return maybe html element', () => {
    // $ExpectError
    const a: HTMLElement = queryByText('1');
    const b: ?HTMLElement = queryByText('2');
  });

  it('queryByText should return html element', () => {
    const a: HTMLElement = getByText('1');
  });

  it('queryByPlaceholderText should return maybe html element', () => {
    // $ExpectError
    const a: HTMLElement = queryByPlaceholderText('1');
    const b: ?HTMLElement = queryByPlaceholderText('2');
  });

  it('getByPlaceholderText should return html element', () => {
    const a: HTMLElement = getByPlaceholderText('1');
  });

  it('queryByLabelText should return maybe html element', () => {
    // $ExpectError
    const a: HTMLElement = queryByLabelText('1');
    const b: ?HTMLElement = queryByLabelText('2');
  });

  it('getByLabelText should return html element', () => {
    const a: HTMLElement = getByLabelText('1');
  });

  it('queryByAltText should return maybe html element', () => {
    // $ExpectError
    const a: HTMLElement = queryByAltText('1');
    const b: ?HTMLElement = queryByAltText('2');
  });

  it('getByAltText should return html element', () => {
    const a: HTMLElement = getByAltText('1');
  });
});
