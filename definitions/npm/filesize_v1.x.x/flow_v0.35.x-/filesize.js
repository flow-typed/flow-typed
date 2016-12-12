import type { IFilesize } from 'npm$namespace$Filesize'

declare module 'filesize' {
					declare module.exports: IFilesize


}

declare module 'npm$namespace$Filesize' {
	declare type SiJedec = SiJedecBits & SiJedecBytes & {
		[name: string]: string
	};

	declare export interface SiJedecBits {
		b?: string,
		Kb?: string,
		Mb?: string,
		Gb?: string,
		Tb?: string,
		Pb?: string,
		Eb?: string,
		Zb?: string,
		Yb?: string
	}

	declare export interface SiJedecBytes {
		B?: string,
		KB?: string,
		MB?: string,
		GB?: string,
		TB?: string,
		PB?: string,
		EB?: string,
		ZB?: string,
		YB?: string
	}

	declare export interface Options {
		bits?: boolean,
		base?: number,
		round?: number,
		output?: string,
		suffixes?: SiJedec,
		symbols?: SiJedec,
		exponent?: number,
		unix?: boolean,
		spacer?: string
	}

	declare export interface IFilesize {
		(bytes: number): string,
		(bytes: number, options: Options): string
	}

			
}