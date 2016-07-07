import stripBom from 'strip-bom';

const result: string = stripBom('\uFEFFunicorn');
//=> 'unicorn'
