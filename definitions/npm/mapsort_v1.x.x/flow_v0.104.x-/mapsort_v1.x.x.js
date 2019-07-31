declare module 'mapsort' {
	declare export default function mapSort<T, S>(
		list: $ReadOnlyArray<T>,
		mapCallback: (value: T, index: number, array: $ReadOnlyArray<T>) => S,
		compareFunction: ?(a: S, b: S) => number
	): Array<T>;
}