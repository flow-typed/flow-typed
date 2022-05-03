declare module 'is-dark-color' {
  declare type isDarkColorOptions = {|
    override: { [hex: string]: boolean, ... },
  |};

  declare var isDarkColor: (
    hexColor: string,
    options?: isDarkColorOptions
  ) => boolean;

  declare module.exports: typeof isDarkColor;
}
