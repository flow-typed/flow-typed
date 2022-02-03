declare module 'email-validator' {
  declare module.exports: {|
    /**
     * Validate an email address.
     * @param {string} email - The email address to validate.
     * @returns {boolean}
     */
    validate(email: string): boolean,
  |};
}
