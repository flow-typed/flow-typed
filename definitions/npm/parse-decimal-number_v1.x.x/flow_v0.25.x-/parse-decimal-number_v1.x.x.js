declare module 'parse-decimal-number' {
  declare module.exports: {
    setOptions(newOptions: {thousands: string, decimal: string}): void;
    factoryReset(): void;
    withOptions(options: string | [string, string] | {thousands: string, decimal: string}, enforceGroupSize?: boolean): ((value: string) => number | NaN);
  }

  declare module.exports (value: string, inOptions?: string | [string, string] | {thousands: string, decimal: string}, enforceGroupSize?: boolean) => number | NaN;
}
