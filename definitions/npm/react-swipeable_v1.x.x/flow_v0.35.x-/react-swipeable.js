import type { ReactSwipeable } from 'npm$namespace$ReactSwipeableModule'

declare module 'react-swipeable' {
					declare module.exports: ReactSwipeable


}

declare module 'npm$namespace$ReactSwipeableModule' {
		declare interface onSwipingCallback {
		(event: React.TouchEvent, deltaX: number, deltaY: number, absX: number, absY: number, velocity: number): void
	}

	declare interface OnSwipedCallback {
		(event: React.TouchEvent, deltaX: number, deltaY: number, isFlick: boolean): void
	}

	declare interface OnSwipedDirectionCallback {
		(event: React.TouchEvent, delta: number, isFlick: boolean): void
	}

	declare interface OnSwipingDirectionCallback {
		(event: React.TouchEvent, delta: number): void
	}

	declare interface Props {
		onSwiped?: OnSwipedCallback,
		onSwiping?: onSwipingCallback,
		onSwipingUp?: OnSwipingDirectionCallback,
		onSwipingRight?: OnSwipingDirectionCallback,
		onSwipingDown?: OnSwipingDirectionCallback,
		onSwipingLeft?: OnSwipingDirectionCallback,
		onSwipedUp?: OnSwipedDirectionCallback,
		onSwipedRight?: OnSwipedDirectionCallback,
		onSwipedDown?: OnSwipedDirectionCallback,
		onSwipedLeft?: OnSwipedDirectionCallback,
		flickThreshold?: number,
		delta?: number,
		preventDefaultTouchmoveEvent?: boolean,
		nodeName?: string
	}

	declare interface ReactSwipeable {
		
	}

			
}