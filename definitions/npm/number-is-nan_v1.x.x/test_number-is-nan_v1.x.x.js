import numberIsNan from 'number-is-nan';

const a: boolean = numberIsNan(NaN);
//=> true

const b: boolean = numberIsNan('unicorn');
//=> false
