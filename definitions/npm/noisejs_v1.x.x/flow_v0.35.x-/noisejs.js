

declare module 'noisejs' {
				declare class Noise  {
		constructor(seed?: number): this;
		simplex2(x: number, y: number): number;
		simplex3(x: number, y: number, z: number): number;
		perlin2(x: number, y: number): number;
		perlin3(x: number, y: number, z: number): number;
		seed(seed: number): void
	}

	declare module.exports: undefined


}