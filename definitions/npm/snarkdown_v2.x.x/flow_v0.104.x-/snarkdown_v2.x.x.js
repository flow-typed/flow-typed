declare module 'snarkdown' {
  declare type Links = {
    [index: string]: string,
    ...
  };

  declare export default function snarkdown(
    urlStr: string,
    prevLinks?: Links
  ): string;
}
