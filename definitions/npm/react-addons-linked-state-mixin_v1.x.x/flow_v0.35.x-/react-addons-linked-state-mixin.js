import type { LinkedStateMixin } from 'npm$namespace$___React'

declare module 'react-addons-linked-state-mixin' {
	declare type LinkedStateMixin = ___React.LinkedStateMixin;

				declare module.exports: LinkedStateMixin


}

declare module 'npm$namespace$___React' {
		declare interface ReactLink<T> {
		value: T,
		requestChange(newValue: T): void
	}

	declare interface LinkedStateMixin {
		linkState<T>(key: string): ReactLink<T>
	}

	declare interface HTMLAttributes {
		checkedLink?: ReactLink<boolean>,
		valueLink?: ReactLink<boolean | string | number>
	}

			
}

declare module '___Addons' {
					
}