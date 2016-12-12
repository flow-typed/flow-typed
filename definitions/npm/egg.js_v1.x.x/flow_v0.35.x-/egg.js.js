

declare module 'egg.js' {
				declare class Egg  {
		constructor(): this;
		constructor(keySequence: string, fn: () => any): this;
		constructor(keySequence: string, fn: () => any, metadata: any): this;
		AddCode(keySequence: string, fn: () => any): Egg;
		AddCode(keySequence: string, fn: () => any, metadata: any): Egg;
		AddHook(fn: () => any): Egg;
		Listen(): Egg;
		addCode(keySequence: string, fn: () => any): Egg;
		addCode(keySequence: string, fn: () => any, metadata: any): Egg;
		addHook(fn: () => any): Egg;
		listen(): Egg
	}

	
}

declare module 'egg' {
					declare module.exports: undefined


}