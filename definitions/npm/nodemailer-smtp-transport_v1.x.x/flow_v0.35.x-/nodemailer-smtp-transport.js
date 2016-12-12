

declare module 'nodemailer-smtp-transport' {
			declare function smtpTransport(options: smtpTransport.SmtpOptions): nodemailer.Transport

		declare module.exports: undefined


}

declare module 'smtpTransport' {
		declare export interface AuthOptions {
		user?: string,
		pass?: string,
		xoauth2?: any
	}

	declare export interface SmtpOptions {
		service?: string,
		port?: number,
		host?: string,
		secure?: boolean,
		auth?: AuthOptions,
		ignoreTLS?: boolean,
		name?: string,
		localAddress?: string,
		connectionTimeout?: number,
		greetingTimeout?: number,
		socketTimeout?: number,
		debug?: boolean,
		authMethod?: string,
		tls?: tls.ConnectionOptions
	}

			
}