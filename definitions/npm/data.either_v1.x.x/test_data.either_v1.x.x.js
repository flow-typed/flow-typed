// @flow

import Either from 'data.either';

const a  = Either.Left('fail');
const a2 = Either.Left('fail');
const b  = Either.Right(5);
const c  = Either.Right(10);
const d  = Either.of({a: 'alpha'});
const e  = Either.fromNullable(null);

const t: boolean = a.isLeft;
const f: boolean = a2.isRight;

const eq = a.isEqual(Either.Left('fail'));
const str: string = Either.Left('fail').toString();
const value: number = b.get();
const x: number = Either.Left('fail').getOrElse(10);
const y: string = Either.Left('fail').merge();
const z: {a: string} = Either.of({a: 'alpha'}).merge();

const concatC = a => b => a.concat(b);

const applicative: Either<*, Array<string>> = Either.of(concatC)
  .ap(Either.of(['a']))
  .ap(Either.of(['b']));

const map = b.map(x => x + 5)
const chain = b.chain(x => x < 5 ? Either.Right(x + 5) : Either.Left('too big'));
const fold = Either.of('test').fold(l => String(l), r => r);
const cata = Either.of('test').cata({
  Left: l => new Error(l),
  Right: r => r.concat('test')
});
const swap: Either<*, string> = Either.Left('swapped').swap();
const bimap1: Either<number, *> = Either.Left('1').bimap(x => parseInt(x, 10), x => x);
const bimap2: Either<*, number> = Either.Right('1').bimap(x => x, x => parseInt(x, 10));
const leftMap: Either<number, *> = Either.Left('1').leftMap(x => parseInt(x, 10));
const orElse: Either<number, *> = Either.Left('1').orElse(l => Either.Left(parseInt(l, 10)));
const concat: Either<*, string[]> = Either.Right(['a']).concat(Either.of(['b']));

// --- Errors
// $ExpectError
const _eq = a.isEqual('fail');
// $ExpectError
const _value: string = b.get();
// $ExpectError
const _x: string = Either.Left('fail').getOrElse(10);
// $ExpectError
const _y: number = Either.Left('fail').merge();
// $ExpectError
const _applicative = Either.of(concat).ap('a').ap('b');
// $ExpectError
const _map = b.map(1);
// $ExpectError
const _chain = b.chain(x => x + x);
// $ExpectError
const _fold: string = Either.of('test').fold((l): number => Number(l), (r): string => r);
// $ExpectError
const _cata = Either.of('test').cata({
  ALeft: l => new Error(l),
  ARight: r => r.concat('test')
});
// $ExpectError
const _bimap: Either<*, number> = Either.Right('1').bimap(x => x);
// $ExpectError
const _leftMap: Either<number, *> = Either.Left('1').leftMap(x => x);
// $ExpectError
const _orElse: Either<number, *> = Either.Left('1').orElse(l => l);
// $ExpectError
const _concat: Either<*, string[]> = Either.Right(1).concat(['b']);
