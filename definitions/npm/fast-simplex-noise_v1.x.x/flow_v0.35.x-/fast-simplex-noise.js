

declare module 'fast-simplex-noise' {
				declare class FastSimplexNoise  {
		amplitude: number;
		frequency: number;
		max: number;
		min: number;
		octaves: number;
		persistence: number;
		random: () => number;
		constructor(options?: {
		amplitude?: number,
		frequency?: number,
		max?: number,
		min?: number,
		octaves?: number,
		persistence?: number,
		random?: () => number
	}): this;
		cylindrical2D(c: number, x: number, y: number): number;
		cylindrical3D(c: number, x: number, y: number, z: number): number;
		in2D(x: number, y: number): number;
		in3D(x: number, y: number, z: number): number;
		in4D(x: number, y: number, z: number, w: number): number;
		raw2D(x: number, y: number): number;
		raw3D(x: number, y: number, z: number): number;
		raw4D(x: number, y: number, z: number, w: number): number;
		spherical2D(c: number, x: number, y: number): number;
		spherical3D(c: number, x: number, y: number, z: number): number
	}

	declare module.exports: undefined


}