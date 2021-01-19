// @flow
import Chance from 'chance';

const chance: Chance = Chance();
const chanceStaticWithSeed: Chance = Chance(12345);

const chanceConstructed: Chance = new Chance();
const chanceConstructedWithSeed: Chance = new Chance(12345);

(chance.gender(): string);
(chance.birthday({ type: 'teen' }): Date);
(chance.birthday({ string: true, american: true }): string);
// $FlowExpectedError
(chance.birthday({ type: 'invalid' }): Date);

(chance.hammertime(): number);
(chance.cc_type(): string);
const ccType = chance.cc_type({ raw: true });
(ccType.name: string);
(ccType.short_name: string);
(ccType.prefix: string);
(ccType.length: number);

(chance.hash(): string);
(chance.hour({ twentyfour: true }): number);
(chance.hour({ min: 0, max: 3 }): number);
(chance.hour(): number);
(chance.minute({ min: 0, max: 30 }): number);
(chance.minute(): number);
(chance.syllable(): string);
(chance.syllable({ length: 5, capitalize: true }): string);
