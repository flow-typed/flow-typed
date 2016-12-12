

declare module 'opn' {
		declare interface DefaultFunction {
		(target: string): cp.ChildProcess,
		(target: string, callback: (err: Error) => void): cp.ChildProcess,
		(target: string, options: Opn.Options): cp.ChildProcess,
		(target: string, options: Opn.Options, callback: (err: Error) => void): cp.ChildProcess
	}

			declare module.exports: DefaultFunction


}

declare module 'npm$namespace$Opn' {
		declare export interface Options {
		wait?: boolean,
		app?: string | string[]
	}

			
}