

declare module 'nodemailer-smtp-pool' {
			declare function smtpPool(options: smtpPool.SmtpPoolOptions): nodemailer.Transport

		declare module.exports: undefined


}

declare module 'smtpPool' {
		declare export interface AuthOptions {
		user?: string,
		pass?: string,
		xoauth2?: any
	}

	declare export interface SmtpPoolOptions {
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
		tls?: tls.ConnectionOptions,
		maxConnections?: number,
		maxMessages?: number
	}

			
}