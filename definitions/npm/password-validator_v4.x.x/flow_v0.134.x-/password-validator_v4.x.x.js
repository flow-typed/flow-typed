// flow-typed signature: 3587dd2cb279eaf68a55c988c6bcb495
// flow-typed version: <<STUB>>/password-validator_v4.x.x/flow_v0.134.0

declare module 'password-validator' {
  declare type PasswordSchemaRules = {|
    digits(count?: number): PasswordSchemaRules, // specifies password must include digits (optionally provide count paramenter to specify at least n digits)
    letters(count?: number): PasswordSchemaRules, // specifies password must include letters (optionally provide count paramenter to specify at least n letters)
    lowercase(count?: number): PasswordSchemaRules, // specifies password must include lowercase letters (optionally provide count paramenter to specify at least n lowercase letters)
    uppercase(count?: number): PasswordSchemaRules, // specifies password must include uppercase letters (optionally provide count paramenter to specify at least n uppercase letters)
    symbols(count?: number): PasswordSchemaRules, // specifies password must include symbols (optionally provide count paramenter to specify at least n symbols)
    spaces(count?: number): PasswordSchemaRules, // specifies password must include spaces (optionally provide count paramenter to specify at least n spaces)
    min(len: number): PasswordSchemaRules, // specifies minimum length
    max(len: number): PasswordSchemaRules, // specifies maximum length
    oneOf(list: string[]): PasswordSchemaRules, // specifies the whitelisted values
    not(regex?: RegExp): PasswordSchemaRules, // inverts the result of validations applied next
    is(): PasswordSchemaRules, // inverts the effect of not()
    has(regex?: RegExp): PasswordSchemaRules, // inverts the effect of not() and applies a regex (optional)
  |};

  declare type PasswordPolicySchema = {|
    ...PasswordSchemaRules,
    validate: (password: string) => boolean,
  |};

  declare class PasswordValidator {
    constructor(): PasswordPolicySchema;
  }

  declare module.exports: typeof PasswordValidator;
}
