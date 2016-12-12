import type { DotConstructor } from 'npm$namespace$DotObject'

declare module 'dot-object' {
					declare module.exports: DotConstructor


}

declare module 'npm$namespace$DotObject' {
		declare interface DotConstructor {
		new (separator: string): Dot
	}

	declare interface ModifierFunctionWrapper {
		(arg: any): any
	}

	declare interface Dot {
		copy(
		source: string, target: string, obj1: any, obj2: any, mods?: ModifierFunctionWrapper | Array<ModifierFunctionWrapper>, merge?: boolean
	): void,
		dot(obj: any, tgt: any): void,
		del(path: string, obj: any): any,
		move(
		source: string, target: string, obj: any, mods?: ModifierFunctionWrapper | Array<ModifierFunctionWrapper>, merge?: boolean
	): void,
		object(
		obj: any, mods?: ModifierFunctionWrapper | Array<ModifierFunctionWrapper>
	): void,
		pick(path: string, obj: any, remove?: boolean): void,
		remove(path: string, obj: any): any,
		str(
		path: string, v: any, obj: Object, mods?: ModifierFunctionWrapper | Array<ModifierFunctionWrapper>
	): void,
		transfer(
		source: string, target: string, obj1: any, obj2: any, mods?: ModifierFunctionWrapper | Array<ModifierFunctionWrapper>, merge?: boolean
	): void,
		transform(
		recipe: any, obj: any, mods?: ModifierFunctionWrapper | Array<ModifierFunctionWrapper>
	): void
	}

			
}