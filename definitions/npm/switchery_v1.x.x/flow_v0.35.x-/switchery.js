import type { SwitcheryStatic } from 'npm$namespace$Switchery'

declare module 'switchery' {
		declare interface Switchery {
		destroy(): void,
		enable(): void,
		disable(): void,
		isDisabled(): boolean
	}

			declare module.exports: SwitcheryStatic


}

declare module 'npm$namespace$Switchery' {
		declare interface SwitcheryStatic {
		new (node: Node, options?: Options): Switchery
	}

	declare interface Options {
		color?: string,
		secondaryColor?: string,
		jackColor?: string,
		jackSecondaryColor?: string,
		className?: string,
		disabled?: boolean,
		disabledOpacity?: number,
		speed?: string,
		size?: string
	}

			
}