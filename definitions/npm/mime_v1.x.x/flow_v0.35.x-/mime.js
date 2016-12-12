

declare module 'mime' {
		declare interface Charsets {
		lookup(mime: string): string
	}

	declare export function lookup(path: string): string

	declare export function extension(mime: string): string

	declare export function load(filepath: string): void

	declare export function define(mimes: Object): void

		
}