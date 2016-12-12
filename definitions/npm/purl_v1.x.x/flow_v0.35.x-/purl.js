

declare module 'purl' {
			declare function purl(): purl.Url

	declare function purl(someUrl: string): purl.Url

		declare module.exports: undefined


}

declare module 'npm$namespace$purl' {
		declare interface ParameterMap {
		[parameterName: string]: string
	}

	declare export interface Url {
		attr(option: string): string,
		param(): ParameterMap,
		param(parameterName: string): string,
		segment(position: number): string,
		fparam(): ParameterMap,
		fparam(parameterName: string): string,
		fsegment(position: number): string
	}

			
}