declare module 'parse-decimal-number' {
	declare export default function parseDecimalNumber(value: string, inOptions?: string | [string, string] | {thousands: string, decimal: string}, enforceGroupSize?: boolean): number | typeof NaN;
	declare export function setOptions(newOptions: {thousands: string, decimal: string}): void;
    declare export function factoryReset(): void;
    declare export function withOptions(options: string | [string, string] | {thousands: string, decimal: string}, enforceGroupSize?: boolean): ((value: string) => number | typeof NaN);
}
