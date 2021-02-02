import leftPad from 'left-pad';

(leftPad('foo', 6): string);
(leftPad('foo', 6, '1'): string);

// $FlowExpectedError
leftPad('hey', '6', '1')

// $FlowExpectedError
leftPad('hey', '6', true)
