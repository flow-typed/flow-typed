

declare module 'ip' {
		declare interface NodeBuffer {
		
	}

	declare interface SubnetInfo {
		networkAddress: string,
		firstAddress: string,
		lastAddress: string,
		broadcastAddress: string,
		subnetMask: string,
		subnetMaskLength: number,
		numHosts: number,
		length: number,
		contains(ip: string): boolean
	}

	declare export function isEqual(ip1: string, ip2: string): boolean

	declare export function toBuffer(ip: string, buffer?: number, offset?: number): NodeBuffer

	declare export function toString(ip: NodeBuffer, offset?: number, length?: number): string

	declare export function fromPrefixLen(prefixLength: number, family?: string): string

	declare export function mask(ip: string, mask: string): string

	declare export function cidr(cidr: string): string

	declare export function not(ip: string): string

	declare export function or(ip: string, mask: string): string

	declare export function isPrivate(ip: string): boolean

	declare export function isPublic(ip: string): boolean

	declare export function isLoopback(ip: string): boolean

	declare export function loopback(family?: string): string

	declare export function address(name?: string, family?: string): string

	declare export function toLong(ip: string): number

	declare export function fromLong(ip: number): string

	declare export function subnet(ip: string, subnet: string): SubnetInfo

	declare export function cidrSubnet(cidr: string): SubnetInfo

		
}