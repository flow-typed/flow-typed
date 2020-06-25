// @flow

import { describe, it } from 'flow-typed-test';
import type { Logger, Levels, NpmLogLevels, Profiler, Info, Format } from 'winston';
import { format } from 'winston';

describe('format', () => {
  describe('prettyPrint', () => {
    it('should option be optional', () => {
      const f1: Format = format.prettyPrint();
    });
    it('should colorize be a boolean', (options) => {
      const f1: Format = format.prettyPrint({ colorize: true });
      const f2: Format = format.prettyPrint({ colorize: false });
      // $FlowExpectedError
      const f3: Format = format.prettyPrint({ colorize: 1 });
    });
    it('should depth be a number', (options) => {
      const f1: Format = format.prettyPrint({ depth: 0 });
      const f2: Format = format.prettyPrint({ depth: 5 });
      // $FlowExpectedError
      const f3: Format = format.prettyPrint({ depth: true });
    });
    it('should not accept extra options', (options) => {
      // $FlowExpectedError
      const f1: Format = format.prettyPrint({ nope: true });
      const f2: Format = format.prettyPrint({ depth: 5, colorize: true });
    });
  });

  describe('errors', () => {
    it('should option be optional', () => {
      const f1: Format = format.errors();
    });
    it('should stack be a boolean', (options) => {
      const f1: Format = format.errors({ stack: true });
      const f2: Format = format.errors({ stack: false });
      // $FlowExpectedError
      const f3: Format = format.errors({ stack: 1 });
    });
    it('should not accept extra options', (options) => {
      // $FlowExpectedError
      const f1: Format = format.prettyPrint({ nope: true });
    });
  });
});
