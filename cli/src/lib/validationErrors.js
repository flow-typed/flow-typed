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

