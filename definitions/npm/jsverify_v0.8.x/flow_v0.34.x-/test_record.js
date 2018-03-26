import * as jsc from "jsverify";

// interface Record {
type Record = {
  string: string,
  boolean: boolean
};

const arbitrary: jsc.Arbitrary<Record> = jsc.record({
  string: jsc.string,
  boolean: jsc.bool
});
