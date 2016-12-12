import type { CreditCardType } from 'npm$namespace$CreditCardType'

declare module 'credit-card-type' {
					declare module.exports: CreditCardType


}

declare module 'npm$namespace$CreditCardType' {
	declare type CardBrand = "american-express" | "diners-club" | "discover" | "jcb" | "maestro" | "master-card" | "unionpay" | "visa";

	declare interface CreditCardTypeInfo {
		niceType?: string,
		type?: CardBrand,
		pattern?: RegExp,
		gaps?: Array<number>,
		lengths?: Array<number>,
		code?: {
		name?: string,
		size?: number
	}
	}

	declare interface CreditCardType {
		(number: string): Array<CreditCardTypeInfo>,
		getTypeInfo(type: string): CreditCardTypeInfo,
		types: {
		[type: string]: string
	}
	}

			
}