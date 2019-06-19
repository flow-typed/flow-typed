// @flow
import Chance from 'chance';

const chance: Chance = Chance();
const chanceStaticWithSeed: Chance = Chance(12345);

const chanceConstructed: Chance = new Chance();
const chanceConstructedWithSeed: Chance = new Chance(12345);

(chance.gender(): string);
(chance.birthday({ type: 'teen' }): Date);
(chance.birthday({ string: true, american: true }): string);
// $ExpectError
(chance.birthday({ type: 'invalid' }): Date);

(chance.hammertime(): number);
(chance.cc_type(): string);
const ccType = chance.cc_type({ raw: true });
(ccType.name: string);
(ccType.short_name: string);
(ccType.prefix: string);
(ccType.length: number);

(chance.hash(): string);
