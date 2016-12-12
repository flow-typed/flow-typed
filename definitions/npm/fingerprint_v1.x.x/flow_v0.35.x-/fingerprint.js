import type { FingerprintStatic } from 'npm$namespace$FingerprintJs'

declare module 'fingerprint' {
					
}

declare module 'npm$namespace$FingerprintJs' {
		declare interface FingerprintStatic {
		new (hasher: (key: string, seed: number) => number): Fingerprint,
		new (option: FingerprintOption): Fingerprint,
		new (): Fingerprint
	}

	declare interface Fingerprint {
		get(): number,
		murmurhash3_32_gc(key: string, seed: number): number,
		hasLocalStorage(): boolean,
		hasSessionStorage(): boolean,
		isCanvasSupported(): boolean,
		isIE(): boolean,
		getPluginsString(): string,
		getRegularPluginsString(): string,
		getIEPluginsString(): string,
		getScreenResolution(): number[],
		getCanvasFingerprint(): string
	}

	declare interface FingerprintOption {
		canvas?: boolean,
		screen_resolution?: boolean,
		ie_activex?: boolean,
		hasher?: (key: string, seed: number) => number
	}

			
}