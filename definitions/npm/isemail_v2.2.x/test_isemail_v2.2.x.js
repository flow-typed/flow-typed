import isemail from 'isemail';

function log(result: boolean | number) {
  console.log('result', result);
}

let r: boolean | number | void = 0;

r = isemail.validate('test@iana.org');
r = isemail.validate('test@iana.org', log);
r = isemail.validate('test@iana.org', { checkDNS: true });
r = isemail.validate('test@iana.org', { checkDNS: true }, log);
r = isemail.validate('test@iana.org', { errorLevel: true });
r = isemail.validate('test@iana.org', { errorLevel: true }, log);
r = isemail.validate('test@e.com');
r = isemail.validate('test@e.com', { checkDNS: true, errorLevel: true }, log);
r = isemail.validate('test@e.com', { checkDNS: true, errorLevel: 7 }, log);
r = isemail.validate('test@e.com', { checkDNS: true, errorLevel: 6 }, log);

// $ExpectError
isemail.validate();

// $ExpectError
isemail.validate(123);

// $ExpectError
isemail.validate('test@iana.org', 123);

// $ExpectError
isemail.validate('test@iana.org', { checkDMS: true });
