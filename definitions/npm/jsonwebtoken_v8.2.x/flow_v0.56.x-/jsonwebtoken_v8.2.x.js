

declare class JsonWebTokenError extends Error {
  name: string;
  message: string;
  inner: Error;
}

declare class TokenExpiredError extends Error {
  name: string;
  expiredAt: number;
  inner: Error;
}

declare class NotBeforeError extends Error {
  name: string;
  date: Date;
  inner: Error;
}

declare type jwt$Encodable = String | Buffer | Object;
declare type jwt$Key = { key: string | Buffer, passphrase: string | Buffer };
declare type jwt$Algorithm =
  'RS256'
  | 'RS384'
  | 'RS512'
  | 'ES256'
  | 'ES384'
  | 'ES512'
  | 'HS256'
  | 'HS384'
  | 'HS512'
  | 'none';

declare type jwt$SignCallback = (tokenOrError: Error | string) => void;
declare type jwt$SigningOptions<Headers> = $Shape<{
  algorithm: jwt$Algorithm,
  expiresIn: number | string,
  notBefore: number | string,
  audience: string | string[],
  issuer: string | string[],
  jwtid: string,
  subject: string,
  noTimestamp: boolean,
  header: Headers,
  keyid: string
}>;

declare type jwt$SigningOptionsWithAlgorithm<H> = jwt$SigningOptions<H> & { algorithm: jwt$Algorithm };

declare type jwt$VerifyCallback = (err: JsonWebTokenError | NotBeforeError | TokenExpiredError | null, decoded: jwt$Payload) => void;
declare type jwt$VerifyOptionsWithAlgorithm = jwt$VerifyOptions & { algorithms: Array<jwt$Algorithm> };
declare type jwt$VerifyOptions = $Shape<{
  algorithms: Array<jwt$Algorithm>,
  audience: string | string[],
  issuer: string | string[],
  ignoreExpiration: boolean,
  ignoreNotBefore: boolean,
  subject: string | string[],
  clockTolerance: number,
  maxAge: string | number,
  clockTimestamp: number
}>;

declare type jwt$DecodingOptions = $Shape<{
  complete: boolean,
  json: boolean
}>;

declare interface jwt$Sign {
  <P: jwt$Encodable>
  (payload: P, secretOrPrivateKey: string | Buffer): string;

  <P: jwt$Encodable>
  (payload: P, secretOrPrivateKey: string | Buffer, callback: jwt$SignCallback): string;

  <P: jwt$Encodable, H>
  (payload: P, secretOrPrivateKey: jwt$Key, options: jwt$SigningOptionsWithAlgorithm<H>): string;

  <P: jwt$Encodable, H>
  (payload: P, secretOrPrivateKey: string | Buffer, options: $Shape<jwt$SigningOptions<H>>): string;

  <P: jwt$Encodable, H>
  (payload: P, secretOrPrivateKey: string | Buffer, options: $Shape<jwt$SigningOptions<H>>, callback: jwt$SignCallback): string;

  <P: jwt$Encodable, H>
  (payload: P, secretOrPrivateKey: jwt$Key, options: jwt$SigningOptionsWithAlgorithm<H>, callback: jwt$SignCallback): string;
}

declare type jwt$Payload = Object & {
  jti?: string,
  iss?: string,
  sub?: string,
  aud?: string | string[],
  exp?: number,
  iat?: number,
  nbf?: number
}

declare type jwt$Token = {
  header: { typ: 'JWT', alg: jwt$Algorithm },
  payload: jwt$Payload,
  signature?: string,
}

declare interface jwt$Decode {
  (jwt: string): jwt$Payload;

  (jwt: string, options: jwt$DecodingOptions): jwt$Payload;

  (jwt: string, options: jwt$DecodingOptions & { complete: true }): jwt$Token;
}

declare interface jwt$Verify {
  (jwt: string, secretOrPrivateKey: string | Buffer): jwt$Payload;

  (jwt: string, secretOrPrivateKey: string | Buffer, options: jwt$VerifyOptions | jwt$VerifyCallback): jwt$Payload;

  (jwt: string, secretOrPrivateKey: string | Buffer, options: jwt$VerifyOptions, callback: jwt$VerifyCallback): jwt$Payload;

  (jwt: string, secretOrPrivateKey: jwt$Key, options: jwt$VerifyOptionsWithAlgorithm): jwt$Payload;

  (jwt: string, secretOrPrivateKey: jwt$Key, options: jwt$VerifyOptionsWithAlgorithm, callback: jwt$VerifyCallback): jwt$Payload;
}

declare class jwt$TokenExpiredError extends Error {
}

declare class jwt$WebTokenError extends Error {
}

declare class jwt$NotBeforeError extends Error {
}

declare module "jsonwebtoken" {
  declare type Payload = jwt$Payload
  declare type Token = jwt$Token

  declare type DecodingOptions = jwt$DecodingOptions
  declare type VerifyOptions = jwt$VerifyOptions
  declare type VerifyOptionsWithAlgorithm = jwt$VerifyOptionsWithAlgorithm
  declare type VerifyCallback = jwt$VerifyCallback
  declare type SignCallback = jwt$SignCallback

  declare type Key = jwt$Key
  declare type Algorithm = jwt$Algorithm

  declare module.exports: {
    sign: jwt$Sign,
    decode: jwt$Decode,
    verify: jwt$Verify,
    JsonWebTokenError: Class<jwt$WebTokenError>,
    NotBeforeError: Class<jwt$NotBeforeError>,
    TokenExpiredError: Class<jwt$TokenExpiredError>
  }
}
