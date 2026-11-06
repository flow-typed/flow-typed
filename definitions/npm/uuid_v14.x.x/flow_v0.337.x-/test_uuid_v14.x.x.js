// @flow
import {
  MAX,
  NIL,
  parse,
  stringify,
  v1,
  v1ToV6,
  v3,
  v4,
  v5,
  v6,
  v6ToV1,
  v7,
  validate,
  version,
} from 'uuid';
import type {
  UUIDTypes,
  Version1Options,
  Version4Options,
  Version6Options,
  Version7Options,
} from 'uuid';
import { describe, it } from 'flow-typed-test';

describe('uuid', () => {
  it('models UUID 14 root exports', () => {
    const bytes = new Uint8Array(16);
    const namespace = v3.DNS as UUIDTypes;
    const v1Options = { msecs: 0, nsecs: 0 } as Version1Options;
    const v4Options = { random: bytes } as Version4Options;
    const v6Options = { clockseq: 1 } as Version6Options;
    const v7Options = { msecs: 0, seq: 1 } as Version7Options;

    MAX as string;
    NIL as string;
    parse(v4()) as Uint8Array;
    stringify(bytes) as string;

    v1(v1Options) as string;
    v1(v1Options, bytes) as Uint8Array;
    v1ToV6(v1()) as string;
    v1ToV6(bytes) as Uint8Array;

    v3('value', namespace) as string;
    v3(bytes, v3.URL, bytes) as Uint8Array;
    v3.DNS as string;
    v3.URL as string;

    v4(v4Options) as string;
    v4(undefined, bytes) as Uint8Array;

    v5('value', v5.DNS) as string;
    v5(bytes, v5.URL, bytes) as Uint8Array;
    v5.DNS as string;
    v5.URL as string;

    v6(v6Options) as string;
    v6(undefined, bytes) as Uint8Array;
    v6ToV1(v6()) as string;
    v6ToV1(bytes) as Uint8Array;

    v7(v7Options) as string;
    v7(undefined, bytes) as Uint8Array;
    validate(v4()) as boolean;
    version(v4()) as number;
  });
});

