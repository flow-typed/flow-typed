// @flow
import Papa from 'papaparse'

var res = Papa.parse("3,3,3");
res.errors[0].code;

(Papa.parse("3,3,3", {
  delimiter: ';',
  comments: false,

  step: function(results, p) {
    p.abort();
    results.data.length;
  }
}): PapaParse$ParseResult);

// $ExpectError
(Papa.parse(['data']): PapaParse$ParseResult);

var file = new File(['papa'], 'papa.txt');
(Papa.parse(file, {
  complete: function(a, b) {
    a.meta.fields;
    b.name;
  }
}): PapaParse$ParseResult);

var flat: Array<Object> = [{a: 1, b: 1, c: 1}];
(Papa.unparse(flat): string);

var nested: Array<Array<any>> = [[1, 2, 3], [4, 5, 6]];
(Papa.unparse(nested): string);

Papa.unparse({
  fields: ["3"],
  data: ["3"]
});

Papa.SCRIPT_PATH;
Papa.LocalChunkSize;
