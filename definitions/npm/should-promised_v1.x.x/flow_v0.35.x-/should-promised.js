

declare module 'should-promised' {
		declare interface ShouldAssertion {
		Promise: ShouldAssertion,
		fulfilled(): ShouldAssertion,
		rejected(): ShouldAssertion,
		rejectedWith(message: (string | Function | RegExp), properties?: Object): ShouldAssertion,
		rejectedWith(message: Object): ShouldAssertion,
		finally: ShouldAssertion,
		eventually: ShouldAssertion
	}

			
}