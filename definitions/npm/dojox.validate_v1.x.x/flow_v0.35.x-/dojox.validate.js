import type { validate } from 'npm$namespace$dojox'

declare module 'dojox.validate' {
					
}

declare module 'npm$namespace$dojox' {
		declare interface validate {
		
	}

			
}

declare module 'validate' {
		declare interface _base {
		check(form: HTMLFormElement, profile: Object): void,
		computeCnpjDv(value: String): void,
		computeCpfDv(value: String): void,
		evaluateConstraint(profile: any, constraint: any[], fieldName: any, elem: any): void,
		getEmailAddressList(value: String, flags: Object): void,
		isEmailAddress(value: String, flags: Object): void,
		isEmailAddressList(value: String, flags: Object): void,
		isInRange(value: String, flags: Object): void,
		isIpAddress(value: String, flags: Object): void,
		isNumberFormat(value: String, flags: Object): any,
		isPhoneNumber(value: String): boolean,
		isSocialSecurityNumber(value: String): void,
		isState(value: String, flags: Object): void,
		isText(value: String, flags: Object): void,
		isUrl(value: String, flags: Object): void,
		isValidCnpj(value: String): void,
		isValidCpf(value: String): void,
		isValidCreditCard(value: String, ccType: String): void,
		isValidCreditCard(value: number, ccType: String): void,
		isValidCreditCardNumber(value: String, ccType: String): void,
		isValidCreditCardNumber(value: number, ccType: String): void,
		isValidCvv(value: String, ccType: String): void,
		isValidCvv(value: number, ccType: String): void,
		isValidIsbn(value: String): boolean,
		isValidLuhn(value: String): void,
		isZipCode(value: String): void
	}

	declare interface br {
		check(form: HTMLFormElement, profile: Object): void,
		computeCnpjDv(value: String): void,
		computeCpfDv(value: String): void,
		evaluateConstraint(profile: any, constraint: any[], fieldName: any, elem: any): void,
		getEmailAddressList(value: String, flags: Object): void,
		isEmailAddress(value: String, flags: Object): void,
		isEmailAddressList(value: String, flags: Object): void,
		isInRange(value: String, flags: Object): void,
		isIpAddress(value: String, flags: Object): void,
		isNumberFormat(value: String, flags: Object): any,
		isPhoneNumber(value: String): boolean,
		isSocialSecurityNumber(value: String): void,
		isState(value: String, flags: Object): void,
		isText(value: String, flags: Object): void,
		isUrl(value: String, flags: Object): void,
		isValidCnpj(value: String): void,
		isValidCpf(value: String): void,
		isValidCreditCard(value: String, ccType: String): void,
		isValidCreditCard(value: number, ccType: String): void,
		isValidCreditCardNumber(value: String, ccType: String): void,
		isValidCreditCardNumber(value: number, ccType: String): void,
		isValidCvv(value: String, ccType: String): void,
		isValidCvv(value: number, ccType: String): void,
		isValidIsbn(value: String): boolean,
		isValidLuhn(value: String): void,
		isZipCode(value: String): void
	}

	declare interface ca {
		isPhoneNumber(value: String): any,
		isPostalCode(value: any): any,
		isProvince(value: String): any,
		isSocialInsuranceNumber(value: String): any
	}

	declare interface creditCard {
		
	}

	declare interface regexp {
		ca: Object,
		us: Object,
		emailAddress(flags: Object): String,
		emailAddressList(flags: Object): String,
		host(flags: Object): String,
		ipAddress(flags: Object): String,
		numberFormat(flags: Object): any,
		url(flags: Object): String
	}

	declare interface us {
		check(form: HTMLFormElement, profile: Object): void,
		computeCnpjDv(value: String): void,
		computeCpfDv(value: String): void,
		evaluateConstraint(profile: any, constraint: any[], fieldName: any, elem: any): void,
		getEmailAddressList(value: String, flags: Object): void,
		isEmailAddress(value: String, flags: Object): void,
		isEmailAddressList(value: String, flags: Object): void,
		isInRange(value: String, flags: Object): void,
		isIpAddress(value: String, flags: Object): void,
		isNumberFormat(value: String, flags: Object): any,
		isPhoneNumber(value: String): boolean,
		isSocialSecurityNumber(value: String): void,
		isState(value: String, flags: Object): void,
		isText(value: String, flags: Object): void,
		isUrl(value: String, flags: Object): void,
		isValidCnpj(value: String): void,
		isValidCpf(value: String): void,
		isValidCreditCard(value: String, ccType: String): void,
		isValidCreditCard(value: number, ccType: String): void,
		isValidCreditCardNumber(value: String, ccType: String): void,
		isValidCreditCardNumber(value: number, ccType: String): void,
		isValidCvv(value: String, ccType: String): void,
		isValidCvv(value: number, ccType: String): void,
		isValidIsbn(value: String): boolean,
		isValidLuhn(value: String): void,
		isZipCode(value: String): void
	}

	declare interface web {
		check(form: HTMLFormElement, profile: Object): void,
		computeCnpjDv(value: String): void,
		computeCpfDv(value: String): void,
		evaluateConstraint(profile: any, constraint: any[], fieldName: any, elem: any): void,
		getEmailAddressList(value: String, flags: Object): void,
		isEmailAddress(value: String, flags: Object): void,
		isEmailAddressList(value: String, flags: Object): void,
		isInRange(value: String, flags: Object): void,
		isIpAddress(value: String, flags: Object): void,
		isNumberFormat(value: String, flags: Object): any,
		isPhoneNumber(value: String): boolean,
		isSocialSecurityNumber(value: String): void,
		isState(value: String, flags: Object): void,
		isText(value: String, flags: Object): void,
		isUrl(value: String, flags: Object): void,
		isValidCnpj(value: String): void,
		isValidCpf(value: String): void,
		isValidCreditCard(value: String, ccType: String): void,
		isValidCreditCard(value: number, ccType: String): void,
		isValidCreditCardNumber(value: String, ccType: String): void,
		isValidCreditCardNumber(value: number, ccType: String): void,
		isValidCvv(value: String, ccType: String): void,
		isValidCvv(value: number, ccType: String): void,
		isValidIsbn(value: String): boolean,
		isValidLuhn(value: String): void,
		isZipCode(value: String): void
	}

	declare interface check {
		(form: HTMLFormElement, profile: Object): void
	}

	declare interface isbn {
		(value: String): void
	}

			
}

declare module '_base' {
		declare interface _cardInfo {
		ax: string,
		bl: string,
		dc: string,
		di: string,
		ec: string,
		er: string,
		jcb: string,
		mc: string,
		vi: string
	}

	declare interface _isInRangeCache {
		
	}

			
}

declare module 'br' {
		declare interface _cardInfo {
		ax: string,
		bl: string,
		dc: string,
		di: string,
		ec: string,
		er: string,
		jcb: string,
		mc: string,
		vi: string
	}

	declare interface _isInRangeCache {
		
	}

			
}

declare module 'regexp' {
		declare interface ca {
		postalCode(): String,
		province(): String
	}

	declare interface us {
		state(flags: Object): String
	}

			
}

declare module 'us' {
		declare interface _cardInfo {
		ax: string,
		bl: string,
		dc: string,
		di: string,
		ec: string,
		er: string,
		jcb: string,
		mc: string,
		vi: string
	}

	declare interface _isInRangeCache {
		
	}

			
}

declare module 'web' {
		declare interface _isInRangeCache {
		
	}

	declare interface _cardInfo {
		ax: string,
		bl: string,
		dc: string,
		di: string,
		ec: string,
		er: string,
		jcb: string,
		mc: string,
		vi: string
	}

			
}

declare module 'dojox/validate' {
					declare module.exports: validate


}

declare module 'dojox/validate/check' {
					declare module.exports: check


}

declare module 'dojox/validate/isbn' {
					declare module.exports: isbn


}

declare module 'dojox/validate/ca' {
					declare module.exports: ca


}

declare module 'dojox/validate/creditCard' {
					declare module.exports: creditCard


}

declare module 'dojox/validate/_base' {
					declare module.exports: _base


}

declare module 'dojox/validate/_base._cardInfo' {
					declare module.exports: _cardInfo


}

declare module 'dojox/validate/_base._isInRangeCache' {
					declare module.exports: _isInRangeCache


}

declare module 'dojox/validate/regexp' {
					declare module.exports: regexp


}

declare module 'dojox/validate/regexp.us' {
					declare module.exports: us


}

declare module 'dojox/validate/regexp.ca' {
					declare module.exports: ca


}

declare module 'dojox/validate/br' {
					declare module.exports: br


}

declare module 'dojox/validate/br._isInRangeCache' {
					declare module.exports: _isInRangeCache


}

declare module 'dojox/validate/br._cardInfo' {
					declare module.exports: _cardInfo


}

declare module 'dojox/validate/us' {
					declare module.exports: us


}

declare module 'dojox/validate/us._isInRangeCache' {
					declare module.exports: _isInRangeCache


}

declare module 'dojox/validate/us._cardInfo' {
					declare module.exports: _cardInfo


}

declare module 'dojox/validate/web' {
					declare module.exports: web


}

declare module 'dojox/validate/web._cardInfo' {
					declare module.exports: _cardInfo


}

declare module 'dojox/validate/web._isInRangeCache' {
					declare module.exports: _isInRangeCache


}