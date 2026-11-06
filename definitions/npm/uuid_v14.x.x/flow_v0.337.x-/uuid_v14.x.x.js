declare module 'uuid' {
  declare export type UUIDTypes<T extends Uint8Array = Uint8Array> = string | T;

  declare export type Version1Options = {|
    node?: Uint8Array,
    clockseq?: number,
    random?: Uint8Array,
    rng?: () => Uint8Array,
    msecs?: number,
    nsecs?: number,
    _v6?: boolean,
  |};

  declare export type Version4Options = {|
    random?: Uint8Array,
    rng?: () => Uint8Array,
  |};

  declare export type Version6Options = Version1Options;

  declare export type Version7Options = {|
    random?: Uint8Array,
    msecs?: number,
    seq?: number,
    rng?: () => Uint8Array,
  |};

  declare export var MAX: 'ffffffff-ffff-ffff-ffff-ffffffffffff';
  declare export var NIL: '00000000-0000-0000-0000-000000000000';

  declare export function parse(uuid: string): Uint8Array;
  declare export function stringify(bytes: Uint8Array, offset?: number): string;

  declare export function v1(options?: Version1Options): string;
  declare export function v1<T extends Uint8Array>(
    options: void | Version1Options,
    buffer: T,
    offset?: number
  ): T;

  declare export function v1ToV6(uuid: string): string;
  declare export function v1ToV6(uuid: Uint8Array): Uint8Array;

  declare function v3Impl(
    value: string | Uint8Array,
    namespace: UUIDTypes
  ): string;
  declare function v3Impl<T extends Uint8Array>(
    value: string | Uint8Array,
    namespace: UUIDTypes,
    buffer: T,
    offset?: number
  ): T;
  declare export var v3: {|
    [[call]]: typeof v3Impl,
    DNS: string,
    URL: string,
  |};

  declare export function v4(options?: Version4Options): string;
  declare export function v4<T extends Uint8Array>(
    options: void | Version4Options,
    buffer: T,
    offset?: number
  ): T;

  declare function v5Impl(
    value: string | Uint8Array,
    namespace: UUIDTypes
  ): string;
  declare function v5Impl<T extends Uint8Array>(
    value: string | Uint8Array,
    namespace: UUIDTypes,
    buffer: T,
    offset?: number
  ): T;
  declare export var v5: {|
    [[call]]: typeof v5Impl,
    DNS: string,
    URL: string,
  |};

  declare export function v6(options?: Version6Options): string;
  declare export function v6<T extends Uint8Array>(
    options: void | Version6Options,
    buffer: T,
    offset?: number
  ): T;

  declare export function v6ToV1(uuid: string): string;
  declare export function v6ToV1(uuid: Uint8Array): Uint8Array;

  declare export function v7(options?: Version7Options): string;
  declare export function v7<T extends Uint8Array>(
    options: void | Version7Options,
    buffer: T,
    offset?: number
  ): T;

  declare export function validate(uuid: unknown): boolean;
  declare export function version(uuid: string): number;
}
