

declare module 'donna' {
			declare function generateMetadata(modules: string[]): DonnaTypes.Metadata

		
}

declare module 'npm$namespace$DonnaTypes' {
		declare interface Metadata {
		files: {
		[filePath: string]: File
	}
	}

	declare interface File {
		objects: {
		[line: number]: Line
	},
		exports: any
	}

	declare interface Line {
		[row: number]: Object
	}

	declare interface Object {
		type: string,
		name: string,
		bindingType: string,
		paramNames?: string[],
		classProperties?: any[],
		prototypeProperties?: number[][],
		doc?: string,
		range: number[][]
	}

			
}