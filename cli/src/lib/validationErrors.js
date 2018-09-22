// @flow

export type ValidationErrors = Map<string, Array<string>>;

export class ValidationError extends Error {}

export function printValidationErrors(verrors: ValidationErrors) {
  verrors.forEach((errors, context) => {
    const contextStr = context == null ? 'Found some errors:' : context + ':';
    console.log(contextStr);
    errors.forEach(err => console.log('  • ' + err));
    console.log('');
  });
}
