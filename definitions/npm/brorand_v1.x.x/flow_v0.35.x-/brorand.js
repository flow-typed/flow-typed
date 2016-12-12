

declare module 'brorand' {
	declare type rand = {
		getByte: () => number
	};

	declare interface RandStatic {
		new (rand: rand): RandInstance
	}

	declare interface RandInstance {
		rand: rand,
		generate(len: number): Buffer | Uint8Array
	}

	declare interface BrorandStatic {
		(len: number): Buffer | Uint8Array,
		Rand: RandStatic
	}

			declare module.exports: BrorandStatic


}