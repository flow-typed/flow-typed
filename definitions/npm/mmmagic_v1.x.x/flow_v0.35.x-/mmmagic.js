

declare module 'mmmagic' {
	declare export type bitmask = number;

			declare export class Magic  {
		constructor(magicPath?: string, mask?: bitmask): this;
		constructor(mask?: bitmask): this;
		detectFile(path: string, callback: (err: Error, result: string) => void): void;
		detect(data: Buffer, callback: (err: Error, result: string) => void): void
	}

	
}