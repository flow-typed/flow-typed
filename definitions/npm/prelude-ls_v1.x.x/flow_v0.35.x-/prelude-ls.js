

declare module 'prelude-ls' {
					declare module.exports: undefined


}

declare module 'PreludeLS' {
			declare export function id<A>(x: A): A

	declare export function isType<A>(type: string): (x: A) => boolean

	declare export function isType<A>(type: string, x: A): boolean

	declare export function replicate<A>(n: number): (x: A) => A[]

	declare export function replicate<A>(n: number, x: A): A[]

	declare export function each<A>(f: (x: A) => void): (xs: A[]) => A[]

	declare export function each<A>(f: (x: A) => void, xs: A[]): A[]

	declare export function map<A, B>(f: (x: A) => B): (xs: A[]) => B[]

	declare export function map<A, B>(f: (x: A) => B, xs: A[]): B[]

	declare export function compact<A>(xs: A[]): A[]

	declare export function filter<A>(f: (x: A) => boolean): (xs: A[]) => A[]

	declare export function filter<A>(f: (x: A) => boolean, xs: A[]): A[]

	declare export function reject<A>(f: (x: A) => boolean): (xs: A[]) => A[]

	declare export function reject<A>(f: (x: A) => boolean, xs: A[]): A[]

	declare export function partition<A>(f: (x: A) => Boolean): (xs: A[]) => [A[], A[]]

	declare export function partition<A>(f: (x: A) => Boolean, xs: A[]): [A[], A[]]

	declare export function find<A>(f: (x: A) => Boolean): (xs: A[]) => A

	declare export function find<A>(f: (x: A) => Boolean, xs: A[]): A

	declare export function head<A>(xs: A[]): A

	declare export function tail<A>(xs: A[]): A[]

	declare export function last<A>(xs: A[]): A

	declare export function initial<A>(xs: A[]): A[]

	declare export function empty<A>(xs: A[]): boolean

	declare export function reverse<A>(xs: A[]): A[]

	declare export function unique<A>(xs: A[]): A[]

	declare export function uniqueBy<A, B>(f: (x: A) => B): (xs: A[]) => A[]

	declare export function uniqueBy<A, B>(f: (x: A) => B, xs: A[]): A[]

	declare export function fold<A, B>(f: (x: A) => (y: B) => A): (memo: A) => (xs: B[]) => A

	declare export function fold<A, B>(f: (x: A) => (y: B) => A, memo: A): (xs: B[]) => A

	declare export function fold<A, B>(f: (x: A) => (y: B) => A, memo: A, xs: B[]): A

	declare export function foldl<A, B>(f: (x: A) => (y: B) => A): (memo: A) => (xs: B[]) => A

	declare export function foldl<A, B>(f: (x: A) => (y: B) => A, memo: A): (xs: B[]) => A

	declare export function foldl<A, B>(f: (x: A) => (y: B) => A, memo: A, xs: B[]): A

	declare export function fold1<A>(f: (x: A) => (y: A) => A): (xs: A[]) => A

	declare export function fold1<A>(f: (x: A) => (y: A) => A, xs: A[]): A

	declare export function foldl1<A>(f: (x: A) => (y: A) => A): (xs: A[]) => A

	declare export function foldl1<A>(f: (x: A) => (y: A) => A, xs: A[]): A

	declare export function foldr<A, B>(f: (x: A) => (y: B) => B): (memo: B) => (xs: A[]) => B

	declare export function foldr<A, B>(f: (x: A) => (y: B) => B, memo: B): (xs: A[]) => B

	declare export function foldr<A, B>(f: (x: A) => (y: B) => B, memo: B, xs: A[]): B

	declare export function foldr1<A>(f: (x: A) => (y: A) => A): (xs: A[]) => A

	declare export function foldr1<A>(f: (x: A) => (y: A) => A, xs: A[]): A

	declare export function unfoldr<A, B>(f: (x: B) => ([A, B] | void)): (x: B) => A[]

	declare export function unfoldr<A, B>(f: (x: B) => ([A, B] | void), x: B): A[]

	declare export function concat<A>(xss: A[][]): A[]

	declare export function concatMap<A, B>(f: (x: A) => B[]): (xs: A[]) => B[]

	declare export function concatMap<A, B>(f: (x: A) => B[], xs: A[]): B[]

	declare export function flatten(xs: any[]): any[]

	declare export function difference<A>(...xss: A[][]): A[]

	declare export function intersection<A>(...xss: A[][]): A[]

	declare export function union<A>(...xss: A[][]): A[]

	declare export function countBy<A, B>(f: (x: A) => B): (xs: A[]) => any

	declare export function countBy<A, B>(f: (x: A) => B, xs: A[]): any

	declare export function groupBy<A, B>(f: (x: A) => B): (xs: A[]) => any

	declare export function groupBy<A, B>(f: (x: A) => B, xs: A[]): any

	declare export function andList<A>(xs: A[]): boolean

	declare export function orList<A>(xs: A[]): boolean

	declare export function any<A>(f: (x: A) => boolean): (xs: A[]) => boolean

	declare export function any<A>(f: (x: A) => boolean, xs: A[]): boolean

	declare export function all<A>(f: (x: A) => boolean): (xs: A[]) => boolean

	declare export function all<A>(f: (x: A) => boolean, xs: A[]): boolean

	declare export function sort<A>(xs: A[]): A[]

	declare export function sortWith<A>(f: (x: A) => (y: A) => number): (xs: A[]) => A[]

	declare export function sortWith<A>(f: (x: A) => (y: A) => number, xs: A[]): A[]

	declare export function sortBy<A, B>(f: (x: A) => B): (xs: A[]) => A[]

	declare export function sortBy<A, B>(f: (x: A) => B, xs: A[]): A[]

	declare export function sum(xs: number[]): number

	declare export function product(xs: number[]): number

	declare export function mean(xs: number[]): number

	declare export function maximum<A>(xs: A[]): A

	declare export function minimum<A>(xs: A[]): A

	declare export function maximumBy<A, B>(f: (x: A) => B): (xs: A[]) => A

	declare export function maximumBy<A, B>(f: (x: A) => B, xs: A[]): A

	declare export function minimumBy<A, B>(f: (x: A) => B): (xs: A[]) => A

	declare export function minimumBy<A, B>(f: (x: A) => B, xs: A[]): A

	declare export function scan<A, B>(f: (x: A) => (y: B) => A): (memo: A) => (xs: B[]) => A[]

	declare export function scan<A, B>(f: (x: A) => (y: B) => A, memo: A): (xs: B[]) => A[]

	declare export function scan<A, B>(f: (x: A) => (y: B) => A, memo: A, xs: B[]): A[]

	declare export function scanl<A, B>(f: (x: A) => (y: B) => A): (memo: A) => (xs: B[]) => A[]

	declare export function scanl<A, B>(f: (x: A) => (y: B) => A, memo: A): (xs: B[]) => A[]

	declare export function scanl<A, B>(f: (x: A) => (y: B) => A, memo: A, xs: B[]): A[]

	declare export function scan1<A>(f: (x: A) => (y: A) => A): (xs: A[]) => A[]

	declare export function scan1<A>(f: (x: A) => (y: A) => A, xs: A[]): A[]

	declare export function scanl1<A>(f: (x: A) => (y: A) => A): (xs: A[]) => A[]

	declare export function scanl1<A>(f: (x: A) => (y: A) => A, xs: A[]): A[]

	declare export function scanr<A, B>(f: (x: A) => (y: B) => B): (memo: B) => (xs: A[]) => B[]

	declare export function scanr<A, B>(f: (x: A) => (y: B) => B, memo: B): (xs: A[]) => B[]

	declare export function scanr<A, B>(f: (x: A) => (y: B) => B, memo: B, xs: A[]): B[]

	declare export function scanr1<A>(f: (x: A) => (y: A) => A): (xs: A[]) => A[]

	declare export function scanr1<A>(f: (x: A) => (y: A) => A, xs: A[]): A[]

	declare export function slice<A>(x: number): (y: number) => (xs: A[]) => A[]

	declare export function slice<A>(x: number, y: number): (xs: A[]) => A[]

	declare export function slice<A>(x: number, y: number, xs: A[]): A[]

	declare export function take<A>(n: number): (xs: A[]) => A[]

	declare export function take<A>(n: number, xs: A[]): A[]

	declare export function drop<A>(n: number): (xs: A[]) => A[]

	declare export function drop<A>(n: number, xs: A[]): A[]

	declare export function splitAt<A>(n: number): (xs: A[]) => [A[], A[]]

	declare export function splitAt<A>(n: number, xs: A[]): [A[], A[]]

	declare export function takeWhile<A>(p: (x: A) => boolean): (xs: A[]) => A[]

	declare export function takeWhile<A>(p: (x: A) => boolean, xs: A[]): A[]

	declare export function dropWhile<A>(p: (x: A) => boolean): (xs: A[]) => A[]

	declare export function dropWhile<A>(p: (x: A) => boolean, xs: A[]): A[]

	declare export function span<A>(p: (x: A) => boolean): (xs: A[]) => [A[], A[]]

	declare export function span<A>(p: (x: A) => boolean, xs: A[]): [A[], A[]]

	declare export function breakList<A>(p: (x: A) => boolean): (xs: A[]) => [A[], A[]]

	declare export function breakList<A>(p: (x: A) => boolean, xs: A[]): [A[], A[]]

	declare export function zip<A, B>(xs: A[]): (ys: B[]) => [A, B][]

	declare export function zip<A, B>(xs: A[], ys: B[]): [A, B][]

	declare export function zipWith<A, B, C>(f: (x: A) => (y: B) => C): (xs: A[]) => (ys: B[]) => C[]

	declare export function zipWith<A, B, C>(f: (x: A) => (y: B) => C, xs: A[]): (ys: B[]) => C[]

	declare export function zipWith<A, B, C>(f: (x: A) => (y: B) => C, xs: A[], ys: B[]): C[]

	declare export function zipAll<A>(...xss: A[][]): A[][]

	declare export function zipAllWith<A, B>(f: (...xs: A[]) => B, ...xss: A[][]): B[]

	declare export function at<A>(n: number): (xs: A[]) => A

	declare export function at<A>(n: number, xs: A[]): A

	declare export function elemIndex<A>(x: A): (xs: A[]) => number

	declare export function elemIndex<A>(x: A, xs: A[]): number

	declare export function elemIndices<A>(x: A): (xs: A[]) => number[]

	declare export function elemIndices<A>(x: A, xs: A[]): number[]

	declare export function findIndex<A>(f: (x: A) => boolean): (xs: A[]) => number

	declare export function findIndex<A>(f: (x: A) => boolean, xs: A[]): number

	declare export function findIndices<A>(f: (x: A) => boolean): (xs: A[]) => number[]

	declare export function findIndices<A>(f: (x: A) => boolean, xs: A[]): number[]

	declare export function keys<A>(object: {
		[key: string]: A
	}): string[]

	declare export function keys<A>(object: {
		[key: number]: A
	}): number[]

	declare export function values<A>(object: {
		[key: string]: A
	}): A[]

	declare export function values<A>(object: {
		[key: number]: A
	}): A[]

	declare export function pairsToObj<A>(object: [string, A][]): {
		[key: string]: A
	}

	declare export function pairsToObj<A>(object: [number, A][]): {
		[key: number]: A
	}

	declare export function objToPairs<A>(object: {
		[key: string]: A
	}): [string, A][]

	declare export function objToPairs<A>(object: {
		[key: number]: A
	}): [number, A][]

	declare export function listsToObj<A>(keys: string[]): (values: A[]) => {
		[key: string]: A
	}

	declare export function listsToObj<A>(keys: string[], values: A[]): {
		[key: string]: A
	}

	declare export function listsToObj<A>(keys: number[]): (values: A[]) => {
		[key: number]: A
	}

	declare export function listsToObj<A>(keys: number[], values: A[]): {
		[key: number]: A
	}

	declare export function objToLists<A>(object: {
		[key: string]: A
	}): [string[], A[]]

	declare export function objToLists<A>(object: {
		[key: number]: A
	}): [number[], A[]]

	declare export function empty<A>(object: any): boolean

	declare export function each<A>(
		f: (x: A) => void
	): (object: {
		[key: string]: A
	}) => {
		[key: string]: A
	}

	declare export function each<A>(f: (x: A) => void, object: {
		[key: string]: A
	}): {
		[key: string]: A
	}

	declare export function each<A>(
		f: (x: A) => void
	): (object: {
		[key: number]: A
	}) => {
		[key: number]: A
	}

	declare export function each<A>(f: (x: A) => void, object: {
		[key: number]: A
	}): {
		[key: number]: A
	}

	declare export function map<A, B>(
		f: (x: A) => B
	): (object: {
		[key: string]: A
	}) => {
		[key: string]: B
	}

	declare export function map<A, B>(f: (x: A) => B, object: {
		[key: string]: A
	}): {
		[key: string]: B
	}

	declare export function map<A, B>(
		f: (x: A) => B
	): (object: {
		[key: number]: A
	}) => {
		[key: number]: B
	}

	declare export function map<A, B>(f: (x: A) => B, object: {
		[key: number]: A
	}): {
		[key: number]: B
	}

	declare export function compact<A>(object: {
		[key: string]: A
	}): {
		[key: string]: A
	}

	declare export function compact<A>(object: {
		[key: number]: A
	}): {
		[key: number]: A
	}

	declare export function filter<A>(
		f: (x: A) => boolean
	): (object: {
		[key: string]: A
	}) => {
		[key: string]: A
	}

	declare export function filter<A>(
		f: (x: A) => boolean, object: {
		[key: string]: A
	}
	): {
		[key: string]: A
	}

	declare export function filter<A>(
		f: (x: A) => boolean
	): (object: {
		[key: number]: A
	}) => {
		[key: number]: A
	}

	declare export function filter<A>(
		f: (x: A) => boolean, object: {
		[key: number]: A
	}
	): {
		[key: number]: A
	}

	declare export function reject<A>(
		f: (x: A) => boolean
	): (object: {
		[key: string]: A
	}) => {
		[key: string]: A
	}

	declare export function reject<A>(
		f: (x: A) => boolean, object: {
		[key: string]: A
	}
	): {
		[key: string]: A
	}

	declare export function reject<A>(
		f: (x: A) => boolean
	): (object: {
		[key: number]: A
	}) => {
		[key: number]: A
	}

	declare export function reject<A>(
		f: (x: A) => boolean, object: {
		[key: number]: A
	}
	): {
		[key: number]: A
	}

	declare export function partition<A>(
		f: (x: A) => boolean
	): (
		object: {
		[key: string]: A
	}
	) => [{
		[key: string]: A
	}, {
		[key: string]: A
	}]

	declare export function partition<A>(
		f: (x: A) => boolean, object: {
		[key: string]: A
	}
	): [{
		[key: string]: A
	}, {
		[key: string]: A
	}]

	declare export function partition<A>(
		f: (x: A) => boolean
	): (
		object: {
		[key: number]: A
	}
	) => [{
		[key: number]: A
	}, {
		[key: number]: A
	}]

	declare export function partition<A>(
		f: (x: A) => boolean, object: {
		[key: number]: A
	}
	): [{
		[key: number]: A
	}, {
		[key: number]: A
	}]

	declare export function find<A>(f: (x: A) => boolean): (object: {
		[key: string]: A
	}) => A

	declare export function find<A>(f: (x: A) => boolean, object: {
		[key: string]: A
	}): A

	declare export function find<A>(f: (x: A) => boolean): (object: {
		[key: number]: A
	}) => A

	declare export function find<A>(f: (x: A) => boolean, object: {
		[key: number]: A
	}): A

	declare export function split(separator: string): (str: string) => string[]

	declare export function split(separator: string, str: string): string[]

	declare export function join(separator: string): (xs: string[]) => string

	declare export function join(separator: string, xs: string[]): string

	declare export function lines(str: string): string[]

	declare export function unlines(xs: string[]): string

	declare export function words(str: string): string[]

	declare export function unwords(xs: string[]): string

	declare export function chars(str: string): string[]

	declare export function unchars(xs: string[]): string

	declare export function repeat(n: number): (str: string) => string

	declare export function repeat(n: number, str: string): string

	declare export function capitalize(str: string): string

	declare export function camelize(str: string): string

	declare export function dasherize(str: string): string

	declare export function empty(str: string): boolean

	declare export function reverse(str: string): string

	declare export function slice(x: number): (y: number) => (str: string) => string

	declare export function slice(x: number, y: number): (str: string) => string

	declare export function slice(x: number, y: number, str: string): string

	declare export function take(n: number): (str: string) => string

	declare export function take(n: number, str: string): string

	declare export function drop(n: number): (str: string) => string

	declare export function drop(n: number, str: string): string

	declare export function splitAt(n: number): (str: string) => [string, string]

	declare export function splitAt(n: number, str: string): [string, string]

	declare export function takeWhile(f: (str: string) => boolean): (str: string) => string

	declare export function takeWhile(f: (str: string) => boolean, str: string): string

	declare export function dropWhile(f: (str: string) => boolean): (str: string) => string

	declare export function dropWhile(f: (str: string) => boolean, str: string): string

	declare export function span(f: (str: string) => boolean): (str: string) => [string, string]

	declare export function span(f: (str: string) => boolean, str: string): [string, string]

	declare export function breakStr(f: (str: string) => boolean): (str: string) => [string, string]

	declare export function breakStr(f: (str: string) => boolean, str: string): [string, string]

	declare export function apply<A, B>(f: (...args: A[]) => B): (args: A[]) => B

	declare export function apply<A, B>(f: (...args: A[]) => B, args: A[]): B

	declare export function curry(f: Function): Function

	declare export function flip<A, B, C>(f: (x: A) => (y: B) => C): (y: B) => (x: A) => C

	declare export function flip<A, B, C>(f: (x: A) => (y: B) => C, y: B): (x: A) => C

	declare export function flip<A, B, C>(f: (x: A) => (y: B) => C, y: B, x: A): C

	declare export function fix(f: Function): Function

	declare export function over<A, B, C>(f: (x: B) => (y: B) => C): (g: (x: A) => B) => (x: A) => (y: A) => C

	declare export function over<A, B, C>(f: (x: B, y: B) => C): (g: (x: A) => B) => (x: A, y: A) => C

	declare export function over<A, B, C>(f: (x: B) => (y: B) => C, g: (x: A) => B): (x: A) => (y: A) => C

	declare export function over<A, B, C>(f: (x: B, y: B) => C, g: (x: A) => B): (x: A, y: A) => C

	declare export function over<A, B, C>(f: (x: B) => (y: B) => C, g: (x: A) => B, x: A): (y: A) => C

	declare export function over<A, B, C>(f: (x: B, y: B) => C, g: (x: A) => B, x: A): (y: A) => C

	declare export function over<A, B, C>(f: (x: B) => (y: B) => C, g: (x: A) => B, x: A, y: A): C

	declare export function over<A, B, C>(f: (x: B, y: B) => C, g: (x: A) => B, x: A, y: A): C

	declare export function max<Comparable>(x: Comparable): (y: Comparable) => Comparable

	declare export function max<Comparable>(x: Comparable, y: Comparable): Comparable

	declare export function min<Comparable>(x: Comparable): (y: Comparable) => Comparable

	declare export function min<Comparable>(x: Comparable, y: Comparable): Comparable

	declare export function negate(x: number): number

	declare export function abs(x: number): number

	declare export function signum(x: number): number

	declare export function quot(x: number): (y: number) => number

	declare export function quot(x: number, y: number): number

	declare export function rem(x: number): (y: number) => number

	declare export function rem(x: number, y: number): number

	declare export function div(x: number): (y: number) => number

	declare export function div(x: number, y: number): number

	declare export function mod(x: number): (y: number) => number

	declare export function mod(x: number, y: number): number

	declare export function recip(x: number): number

	declare export function exp(x: number): number

	declare export function sqrt(x: number): number

	declare export function ln(x: number): number

	declare export function pow(x: number): (y: number) => number

	declare export function pow(x: number, y: number): number

	declare export function sin(x: number): number

	declare export function cos(x: number): number

	declare export function tan(x: number): number

	declare export function asin(x: number): number

	declare export function acos(x: number): number

	declare export function atan(x: number): number

	declare export function atan2(x: number, y: number): number

	declare export function truncate(x: number): number

	declare export function round(x: number): number

	declare export function ceiling(x: number): number

	declare export function floor(x: number): number

	declare export function isItNaN(x: number): boolean

	declare export function even(x: number): boolean

	declare export function odd(x: number): boolean

	declare export function gcd(x: number): (y: number) => number

	declare export function gcd(x: number, y: number): number

	declare export function lcm(x: number): (y: number) => number

	declare export function lcm(x: number, y: number): number

		
}

declare module 'Obj' {
			declare export function empty<A>(object: any): boolean

	declare export function each<A>(
		f: (x: A) => void
	): (object: {
		[key: string]: A
	}) => {
		[key: string]: A
	}

	declare export function each<A>(f: (x: A) => void, object: {
		[key: string]: A
	}): {
		[key: string]: A
	}

	declare export function each<A>(
		f: (x: A) => void
	): (object: {
		[key: number]: A
	}) => {
		[key: number]: A
	}

	declare export function each<A>(f: (x: A) => void, object: {
		[key: number]: A
	}): {
		[key: number]: A
	}

	declare export function map<A, B>(
		f: (x: A) => B
	): (object: {
		[key: string]: A
	}) => {
		[key: string]: B
	}

	declare export function map<A, B>(f: (x: A) => B, object: {
		[key: string]: A
	}): {
		[key: string]: B
	}

	declare export function map<A, B>(
		f: (x: A) => B
	): (object: {
		[key: number]: A
	}) => {
		[key: number]: B
	}

	declare export function map<A, B>(f: (x: A) => B, object: {
		[key: number]: A
	}): {
		[key: number]: B
	}

	declare export function compact<A>(object: {
		[key: string]: A
	}): {
		[key: string]: A
	}

	declare export function compact<A>(object: {
		[key: number]: A
	}): {
		[key: number]: A
	}

	declare export function filter<A>(
		f: (x: A) => boolean
	): (object: {
		[key: string]: A
	}) => {
		[key: string]: A
	}

	declare export function filter<A>(
		f: (x: A) => boolean, object: {
		[key: string]: A
	}
	): {
		[key: string]: A
	}

	declare export function filter<A>(
		f: (x: A) => boolean
	): (object: {
		[key: number]: A
	}) => {
		[key: number]: A
	}

	declare export function filter<A>(
		f: (x: A) => boolean, object: {
		[key: number]: A
	}
	): {
		[key: number]: A
	}

	declare export function reject<A>(
		f: (x: A) => boolean
	): (object: {
		[key: string]: A
	}) => {
		[key: string]: A
	}

	declare export function reject<A>(
		f: (x: A) => boolean, object: {
		[key: string]: A
	}
	): {
		[key: string]: A
	}

	declare export function reject<A>(
		f: (x: A) => boolean
	): (object: {
		[key: number]: A
	}) => {
		[key: number]: A
	}

	declare export function reject<A>(
		f: (x: A) => boolean, object: {
		[key: number]: A
	}
	): {
		[key: number]: A
	}

	declare export function partition<A>(
		f: (x: A) => boolean
	): (
		object: {
		[key: string]: A
	}
	) => [{
		[key: string]: A
	}, {
		[key: string]: A
	}]

	declare export function partition<A>(
		f: (x: A) => boolean, object: {
		[key: string]: A
	}
	): [{
		[key: string]: A
	}, {
		[key: string]: A
	}]

	declare export function partition<A>(
		f: (x: A) => boolean
	): (
		object: {
		[key: number]: A
	}
	) => [{
		[key: number]: A
	}, {
		[key: number]: A
	}]

	declare export function partition<A>(
		f: (x: A) => boolean, object: {
		[key: number]: A
	}
	): [{
		[key: number]: A
	}, {
		[key: number]: A
	}]

	declare export function find<A>(f: (x: A) => boolean): (object: {
		[key: string]: A
	}) => A

	declare export function find<A>(f: (x: A) => boolean, object: {
		[key: string]: A
	}): A

	declare export function find<A>(f: (x: A) => boolean): (object: {
		[key: number]: A
	}) => A

	declare export function find<A>(f: (x: A) => boolean, object: {
		[key: number]: A
	}): A

		
}

declare module 'Str' {
			declare export function empty(str: string): boolean

	declare export function reverse(str: string): string

	declare export function slice(x: number): (y: number) => (str: string) => string

	declare export function slice(x: number, y: number): (str: string) => string

	declare export function slice(x: number, y: number, str: string): string

	declare export function take(n: number): (str: string) => string

	declare export function take(n: number, str: string): string

	declare export function drop(n: number): (str: string) => string

	declare export function drop(n: number, str: string): string

	declare export function splitAt(n: number): (str: string) => [string, string]

	declare export function splitAt(n: number, str: string): [string, string]

	declare export function takeWhile(f: (str: string) => boolean): (str: string) => string

	declare export function takeWhile(f: (str: string) => boolean, str: string): string

	declare export function dropWhile(f: (str: string) => boolean): (str: string) => string

	declare export function dropWhile(f: (str: string) => boolean, str: string): string

	declare export function span(f: (str: string) => boolean): (str: string) => [string, string]

	declare export function span(f: (str: string) => boolean, str: string): [string, string]

	declare export function breakStr(f: (str: string) => boolean): (str: string) => [string, string]

	declare export function breakStr(f: (str: string) => boolean, str: string): [string, string]

		
}