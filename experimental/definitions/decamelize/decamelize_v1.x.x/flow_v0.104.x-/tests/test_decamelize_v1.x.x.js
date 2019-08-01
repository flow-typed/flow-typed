import decamelize from 'decamelize';

const a: string = decamelize('unicornRainbow');
//=> 'unicorn_rainbow'

const b: string = decamelize('unicornRainbow', '-');
//=> 'unicorn-rainbow'

// $ExpectError
decamelize(42);

// $ExpectError
(decamelize('unicornRainbow'): number);
