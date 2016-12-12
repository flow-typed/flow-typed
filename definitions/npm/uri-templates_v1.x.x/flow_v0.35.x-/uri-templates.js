

declare module 'uri-templates' {
			declare function utpl(template: string): utpl.URITemplate

		declare module.exports: undefined


}

declare module 'utpl' {
		declare export interface URITemplate {
		fillFromObject(vars: Object): string,
		fill(callback: (varName: string) => string): string,
		fromUri(uri: string): Object
	}

			
}