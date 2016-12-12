

declare module 'jss' {
		declare interface Properties {
		[name: string]: string
	}

	declare interface Selectors {
		[selector: string]: Properties
	}

	declare interface JSS {
		get(): Selectors,
		get(s: string): Properties,
		getAll(s: string): Properties,
		remove(): void,
		remove(s: string): void,
		set(s: string, p: Properties): void
	}

			
}