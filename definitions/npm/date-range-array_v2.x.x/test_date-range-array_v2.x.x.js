import dateRangeArray from "date-range-array";

const a: Array<string> = dateRangeArray("2017-06-01", "2017-06-03");
//=> ['2017-06-01', '2017-06-02', '2017-06-03']

// $ExpectError
const c: Array<string> = dateRangeArray("2017-06-01");
const c: Array<number> = dateRangeArray("2017-06-01", "2017-06-03");
