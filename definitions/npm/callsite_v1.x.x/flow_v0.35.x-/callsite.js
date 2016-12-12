

declare module 'callsite' {
			declare function Callsite(): Callsite.CallSite[]

		declare module.exports: undefined


}

declare module 'Callsite' {
		declare interface CallSite {
		getThis(): any,
		getTypeName(): string,
		getFunctionName(): string,
		getMethodName(): string,
		getFileName(): string,
		getLineNumber(): number,
		getColumnNumber(): number,
		getFunction(): Function,
		getEvalOrigin(): string,
		isNative(): boolean,
		isToplevel(): boolean,
		isEval(): boolean,
		isConstructor(): boolean
	}

			
}