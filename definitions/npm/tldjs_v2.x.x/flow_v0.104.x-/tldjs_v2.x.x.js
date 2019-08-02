/**
 * Flow libdef for 'tldjs'
 * See https://www.npmjs.com/package/tldjs
 * by Vincent Driessen, 2018-12-21
 */

declare module "tldjs" {
  declare export function tldExists(host: string): boolean;
  declare export function getDomain(host: string): string | null;
  declare export function getSubdomain(host: string): string | null;
  declare export function getPublicSuffix(host: string): string | null;
  declare export function isValid(host: string): boolean;
  declare export function isValidHostname(host: string): boolean;
  declare export function extractHostname(host: string): string | null;
  declare export function parse(
    host: string
  ): {|
    hostname: string | null,
    isValid: boolean,
    isIp: boolean,
    tldExists: boolean,
    publicSuffix: string | null,
    domain: string | null,
    subdomain: string | null
  |};

  declare export function fromUserSettings(options: {|
    rules?: mixed,
    validHosts?: Array<string>,
    extractHostname?: string | null
  |}): {|
    extractHostname: typeof extractHostname,
    isValidHostname: typeof isValidHostname,
    isValid: typeof isValid,
    parse: typeof parse,
    tldExists: typeof tldExists,
    getPublicSuffix: typeof getPublicSuffix,
    getDomain: typeof getDomain,
    getSubdomain: typeof getSubdomain
  |};
}
