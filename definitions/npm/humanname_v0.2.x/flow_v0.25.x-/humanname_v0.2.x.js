/**
 * Flow libdef for 'humanname'
 * See https://www.npmjs.com/package/humanname
 * by Vincent Driessen, 2018-12-21
 */

declare module 'humanname' {
  declare export type HumanName = {|
    firstName: string,
    lastName: string,
    salutation: string,
    initials: string,
    suffix: string,
  |};

  declare export default {|
    parse: (name: string) => HumanName,
  |};
}
