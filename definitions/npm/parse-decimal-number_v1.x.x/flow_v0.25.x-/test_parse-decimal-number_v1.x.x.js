/* @flow */
import { describe, it } from 'flow-typed-test';
import parseDecimalNumber from 'parse-decimal-number';

describe('parse-decimal-number', () => {
	it('should work with valid arguments', () => {
		(parseDecimalNumber('12,345,678.90'): number);
		(parseDecimalNumber('12.345.678,90','.,'): number);
	});

	it('should fail without arguments', () => {
		// $ExpectError
		(parseDecimalNumber(): number);
	});
});
