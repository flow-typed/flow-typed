// @flow
import Chance from 'chance';

const chance: Chance = Chance();

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
