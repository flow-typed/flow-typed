import checkdigit from 'checkdigit';

(checkdigit.mod10.isValid('2345676'): boolean);
(checkdigit.mod10.create('234567'): string);
(checkdigit.mod10.apply('234567'): string);

(checkdigit.mod11.isValid('2345676'): boolean);
(checkdigit.mod11.create('234567'): string);
(checkdigit.mod11.apply('234567'): string);

// $FlowExpectedError
checkdigit.mod10.isValid();
// $FlowExpectedError
checkdigit.mod10.create();
// $FlowExpectedError
checkdigit.mod10.apply();

// $FlowExpectedError
checkdigit.mod11.isValid();
// $FlowExpectedError
checkdigit.mod11.create();
// $FlowExpectedError
checkdigit.mod11.apply();

// $FlowExpectedError
checkdigit.mod10.isValid(123);
// $FlowExpectedError
checkdigit.mod10.create(123);
// $FlowExpectedError
checkdigit.mod10.apply(123);

// $FlowExpectedError
checkdigit.mod11.isValid(123);
// $FlowExpectedError
checkdigit.mod11.create(123);
// $FlowExpectedError
checkdigit.mod11.apply(123);
