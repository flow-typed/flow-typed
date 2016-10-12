import HttpErrors from 'http-errors';

const A: HttpErrors.HttpError = new HttpErrors.HttpError();
const B: HttpErrors.HttpError = HttpErrors();
const C: HttpErrors.HttpError = HttpErrors(200, 'foo', {});
// $ExpectError
const D: HttpErrors.HttpError = HttpErrors('500');
const E: HttpErrors.NotFound = new HttpErrors.NotFound();
const F: HttpErrors.HttpError = new HttpErrors.LengthRequired;

(F.expose: bool);
(F.message: string);
(F.status: number);
(F.statusCode: number);
