import Random from 'random-js';

(new Random(): Random);
const random = Random();

(random.integer(0, 10): number);
(random.integer(5, 10, true): number)
// $ExpectError
random.integer();

(random.real(0, 10): number);
(random.real(5, 10, true): number)
// $ExpectError
random.real();

(random.bool(): bool);
(random.bool(20): bool);
(random.bool(5, 9): bool);

(random.pick([1, 2]): number);
(random.pick(['', '1'], 4): string);
(random.pick([true, false, '', 2], 0, 5): bool | string | number);
// $ExpectError
random.pick();

(random.shuffle([1, '']): Array<number | string>);
(random.sample([1, true], 1): Array<number | bool>);
(random.die(5): number);
(random.dice(5, 2): number[]);
(random.uuid(): string);
// $ExpectError
random.string('5');

const nativeEngine = Random.engines.nativeMath();
const mtEngine = Random.engines.mt19937();

(mtEngine(): number);
(mtEngine.getUseCount(): number);
(Random.integer(0, 5)(mtEngine): number);
(Random.real(0, 5, true)(nativeEngine): number);
(Random.bool()(mtEngine): bool);
(Random.pick(mtEngine, [1]): number);
