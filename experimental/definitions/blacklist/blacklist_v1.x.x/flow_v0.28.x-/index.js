declare module "blacklist" {
  declare interface blacklist {
    (
      src: Object,
      filter: { [key: string]: boolean },
      ...args: Array<void>
    ): Object;
    (src: Object, ...filterStrings: Array<string>): Object;
  }
  declare module.exports: blacklist;
}
