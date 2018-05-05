declare module "xml-escape" {
  // Technically, xml-escape also accepts null or undefined as the first parameter
  // and returns undefined in those cases.
  // A 100% correct typedef would therefore have ?string as both the first parameter and the
  // return type, but this would force users of this typedef to deal with these rare cases
  // everywhere, even if they always pass in a valid string.
  // As a practical tradeoff, this typedef only supports the presumably most common use
  // case where both the input and output are strings (instead of null or undefined).
  declare module.exports: (string: string, ignore?: ?string) => string;
}
