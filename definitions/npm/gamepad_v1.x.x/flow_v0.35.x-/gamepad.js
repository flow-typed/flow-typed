

declare module 'gamepad' {
		declare interface Navigator {
		getGamepads(): Gamepad.Gamepad[],
		webkitGetGamepads(): Gamepad.GamepadList
	}

			
}

declare module 'npm$namespace$Gamepad' {
		declare export interface Gamepad {
		id: string,
		index: number,
		timestamp: number,
		axes: number[],
		buttons: GamepadButton[],
		connected: boolean,
		mapping: string
	}

	declare export interface GamepadEvent {
		gamepad: Gamepad
	}

	declare export interface GamepadList {
		[index: number]: Gamepad,
		length: number
	}

	declare export interface GamepadButton {
		pressed: boolean,
		value: number
	}

			
}