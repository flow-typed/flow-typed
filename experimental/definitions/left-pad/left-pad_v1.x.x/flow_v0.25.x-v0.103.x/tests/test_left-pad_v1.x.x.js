import leftPad from 'left-pad';

(leftPad('foo', 6): string);
(leftPad('foo', 6, '1'): string);

// $ExpectError
leftPad('hey', '6', '1')

// $ExpectError
leftPad('hey', '6', true)
