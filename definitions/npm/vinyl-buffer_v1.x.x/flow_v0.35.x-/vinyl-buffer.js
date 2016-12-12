

declare module 'vinyl-buffer' {
					declare module.exports: Buffer


}

declare module 'buffer' {
		declare interface Buffer {
		(): NodeJS.ReadWriteStream
	}

			
}