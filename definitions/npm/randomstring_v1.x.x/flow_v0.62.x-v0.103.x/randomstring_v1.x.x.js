declare module "randomstring" {
  declare type GenerateOptions = {
      length?: number;
      readable?: boolean;
      charset?: string;
      capitalization?: string;
  };
  declare module.exports: {
      generate: (options?: GenerateOptions | number) => string
  }
}
