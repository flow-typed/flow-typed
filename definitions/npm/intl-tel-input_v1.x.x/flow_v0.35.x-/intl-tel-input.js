

declare module 'intl-tel-input' {
		declare interface JQuery {
		intlTelInput(method: "destroy"): void,
		intlTelInput(method: "getExtension"): string,
		intlTelInput(method: "getNumber"): string,
		intlTelInput(method: "getNumberType"): intlTelInputUtils.numberType,
		intlTelInput(method: "getSelectedCountryData"): IntlTelInput.CountryData,
		intlTelInput(method: "getValidationError"): intlTelInputUtils.validationError,
		intlTelInput(method: "isValidNumber"): boolean,
		intlTelInput(method: string): void,
		intlTelInput(method: "setCountry", countryCode: string): void,
		intlTelInput(method: "setNumber", aNumber: string): void,
		intlTelInput(method: string, value: string): void,
		intlTelInput(method: "getNumber", numberFormat: intlTelInputUtils.numberFormat): string,
		intlTelInput(method: string, numberFormat: intlTelInputUtils.numberFormat): string,
		intlTelInput(options?: IntlTelInput.Options): JQueryDeferred<any>
	}

			
}

declare module 'npm$namespace$IntlTelInput' {
		declare interface Options {
		allowDropdown?: boolean,
		autoHideDialCode?: boolean,
		autoPlaceholder?: boolean,
		customPlaceholder?: (selectedCountryPlaceholder: string, selectedCountryData: CountryData) => string,
		dropdownContainer?: string,
		excludeCountries?: Array<string>,
		formatOnInit?: boolean,
		geoIpLookup?: (callback: (countryCode: string) => void) => void,
		initialCountry?: string,
		nationalMode?: boolean,
		numberType?: string,
		onlyCountries?: Array<string>,
		preferredCountries?: Array<string>,
		separateDialCode?: boolean,
		utilsScript?: string
	}

	declare interface CountryData {
		name: string,
		iso2: string,
		dialCode: string
	}

			
}