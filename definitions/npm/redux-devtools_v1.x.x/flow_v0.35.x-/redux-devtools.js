

declare module 'redux-devtools' {
		declare export interface IDevTools {
		new (): JSX.ElementClass,
		instrument(): (opts: any) => any
	}

	declare export function createDevTools(el: React.ReactElement<any>): IDevTools

	declare export function persistState(debugSessionKey: string): Function

		declare module.exports: undefined


}