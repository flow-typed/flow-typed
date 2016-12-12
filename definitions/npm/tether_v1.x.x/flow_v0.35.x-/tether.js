

declare module 'tether' {
				declare class Tether  {
		constructor(options: Tether.ITetherOptions): this;
		setOptions(options: Tether.ITetherOptions): void;
		disable(): void;
		enable(): void;
		destroy(): void;
		position(): void;
		position(): void
	}

	declare module.exports: undefined


}

declare module 'npm$namespace$Tether' {
		declare interface ITetherOptions {
		attachment?: string,
		classes?: {
		[className: string]: boolean
	},
		classPrefix?: string,
		constraints?: ITetherConstraint[],
		element?: HTMLElement | string | any,
		enabled?: boolean,
		offset?: string,
		optimizations?: any,
		target?: HTMLElement | string | any,
		targetAttachment?: string,
		targetOffset?: string,
		targetModifier?: string
	}

	declare interface ITetherConstraint {
		attachment?: string,
		outOfBoundsClass?: string,
		pin?: boolean | string[],
		pinnedClass?: string,
		to?: string | HTMLElement | number[]
	}

			
}