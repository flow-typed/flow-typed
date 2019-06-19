import stringOccurrence from "string-occurrence";

const result: number = stringOccurrence("foo bar", "foo");

stringOccurrence("foo bar\nfoo baz", ["foo", "baz"]);

stringOccurrence("foo bar\nFOO BAZ", ["foo", "baz"], {
  caseInsensitive: false
});

// $ExpectError
stringOccurrence(["foo", "baz"], "foo");

// $ExpectError
stringOccurrence("foo bar", 123);
