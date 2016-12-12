

declare module 'netmask' {
			declare export function long2ip(long: number): string

	declare export function ip2long(ip: string): number

	declare export class Netmask  {
		maskLong: number;
		bitmask: number;
		netLong: number;
		size: number;
		base: string;
		mask: string;
		hostmask: string;
		first: string;
		last: string;
		broadcast: string;
		constructor(netmask: string): this;
		constructor(net: string, mask: string): this;
		contains(ip: string | Netmask | number): boolean;
		next(count?: number): Netmask;
		forEach(fn: (ip: string, long: number, index: number) => void): void;
		toString(): string
	}

	
}