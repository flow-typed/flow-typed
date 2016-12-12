

declare module 'javascript-obfuscator' {
		declare export interface IOptions {
		compact?: boolean,
		debugProtection?: boolean,
		debugProtectionInterval?: boolean,
		disableConsoleOutput?: boolean,
		encodeUnicodeLiterals?: boolean,
		reservedNames?: string[],
		rotateUnicodeArray?: boolean,
		selfDefending?: boolean,
		unicodeArray?: boolean,
		unicodeArrayThreshold?: number,
		wrapUnicodeArrayCalls?: boolean,
		[id: string]: any
	}

		declare export class JavaScriptObfuscator  {
		obfuscate(sourceCode: string, customOptions?: IOptions): string
	}

	
}