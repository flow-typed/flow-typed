

declare module 'jsmockito' {
			declare function isMock(maybeMock: any): boolean

	declare function when<T>(mock: T): T

	declare function verify<T>(mock: T): T

	declare function verify<T>(mock: T, verifier: JsMockito.Verifier): T

	declare function verifyZeroInteractions(...mock: any[]): void

	declare function verifyNoMoreInteractions(...mock: any[]): void

	declare function spy<T>(delegate: T): T

	declare function mockFunction(): Function

	declare function mockFunction(funcName: string): Function

	declare function mockFunction(funcName: string, delegate: Function): Function

	declare function mock<T>(Obj: {
		new (): T
	}): T

	declare function never(): JsMockito.Verifier

	declare function zeroInteractions(): JsMockito.Verifier

	declare function noMoreInteractions(): JsMockito.Verifier

	declare function times(wanted: number): JsMockito.Verifier

	declare function once(): JsMockito.Verifier

		
}

declare module 'npm$namespace$JsMockito' {
		declare export interface Verifier {
		
	}

	declare export function isMock(maybeMock: any): boolean

	declare export function when<T>(mock: T): T

	declare export function verify<T>(mock: T): T

	declare export function verify<T>(mock: T, verifier: Verifier): T

	declare export function verifyZeroInteractions(...mock: any[]): void

	declare export function verifyNoMoreInteractions(...mock: any[]): void

	declare export function spy<T>(delegate: T): T

	declare export function mockFunction(): Function

	declare export function mockFunction(funcName: string): Function

	declare export function mockFunction(funcName: string, delegate: Function): Function

	declare export function mock<T>(Obj: {
		new (): T
	}): T

	declare export class JsMockitoStubBuilder  {
		then(...func: ((obj: any) => any)[]): JsMockitoStubBuilder;
		thenReturn(...obj: any[]): JsMockitoStubBuilder;
		thenThrow(...obj: Error[]): JsMockitoStubBuilder
	}

	
}

declare module 'Verifiers' {
			declare export function never(): Verifier

	declare export function zeroInteractions(): Verifier

	declare export function noMoreInteractions(): Verifier

	declare export function times(wanted: number): Verifier

	declare export function once(): Verifier

		
}

declare module 'Integration' {
			declare export function importTo(target: any): void

	declare export function screwunit(): void

	declare export function JsTestDriver(): void

	declare export function JsUnitTest(): void

	declare export function YUITest(): void

	declare export function QUnit(): void

	declare export function jsUnity(): void

	declare export function jSpec(): void

		
}