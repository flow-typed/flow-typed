import type { HasherStatic } from 'npm$namespace$HasherJs'

declare module 'hasher' {
					declare module.exports: HasherStatic


}

declare module 'npm$namespace$HasherJs' {
		declare export interface HasherStatic {
		appendHash(): string,
		changed: Signal,
		initialized: Signal,
		prependHash: string,
		separator: string,
		stopped: Signal,
		VERSION: string,
		dispose(): void,
		getBaseURL(): string,
		getHash(): string,
		getHashAsArray(): string[],
		getURL(): string,
		init(): void,
		isActive(): boolean,
		replaceHash(...path: string[]): void,
		setHash(...path: string[]): void,
		stop(): void,
		toString(): string
	}

			
}