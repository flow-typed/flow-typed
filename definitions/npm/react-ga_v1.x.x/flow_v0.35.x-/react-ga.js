

declare module 'react-ga' {
					declare module.exports: undefined


}

declare module 'npm$namespace$___reactGA' {
		declare export interface EventArgs {
		category: string,
		action: string,
		label?: string,
		value?: number,
		nonInteraction?: boolean
	}

	declare export interface InitializeOptions {
		debug?: boolean
	}

	declare export interface FieldsObject {
		[i: string]: any
	}

	declare export function initialize(trackingCode: string, options?: InitializeOptions): void

	declare export function pageview(path: string): void

	declare export function modalview(name: string): void

	declare export function event(args: EventArgs): void

	declare export function set(fieldsObject: FieldsObject): void

		
}