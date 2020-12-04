import resolveFrom from "resolve-from";

(resolveFrom("abc", "def"): string);

// $FlowExpectedError
resolveFrom();

// $FlowExpectedError
resolveFrom("abc");

// $FlowExpectedError
resolveFrom("abc", 1);

(resolveFrom.silent("abc", "def"): string | null);

// $FlowExpectedError
resolveFrom.silent();

// $FlowExpectedError
resolveFrom.silent("abc");

// $FlowExpectedError
resolveFrom.silent("abc", 1);
