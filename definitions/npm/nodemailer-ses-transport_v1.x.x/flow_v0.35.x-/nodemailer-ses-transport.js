

declare module 'nodemailer-ses-transport' {
			declare function sesTransport(options: sesTransport.SesOptions): nodemailer.Transport

		declare module.exports: undefined


}

declare module 'sesTransport' {
		declare export interface SesOptions {
		ses?: AWS.SES,
		accessKeyId?: string,
		secretAccessKey?: string,
		sessionToken?: string,
		region?: string,
		httpOptions?: AWS.HttpOptions,
		rateLimit?: number,
		maxConnections?: number
	}

			
}