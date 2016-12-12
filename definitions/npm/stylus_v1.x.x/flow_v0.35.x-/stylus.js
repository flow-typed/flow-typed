import type { Static } from 'npm$namespace$Stylus'

declare module 'stylus' {
					declare module.exports: Static


}

declare module 'npm$namespace$Stylus' {
		declare export interface Static {
		(str: string): Renderer,
		(str: string, options: RenderOptions): Renderer,
		version: string,
		nodes: NodeStatic,
		functions: Functions,
		utils: Utils,
		Visitor: typeof Visitor,
		Parser: typeof Parser,
		Evaluator: typeof Evaluator,
		Compiler: typeof Compiler,
		middleware(dir: string): Middleware,
		middleware(options: any): Middleware,
		convertCSS(css: string): string,
		render(str: string, callback: RenderCallback): void,
		render(str: string, options: RenderOptions, callback: RenderCallback): void,
		url: UrlFunction,
		resolver(options: any): LiteralFunction
	}

	declare export interface NodeStatic {
		Node: typeof undefined,
		Root: typeof undefined,
		Null: typeof undefined,
		Each: typeof undefined,
		If: typeof undefined,
		Call: typeof undefined,
		UnaryOp: typeof undefined,
		BinOp: typeof undefined,
		Ternary: typeof undefined,
		Block: typeof undefined,
		Unit: typeof undefined,
		String: typeof undefined,
		HSLA: typeof undefined,
		RGBA: typeof undefined,
		Ident: typeof undefined,
		Group: typeof undefined,
		Literal: typeof undefined,
		Boolean: typeof undefined,
		Return: typeof undefined,
		Media: typeof undefined,
		QueryList: typeof undefined,
		Query: typeof undefined,
		QueryExpr: typeof undefined,
		Params: typeof undefined,
		Comment: typeof undefined,
		Keyframes: typeof undefined,
		Member: typeof undefined,
		Charset: typeof undefined,
		Namespace: typeof undefined,
		Import: typeof undefined,
		Extend: typeof undefined,
		Object: typeof undefined,
		Function: typeof undefined,
		Property: typeof undefined,
		Selector: typeof undefined,
		Expression: typeof undefined,
		Arguments: typeof undefined,
		Atblock: typeof undefined,
		Atrule: typeof undefined,
		true: Nodes.Boolean,
		false: Nodes.Boolean,
		null: Nodes.Null
	}

	declare export interface Functions {
		hsla(rgba: Nodes.RGBA): Nodes.HSLA,
		hsla(hsla: Nodes.HSLA): Nodes.HSLA,
		hsla(
		hue: Nodes.Unit, saturation: Nodes.Unit, lightness: Nodes.Unit, alpha: Nodes.Unit
	): Nodes.HSLA,
		hsl(rgba: Nodes.RGBA): Nodes.HSLA,
		hsl(hsla: Nodes.HSLA): Nodes.HSLA,
		hsl(hue: Nodes.Unit, saturation: Nodes.Unit, lightness: Nodes.Unit): Nodes.HSLA,
		type(node: Nodes.Node): string,
		typeof(node: Nodes.Node): string,
		type-of(node: Nodes.Node): string,
		component(color: Nodes.RGBA, name: Nodes.String): Nodes.Unit,
		component(color: Nodes.HSLA, name: Nodes.String): Nodes.Unit,
		basename(path: Nodes.String): string,
		basename(path: Nodes.String, ext: Nodes.String): string,
		dirname(path: Nodes.String): string,
		extname(path: Nodes.String): string,
		pathjoin(...paths: Nodes.String[]): string,
		red(color: Nodes.RGBA): Nodes.Unit,
		red(color: Nodes.HSLA): Nodes.Unit,
		red(color: Nodes.RGBA, value: Nodes.Unit): Nodes.RGBA,
		red(color: Nodes.HSLA, value: Nodes.Unit): Nodes.RGBA,
		green(color: Nodes.RGBA): Nodes.Unit,
		green(color: Nodes.HSLA): Nodes.Unit,
		green(color: Nodes.RGBA, value: Nodes.Unit): Nodes.RGBA,
		green(color: Nodes.HSLA, value: Nodes.Unit): Nodes.RGBA,
		blue(color: Nodes.RGBA): Nodes.Unit,
		blue(color: Nodes.HSLA): Nodes.Unit,
		blue(color: Nodes.RGBA, value: Nodes.Unit): Nodes.RGBA,
		blue(color: Nodes.HSLA, value: Nodes.Unit): Nodes.RGBA,
		alpha(color: Nodes.RGBA): Nodes.Unit,
		alpha(color: Nodes.HSLA): Nodes.Unit,
		alpha(color: Nodes.RGBA, value: Nodes.Unit): Nodes.RGBA,
		alpha(color: Nodes.HSLA, value: Nodes.Unit): Nodes.RGBA,
		hue(color: Nodes.RGBA): Nodes.Unit,
		hue(color: Nodes.HSLA): Nodes.Unit,
		hue(color: Nodes.RGBA, value: Nodes.Unit): Nodes.RGBA,
		hue(color: Nodes.HSLA, value: Nodes.Unit): Nodes.RGBA,
		saturation(color: Nodes.RGBA): Nodes.Unit,
		saturation(color: Nodes.HSLA): Nodes.Unit,
		saturation(color: Nodes.RGBA, value: Nodes.Unit): Nodes.RGBA,
		saturation(color: Nodes.HSLA, value: Nodes.Unit): Nodes.RGBA,
		lightness(color: Nodes.RGBA): Nodes.Unit,
		lightness(color: Nodes.HSLA): Nodes.Unit,
		lightness(color: Nodes.RGBA, value: Nodes.Unit): Nodes.RGBA,
		lightness(color: Nodes.HSLA, value: Nodes.Unit): Nodes.RGBA,
		rgba(rgba: Nodes.RGBA): Nodes.RGBA,
		rgba(hsla: Nodes.HSLA): Nodes.RGBA,
		rgba(
		hue: Nodes.Unit, saturation: Nodes.Unit, lightness: Nodes.Unit, alpha: Nodes.Unit
	): Nodes.RGBA,
		rgb(rgba: Nodes.RGBA): Nodes.RGBA,
		rgb(hsla: Nodes.HSLA): Nodes.RGBA,
		rgb(
		hue: Nodes.Unit, saturation: Nodes.Unit, lightness: Nodes.Unit, alpha: Nodes.Unit
	): Nodes.RGBA,
		blend(top: Nodes.RGBA): Nodes.RGBA,
		blend(top: Nodes.RGBA, bottom: Nodes.RGBA): Nodes.RGBA,
		blend(top: Nodes.RGBA, bottom: Nodes.HSLA): Nodes.RGBA,
		blend(top: Nodes.HSLA): Nodes.RGBA,
		blend(top: Nodes.HSLA, bottom: Nodes.RGBA): Nodes.RGBA,
		blend(top: Nodes.HSLA, bottom: Nodes.HSLA): Nodes.RGBA,
		luminosity(rgba: Nodes.RGBA): Nodes.Unit,
		luminosity(rgba: Nodes.HSLA): Nodes.Unit,
		contrast(top: Nodes.RGBA): Nodes.Object,
		contrast(top: Nodes.RGBA, bottom: Nodes.RGBA): Nodes.Object,
		contrast(top: Nodes.RGBA, bottom: Nodes.HSLA): Nodes.Object,
		contrast(top: Nodes.HSLA): Nodes.Object,
		contrast(top: Nodes.HSLA, bottom: Nodes.RGBA): Nodes.Object,
		contrast(top: Nodes.HSLA, bottom: Nodes.HSLA): Nodes.Object,
		transparentify(top: Nodes.RGBA): Nodes.Object,
		transparentify(top: Nodes.RGBA, bottom: Nodes.RGBA, alpha?: Nodes.Unit): Nodes.Object,
		transparentify(top: Nodes.RGBA, bottom: Nodes.HSLA, alpha?: Nodes.Unit): Nodes.Object,
		transparentify(top: Nodes.HSLA): Nodes.Object,
		transparentify(top: Nodes.HSLA, bottom: Nodes.RGBA, alpha?: Nodes.Unit): Nodes.Object,
		transparentify(top: Nodes.HSLA, bottom: Nodes.HSLA, alpha?: Nodes.Unit): Nodes.Object,
		json(path: Nodes.String, local: Nodes.Boolean, namePrefix: Nodes.String): any,
		use(plugin: Nodes.String): void,
		use(plugin: Nodes.String, options: any): void,
		unquote(str: Nodes.String): Nodes.Literal,
		convert(str: Nodes.String): Nodes.Node,
		unit(unit: Nodes.Unit, type: Nodes.String): Nodes.Unit,
		lookup(name: Nodes.String): Nodes.Node,
		define(name: Nodes.String, expr: Nodes.Expression): Nodes.Node,
		operate(op: Nodes.String, left: Nodes.Node, right: Nodes.Node): Nodes.Node,
		match(pattern: Nodes.String, val: Nodes.String): Nodes.Boolean,
		match(pattern: Nodes.String, val: Nodes.Ident): Nodes.Boolean,
		substr(val: Nodes.String, start: Nodes.Number, length: Nodes.Number): Nodes.String,
		substr(val: Nodes.Ident, start: Nodes.Number, length: Nodes.Number): Nodes.Ident,
		replace(
		pattern: Nodes.String, replacement: Nodes.String, val: Nodes.String
	): Nodes.String,
		replace(
		pattern: Nodes.String, replacement: Nodes.String, val: Nodes.Ident
	): Nodes.Ident,
		split(pattern: Nodes.String, val: Nodes.String): Nodes.Expression,
		split(pattern: Nodes.String, val: Nodes.Ident): Nodes.Expression,
		length(expr: Nodes.Expression): Nodes.Unit,
		length(...expr: Nodes.Expression[]): Nodes.Null,
		error(msg: Nodes.String): void,
		warn(msg: Nodes.String): Nodes.Null,
		trace(): Nodes.Null,
		push(expr: Nodes.Expression, ...nodes: Nodes.Node[]): Nodes.Unit,
		pop(expr: Nodes.Expression): Nodes.Node,
		unshift(expr: Nodes.Expression, ...nodes: Nodes.Node[]): Nodes.Unit,
		prepend(expr: Nodes.Expression, ...nodes: Nodes.Node[]): Nodes.Unit,
		shift(expr: Nodes.Expression): Nodes.Node,
		s(fmt: Nodes.String, ...nodes: Nodes.Node[]): Nodes.Literal,
		base-convert(num: Nodes.Number, base: Nodes.Number, width: Nodes.Number): Nodes.Literal,
		opposite-position(positions: Nodes.Expression): Nodes.Expression,
		image-size(img: Nodes.String, ignoreErr: Nodes.Boolean): Nodes.Expression,
		tan(angle: Nodes.Unit): Nodes.Unit,
		math(n: Nodes.Unit, fn: Nodes.String): Nodes.Unit,
		-math-prop(prop: Nodes.String): Nodes.Unit,
		adjust(rgba: Nodes.RGBA, prop: Nodes.String, amount: Nodes.Unit): Nodes.RGBA,
		adjust(hsla: Nodes.HSLA, prop: Nodes.String, amount: Nodes.Unit): Nodes.RGBA,
		clone(expr: Nodes.Expression): Nodes.Expression,
		add-property(name: Nodes.String, expr: Nodes.Expression): Nodes.Property,
		merge(dest: Nodes.Object, ...objs: Nodes.Object[]): Nodes.Object,
		extend(dest: Nodes.Object, ...objs: Nodes.Object[]): Nodes.Object,
		selector(): string,
		selector(sel: Nodes.String): string,
		-prefix-classes(prefix: Nodes.String, block: Nodes.Block): Nodes.Block,
		current-media(): Nodes.String,
		list-separator(list: Nodes.Expression): Nodes.String
	}

	declare export interface Utils {
		absolute(path: string): boolean,
		lookup(path: string, paths: string, ignore: string, resolveURL: boolean): string,
		lookupIndex(path: string, paths: string, filename: string): string[],
		find(path: string, paths: string, ignore: string): string[],
		formatException(err: Error, options: ExceptionOptions): Error,
		assertType(node: Nodes.Node, type: string, param: string): void,
		assertString(node: Nodes.Node, param: string): void,
		assertColor(node: Nodes.Node, param: string): void,
		assertPresent(node: Nodes.Node, name: string): void,
		unwrap(expr: Nodes.Expression): Nodes.Node,
		coerce(val: any): Nodes.Node,
		coerce(val: any, raw: boolean): Nodes.Node,
		coerceArray(val: any): Nodes.Expression,
		coerceArray(val: any, raw: boolean): Nodes.Expression,
		coerceObject(obj: any): Nodes.Expression,
		coerceObject(obj: any, raw: boolean): Nodes.Expression,
		params(fn: Function): string[],
		merge(a: any, b: any): any,
		uniq(arr: any[]): any[],
		compileSelectors(arr: string[], leaveHidden: boolean): string[]
	}

	declare export interface UrlFunction {
		(options: UrlOptions): LiteralFunction,
		mimes: {
		.gif: string,
		.png: string,
		.jpg: string,
		.jpeg: string,
		.svg: string,
		.ttf: string,
		.eot: string,
		.woff: string
	}
	}

	declare export interface Middleware {
		(req: any, res: any, next: Function): void
	}

	declare export interface Dictionary<T> {
		[key: string]: T
	}

	declare export interface RenderOptions {
		globals?: Dictionary<any>,
		functions?: Dictionary<any>,
		imports?: string[],
		paths?: string[],
		filename?: string,
		Evaluator?: typeof Evaluator
	}

	declare export interface RenderCallback {
		(err: Error, css: string, js: string): void
	}

	declare export interface UrlOptions {
		limit?: string,
		path: string
	}

	declare export interface LiteralFunction {
		(url: string): Nodes.Literal,
		raw: boolean
	}

	declare export interface ExceptionOptions {
		filename: string,
		context: number,
		lineno: number,
		column: number,
		input: string
	}

		declare export class Visitor  {
		
	}

	declare export class Parser  {
		
	}

	declare export class Evaluator  {
		
	}

	declare export class Compiler  {
		
	}

	declare export class Renderer extends NodeJS$EventEmitter {
		options: RenderOptions;
		str: string;
		events: any;
		constructor(str: string): this;
		constructor(str: string, options: RenderOptions): this;
		render(callback: RenderCallback): void;
		render(): string;
		deps(filename: string): string[];
		set(key: string, val: any): Renderer;
		get(key: string): any;
		include(path: string): Renderer;
		use(fn: (renderer: Renderer) => any): Renderer;
		define(name: string, fn: Function): Renderer;
		define(name: string, node: Nodes.Node): Renderer;
		define(name: string, val: any): Renderer;
		define(name: string, fn: Function, raw: boolean): Renderer;
		define(name: string, node: Nodes.Node, raw: boolean): Renderer;
		define(name: string, val: any, raw: boolean): Renderer;
		import(file: string): Renderer;
		addListener(event: string, listener: Function): this;
		on(event: string, listener: Function): this;
		once(event: string, listener: Function): this;
		removeListener(event: string, listener: Function): this;
		removeAllListeners(event?: string): this;
		setMaxListeners(n: number): this;
		getMaxListeners(): number;
		listeners(event: string): Function[];
		emit(event: string, ...args: any[]): boolean;
		listenerCount(type: string): number
	}

	
}

declare module 'Nodes' {
				declare export class Node  {
		lineno: number;
		column: number;
		filename: string;
		first: Node;
		hash: string;
		nodeName: string;
		constructor(): this;
		clone(): Node;
		toJSON(): {
		lineno: number,
		column: number,
		filename: string
	};
		eval(): Node;
		toBoolean(): Boolean;
		toExpression(): Expression;
		shouldCoerce(op: string): boolean;
		operate(op: string, right: Node): Node;
		coerce(other: Node): Node
	}

	declare export class Root extends Node {
		nodes: Node[];
		push(node: Node): void;
		unshift(node: Node): void;
		toJSON(): {
		nodes: Node[],
		lineno: number,
		column: number,
		filename: string
	}
	}

	declare export class String extends Node {
		val: string;
		string: string;
		prefixed: boolean;
		quote: string;
		constructor(val: string): this;
		constructor(val: string, quote: string): this;
		toJSON(
		
	): {
		val: string,
		quote: string,
		lineno: number,
		column: number,
		filename: string
	}
	}

	declare export class Number extends Node {
		
	}

	declare export class Boolean extends Node {
		val: boolean;
		isTrue: boolean;
		isFalse: boolean;
		constructor(): this;
		constructor(val: boolean): this;
		negate(): Boolean;
		inspect(): Boolean;
		toJSON(
		
	): {
		___type: string,
		val: boolean,
		lineno: number,
		column: number,
		filename: string
	}
	}

	declare export class Object extends Node {
		vals: Dictionary<Node>;
		length: number;
		constructor(): this;
		set(key: string, value: Node): Object;
		get(key: string): Node;
		has(key: string): boolean;
		toBlock(): string;
		toJSON(
		
	): {
		___type: string,
		vals: Dictionary<Node>,
		lineno: number,
		column: number,
		filename: string
	}
	}

	declare export class Null extends Node {
		isNull: boolean;
		constructor(): this;
		toJSON(
		
	): {
		___type: string,
		lineno: number,
		column: number,
		filename: string
	}
	}

	declare export class Ident extends Node {
		name: string;
		string: string;
		val: Node;
		mixin: boolean;
		isEmpty: boolean;
		constructor(name: string, val: Node): this;
		constructor(name: string, val: Node, mixin: boolean): this;
		toJSON(
		
	): {
		___type: string,
		name: string,
		val: Node,
		mixin: boolean,
		lineno: number,
		column: number,
		filename: string
	}
	}

	declare export class Literal extends Node {
		val: string;
		string: string;
		prefixed: boolean;
		constructor(str: string): this;
		toJSON(
		
	): {
		___type: string,
		string: string,
		val: string,
		prefixed: boolean,
		lineno: number,
		column: number,
		filename: string
	}
	}

	declare export class Unit extends Node {
		val: number;
		type: string;
		constructor(val: number, type: string): this;
		toJSON(
		
	): {
		___type: string,
		val: number,
		type: string,
		lineno: number,
		column: number,
		filename: string
	}
	}

	declare export class RGBA extends Node {
		r: number;
		g: number;
		b: number;
		a: number;
		rgba: RGBA;
		hsla: HSLA;
		constructor(r: number, g: number, b: number, a: number): this;
		withoutClamping(r: number, g: number, b: number, a: number): RGBA;
		fromHSLA(hsla: HSLA): RGBA;
		add(r: number, g: number, b: number, a: number): RGBA;
		substract(r: number, g: number, b: number, a: number): RGBA;
		multiply(n: number): RGBA;
		divide(n: number): RGBA;
		toJSON(
		
	): {
		___type: string,
		r: number,
		g: number,
		b: number,
		a: number,
		lineno: number,
		column: number,
		filename: string
	}
	}

	declare export class HSLA extends Node {
		h: number;
		s: number;
		l: number;
		a: number;
		hsla: HSLA;
		rgba: RGBA;
		constructor(h: number, s: number, l: number, a: number): this;
		fromRGBA(rgba: RGBA): HSLA;
		add(h: number, s: number, l: number): HSLA;
		substract(h: number, s: number, l: number): HSLA;
		adjustLightness(percent: number): HSLA;
		adjustHue(deg: number): HSLA;
		toJSON(
		
	): {
		___type: string,
		h: number,
		s: number,
		l: number,
		a: number,
		lineno: number,
		column: number,
		filename: string
	}
	}

	declare export class Block extends Node {
		nodes: Node[];
		parent: Block;
		node: Node;
		scope: boolean;
		hasProperties: boolean;
		hasMedia: boolean;
		isEmpty: boolean;
		constructor(parent: Block): this;
		constructor(parent: Block, node: Node): this;
		push(node: Node): void;
		toJSON(
		
	): {
		___type: string,
		nodes: Node[],
		scope: boolean,
		lineno: number,
		column: number,
		filename: string
	}
	}

	declare export class Group extends Node {
		nodes: Node[];
		block: Block;
		hasOnlyPlaceholders: boolean;
		constructor(): this;
		push(node: Node): void;
		toJSON(
		
	): {
		___type: string,
		nodes: Node[],
		block: Block,
		lineno: number,
		column: number,
		filename: string
	}
	}

	declare export class Expression extends Node {
		nodes: Node[];
		isList: boolean;
		isEmpty: boolean;
		first: Node;
		constructor(isList: boolean): this;
		push(node: Node): void;
		toJSON(
		
	): {
		___type: string,
		nodes: Node[],
		isList: boolean,
		lineno: number,
		column: number,
		filename: string
	}
	}

	declare export class Property extends Node {
		segments: Node[];
		expr: Expression;
		constructor(segs: Node[], expr: Expression): this;
		toJSON(
		
	): {
		___type: string,
		segments: Node[],
		name: string,
		expr?: Expression,
		literal?: Literal,
		lineno: number,
		column: number,
		filename: string
	}
	}

	declare export class Each extends Node {
		val: string;
		key: string;
		expr: Expression;
		block: Block;
		toJSON(
		
	): {
		___type: string,
		val: string,
		key: string,
		expr: Expression,
		block: Block,
		lineno: number,
		column: number,
		filename: string
	}
	}

	declare export class If extends Node {
		cond: Expression;
		elses: Expression[];
		block: Block;
		negate: boolean;
		constructor(cond: Expression, negate: boolean): this;
		constructor(cond: Expression, block: Block): this;
		toJSON(
		
	): {
		___type: string,
		cond: Expression,
		elses: Expression[],
		block: Block,
		negate: boolean,
		lineno: number,
		column: number,
		filename: string
	}
	}

	declare export class Call extends Node {
		name: string;
		args: Expression;
		constructor(name: string, args: Expression): this;
		toJSON(
		
	): {
		___type: string,
		name: string,
		args: Expression,
		lineno: number,
		column: number,
		filename: string
	}
	}

	declare export class UnaryOp extends Node {
		op: string;
		expr: Expression;
		constructor(op: string, expr: Expression): this;
		toJSON(
		
	): {
		___type: string,
		op: string,
		expr: Expression,
		lineno: number,
		column: number,
		filename: string
	}
	}

	declare export class BinOp extends Node {
		op: string;
		left: Expression;
		right: Expression;
		constructor(op: string, left: Expression, right: Expression): this;
		toJSON(
		
	): {
		___type: string,
		op: string,
		left: Expression,
		right: Expression,
		lineno: number,
		column: number,
		filename: string
	}
	}

	declare export class Ternary extends Node {
		op: string;
		trueExpr: Expression;
		falseExpr: Expression;
		constructor(op: string, trueExpr: Expression, falseExpr: Expression): this;
		toJSON(
		
	): {
		___type: string,
		op: string,
		trueExpr: Expression,
		falseExpr: Expression,
		lineno: number,
		column: number,
		filename: string
	}
	}

	declare export class Return extends Node {
		expr: Expression;
		constructor(expr: Expression): this;
		toJSON(
		
	): {
		___type: string,
		expr: Expression,
		lineno: number,
		column: number,
		filename: string
	}
	}

	declare export class Media extends Node {
		val: string;
		constructor(val: string): this;
		toJSON(
		
	): {
		___type: string,
		val: string,
		lineno: number,
		column: number,
		filename: string
	}
	}

	declare export class QueryList extends Node {
		nodes: Node[];
		constructor(): this;
		push(node: Node): void;
		merge(other: MediaQueryList): MediaQueryList;
		toJSON(
		
	): {
		___type: string,
		nodes: Node[],
		lineno: number,
		column: number,
		filename: string
	}
	}

	declare export class Query extends Node {
		nodes: QueryExpr[];
		type: string;
		predicate: string;
		resolvedType: string;
		resolvedPredicate: string;
		constructor(): this;
		push(expr: QueryExpr): void;
		merge(other: Query): Query;
		toJSON(
		
	): {
		___type: string,
		nodes: QueryExpr[],
		predicate: string,
		type: string,
		lineno: number,
		column: number,
		filename: string
	}
	}

	declare export class QueryExpr extends Node {
		segments: Node[];
		expr: Expression;
		constructor(segs: Node[]): this;
		toJSON(
		
	): {
		___type: string,
		segments: Node[],
		lineno: number,
		column: number,
		filename: string
	}
	}

	declare export class Params extends Node {
		nodes: Node[];
		length: number;
		push(node: Node): void;
		toJSON(
		
	): {
		___type: string,
		nodes: Node[],
		lineno: number,
		column: number,
		filename: string
	}
	}

	declare export class Comment extends Node {
		str: string;
		suppress: boolean;
		inline: boolean;
		constructor(str: string, suppress: boolean, inline: boolean): this;
		toJSON(
		
	): {
		___type: string,
		str: string,
		suppress: boolean,
		inline: boolean,
		lineno: number,
		column: number,
		filename: string
	}
	}

	declare export class Keyframes extends Node {
		segments: Node[];
		prefix: string;
		constructor(segs: Node[]): this;
		constructor(segs: Node[], prefix: string): this;
		toJSON(
		
	): {
		___type: string,
		segments: Node[],
		prefix: string,
		block: Block,
		lineno: number,
		column: number,
		filename: string
	}
	}

	declare export class Member extends Node {
		left: Node;
		right: Node;
		constructor(left: Node, right: Node): this;
		toJSON(
		
	): {
		___type: string,
		left: Node,
		right: Node,
		val?: string,
		lineno: number,
		column: number,
		filename: string
	}
	}

	declare export class Charset extends Node {
		val: string;
		constructor(val: string): this;
		toJSON(
		
	): {
		___type: string,
		val: string,
		lineno: number,
		column: number,
		filename: string
	}
	}

	declare export class Namespace extends Node {
		val: string;
		prefix: string;
		constructor(val: string, prefix: string): this;
		toJSON(
		
	): {
		___type: string,
		val: string,
		prefix: string,
		lineno: number,
		column: number,
		filename: string
	}
	}

	declare export class Import extends Node {
		path: Expression;
		once: boolean;
		constructor(path: Expression): this;
		constructor(path: Expression, once: boolean): this;
		toJSON(
		
	): {
		___type: string,
		path: Expression,
		lineno: number,
		column: number,
		filename: string
	}
	}

	declare export class Extend extends Node {
		selectors: Selector[];
		constructor(selectors: Selector[]): this;
		toJSON(
		
	): {
		___type: string,
		selectors: Selector[],
		lineno: number,
		column: number,
		filename: string
	}
	}

	declare export class Function extends Node {
		name: string;
		params: Params;
		body: Block;
		constructor(name: string, params: Params, body: Block): this;
		toJSON(
		
	): {
		___type: string,
		name: string,
		params: Params,
		body: Block,
		lineno: number,
		column: number,
		filename: string
	}
	}

	declare export class Selector extends Node {
		inherits: boolean;
		segments: Node[];
		constructor(segs: Node[]): this;
		toJSON(
		
	): {
		___type: string,
		segments: Node[],
		inherits: boolean,
		val: string,
		lineno: number,
		column: number,
		filename: string
	}
	}

	declare export class Arguments extends Expression {
		map: Dictionary<Node>;
		constructor(): this;
		toJSON(
		
	): {
		___type: string,
		map: Dictionary<Node>,
		isList: boolean,
		preserve: boolean,
		nodes: Node[],
		lineno: number,
		column: number,
		filename: string
	}
	}

	declare export class Atblock extends Node {
		block: Block;
		nodes: Node[];
		constructor(): this;
		toJSON(
		
	): {
		___type: string,
		block: Block,
		lineno: number,
		column: number,
		filename: string
	}
	}

	declare export class Atrule extends Node {
		type: string;
		hasOnlyProperties: boolean;
		constructor(type: string): this;
		toJSON(
		
	): {
		___type: string,
		type: string,
		segments: Node[],
		block?: Block,
		lineno: number,
		column: number,
		filename: string
	}
	}

	
}