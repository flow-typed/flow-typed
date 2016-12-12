

declare module 'ldclient-js' {
					
}

declare module 'npm$namespace$LaunchDarkly' {
	declare export type LDEventName = "ready" | "change";

	declare export type LDFlagValue = any;

	declare export type LDFlagSet = {
		[key: string]: LDFlagValue
	};

	declare export type LDFlagChangeset = {
		[key: string]: {
		current: LDFlagValue,
		previous: LDFlagValue
	}
	};

	declare type LDEventSignature = (
		key: LDEventName, callback: (current?: LDFlagValue | LDFlagChangeset, previous?: LDFlagValue) => void, context?: any
	) => void;

	declare export interface LDOptions {
		hash: string,
		bootstrap?: "localStorage" | LDFlagSet
	}

	declare export interface LDUser {
		key: string,
		name?: string,
		firstName?: string,
		lastName?: string,
		email?: string,
		avatar?: string,
		ip?: string,
		country?: string,
		anonymous?: boolean,
		custom?: {
		[key: string]: string | boolean | number | Array<string | boolean | number>
	}
	}

	declare export interface LDClient {
		identify: (user: LDUser, hash?: string, onDone?: () => void) => void,
		variation: (key: string, defaultValue?: LDFlagValue) => LDFlagValue,
		on: LDEventSignature,
		off: LDEventSignature,
		track: (key: string, data?: any) => void,
		allFlags: () => LDFlagSet
	}

			
}