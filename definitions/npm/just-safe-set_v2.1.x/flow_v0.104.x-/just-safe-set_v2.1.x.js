declare module 'just-safe-set' {
  declare export default function set(
    obj: { [string]: mixed, ... },
    key: string | Array<string> | Symbol,
    value: mixed
  ): boolean;
}
