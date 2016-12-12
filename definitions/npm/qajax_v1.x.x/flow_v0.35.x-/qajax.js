

declare module 'qajax' {
			declare function Qajax(url: string): Q.Promise<XMLHttpRequest>

	declare function Qajax(options: any): Q.Promise<XMLHttpRequest>

	declare function Qajax(url: string, options: any): Q.Promise<XMLHttpRequest>

		declare module.exports: undefined


}

declare module 'npm$namespace$Qajax' {
			declare export function filterStatus(validStatus: number): (xhr: XMLHttpRequest) => Q.Promise<XMLHttpRequest>

	declare export function filterStatus(
		validStatus: (status: number) => boolean
	): (xhr: XMLHttpRequest) => Q.Promise<XMLHttpRequest>

	declare export function filterSuccess(): Q.Promise<XMLHttpRequest>

	declare export function toJSON(xhr: XMLHttpRequest): Q.Promise<any>

	declare export function getJSON(url: string): Q.Promise<any>

	declare export function serialize(paramsObj: any): string

		
}