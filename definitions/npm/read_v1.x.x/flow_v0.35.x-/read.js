

declare module 'read' {
			declare function Read(
		options: Read.Options, callback: (error: any, result: string, isDefault: boolean) => any
	): void

		declare module.exports: undefined


}

declare module 'Read' {
		declare interface Options {
		prompt?: string,
		silent?: boolean,
		replace?: string,
		timeout?: number,
		default?: string,
		edit?: boolean,
		terminal?: boolean,
		input?: any,
		output?: any
	}

			
}