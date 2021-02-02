import persistPath from "persist-path";

persistPath("test1");
persistPath("test2", "test3");
persistPath("test4", "test5", "test6");
(persistPath("str"): string);

// $FlowExpectedError
persistPath(4);

// $FlowExpectedError
persistPath(null, "str");

// $FlowExpectedError
persistPath({});

// $FlowExpectedError
persistPath("str", { a: 1 });

// $FlowExpectedError
(persistPath("str"): number);

// $FlowExpectedError
(persistPath("str"): boolean);
