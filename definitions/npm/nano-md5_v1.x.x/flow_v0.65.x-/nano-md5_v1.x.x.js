declare module "nano-md5" {
  declare export default (utf8_string: string) => string;
  declare export function fromBytes (bytes_string: string): String;
  declare export function fromUtf8 (utf8_string: string): String;
  declare export function crypt (password: string, settings: string): string;
}
