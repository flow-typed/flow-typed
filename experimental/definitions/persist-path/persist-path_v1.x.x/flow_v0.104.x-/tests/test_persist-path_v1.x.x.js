import persistPath from "persist-path";

persistPath("test1");
persistPath("test2", "test3");
persistPath("test4", "test5", "test6");
(persistPath("str"): string);

// $ExpectError
persistPath(4);

// $ExpectError
persistPath(null, "str");

// $ExpectError
persistPath({});

// $ExpectError
persistPath("str", { a: 1 });

// $ExpectError
(persistPath("str"): number);

// $ExpectError
(persistPath("str"): boolean);
