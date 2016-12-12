

declare module 'joi-6.5.0' {
					
}

declare module 'joi' {
		declare export interface ValidationOptions {
		abortEarly?: boolean,
		convert?: boolean,
		allowUnknown?: boolean,
		skipFunctions?: boolean,
		stripUnknown?: boolean,
		language?: Object,
		presence?: string,
		context?: Object
	}

	declare export interface RenameOptions {
		alias?: boolean,
		multiple?: boolean,
		override?: boolean,
		ignoreUndefined?: boolean
	}

	declare export interface EmailOptions {
		errorLevel?: number | boolean,
		tldWhitelist?: string[] | Object,
		minDomainAtoms?: number
	}

	declare export interface IpOptions {
		version?: string | string[],
		cidr?: string
	}

	declare export interface UriOptions {
		scheme?: string | RegExp | Array<string | RegExp>
	}

	declare export interface WhenOptions<T> {
		is: T,
		then?: Schema,
		otherwise?: Schema
	}

	declare export interface ReferenceOptions {
		separator?: string,
		contextPrefix?: string
	}

	declare export interface IPOptions {
		version?: Array<string>,
		cidr?: string
	}

	declare export interface ValidationError {
		message: string,
		details: ValidationErrorItem[],
		simple(): string,
		annotated(): string
	}

	declare export interface ValidationErrorItem {
		message: string,
		type: string,
		path: string,
		options?: ValidationOptions
	}

	declare export interface ValidationResult<T> {
		error: ValidationError,
		value: T
	}

	declare export interface SchemaMap {
		[key: string]: Schema
	}

	declare export interface Schema {
		
	}

	declare export interface Reference {
		
	}

	declare export interface AnySchema<T> {
		allow(value: any, ...values: any[]): T,
		allow(values: any[]): T,
		valid(value: any, ...values: any[]): T,
		valid(values: any[]): T,
		only(value: any, ...values: any[]): T,
		only(values: any[]): T,
		equal(value: any, ...values: any[]): T,
		equal(values: any[]): T,
		invalid(value: any, ...values: any[]): T,
		invalid(values: any[]): T,
		disallow(value: any, ...values: any[]): T,
		disallow(values: any[]): T,
		not(value: any, ...values: any[]): T,
		not(values: any[]): T,
		required(): T,
		optional(): T,
		forbidden(): T,
		strip(): T,
		description(desc: string): T,
		notes(notes: string): T,
		notes(notes: string[]): T,
		tags(notes: string): T,
		tags(notes: string[]): T,
		meta(meta: Object): T,
		example(value: any): T,
		unit(name: string): T,
		options(options: ValidationOptions): T,
		strict(isStrict?: boolean): T,
		default(value: any, description?: string): T,
		default(): T,
		concat(schema: T): T,
		when<U>(ref: string, options: WhenOptions<U>): AlternativesSchema,
		when<U>(ref: Reference, options: WhenOptions<U>): AlternativesSchema,
		label(name: string): T,
		raw(isRaw?: boolean): T,
		empty(schema?: any): T
	}

	declare export interface BooleanSchema {
		
	}

	declare export interface NumberSchema {
		min(limit: number): NumberSchema,
		min(limit: Reference): NumberSchema,
		max(limit: number): NumberSchema,
		max(limit: Reference): NumberSchema,
		greater(limit: number): NumberSchema,
		greater(limit: Reference): NumberSchema,
		less(limit: number): NumberSchema,
		less(limit: Reference): NumberSchema,
		integer(): NumberSchema,
		precision(limit: number): NumberSchema,
		multiple(base: number): NumberSchema,
		positive(): NumberSchema,
		negative(): NumberSchema
	}

	declare export interface StringSchema {
		insensitive(): StringSchema,
		min(limit: number, encoding?: string): StringSchema,
		min(limit: Reference, encoding?: string): StringSchema,
		max(limit: number, encoding?: string): StringSchema,
		max(limit: Reference, encoding?: string): StringSchema,
		creditCard(): StringSchema,
		length(limit: number, encoding?: string): StringSchema,
		length(limit: Reference, encoding?: string): StringSchema,
		regex(pattern: RegExp, name?: string): StringSchema,
		replace(pattern: RegExp, replacement: string): StringSchema,
		replace(pattern: string, replacement: string): StringSchema,
		alphanum(): StringSchema,
		token(): StringSchema,
		email(options?: EmailOptions): StringSchema,
		ip(options?: IpOptions): StringSchema,
		uri(options?: UriOptions): StringSchema,
		guid(): StringSchema,
		hex(): StringSchema,
		hostname(): StringSchema,
		isoDate(): StringSchema,
		lowercase(): StringSchema,
		uppercase(): StringSchema,
		trim(): StringSchema
	}

	declare export interface ArraySchema {
		sparse(enabled?: any): ArraySchema,
		single(enabled?: any): ArraySchema,
		items(type: Schema, ...types: Schema[]): ArraySchema,
		items(types: Schema[]): ArraySchema,
		min(limit: number): ArraySchema,
		max(limit: number): ArraySchema,
		length(limit: number): ArraySchema,
		unique(): ArraySchema
	}

	declare export interface ObjectSchema {
		keys(schema?: SchemaMap): ObjectSchema,
		min(limit: number): ObjectSchema,
		max(limit: number): ObjectSchema,
		length(limit: number): ObjectSchema,
		pattern(regex: RegExp, schema: Schema): ObjectSchema,
		and(peer1: string, ...peers: string[]): ObjectSchema,
		and(peers: string[]): ObjectSchema,
		nand(peer1: string, ...peers: string[]): ObjectSchema,
		nand(peers: string[]): ObjectSchema,
		or(peer1: string, ...peers: string[]): ObjectSchema,
		or(peers: string[]): ObjectSchema,
		xor(peer1: string, ...peers: string[]): ObjectSchema,
		xor(peers: string[]): ObjectSchema,
		with(key: string, peers: string): ObjectSchema,
		with(key: string, peers: string[]): ObjectSchema,
		without(key: string, peers: string): ObjectSchema,
		without(key: string, peers: string[]): ObjectSchema,
		rename(from: string, to: string, options?: RenameOptions): ObjectSchema,
		assert(ref: string, schema: Schema, message?: string): ObjectSchema,
		assert(ref: Reference, schema: Schema, message?: string): ObjectSchema,
		unknown(allow?: boolean): ObjectSchema,
		type(constructor: Function, name?: string): ObjectSchema,
		requiredKeys(children: string): ObjectSchema,
		requiredKeys(children: string[]): ObjectSchema,
		requiredKeys(child: string, ...children: string[]): ObjectSchema,
		optionalKeys(children: string): ObjectSchema,
		optionalKeys(children: string[]): ObjectSchema,
		optionalKeys(child: string, ...children: string[]): ObjectSchema
	}

	declare export interface BinarySchema {
		encoding(encoding: string): BinarySchema,
		min(limit: number): BinarySchema,
		max(limit: number): BinarySchema,
		length(limit: number): BinarySchema
	}

	declare export interface DateSchema {
		min(date: Date): DateSchema,
		min(date: number): DateSchema,
		min(date: string): DateSchema,
		min(date: Reference): DateSchema,
		max(date: Date): DateSchema,
		max(date: number): DateSchema,
		max(date: string): DateSchema,
		max(date: Reference): DateSchema,
		format(format: string): DateSchema,
		format(format: string[]): DateSchema,
		iso(): DateSchema
	}

	declare export interface FunctionSchema {
		
	}

	declare export interface AlternativesSchema {
		try(schemas: Schema[]): AlternativesSchema,
		when<T>(ref: string, options: WhenOptions<T>): AlternativesSchema,
		when<T>(ref: Reference, options: WhenOptions<T>): AlternativesSchema
	}

	declare export function any(): Schema

	declare export function array(): ArraySchema

	declare export function bool(): BooleanSchema

	declare export function boolean(): BooleanSchema

	declare export function binary(): BinarySchema

	declare export function date(): DateSchema

	declare export function func(): FunctionSchema

	declare export function number(): NumberSchema

	declare export function object(schema?: SchemaMap): ObjectSchema

	declare export function string(): StringSchema

	declare export function alternatives(types: Schema[]): Schema

	declare export function alternatives(type1: Schema, type2: Schema, ...types: Schema[]): Schema

	declare export function validate<T>(
		value: T, schema: Schema, callback: (err: ValidationError, value: T) => void
	): void

	declare export function validate<T>(
		value: T, schema: Object, callback: (err: ValidationError, value: T) => void
	): void

	declare export function validate<T>(
		value: T, schema: Object, options?: ValidationOptions, callback?: (err: ValidationError, value: T) => void
	): ValidationResult<T>

	declare export function compile(schema: Object): Schema

	declare export function assert(value: any, schema: Schema, message?: string | Error): void

	declare export function ref(key: string, options?: ReferenceOptions): Reference

		
}