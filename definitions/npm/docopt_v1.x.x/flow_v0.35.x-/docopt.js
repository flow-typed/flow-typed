

declare module 'docopt' {
		declare interface DocoptOption {
		argv?: Array<string>,
		help?: boolean,
		version?: any,
		options_first?: boolean,
		exit?: boolean
	}

	declare export function docopt(doc: string, options: DocoptOption): any

		
}