type $npm$HumanizeNumber$Options = {
  delimiter?: string,
  separator?: string
};

declare module "humanize-number" {
  declare module.exports: (
    n: number,
    options?: $npm$HumanizeNumber$Options
  ) => string;
}
