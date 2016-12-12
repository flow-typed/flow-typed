

declare module 'iso8601-localizer' {
		declare interface localizer {
		to(offset: number): localizer,
		returnAs(as: string): localizer,
		localize(): string
	}

		declare class ISO8601Localizer extends localizer {
		constructor(userISO8601: string): this;
		to(offset: number): localizer;
		returnAs(as: string): localizer;
		localize(): string
	}

	declare module.exports: undefined


}