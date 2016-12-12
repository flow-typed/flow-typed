

declare module 'copy-paste' {
	declare export type CopyCallback = (err: Error) => void;

	declare export type PasteCallback = (err: Error, content: string) => void;

		declare export function copy<T>(content: T): T

	declare export function copy<T>(content: T, callback: CopyCallback): T

	declare export function paste(): string

	declare export function paste(callback: PasteCallback): void

		
}