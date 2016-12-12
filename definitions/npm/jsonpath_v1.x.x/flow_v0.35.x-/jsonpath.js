

declare module 'jsonpath' {
	declare type PathComponent = string | number;

		declare export function query(obj: any, pathExpression: string): any[]

	declare export function paths(obj: any, pathExpression: string): PathComponent[][]

	declare export function nodes(obj: any, pathExpression: string): {
		path: PathComponent[],
		value: any
	}[]

	declare export function value(obj: any, pathExpression: string): any

	declare export function value(obj: any, pathExpression: string, newValue: any): any

	declare export function parent(obj: any, pathExpression: string): any

	declare export function apply(
		obj: any, pathExpression: string, fn: (x: any) => any
	): {
		path: PathComponent[],
		value: any
	}[]

	declare export function parse(pathExpression: string): any[]

	declare export function stringify(path: PathComponent[]): string

		
}