/* @flow */
import { describe, it } from 'flow-typed-test';
import parseHttpDate from 'parsehttpdate';

describe('parsehttpdate', () => {
	it('should work with valid arguments', () => {
		(parseHttpDate('Tue, 15 Nov 1994 08:12:31 GMT'): Date);
		(parseHttpDate('Tue, 15 Nov 1994 08:12:31 GMT', false): Date);
	});

	it('should fail with an unexpected value', () => {
		// $FlowExpectedError
		(parseHttpDate(Date.parse('1994-11-15T08:12:31Z')): Date);
	});

	it('should fail with an unexpected validate argument', () => {
		// $FlowExpectedError
		(parseHttpDate('Tue, 15 Nov 1994 08:12:31 GMT', ''): Date);
	});

	it('should fail without arguments', () => {
		// $FlowExpectedError
		(parseHttpDate(): Date);
	});
});