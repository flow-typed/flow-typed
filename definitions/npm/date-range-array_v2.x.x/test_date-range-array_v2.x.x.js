import dateRangeArray from "date-range-array";

const a: Array<string> = dateRangeArray("2017-06-01", "2017-06-03");
//=> ['2017-06-01', '2017-06-02', '2017-06-03']

// $FlowExpectedError
const c: Array<string> = dateRangeArray("2017-06-01");
const d: Array<string> = dateRangeArray("2017-06-01", "2017-06-03");
