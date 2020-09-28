declare module "nanoid" {
  declare export function nanoid(size?: number): string;
  declare export function customAlphabet(alphabet: string, size: number): () => string;
  declare export function customRandom(
    alphabet: string,
    size: number,
    random: (bytes: number) => Uint8Array
  ): () => string;
  declare export var urlAlphabet: string;
  declare export function random(bytes: number): Uint8Array;
}

declare module "nanoid/async" {
  declare export function nanoid(size?: number): Promise<string>;
  declare export function customAlphabet(
    alphabet: string,
    size: number
  ): () => Promise<string>;
  declare export function random(bytes: number): Promise<Uint8Array>;
}

declare module "nanoid/non-secure" {
  declare export function nanoid(size?: number): string;
  declare export function customAlphabet(alphabet: string, size: number): () => string;
}
