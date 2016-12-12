

declare module 'node-uuid' {
					
}

declare module '___NodeUUID' {
		declare interface UUID {
		v1(options?: UUIDOptions): string,
		v1(options?: UUIDOptions, buffer?: number[], offset?: number): number[],
		v1(options?: UUIDOptions, buffer?: Buffer, offset?: number): Buffer,
		v4(options?: UUIDOptions): string,
		v4(options?: UUIDOptions, buffer?: number[], offset?: number): number[],
		v4(options?: UUIDOptions, buffer?: Buffer, offset?: number): Buffer,
		parse(id: string, buffer?: number[], offset?: number): number[],
		parse(id: string, buffer?: Buffer, offset?: number): Buffer,
		unparse(buffer: number[], offset?: number): string,
		unparse(buffer: Buffer, offset?: number): string
	}

			
}