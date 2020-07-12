// @flow

import { describe, it } from 'flow-typed-test';
import type { Logger, Levels, NpmLogLevels, Profiler, Info } from 'winston';

describe('profiler', () => {
  describe('profile method', () => {
    it('should accept name string param', <T: Levels>(logger: Logger<T>) => {
      logger.profile('test');
      // $FlowExpectedError
      logger.profiler(1);
      // $FlowExpectedError
      logger.profiler();
    });

    it('should accept valid level option', (logger: Logger<NpmLogLevels>) => {
      logger.profile('test', { level: 'debug' });
      logger.profile('test', { level: 'debug', message: 'hello', extra: 'some-value' });
      // $FlowExpectedError
      logger.profiler('test', { level: 'no-a-level' });
    });
  });

  describe('startTimer', (logger: Logger<NpmLogLevels>) => {
    it('should return a Profiler instance', () => {
      const profiler: Profiler<NpmLogLevels> = logger.startTimer();
      // $FlowExpectedError
      const invalidProfilerLevels: Profiler<{ nope: number, ... }> = logger.startTimer();
    });
  });

  describe('Profiler instance', (profiler: Profiler<NpmLogLevels>) => {
    it('should done method should accept InfoObject', (info: Info<NpmLogLevels>) => {
      profiler.done(info);
      const invalidInfoLevels: Info<{ nope: number, ... }> = { level: 'nope', message: 'hello' };
      // $FlowExpectedError
      profiler.done(invalidInfoLevels);
    });
  })
});