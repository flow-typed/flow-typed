/* @flow */
import { describe, it } from 'flow-typed-test';
import mapSort from 'mapsort';

describe('mapsort', () => {
	it('should work with valid arguments including a compare function', () => {
		const result: Array<string> = mapSort(
			['40', '186', '2.4', '.47'],
			(string: string, index: number, array: $ReadOnlyArray<string>) => parseFloat(string),
			(first: number, second: number) => first - second
		);
	});

	it('should work with valid arguments without a compare function', () => {
		const result: Array<string> = mapSort(
			['Jamaica', 'AUSTRALIA', 'italy', 'bRaZiL', 'AUSTRALIA'],
			(string: string, index: number, array: $ReadOnlyArray<string>) => string.toLowerCase()
		);
	});

	it('should fail with unexpected input', () => {
		// $ExpectError
		const result: Array<string> = mapSort('this is not array-like!', (string: string) => string);
	})

	it('should fail with an incompatible map callback', () => {
		// $ExpectError
		const result: Array<number> = mapSort(['a', 'b', 'c', 'd'], (number: number) => number, (first: number, second: number) => first - second);
	});

	it('should fail with an incompatible compare function', () => {
		// $ExpectError
		const result: Array<string> = mapSort(['a', 'b', 'c', 'd'], (string: string) => string.toLowerCase(), (first: number, second: number) => first - second);
	});

	it('should fail without a map callback', () => {
		// $ExpectError
		const result: Array<string> = mapSort(['a', 'b', 'c', 'd']);
	});
});