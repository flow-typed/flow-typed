declare module 'superpathjoin' {
  declare type Path = string | number | boolean | null | void;

  declare export function superpathjoin(...paths: Array<Path>): string;

  declare export default typeof superpathjoin;
}
