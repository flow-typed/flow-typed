

declare module 'maskedinput' {
		declare interface JQueryMaskedInputOptions {
		mask?: string,
		alias?: string,
		placeholder?: string,
		repeat?: number,
		greedy?: boolean,
		skipOptionalPartCharacter?: string,
		clearIncomplete?: boolean,
		clearMaskOnLostFocus?: boolean,
		autoUnmask?: boolean,
		showMaskOnFocus?: boolean,
		showMaskOnHover?: boolean,
		showToolTip?: boolean,
		isComplete?: (buffer: any, options: any) => {
		
	},
		numeric?: boolean,
		radixPoint?: string,
		rightAlignNumerics?: boolean,
		oncomplete?: (value?: any) => void,
		onincomplete?: () => void,
		oncleared?: () => void,
		onUnMask?: (maskedValue: any, unmaskedValue: any) => void,
		onBeforeMask?: (initialValue: any) => void,
		onKeyValidation?: (result: any) => void,
		onBeforePaste?: (pastedValue: any) => void
	}

	declare interface MaskedInputStatic {
		defaults: MaskedInputDefaults,
		isValid: (value: string, options: MaskedInputStaticDefaults) => boolean,
		format: (value: string, options: MaskedInputStaticDefaults) => boolean
	}

	declare interface MaskedInputStaticDefaults {
		alias: string
	}

	declare interface MaskedInputDefaults {
		aliases: any,
		definitions: any
	}

	declare interface JQueryStatic {
		mask: MaskedInputStatic
	}

	declare interface JQuery {
		mask(mask: string, options?: JQueryMaskedInputOptions): JQuery
	}

			
}