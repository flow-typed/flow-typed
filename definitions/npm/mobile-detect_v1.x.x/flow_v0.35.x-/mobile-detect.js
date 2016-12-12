

declare module 'mobile-detect' {
				declare class MobileDetect  {
		constructor(userAgent: string, maxPhoneWidth?: number): this;
		is(key: string): boolean;
		match(pattern: string | RegExp): boolean;
		mobile(): string;
		mobileGrade(): string;
		os(): string;
		phone(): string;
		tablet(): string;
		userAgent(): string;
		version(value: string): number;
		versionStr(value: string): string
	}

	
}