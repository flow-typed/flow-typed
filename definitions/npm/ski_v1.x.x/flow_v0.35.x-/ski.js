

declare module 'ski' {
			declare export function S<T, S, U>(x: (z: U) => (y: S) => T, y: (z: U) => S, z: U): T

	declare export function K<T, S>(x: T): (y?: S) => T

	declare export function I<T>(x: T): T

		
}