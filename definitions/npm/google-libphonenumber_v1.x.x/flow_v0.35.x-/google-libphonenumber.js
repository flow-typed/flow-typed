

declare module 'google-libphonenumber' {
					declare module.exports: undefined


}

declare module 'npm$namespace$libphonenumber' {
		declare interface PhoneNumber {
		
	}

		declare export class PhoneNumberUtil  {
		getInstance(): PhoneNumberUtil;
		parse(number: string, region: string): PhoneNumber;
		isValidNumber(phoneNumber: PhoneNumber): boolean;
		isPossibleNumber(phoneNumber: PhoneNumber): boolean;
		isValidNumberForRegion(phoneNumber: PhoneNumber): boolean;
		getRegionCodeForNumber(phoneNumber: PhoneNumber): string;
		isNANPACountry(regionCode: string): boolean;
		format(phoneNumber: PhoneNumber, format: PhoneNumberFormat): string
	}

	declare export class AsYouTypeFormatter  {
		constructor(region: string): this;
		inputDigit(digit: string): string;
		clear(): void
	}

	
}