

declare module 'nodemailer-pickup-transport' {
			declare function PickupTransport(options: PickupTransport.Options): nodemailer.Transport

		declare module.exports: undefined


}

declare module 'PickupTransport' {
		declare export interface Options {
		directory: string
	}

			
}