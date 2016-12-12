import type { math } from 'npm$namespace$dojox'

declare module 'dojox.math' {
					
}

declare module 'npm$namespace$dojox' {
		declare interface math {
		
	}

			
}

declare module 'math' {
		declare interface BigInteger {
		(a: any, b: any, c: any): void
	}

	declare interface BigInteger_ext {
		(a: any, b: any, c: any): void
	}

	declare interface round {
		(v: any, p: any, m: any): void
	}

			
}

declare module 'BigInteger' {
		declare interface am {
		(i: any, x: any, w: any, j: any, c: any, n: any): number
	}

			
}

declare module 'BigInteger_ext' {
		declare interface am {
		(i: any, x: any, w: any, j: any, c: any, n: any): number
	}

			
}

declare module 'random' {
		declare interface prng4 {
		(): void
	}

		declare class Secure  {
		constructor(prng: Function, noEvents?: boolean): this;
		destroy(): void;
		nextBytes(byteArray: any[]): void;
		seedTime(): void
	}

	declare class Simple  {
		constructor(): this;
		destroy(): void;
		nextBytes(byteArray: any[]): void
	}

	
}

declare module 'dojox/math' {
					declare module.exports: math


}

declare module 'dojox/math/BigInteger' {
					declare module.exports: BigInteger


}

declare module 'dojox/math/BigInteger-ext' {
					declare module.exports: BigInteger_ext


}

declare module 'dojox/math/round' {
					declare module.exports: round


}

declare module 'dojox/math/random/prng4' {
					declare module.exports: prng4


}

declare module 'dojox/math/random/Simple' {
					declare module.exports: Simple


}

declare module 'dojox/math/random/Secure' {
					declare module.exports: Secure


}