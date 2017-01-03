declare module 'checkdigit' {
  declare type checkdigit = {
    isValid(digits: string): boolean;
    create(digits: string): string;
    apply(digits: string): string;
  }
  declare module.exports: {
    mod10: checkdigit;
    mod11: checkdigit;
  };
}
