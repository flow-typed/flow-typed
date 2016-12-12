

declare module 'animation-frame' {
		declare interface AnimationFrame {
		new (): AnimationFrame,
		request(callback: () => void): void
	}

			
}