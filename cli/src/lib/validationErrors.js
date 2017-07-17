// @flow

export type ValidationErrors = Map<string, Array<string>>;

export function validationError(
  errKey: string,
  errMsg: string,
  validationErrs?: ValidationErrors,
): void {
  if (validationErrs) {
    const errors = validationErrs.get(errKey) || [];
    errors.push(errMsg);
    validationErrs.set(errKey, errors);
  } else {
    throw new Error(`${errKey}: ${errMsg}`);
  }
}

export function printValidationErrors(verrors: ValidationErrors) {
  verrors.forEach((errors, context) => {
    const contextStr = context == null ? 'Found some errors:' : context + ':';
    console.log(contextStr);
    errors.forEach(err => console.log('  • ' + err));
    console.log('');
  });
}
