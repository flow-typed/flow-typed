import stripBom from 'strip-bom';

const result: string = stripBom('\uFEFFunicorn');
//=> 'unicorn'

// $ExpectError
stripBom(42);

// $ExpectError
(stripBom('asdf'): number);
