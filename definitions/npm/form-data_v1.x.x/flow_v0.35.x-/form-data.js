

declare module 'form-data' {
				declare class FormData  {
		append(key: string, value: any, options?: any): void;
		getHeaders(): FormData.Dictionary<string>;
		pipe(to: any): any;
		submit(params: string | Object, callback: (error: any, response: any) => void): any;
		getBoundary(): string
	}

	declare module.exports: undefined


}

declare module 'FormData' {
		declare interface Dictionary<T> {
		[key: string]: T
	}

			
}