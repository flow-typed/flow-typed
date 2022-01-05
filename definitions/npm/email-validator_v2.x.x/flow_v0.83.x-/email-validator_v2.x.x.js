declare module 'email-validator' {
  /**
   * Validate an email address.
   * @param {string} email - The email address to validate.
   * @returns {boolean}
   */
  declare function validate(email: string): boolean;

  declare module.exports: typeof validate;
}
