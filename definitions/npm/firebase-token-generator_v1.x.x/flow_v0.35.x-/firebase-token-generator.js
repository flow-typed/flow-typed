

declare module 'firebase-token-generator' {
		declare interface TokenOptions {
		expires?: number,
		notBefore?: number,
		admin?: boolean,
		debug?: boolean,
		simulate?: boolean,
		iat?: number
	}

		declare class FirebaseTokenGenerator  {
		constructor(secret: string): this;
		createToken(data: any, options?: TokenOptions): string
	}

	declare module.exports: undefined


}