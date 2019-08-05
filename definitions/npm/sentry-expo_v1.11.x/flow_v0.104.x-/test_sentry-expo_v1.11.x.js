// @flow

import { describe, it } from 'flow-typed-test';
import Sentry from 'sentry-expo';
import type { SentryBreadcrumb } from 'sentry-expo'

describe('sentry-expo', () => {
  describe('default export', () => {
    it('should allow for basic usage', () => {
      Sentry.config('foo').install();
      // $ExpectError -- should pass in a string
      Sentry.config().install();
    });
  });

  describe('SentryBreadcrumb', () => {
    it('should have typing', () => {
      const breadcrumb1: SentryBreadcrumb = {
        message: 'foo',
        category: 'category',
        level: 'error',
        data: { hello: 1 },
        type: 'http',
      };

      // $ExpectError -- bad message
      const breadcrumb2: SentryBreadcrumb = { message: 1 };
    });
  });
});
