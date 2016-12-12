

declare module 'flake-idgen' {
		declare interface ConstructorOptions {
		datacenter?: number,
		worker?: number,
		id?: number,
		epoch?: number,
		seqMask?: number
	}

		declare class FlakeId  {
		constructor(options?: ConstructorOptions): this;
		next(callback?: (err: Error, id: Buffer) => void): Buffer
	}

	declare module.exports: undefined


}