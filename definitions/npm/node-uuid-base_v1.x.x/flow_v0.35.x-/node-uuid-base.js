

declare module 'node-uuid-base' {
					
}

declare module 'npm$namespace$___NodeUUID' {
		declare interface UUIDOptions {
		node?: any[],
		clockseq?: number,
		msecs?: number | Date,
		nsecs?: number
	}

	declare interface UUID {
		v1(options?: UUIDOptions): string,
		v1(options?: UUIDOptions, buffer?: number[], offset?: number): number[],
		v4(options?: UUIDOptions): string,
		v4(options?: UUIDOptions, buffer?: number[], offset?: number): number[],
		parse(id: string, buffer?: number[], offset?: number): number[],
		unparse(buffer: number[], offset?: number): string
	}

			
}