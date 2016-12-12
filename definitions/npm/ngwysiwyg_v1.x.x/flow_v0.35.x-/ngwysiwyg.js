

declare module 'ngwysiwyg' {
					
}

declare module 'npm$namespace$ngWYSIWYG' {
		declare export interface Toolbar {
		name: string,
		items: string[]
	}

	declare export interface Config {
		sanitize: boolean,
		toolbar?: Toolbar[]
	}

			
}