declare module 'jwt-decode' {
  declare export class InvalidTokenError extends Error {}

  declare type JwtDecodeOptions = {|
    header?: boolean,
  |};

  declare type JwtHeader = {|
    type?: string,
    alg?: string,
  |};

  declare type JwtPayload = {|
    iss?: string,
    sub?: string,
    aud?: Array<string> | string,
    exp?: number,
    nbf?: number,
    iat?: number,
    jti?: string,
  |};

  declare export default function jwtDecode<T>(
    token: string,
    options?: JwtDecodeOptions,
  ): T;
}
