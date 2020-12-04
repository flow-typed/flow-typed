declare module "sponge" {
  declare function sponge(): stream$Transform;
  declare function sponge(file: string): stream$Writable;

  declare module.exports: typeof sponge;
}
