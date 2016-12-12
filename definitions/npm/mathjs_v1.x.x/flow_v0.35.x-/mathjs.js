import type { IMathJsStatic } from 'npm$namespace$mathjs'

declare module 'mathjs' {
					declare module.exports: IMathJsStatic


}

declare module 'npm$namespace$mathjs' {
	declare type MathArray = number[] | number[][];

	declare type MathType = number | BigNumber | Fraction | Complex | Unit | MathArray | Matrix;

	declare type MathExpression = string | string[] | MathArray | Matrix;

	declare export interface IMathJsStatic {
		e: number,
		pi: number,
		i: number,
		Infinity: number,
		LN2: number,
		LN10: number,
		LOG2E: number,
		LOG10E: number,
		NaN: number,
		null: number,
		phi: number,
		SQRT1_2: number,
		SQRT2: number,
		tau: number,
		uninitialized: any,
		version: string,
		config(options: any): void,
		expression: MathNode,
		lsolve(L: Matrix | MathArray, b: Matrix | MathArray): Matrix | MathArray,
		lup(A?: Matrix | MathArray): MathArray,
		lusolve(A: Matrix | MathArray | Number, b: Matrix | MathArray): Matrix | MathArray,
		slu(A: Matrix, order: Number, threshold: Number): any,
		usolve(U: Matrix | MathArray, b: Matrix | MathArray): Matrix | MathArray,
		abs(x: number): number,
		abs(x: BigNumber): BigNumber,
		abs(x: Fraction): Fraction,
		abs(x: Complex): Complex,
		abs(x: MathArray): MathArray,
		abs(x: Matrix): Matrix,
		abs(x: Unit): Unit,
		add(x: MathType, y: MathType): MathType,
		cbrt(x: number, allRoots?: boolean): number,
		cbrt(x: BigNumber, allRoots?: boolean): BigNumber,
		cbrt(x: Fraction, allRoots?: boolean): Fraction,
		cbrt(x: Complex, allRoots?: boolean): Complex,
		cbrt(x: MathArray, allRoots?: boolean): MathArray,
		cbrt(x: Matrix, allRoots?: boolean): Matrix,
		cbrt(x: Unit, allRoots?: boolean): Unit,
		ceil(x: number): number,
		ceil(x: BigNumber): BigNumber,
		ceil(x: Fraction): Fraction,
		ceil(x: Complex): Complex,
		ceil(x: MathArray): MathArray,
		ceil(x: Matrix): Matrix,
		ceil(x: Unit): Unit,
		cube(x: number): number,
		cube(x: BigNumber): BigNumber,
		cube(x: Fraction): Fraction,
		cube(x: Complex): Complex,
		cube(x: MathArray): MathArray,
		cube(x: Matrix): Matrix,
		cube(x: Unit): Unit,
		divide(x: Unit, y: Unit): Unit,
		divide(x: number, y: number): number,
		divide(x: MathType, y: MathType): MathType,
		dotDivide(x: MathType, y: MathType): MathType,
		dotMultiply(x: MathType, y: MathType): MathType,
		dotPow(x: MathType, y: MathType): MathType,
		exp(x: number): number,
		exp(x: BigNumber): BigNumber,
		exp(x: Complex): Complex,
		exp(x: MathArray): MathArray,
		exp(x: Matrix): Matrix,
		fix(x: number): number,
		fix(x: BigNumber): BigNumber,
		fix(x: Fraction): Fraction,
		fix(x: Complex): Complex,
		fix(x: MathArray): MathArray,
		fix(x: Matrix): Matrix,
		floor(x: number): number,
		floor(x: BigNumber): BigNumber,
		floor(x: Fraction): Fraction,
		floor(x: Complex): Complex,
		floor(x: MathArray): MathArray,
		floor(x: Matrix): Matrix,
		gcd(...args: number[]): number,
		gcd(...args: BigNumber[]): BigNumber,
		gcd(...args: Fraction[]): Fraction,
		gcd(...args: MathArray[]): MathArray,
		gcd(...args: Matrix[]): Matrix,
		hypot(...args: number[]): number,
		hypot(...args: BigNumber[]): BigNumber,
		lcm(a: number, b: number): number,
		lcm(a: BigNumber, b: BigNumber): BigNumber,
		lcm(a: MathArray, b: MathArray): MathArray,
		lcm(a: Matrix, b: Matrix): Matrix,
		log(
		x: number | BigNumber | Complex | MathArray | Matrix, base?: number | BigNumber | Complex
	): number | BigNumber | Complex | MathArray | Matrix,
		log10(x: number): number,
		log10(x: BigNumber): BigNumber,
		log10(x: Complex): Complex,
		log10(x: MathArray): MathArray,
		log10(x: Matrix): Matrix,
		mod(
		x: number | BigNumber | Fraction | MathArray | Matrix, y: number | BigNumber | Fraction | MathArray | Matrix
	): number | BigNumber | Fraction | MathArray | Matrix,
		multiply(x: MathArray | Matrix, y: MathArray | Matrix): Matrix,
		multiply(x: MathArray | Matrix, y: MathType): Matrix,
		multiply(x: Unit, y: Unit): Unit,
		multiply(x: number, y: number): number,
		multiply(x: MathType, y: MathType): MathType,
		norm(
		x: number | BigNumber | Complex | MathArray | Matrix, p?: number | BigNumber | string
	): number | BigNumber,
		nthRoot(
		a: number | BigNumber | MathArray | Matrix | Complex, root?: number | BigNumber
	): number | Complex | MathArray | Matrix,
		pow(
		x: number | BigNumber | Complex | MathArray | Matrix, y: number | BigNumber | Complex
	): number | BigNumber | Complex | MathArray | Matrix,
		round(
		x: number | BigNumber | Fraction | Complex | MathArray | Matrix, n?: number | BigNumber | MathArray
	): number | BigNumber | Fraction | Complex | MathArray | Matrix,
		sign(x: number): number,
		sign(x: BigNumber): BigNumber,
		sign(x: Fraction): Fraction,
		sign(x: Complex): Complex,
		sign(x: MathArray): MathArray,
		sign(x: Matrix): Matrix,
		sign(x: Unit): Unit,
		sqrt(x: number): number,
		sqrt(x: BigNumber): BigNumber,
		sqrt(x: Complex): Complex,
		sqrt(x: MathArray): MathArray,
		sqrt(x: Matrix): Matrix,
		sqrt(x: Unit): Unit,
		square(x: number): number,
		square(x: BigNumber): BigNumber,
		square(x: Fraction): Fraction,
		square(x: Complex): Complex,
		square(x: MathArray): MathArray,
		square(x: Matrix): Matrix,
		square(x: Unit): Unit,
		subtract(x: MathType, y: MathType): MathType,
		unaryMinus(x: number): number,
		unaryMinus(x: BigNumber): BigNumber,
		unaryMinus(x: Fraction): Fraction,
		unaryMinus(x: Complex): Complex,
		unaryMinus(x: MathArray): MathArray,
		unaryMinus(x: Matrix): Matrix,
		unaryMinus(x: Unit): Unit,
		unaryPlus(x: number): number,
		unaryPlus(x: BigNumber): BigNumber,
		unaryPlus(x: Fraction): Fraction,
		unaryPlus(x: string): string,
		unaryPlus(x: Complex): Complex,
		unaryPlus(x: MathArray): MathArray,
		unaryPlus(x: Matrix): Matrix,
		unaryPlus(x: Unit): Unit,
		xgcd(a: number | BigNumber, b: number | BigNumber): MathArray,
		bitAnd(
		x: number | BigNumber | MathArray | Matrix, y: number | BigNumber | MathArray | Matrix
	): number | BigNumber | MathArray | Matrix,
		bitNot(x: number): number,
		bitNot(x: BigNumber): BigNumber,
		bitNot(x: MathArray): MathArray,
		bitNot(x: Matrix): Matrix,
		bitOr(x: number): number,
		bitOr(x: BigNumber): BigNumber,
		bitOr(x: MathArray): MathArray,
		bitOr(x: Matrix): Matrix,
		bitXor(
		x: number | BigNumber | MathArray | Matrix, y: number | BigNumber | MathArray | Matrix
	): number | BigNumber | MathArray | Matrix,
		leftShift(
		x: number | BigNumber | MathArray | Matrix, y: number | BigNumber
	): number | BigNumber | MathArray | Matrix,
		rightArithShift(
		x: number | BigNumber | MathArray | Matrix, y: number | BigNumber
	): number | BigNumber | MathArray | Matrix,
		rightLogShift(x: number | MathArray | Matrix, y: number): number | MathArray | Matrix,
		bellNumbers(n: Number): Number,
		bellNumbers(n: BigNumber): BigNumber,
		catalan(n: Number): Number,
		catalan(n: BigNumber): BigNumber,
		composition(n: Number | BigNumber, k: Number | BigNumber): Number | BigNumber,
		stirlingS2(n: Number | BigNumber, k: Number | BigNumber): Number | BigNumber,
		arg(x: number): number,
		arg(x: Complex): number,
		arg(x: MathArray): MathArray,
		arg(x: Matrix): Matrix,
		conj(
		x: number | BigNumber | Complex | MathArray | Matrix
	): number | BigNumber | Complex | MathArray | Matrix,
		im(
		x: number | BigNumber | Complex | MathArray | Matrix
	): number | BigNumber | MathArray | Matrix,
		re(
		x: number | BigNumber | Complex | MathArray | Matrix
	): number | BigNumber | MathArray | Matrix,
		bignumber(x?: number | string | MathArray | Matrix | boolean): BigNumber,
		boolean(
		x: string | number | boolean | MathArray | Matrix
	): boolean | MathArray | Matrix,
		chain(value?: any): IMathJsChain,
		complex(): Complex,
		complex(re: number, im: number): Complex,
		complex(complex: Complex): Complex,
		complex(arg: string): Complex,
		complex(array: MathArray): Complex,
		complex(obj: IPolarCoordinates): Complex,
		fraction(
		numerator: number | string | MathArray | Matrix, denominator?: number | string | MathArray | Matrix
	): Fraction | MathArray | Matrix,
		index(...ranges: any[]): Index,
		matrix(format?: string): Matrix,
		matrix(data: MathArray | Matrix, format?: string, dataType?: string): Matrix,
		number(
		value?: string | number | boolean | MathArray | Matrix | Unit
	): number | MathArray | Matrix,
		number(unit: Unit, valuelessUnit: Unit | string): number | MathArray | Matrix,
		sparse(data?: MathArray | Matrix, dataType?: string): Matrix,
		string(value: any): string | MathArray | Matrix,
		unit(unit: string): Unit,
		unit(value: number, unit: string): Unit,
		compile(expr: MathExpression): EvalFunction,
		compile(exprs: MathExpression[]): EvalFunction[],
		eval(expr: MathExpression, scope?: any): any,
		eval(exprs: MathExpression[], scope?: any): any,
		help(search: any): Help,
		parse(expr: MathExpression, options?: any): MathNode,
		parse(exprs: MathExpression[], options?: any): MathNode[],
		parser(): Parser,
		distance(x: MathArray | Matrix | any, y: MathArray | Matrix | any): Number | BigNumber,
		intersect(
		w: MathArray | Matrix, x: MathArray | Matrix, y: MathArray | Matrix, z: MathArray | Matrix
	): MathArray,
		and(
		x: number | BigNumber | Complex | Unit | MathArray | Matrix, y: number | BigNumber | Complex | Unit | MathArray | Matrix
	): boolean | MathArray | Matrix,
		not(
		x: number | BigNumber | Complex | Unit | MathArray | Matrix
	): boolean | MathArray | Matrix,
		or(
		x: number | BigNumber | Complex | Unit | MathArray | Matrix, y: number | BigNumber | Complex | Unit | MathArray | Matrix
	): boolean | MathArray | Matrix,
		xor(
		x: number | BigNumber | Complex | Unit | MathArray | Matrix, y: number | BigNumber | Complex | Unit | MathArray | Matrix
	): boolean | MathArray | Matrix,
		concat(...args: (MathArray | Matrix | number)[]): MathArray | Matrix,
		cross(x: MathArray | Matrix, y: MathArray | Matrix): Matrix,
		det(x: MathArray | Matrix): number,
		diag(X: MathArray | Matrix, format?: string): Matrix,
		diag(X: MathArray | Matrix, k: number | BigNumber, format?: string): Matrix,
		dot(x: MathArray | Matrix, y: MathArray | Matrix): number,
		eye(n: number, format?: string): Matrix,
		eye(m: number, n: number, format?: string): Matrix,
		eye(size: number[], format?: string): Matrix,
		flatten(x: MathArray | Matrix): MathArray | Matrix,
		inv(
		x: number | Complex | MathArray | Matrix
	): number | Complex | MathArray | Matrix,
		ones(n: number, format?: string): MathArray | Matrix,
		ones(m: number, n: number, format?: string): MathArray | Matrix,
		ones(size: number[], format?: string): MathArray | Matrix,
		range(str: string, includeEnd?: boolean): Matrix,
		range(
		start: number | BigNumber, end: number | BigNumber, includeEnd?: boolean
	): Matrix,
		range(
		start: number | BigNumber, end: number | BigNumber, step: number | BigNumber, includeEnd?: boolean
	): Matrix,
		resize(
		x: MathArray | Matrix, size: MathArray | Matrix, defaultValue?: number | string
	): MathArray | Matrix,
		size(
		x: boolean | number | Complex | Unit | string | MathArray | Matrix
	): MathArray | Matrix,
		squeeze(x: MathArray | Matrix): Matrix | MathArray,
		subset(
		value: MathArray | Matrix | string, index: Index, replacement?: any, defaultValue?: any
	): MathArray | Matrix | string,
		trace(x: MathArray | Matrix): number,
		transpose(x: MathArray | Matrix): MathArray | Matrix,
		zeros(n: number, format?: string): MathArray | Matrix,
		zeros(m: number, n: number, format?: string): MathArray | Matrix,
		zeros(size: number[], format?: string): MathArray | Matrix,
		combinations(n: number | BigNumber, k: number | BigNumber): number | BigNumber,
		distribution(name: string): Distribution,
		factorial(
		n: number | BigNumber | MathArray | Matrix
	): number | BigNumber | MathArray | Matrix,
		gamma(n: number | MathArray | Matrix): number | MathArray | Matrix,
		kldivergence(x: MathArray | Matrix, y: MathArray | Matrix): number,
		multinomial(a: number[] | BigNumber[]): number | BigNumber,
		permutations(n: number | BigNumber, k?: number | BigNumber): number | BigNumber,
		pickRandom(array: number[]): number,
		random(): number,
		random(max: number): number,
		random(min: number, max: number): number,
		random(size: MathArray | Matrix, max?: number): MathArray | Matrix,
		random(size: MathArray | Matrix, min: number, max: number): MathArray | Matrix,
		randomInt(max: number): number,
		randomInt(min: number, max: number): number,
		randomInt(size: MathArray | Matrix, max?: number): MathArray | Matrix,
		randomInt(size: MathArray | Matrix, min: number, max: number): MathArray | Matrix,
		compare(x: MathType, y: MathType): number | BigNumber | Fraction | MathArray | Matrix,
		deepEqual(
		x: MathType, y: MathType
	): number | BigNumber | Fraction | Complex | Unit | MathArray | Matrix,
		equal(x: MathType, y: MathType): boolean | MathArray | Matrix,
		larger(x: MathType, y: MathType): boolean | MathArray | Matrix,
		largerEq(x: MathType, y: MathType): boolean | MathArray | Matrix,
		smaller(x: MathType, y: MathType): boolean | MathArray | Matrix,
		smallerEq(x: MathType, y: MathType): boolean | MathArray | Matrix,
		unequal(x: MathType, y: MathType): boolean | MathArray | Matrix,
		max(...args: MathType[]): any,
		max(A: MathArray | Matrix, dim?: number): any,
		mean(...args: MathType[]): any,
		mean(A: MathArray | Matrix, dim?: number): any,
		median(...args: MathType[]): any,
		min(...args: MathType[]): any,
		min(A: MathArray | Matrix, dim?: number): any,
		mode(...args: MathType[]): any,
		prod(...args: MathType[]): any,
		quantileSeq(
		A: MathArray | Matrix, prob: Number | BigNumber | MathArray, sorted?: boolean
	): Number | BigNumber | Unit | MathArray,
		std(array: MathArray | Matrix, normalization?: string): number,
		sum(...args: (Number | BigNumber | Fraction)[]): any,
		sum(array: MathArray | Matrix): any,
		var(...args: (Number | BigNumber | Fraction)[]): any,
		var(array: MathArray | Matrix, normalization?: string): any,
		acos(x: number): number,
		acos(x: BigNumber): BigNumber,
		acos(x: Complex): Complex,
		acos(x: MathArray): MathArray,
		acos(x: Matrix): Matrix,
		acosh(x: number): number,
		acosh(x: BigNumber): BigNumber,
		acosh(x: Complex): Complex,
		acosh(x: MathArray): MathArray,
		acosh(x: Matrix): Matrix,
		acot(x: number): number,
		acot(x: BigNumber): BigNumber,
		acot(x: MathArray): MathArray,
		acot(x: Matrix): Matrix,
		acoth(x: number): number,
		acoth(x: BigNumber): BigNumber,
		acoth(x: MathArray): MathArray,
		acoth(x: Matrix): Matrix,
		acsc(x: number): number,
		acsc(x: BigNumber): BigNumber,
		acsc(x: MathArray): MathArray,
		acsc(x: Matrix): Matrix,
		acsch(x: number): number,
		acsch(x: BigNumber): BigNumber,
		acsch(x: MathArray): MathArray,
		acsch(x: Matrix): Matrix,
		asec(x: number): number,
		asec(x: BigNumber): BigNumber,
		asec(x: MathArray): MathArray,
		asec(x: Matrix): Matrix,
		asech(x: number): number,
		asech(x: BigNumber): BigNumber,
		asech(x: MathArray): MathArray,
		asech(x: Matrix): Matrix,
		asin(x: number): number,
		asin(x: BigNumber): BigNumber,
		asin(x: Complex): Complex,
		asin(x: MathArray): MathArray,
		asin(x: Matrix): Matrix,
		asinh(x: number): number,
		asinh(x: BigNumber): BigNumber,
		asinh(x: MathArray): MathArray,
		asinh(x: Matrix): Matrix,
		atan(x: number): number,
		atan(x: BigNumber): BigNumber,
		atan(x: MathArray): MathArray,
		atan(x: Matrix): Matrix,
		atan2(y: number, x: number): number,
		atan2(y: MathArray | Matrix, x: MathArray | Matrix): MathArray | Matrix,
		atanh(x: number): number,
		atanh(x: BigNumber): BigNumber,
		atanh(x: MathArray): MathArray,
		atanh(x: Matrix): Matrix,
		asin(x: number): number,
		asin(x: BigNumber): BigNumber,
		asin(x: Complex): Complex,
		asin(x: Unit): number,
		asin(x: MathArray): MathArray,
		asin(x: Matrix): Matrix,
		cosh(x: number): number,
		cosh(x: BigNumber): BigNumber,
		cosh(x: Complex): Complex,
		cosh(x: Unit): number,
		cosh(x: MathArray): MathArray,
		cosh(x: Matrix): Matrix,
		cot(x: number): number,
		cot(x: Complex): Complex,
		cot(x: Unit): number,
		cot(x: MathArray): MathArray,
		cot(x: Matrix): Matrix,
		coth(x: number): number,
		coth(x: Complex): Complex,
		coth(x: Unit): number,
		coth(x: MathArray): MathArray,
		coth(x: Matrix): Matrix,
		csc(x: number): number,
		csc(x: Complex): Complex,
		csc(x: Unit): number,
		csc(x: MathArray): MathArray,
		csc(x: Matrix): Matrix,
		csch(x: number): number,
		csch(x: Complex): Complex,
		csch(x: Unit): number,
		csch(x: MathArray): MathArray,
		csch(x: Matrix): Matrix,
		sec(x: number): number,
		sec(x: Complex): Complex,
		sec(x: Unit): number,
		sec(x: MathArray): MathArray,
		sec(x: Matrix): Matrix,
		sech(x: number): number,
		sech(x: Complex): Complex,
		sech(x: Unit): number,
		sech(x: MathArray): MathArray,
		sech(x: Matrix): Matrix,
		sin(x: number): number,
		sin(x: BigNumber): BigNumber,
		sin(x: Complex): Complex,
		sin(x: Unit): number,
		sin(x: MathArray): MathArray,
		sin(x: Matrix): Matrix,
		sinh(x: number): number,
		sinh(x: BigNumber): BigNumber,
		sinh(x: Complex): Complex,
		sinh(x: Unit): number,
		sinh(x: MathArray): MathArray,
		sinh(x: Matrix): Matrix,
		tan(x: number): number,
		tan(x: BigNumber): BigNumber,
		tan(x: Complex): Complex,
		tan(x: Unit): number,
		tan(x: MathArray): MathArray,
		tan(x: Matrix): Matrix,
		tanh(x: number): number,
		tanh(x: BigNumber): BigNumber,
		tanh(x: Complex): Complex,
		tanh(x: Unit): number,
		tanh(x: MathArray): MathArray,
		tanh(x: Matrix): Matrix,
		to(x: Unit | MathArray | Matrix, unit: Unit | string): Unit | MathArray | Matrix,
		clone(x: any): any,
		filter(
		x: MathArray | Matrix, test: RegExp | ((item: any) => boolean)
	): MathArray | Matrix,
		forEach(x: MathArray | Matrix, callback: (item: any) => any): void,
		format(
		value: any, options?: IFormatOptions | number | ((item: any) => string)
	): string,
		isInteger(x: any): boolean,
		isNegative(x: any): boolean,
		isNumeric(x: any): boolean,
		isPositive(x: any): boolean,
		isZero(x: any): boolean,
		map(x: MathArray | Matrix, callback: (item: any) => any): MathArray | Matrix,
		partitionSelect(
		x: MathArray | Matrix, k: number, compare?: string | ((a: any, b: any) => number)
	): any,
		print(template: string, values: any, precision?: number): void,
		sort(
		x: MathArray | Matrix, compare?: string | ((a: any, b: any) => number)
	): MathArray | Matrix,
		typeof(x: any): string
	}

	declare export interface Matrix {
		size(): number[],
		subset(index: Index, replacement?: any, defaultValue?: any): Matrix,
		resize(size: MathArray | Matrix, defaultValue?: number | string): Matrix,
		clone(): Matrix
	}

	declare export interface BigNumber {
		
	}

	declare export interface Fraction {
		
	}

	declare export interface Complex {
		re: number,
		im: number,
		toPolar(): IPolarCoordinates,
		clone(): Complex
	}

	declare export interface IPolarCoordinates {
		r: number,
		phi: number
	}

	declare export interface Unit {
		to(unit: string): Unit,
		toNumber(unit: string): number
	}

	declare export interface Index {
		
	}

	declare export interface EvalFunction {
		eval(scope?: any): any
	}

	declare export interface MathNode {
		isNode: boolean,
		isSymbolNode?: boolean,
		isConstantNode?: boolean,
		isOperatorNode?: boolean,
		op?: string,
		fn?: string,
		args?: MathNode[],
		type: string,
		name?: string,
		value?: any,
		compile(): EvalFunction,
		eval(): any,
		eval(expr: string): any,
		filter(callback: (node: MathNode, path: string, parent: MathNode) => any): MathNode[],
		forEach(
		callback: (node: MathNode, path: string, parent: MathNode) => boolean
	): MathNode[],
		traverse(callback: (node: MathNode, path: string, parent: MathNode) => void): any,
		transform(
		callback: (node: MathNode, path: string, parent: MathNode) => boolean
	): MathNode[]
	}

	declare export interface Parser {
		eval(expr: string): any,
		get(variable: string): any,
		set(variable: string, value: any): void,
		clear(): void
	}

	declare export interface Distribution {
		random(size: any, min?: any, max?: any): any,
		randomInt(min: any, max?: any): any,
		pickRandom(array: any): any
	}

	declare export interface IFormatOptions {
		notation?: string,
		precision?: number,
		exponential?: {
		lower: number,
		upper: number
	},
		fraction?: string,
		fn?: (item: any) => string
	}

	declare export interface Help {
		toString(): string,
		toJSON(): string
	}

	declare export interface IMathJsChain {
		lsolve(b: Matrix | MathArray): IMathJsChain,
		lup(): IMathJsChain,
		lusolve(b: Matrix | MathArray): IMathJsChain,
		slu(order: Number, threshold: Number): IMathJsChain,
		usolve(b: Matrix | MathArray): IMathJsChain,
		abs(): IMathJsChain,
		add(y: MathType): IMathJsChain,
		cbrt(allRoots?: boolean): IMathJsChain,
		ceil(): IMathJsChain,
		cube(): IMathJsChain,
		divide(y: MathType): IMathJsChain,
		dotDivide(y: MathType): IMathJsChain,
		dotMultiply(y: MathType): IMathJsChain,
		dotPow(y: MathType): IMathJsChain,
		exp(): IMathJsChain,
		fix(): IMathJsChain,
		floor(): IMathJsChain,
		gcd(...args: number[]): IMathJsChain,
		gcd(...args: BigNumber[]): IMathJsChain,
		gcd(...args: Fraction[]): IMathJsChain,
		gcd(...args: MathArray[]): IMathJsChain,
		gcd(...args: Matrix[]): IMathJsChain,
		hypot(...args: number[]): IMathJsChain,
		hypot(...args: BigNumber[]): IMathJsChain,
		lcm(b: number): IMathJsChain,
		lcm(b: BigNumber): IMathJsChain,
		lcm(b: MathArray): IMathJsChain,
		lcm(b: Matrix): IMathJsChain,
		log(base?: number | BigNumber | Complex): IMathJsChain,
		log10(): IMathJsChain,
		mod(y: number | BigNumber | Fraction | MathArray | Matrix): IMathJsChain,
		multiply(y: MathType): IMathJsChain,
		norm(p?: number | BigNumber | string): IMathJsChain,
		nthRoot(root?: number | BigNumber): IMathJsChain,
		pow(y: number | BigNumber | Complex): IMathJsChain,
		round(n?: number | BigNumber | MathArray): IMathJsChain,
		sign(): IMathJsChain,
		sqrt(): IMathJsChain,
		square(): IMathJsChain,
		subtract(y: MathType): IMathJsChain,
		unaryMinus(): IMathJsChain,
		unaryPlus(): IMathJsChain,
		xgcd(b: number | BigNumber): IMathJsChain,
		bitAnd(y: number | BigNumber | MathArray | Matrix): IMathJsChain,
		bitNot(): IMathJsChain,
		bitOr(): IMathJsChain,
		bitXor(y: number | BigNumber | MathArray | Matrix): IMathJsChain,
		leftShift(y: number | BigNumber): IMathJsChain,
		rightArithShift(y: number | BigNumber): IMathJsChain,
		rightLogShift(y: number): IMathJsChain,
		bellNumbers(): IMathJsChain,
		catalan(): IMathJsChain,
		composition(k: Number | BigNumber): IMathJsChain,
		stirlingS2(k: Number | BigNumber): IMathJsChain,
		arg(): IMathJsChain,
		conj(): IMathJsChain,
		im(): IMathJsChain,
		re(): IMathJsChain,
		distance(y: MathArray | Matrix | any): IMathJsChain,
		intersect(
		x: MathArray | Matrix, y: MathArray | Matrix, z: MathArray | Matrix
	): IMathJsChain,
		and(y: number | BigNumber | Complex | Unit | MathArray | Matrix): IMathJsChain,
		not(): IMathJsChain,
		or(y: number | BigNumber | Complex | Unit | MathArray | Matrix): IMathJsChain,
		xor(y: number | BigNumber | Complex | Unit | MathArray | Matrix): IMathJsChain,
		cross(y: MathArray | Matrix): IMathJsChain,
		det(): IMathJsChain,
		resize(size: MathArray | Matrix, defaultValue?: number | string): IMathJsChain,
		size(): IMathJsChain,
		squeeze(): IMathJsChain,
		subset(index: Index, replacement?: any, defaultValue?: any): IMathJsChain,
		trace(): IMathJsChain,
		transpose(): IMathJsChain,
		pickRandom(): IMathJsChain,
		random(): IMathJsChain,
		random(max?: number): IMathJsChain,
		random(min: number, max: number): IMathJsChain,
		randomInt(max?: number): IMathJsChain,
		randomInt(min: number, max: number): IMathJsChain,
		compare(y: MathType): IMathJsChain,
		deepEqual(y: MathType): IMathJsChain,
		equal(y: MathType): IMathJsChain,
		larger(y: MathType): IMathJsChain,
		largerEq(y: MathType): IMathJsChain,
		smaller(IMathJsChainy: MathType): IMathJsChain,
		smallerEq(IMathJsChainy: MathType): IMathJsChain,
		unequal(IMathJsChainy: MathType): IMathJsChain,
		max(dim?: number): IMathJsChain,
		mean(dim?: number): IMathJsChain,
		median(): IMathJsChain,
		min(dim?: number): IMathJsChain,
		mode(): IMathJsChain,
		prod(): IMathJsChain,
		quantileSeq(prob: Number | BigNumber | MathArray, sorted?: boolean): IMathJsChain,
		std(normalization?: string): IMathJsChain,
		sum(): IMathJsChain,
		var(normalization?: string): IMathJsChain,
		acos(): IMathJsChain,
		acosh(): IMathJsChain,
		acot(): IMathJsChain,
		acoth(): IMathJsChain,
		acsc(): IMathJsChain,
		acsch(): IMathJsChain,
		asec(): IMathJsChain,
		asech(): IMathJsChain,
		asin(): IMathJsChain,
		asinh(): IMathJsChain,
		atan(): IMathJsChain,
		atan2(x: number): IMathJsChain,
		atan2(x: MathArray | Matrix): IMathJsChain,
		atanh(): IMathJsChain,
		asin(): IMathJsChain,
		cosh(): IMathJsChain,
		cot(): IMathJsChain,
		coth(): IMathJsChain,
		csc(): IMathJsChain,
		csch(): IMathJsChain,
		sec(): IMathJsChain,
		sech(): IMathJsChain,
		sin(): IMathJsChain,
		sinh(): IMathJsChain,
		tan(): IMathJsChain,
		tanh(): IMathJsChain,
		to(unit: Unit | string): IMathJsChain,
		clone(): IMathJsChain,
		filter(test: RegExp | ((item: any) => boolean)): IMathJsChain,
		format(options?: IFormatOptions | number | ((item: any) => string)): IMathJsChain,
		map(callback: (item: any) => any): IMathJsChain,
		partitionSelect(k: number, compare?: string | ((a: any, b: any) => number)): IMathJsChain,
		sort(compare?: string | ((a: any, b: any) => number)): IMathJsChain,
		done(): any,
		valueOf(): any,
		toString(): string
	}

			
}