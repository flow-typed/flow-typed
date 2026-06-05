declare module 'jsonwebtoken' {
  declare type Algorithm =
    | 'HS256'
    | 'HS384'
    | 'HS512'
    | 'RS256'
    | 'RS384'
    | 'RS512'
    | 'ES256'
    | 'ES384'
    | 'ES512'
    | 'PS256'
    | 'PS384'
    | 'PS512'
    | 'none';

  declare class JsonWebTokenError extends Error {
    inner: Error;
  }

  declare class TokenExpiredError extends JsonWebTokenError {
    expiredAt: Date;
  }

  declare class NotBeforeError extends JsonWebTokenError {
    date: Date;
  }

  declare type Secret = string | { key: string, passphrase: string, ... };

  declare type SignOptions = {
    algorithm?: Algorithm,
    keyid?: string,
    expiresIn?: string | number,
    notBefore?: string | number,
    audience?: string | Array<string>,
    subject?: string,
    issuer?: string,
    jwtid?: string,
    mutatePayload?: boolean,
    noTimestamp?: boolean,
    header?: { ... },
    encoding?: string,
    allowInsecureKeySizes?: boolean,
    allowInvalidAsymmetricKeyTypes?: boolean,
    ...
  };

  declare type VerifyOptions = {
    algorithms?: Array<Algorithm>,
    audience?: string | RegExp | Array<string | RegExp>,
    clockTimestamp?: number,
    clockTolerance?: number,
    complete?: boolean,
    issuer?: string | Array<string>,
    ignoreExpiration?: boolean,
    ignoreNotBefore?: boolean,
    jwtid?: string,
    nonce?: string,
    subject?: string,
    maxAge?: string | number,
    allowInvalidAsymmetricKeyTypes?: boolean,
    ...
  };

  declare type DecodeOptions = {
    complete?: boolean,
    json?: boolean,
    ...
  };

  declare type JwtHeader = {
    alg: string,
    typ?: string,
    kid?: string,
    ...
  };

  declare type JwtPayload = { [string]: mixed };

  declare type Jwt = {
    header: JwtHeader,
    payload: JwtPayload | string,
    signature: string,
    ...
  };

  declare type SignCallback = (
    error: Error | null,
    encoded: string | void,
  ) => void;

  declare type VerifyCallback = (
    error: JsonWebTokenError | NotBeforeError | TokenExpiredError | null,
    decoded: mixed,
  ) => void;

  declare type GetPublicKeyOrSecret = (
    header: JwtHeader,
    callback: (err: Error | null, secret?: Secret) => void,
  ) => void;

  declare module.exports: {
    sign(
      payload: string | { ... },
      secretOrPrivateKey: Secret,
      optionsOrCallback?: SignOptions | SignCallback,
      callback?: SignCallback,
    ): string,
    verify(
      token: string,
      secretOrPublicKey: Secret | GetPublicKeyOrSecret,
      optionsOrCallback?: VerifyOptions | VerifyCallback,
      callback?: VerifyCallback,
    ): JwtPayload | string,
    decode(
      token: string,
      options?: DecodeOptions,
    ): JwtPayload | string | null,
    JsonWebTokenError: typeof JsonWebTokenError,
    NotBeforeError: typeof NotBeforeError,
    TokenExpiredError: typeof TokenExpiredError,
    ...
  };
}
