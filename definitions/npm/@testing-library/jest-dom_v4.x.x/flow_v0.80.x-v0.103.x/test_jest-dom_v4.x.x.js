// @flow

import { describe, it } from 'flow-typed-test';
import React from 'react';

import {
  toBeInTheDocument,
  toBeVisible,
  toBeEmpty,
  toBeDisabled,
  toBeEnabled,
  toBeInvalid,
  toBeRequired,
  toBeValid,
  toContainElement,
  toContainHTML,
  toHaveAttribute,
  toHaveClass,
  toHaveFocus,
  toHaveFormValues,
  toHaveStyle,
  toHaveTextContent,
  toHaveValue,
} from '@testing-library/jest-dom';

import '@testing-library/jest-dom/extend-expect';

type JestMatcherResult = {
  message?: string | (() => string),
  pass: boolean,
};

type JestMatcher = (
  received: any,
  ...actual: Array<any>
) => JestMatcherResult | Promise<JestMatcherResult>;

declare var expect: {
  extend(matchers: { [name: string]: JestMatcher }): void,
};

describe('jest-dom', () => {
  it('should validate on default extend usage', () => {
    expect.extend({
      toBeInTheDocument,
      toBeVisible,
      toBeEmpty,
      toBeDisabled,
      toBeEnabled,
      toBeInvalid,
      toBeRequired,
      toBeValid,
      toContainElement,
      toContainHTML,
      toHaveAttribute,
      toHaveClass,
      toHaveFocus,
      toHaveFormValues,
      toHaveStyle,
      toHaveTextContent,
      toHaveValue,
    });
  });
});
