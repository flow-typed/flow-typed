declare module "nanoid" {
  declare module.exports: (size?: number) => string;
}

declare module "nanoid/format" {
  declare module.exports: (
    random: (size: number) => string[],
    alphabet: string,
    size: number
  ) => string;
}

declare module "nanoid/generate" {
  declare module.exports: (alphabet: string, size: number) => string;
}

declare module "nanoid/url" {
  declare module.exports: string;
}
