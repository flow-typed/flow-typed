

declare module 'Vibration' {
		declare interface Navigator {
		vibrate(time: number): void,
		vibrate(time: number[]): void
	}

	declare interface Notification {
		vibrate(time: number): void,
		vibrateWithPattern(pattern: number[], repeat: number): void,
		cancelVibration(): void
	}

			
}