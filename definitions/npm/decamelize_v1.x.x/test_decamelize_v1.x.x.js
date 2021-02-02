import decamelize from 'decamelize';

const a: string = decamelize('unicornRainbow');
//=> 'unicorn_rainbow'

const b: string = decamelize('unicornRainbow', '-');
//=> 'unicorn-rainbow'

// $FlowExpectedError
decamelize(42);

// $FlowExpectedError
(decamelize('unicornRainbow'): number);
