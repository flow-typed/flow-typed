import type { LZStringStatic } from 'npm$namespace$LZString'

declare module 'lz-string' {
					
}

declare module 'npm$namespace$LZString' {
		declare interface LZStringStatic {
		compress(uncompressed: string): string,
		decompress(compressed: string): string,
		compressToUTF16(uncompressed: string): string,
		decompressFromUTF16(compressed: string): string,
		compressToBase64(uncompressed: string): string,
		decompressFromBase64(compressed: string): string
	}

			
}