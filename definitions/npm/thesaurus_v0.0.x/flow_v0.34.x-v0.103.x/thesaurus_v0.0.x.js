declare module "thesaurus" {
  declare class thesaurusClass {
    find(string): Array<string>;
    load(string): this;
    get(void): { [string]: Array<string> };
    toJson(void): string;
  }

  declare module.exports: thesaurusClass;
}
