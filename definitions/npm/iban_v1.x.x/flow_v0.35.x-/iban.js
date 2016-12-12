

declare module 'iban' {
		declare interface IBANStatic {
		electronicFormat(iban: string): string,
		fromBBAN(countryCode: string, bban: string): string,
		isValid(iban: string): boolean,
		isValidBBAN(countryCode: string, bban: string): boolean,
		printFormat(iban: string, separator: string[]): string,
		toBBAN(iban: string, separator: string[]): string
	}

			declare module.exports: IBANStatic


}