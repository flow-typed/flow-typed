

declare module 'jquery.payment' {
		declare interface JQuery {
		payment(command: string): JQuery
	}

	declare interface JQueryStatic {
		payment: JQueryPayment.Payment
	}

			
}

declare module 'npm$namespace$JQueryPayment' {
		declare interface Payment {
		validateCardNumber(cardNumber: string): boolean,
		validateCardExpiry(year: string, month: string): boolean,
		validateCardExpiry(expiry: ExpiryInfo): boolean,
		validateCardCVC(cvc: string, type?: string): boolean,
		cardType(cardNumber: string): string,
		cardExpiryVal(monthYear: string): ExpiryInfo,
		cards: CardInfo[]
	}

	declare interface ExpiryInfo {
		month: number,
		year: number
	}

	declare interface CardInfo {
		type?: string,
		pattern?: RegExp,
		patterns?: number[],
		length?: number[],
		cvcLength?: number[],
		luhn?: boolean,
		format?: RegExp
	}

			
}