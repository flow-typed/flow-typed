

declare module 'BasicValidators' {
					
}

declare module 'npm$namespace$Validators' {
				declare class LettersOnlyValidator extends Validation$IStringValidator {
		isAcceptable(s: string): boolean;
		tagName: string
	}

	declare class ZipCodeValidator extends Validation$IStringValidator {
		isAcceptable(s: string): boolean;
		tagName: string
	}

	declare class EmailValidator extends Validation$IStringValidator {
		isAcceptable(s: string): boolean;
		tagName: string
	}

	declare class UrlValidator extends Validation$IStringValidator {
		isAcceptable(s: string): boolean;
		tagName: string
	}

	declare class RequiredValidator extends Validation$IStringValidator {
		isAcceptable(s: string): boolean;
		tagName: string
	}

	declare class DateValidator extends Validation$IStringValidator {
		isAcceptable(s: string): boolean;
		tagName: string
	}

	declare class DateISOValidator extends Validation$IStringValidator {
		isAcceptable(s: string): boolean;
		tagName: string
	}

	declare class NumberValidator extends Validation$IStringValidator {
		isAcceptable(s: string): boolean;
		tagName: string
	}

	declare class DigitValidator extends Validation$IStringValidator {
		isAcceptable(s: string): boolean;
		tagName: string
	}

	declare class SignedDigitValidator extends Validation$IStringValidator {
		isAcceptable(s: string): boolean;
		tagName: string
	}

	declare class MinLengthValidator extends Validation$IStringValidator {
		MinLength: number;
		constructor(MinLength?: number): this;
		isAcceptable(s: string): boolean;
		tagName: string
	}

	declare class MaxLengthValidator extends Validation$IStringValidator {
		MaxLength: number;
		constructor(MaxLength?: number): this;
		isAcceptable(s: string): boolean;
		tagName: string
	}

	declare class RangeLengthValidator extends Validation$IStringValidator {
		RangeLength: number[];
		constructor(RangeLength?: number[]): this;
		isAcceptable(s: string): boolean;
		MinLength: number;
		MaxLength: number;
		tagName: string
	}

	declare class MinValidator extends Validation$IPropertyValidator {
		Min: number;
		constructor(Min?: number): this;
		isAcceptable(s: any): boolean;
		tagName: string
	}

	declare class MaxValidator extends Validation$IPropertyValidator {
		Max: number;
		constructor(Max?: number): this;
		isAcceptable(s: any): boolean;
		tagName: string
	}

	declare class RangeValidator extends Validation$IPropertyValidator {
		Range: number[];
		constructor(Range?: number[]): this;
		isAcceptable(s: any): boolean;
		Min: number;
		Max: number;
		tagName: string
	}

	declare class StepValidator extends Validation$IPropertyValidator {
		Step: string;
		constructor(Step?: string): this;
		isAcceptable(s: any): boolean;
		tagName: string
	}

	declare class PatternValidator extends Validation$IStringValidator {
		Pattern: string;
		constructor(Pattern?: string): this;
		isAcceptable(s: string): boolean;
		tagName: string
	}

	declare class ContainsValidator extends Validation$IAsyncPropertyValidator {
		Options: Q.Promise<any[]>;
		constructor(Options: Q.Promise<any[]>): this;
		isAcceptable(s: string): Q.Promise<boolean>;
		isAsync: boolean;
		tagName: string
	}

	
}

declare module 'node-validators' {
					declare module.exports: undefined


}