type padOptions = {
  char?: string,
  colors?: boolean,
  strip?: boolean
};

declare module "pad" {
  declare function exports(
    textOrLeftPadding: string|number,
    textOrRightPadding: string|number,
    charOrOptions: ?string|padOptions
  ): string;
}
