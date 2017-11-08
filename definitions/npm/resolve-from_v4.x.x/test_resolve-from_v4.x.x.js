import resolveFrom from "resolve-from";

(resolveFrom("abc", "def"): string);

// $ExpectError
resolveFrom();

// $ExpectError
resolveFrom("abc");

// $ExpectError
resolveFrom("abc", 1);

(resolveFrom.silent("abc", "def"): string | null);

// $ExpectError
resolveFrom.silent();

// $ExpectError
resolveFrom.silent("abc");

// $ExpectError
resolveFrom.silent("abc", 1);
