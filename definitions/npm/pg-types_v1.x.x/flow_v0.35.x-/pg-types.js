

declare module 'pg-types' {
		declare interface TypeParser {
		(value: any): any
	}

	declare export function getTypeParser(oid: number, format: string): TypeParser

	declare export function setTypeParser(oid: number, format: string, parseFn: TypeParser): void

	declare export function setTypeParser(oid: number, parseFn: TypeParser): void

		
}

declare module 'arrayParser' {
			declare export function create(source: any, transform: TypeParser): {
		parse: () => any[]
	}

		
}