

declare module 'yamljs' {
					declare module.exports: undefined


}

declare module 'npm$namespace$YAML' {
			declare function load(path: string): any

	declare function load(path: string, callback: (res: any) => void): void

	declare function stringify(nativeObject: any, inline?: number, spaces?: number): string

	declare function parse(yamlString: string): any

		
}