import stripBom from 'strip-bom';

const result: string = stripBom('\uFEFFunicorn');
//=> 'unicorn'

// $FlowExpectedError
stripBom(42);

// $FlowExpectedError
(stripBom('asdf'): number);
