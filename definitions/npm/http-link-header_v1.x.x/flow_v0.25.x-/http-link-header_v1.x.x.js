declare module "http-link-header" {
  declare type LinkItem = {
    uri: string,
    [string]: string
  };
  declare export default class Link {
    constructor(value: string): void;
    rel(value: string): LinkItem[];
    get(attr: string, value: string): LinkItem[];
    set(link: LinkItem): Link;
    has(attr: string, value: string): boolean;
    parse(value: string, offset?: number): Link;
    static parse(value: string, offset?: number): Link;
    toString(): string;
  }
}
