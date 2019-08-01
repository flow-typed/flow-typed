import checkdigit from 'checkdigit';

(checkdigit.mod10.isValid('2345676'): boolean);
(checkdigit.mod10.create('234567'): string);
(checkdigit.mod10.apply('234567'): string);

(checkdigit.mod11.isValid('2345676'): boolean);
(checkdigit.mod11.create('234567'): string);
(checkdigit.mod11.apply('234567'): string);

// $ExpectError
checkdigit.mod10.isValid();
// $ExpectError
checkdigit.mod10.create();
// $ExpectError
checkdigit.mod10.apply();

// $ExpectError
checkdigit.mod11.isValid();
// $ExpectError
checkdigit.mod11.create();
// $ExpectError
checkdigit.mod11.apply();

// $ExpectError
checkdigit.mod10.isValid(123);
// $ExpectError
checkdigit.mod10.create(123);
// $ExpectError
checkdigit.mod10.apply(123);

// $ExpectError
checkdigit.mod11.isValid(123);
// $ExpectError
checkdigit.mod11.create(123);
// $ExpectError
checkdigit.mod11.apply(123);
