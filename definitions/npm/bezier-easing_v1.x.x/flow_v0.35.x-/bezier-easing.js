

declare module 'bezier-easing' {
		declare interface Easing {
		(x: number): number
	}

	declare function BezierEasing(mX1: number, mY1: number, mX2: number, mY2: number): Easing

		
}