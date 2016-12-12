

declare module 'nodemailer-stub-transport' {
			declare function stubTransport(options?: StubTransportStatic.Options): nodemailer.Transport

		declare module.exports: undefined


}

declare module 'StubTransportStatic' {
		declare export interface Options {
		error?: any,
		keepBcc?: boolean
	}

			
}