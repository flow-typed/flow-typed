

declare module 'estraverse' {
		declare export interface Visitor {
		enter?: (node: any, parentNode: any) => any,
		leave?: (node: any, parentNode: any) => any,
		fallback?: string,
		keys?: {
		
	}
	}

	declare export function traverse(ast: any, visitor: Visitor): any

	declare export function replace(ast: any, visitor: Visitor): any

		
}