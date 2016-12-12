import type { tcomb } from 'npm$namespace$TComb'

declare module 'tcomb' {
					declare module.exports: tcomb


}

declare module 'npm$namespace$TComb' {
		declare export interface tcomb {
		format: (format: string, ...values: any[]) => string,
		getFunctionName: (fn: Function) => string,
		getTypeName: (type: TCombBase) => string,
		mixin: (target: {
		
	}, source: {
		
	}, overwrite?: boolean) => any,
		slice: typeof undefined,
		shallowCopy: (x: TCombBase) => TCombBase,
		update: (instance: any, spec: {
		
	}) => TCombBase,
		assert: (condition: boolean, message?: string, ...values: any[]) => void,
		fail: (message?: string) => void,
		Any: Any_Static,
		Nil: Nil_Static,
		Str: Str_Static,
		Num: Num_Static,
		Bool: Bool_Static,
		Arr: Arr_Static,
		Obj: Obj_Static,
		Func: Func_Static,
		func: {
		(domain: TCombBase[], codomain: TCombBase, name?: string): Func_Static,
		(domain: TCombBase, codomain: TCombBase, name?: string): Func_Static
	},
		Err: Err_Static,
		Re: Re_Static,
		Dat: Dat_Static,
		Type: Type_Static,
		irreducible: (name: string, is: TypePredicate) => TCombBase,
		struct: (props: Object, name?: string) => Struct_Static,
		Union: Union_Static,
		Maybe: Maybe_Static,
		enums(map: Object, name?: string): TCombBase,
		union(types: TCombBase[], name?: string): Union_Static,
		maybe(type: TCombBase, name?: string): Maybe_Static,
		Tuple: Tuple_Static,
		tuple: (types: TCombBase[], name?: string) => Tuple_Static,
		Subtype: Subtype_Static,
		List: List_Static,
		list: (type: TCombBase, name?: string) => List_Static,
		Dict: Dict_Static,
		dict: (domain: TCombBase, codomain: TCombBase, name?: string) => Dict_Static,
		subtype(type: TCombBase, predicate: TypePredicate, name?: string): Subtype_Static
	}

	declare export interface TCombBase {
		meta: {
		kind: string,
		name: string
	},
		displayName: string,
		is(value: any): boolean,
		update(instance: any, spec: {
		
	}): TCombBase
	}

	declare export interface TypePredicate {
		(x: any): Bool_Instance
	}

	declare export interface Any_Instance {
		
	}

	declare export interface Any_Static {
		new (value: any): Any_Instance,
		(value: any): Any_Instance
	}

	declare export interface Nil_Instance {
		
	}

	declare export interface Nil_Static {
		new (value: any): Nil_Instance,
		(value: any): Nil_Instance
	}

	declare export interface Str_Instance {
		
	}

	declare export interface Str_Static {
		new (value: string): Str_Instance,
		(value: string): Str_Instance,
		meta: {
		kind: string,
		name: string,
		is: TypePredicate
	}
	}

	declare export interface Num_Instance {
		
	}

	declare export interface Num_Static {
		new (value: number): Num_Instance,
		(value: number): Num_Instance
	}

	declare export interface Bool_Instance {
		
	}

	declare export interface Bool_Static {
		new (value: boolean): Bool_Instance,
		(value: boolean): Bool_Instance
	}

	declare export interface Arr_Instance {
		
	}

	declare export interface Arr_Static {
		new (value: any[]): Arr_Instance,
		(value: any[]): Arr_Instance
	}

	declare export interface Obj_Instance {
		
	}

	declare export interface Obj_Static {
		new (value: Object): Obj_Instance,
		(value: Object): Obj_Instance
	}

	declare export interface Func_Instance {
		
	}

	declare export interface Func_Static {
		new (value: Function): Func_Instance,
		(value: Function): Func_Instance
	}

	declare export interface Err_Instance {
		
	}

	declare export interface Err_Static {
		new (value: Error): Err_Instance,
		(value: Error): Err_Instance
	}

	declare export interface Re_Instance {
		
	}

	declare export interface Re_Static {
		new (value: RegExp): Re_Instance,
		(value: RegExp): Re_Instance
	}

	declare export interface Dat_Instance {
		
	}

	declare export interface Dat_Static {
		new (value: Date): Dat_Instance,
		(value: Date): Dat_Instance
	}

	declare export interface Type_Instance {
		
	}

	declare export interface Type_Static {
		new (value: any): Type_Instance,
		(value: any): Type_Instance
	}

	declare export interface Struct_Static {
		new (value: any, mutable?: boolean): Struct_Instance,
		(value: any, mutable?: boolean): Struct_Instance,
		meta: {
		kind: string,
		name: string,
		props: any[]
	},
		extend(mixins: Object, name?: string): Struct_Static,
		extend(mixins: Struct_Static, name?: string): Struct_Static,
		extend(mixins: Object[], name?: string): Struct_Static,
		extend(mixins: Struct_Static[], name?: string): Struct_Static
	}

	declare interface Struct_Instance {
		
	}

	declare export interface Union_Static {
		new (value: any, mutable?: boolean): Union_Instance,
		(value: any, mutable?: boolean): Union_Instance,
		meta: {
		kind: string,
		name: string,
		types: TCombBase[]
	},
		dispatch(x: any): TCombBase
	}

	declare export interface Union_Instance {
		
	}

	declare export interface Maybe_Static {
		new (value: any, mutable?: boolean): Maybe_Instance,
		(value: any, mutable?: boolean): Maybe_Instance,
		meta: {
		kind: string,
		name: string,
		typee: TCombBase
	}
	}

	declare interface Maybe_Instance {
		
	}

	declare interface Tuple_Static {
		new (value: any, mutable?: boolean): Tuple_Instance,
		(value: any, mutable?: boolean): Tuple_Instance,
		meta: {
		kind: string,
		name: string,
		types: TCombBase[]
	}
	}

	declare interface Tuple_Instance {
		
	}

	declare export interface Subtype_Static {
		new (value: any, mutable?: boolean): Subtype_Instance,
		(value: any, mutable?: boolean): Subtype_Instance,
		meta: {
		kind: string,
		name: string,
		type: TCombBase,
		predicate: TypePredicate
	}
	}

	declare interface Subtype_Instance {
		
	}

	declare interface List_Static {
		new (value: any, mutable?: boolean): List_Instance,
		(value: any, mutable?: boolean): List_Instance,
		meta: {
		kind: string,
		name: string,
		type: TCombBase
	}
	}

	declare interface List_Instance {
		
	}

	declare interface Dict_Static {
		new (value: any, mutable?: boolean): Dict_Instance,
		(value: any, mutable?: boolean): Dict_Instance,
		meta: {
		kind: string,
		name: string,
		domain: TCombBase,
		codomain: TCombBase
	}
	}

	declare interface Dict_Instance {
		
	}

	declare interface Func_Static {
		new (value: any, mutable?: boolean): Func_Instance,
		(value: any, mutable?: boolean): Func_Instance,
		meta: {
		kind: string,
		name: string,
		domain: any,
		codomain: TCombBase
	},
		of(fn: Function): Function
	}

	declare interface Func_Instance {
		
	}

	declare export function list(type: TCombBase, name?: string): List_Static

		
}

declare module 'enums' {
			declare export function of(keys: string[], name?: string): TCombBase

	declare export function of(keys: string, name?: string): TCombBase

		
}