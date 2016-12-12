

declare module 'nodemailer-direct-transport' {
			declare function directTransport(options: directTransport.DirectOptions): nodemailer.Transport

		declare module.exports: undefined


}

declare module 'directTransport' {
		declare export interface AuthOptions {
		user?: string,
		pass?: string,
		xoauth2?: any
	}

	declare export interface DirectOptions {
		name?: string,
		debug?: boolean
	}

			
}