

declare module 'fill-pdf' {
		declare export interface FormData {
		[name: string]: string
	}

	declare export function generatePdf(
		data: FormData, templatePath: string, extendArgs: string[], callback?: (err: Error, output: Buffer) => void
	): void

	declare export function generateFdf(data: FormData): Buffer

		
}