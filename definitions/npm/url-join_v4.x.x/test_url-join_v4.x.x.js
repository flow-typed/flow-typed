/* @flow */
import { describe, it } from 'flow-typed-test';
import urlJoin from 'url-join';

describe('url-join_v4.x.x', () => {
  it('should succeed with valid values', () => {
    urlJoin("a");
    urlJoin("a", "b");
  });

  it('should succeed fail with invalid values', () => {
    // $ExpectError
    urlJoin({});
    // $ExpectError
    urlJoin("a", {});
  });
});
