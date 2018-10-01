class ExtendedString extends String {
  toHex: () => string;
}

declare module "nano-md5" {
  declare module.exports: {
    (utf8_string: string): string;
    fromBytes (bytes_string: string): ExtendedString;
    fromUtf8 (utf8_string: string): ExtendedString;
    crypt (password: string, settings: string): string;
  }
}
