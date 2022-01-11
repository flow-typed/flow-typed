declare module 'password-validator' {
  declare class PasswordValidator {
    constructor(): this;

    /**
     * specifies password must include digits (optionally provide count parameter to specify at least n digits)
     */
    digits(count?: number, description?: string): this,
    /**
     * specifies password must include letters (optionally provide count parameter to specify at least n letters)
     */
    letters(count?: number, description?: string): this,
    /**
     * specifies password must include lowercase letters (optionally provide count parameter to specify at least n lowercase letters)
     */
    lowercase(count?: number, description?: string): this,
    /**
     * specifies password must include uppercase letters (optionally provide count parameter to specify at least n uppercase letters)
     */
    uppercase(count?: number, description?: string): this,
    /**
     * specifies password must include symbols (optionally provide count parameter to specify at least n symbols)
     */
    symbols(count?: number, description?: string): this,
    /**
     * specifies password must include spaces (optionally provide count parameter to specify at least n spaces)
     */
    spaces(count?: number, description?: string): this,
    /**
     * specifies minimum length
     */
    min(len: number, description?: string): this,
    /**
     * specifies maximum length
     */
    max(len: number, description?: string): this,
    /**
     * specifies the whitelisted values
     */
    oneOf(list: Array<string>): this,
    /**
     * inverts the result of validations applied next
     */
    not(regex?: RegExp, description?: string): this,
    /**
     * inverts the effect of not()
     */
    is(): this,
    /**
     * inverts the effect of not() and applies a regex (optional)
     */
    has(regex?: RegExp, description?: string): this,

    /**
     * Validate against a password string
     */
     validate(
      password: string,
    ): boolean,
    validate(
      password: string,
      options: {|
        list?: boolean,
        details?: boolean,
      |},
    ): boolean | Array<string & { [key: string]: any, ... }>,
  }

  declare module.exports: typeof PasswordValidator;
}
