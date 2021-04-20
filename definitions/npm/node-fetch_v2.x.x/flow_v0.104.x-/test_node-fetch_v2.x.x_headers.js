// @flow

import { describe, it } from 'flow-typed-test';
import type { Headers } from 'node-fetch';

describe('Headers', () => {
  it('should be iterable', (h: Headers) => {
    for (const entry of h) {
      const [k1,v1]: [string, string] = entry;
      // $FlowExpectedError[incompatible-type]
      const [k2,v2]: [string, number] = entry;
      // $FlowExpectedError[incompatible-type]
      const [k3,v3]: [number, string] = entry;
    }
  });
  it('shoud entries be iterable', (h: Headers) => {
    for (const entry of h.entries()) {
      const [k1,v1]: [string, string] = entry;
      // $FlowExpectedError[incompatible-type]
      const [k2,v2]: [string, number] = entry;
      // $FlowExpectedError[incompatible-type]
      const [k3,v3]: [number, string] = entry;
    }
  });
  it('shoud keys be iterable', (h: Headers) => {
    for (const k of h.keys()) {
      const k1: string = k;
      // $FlowExpectedError[incompatible-type]
      const k2: number = k;
    }
  });
  it('shoud values be iterable', (h: Headers) => {
    for (const v of h.keys()) {
      const v1: string = v;
      // $FlowExpectedError[incompatible-type]
      const v2: number = v;
    }
  });
});
