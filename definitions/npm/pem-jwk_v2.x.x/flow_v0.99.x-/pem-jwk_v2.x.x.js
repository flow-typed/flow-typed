declare module 'pem-jwk' {
  declare module.exports: {
  	pem2jwk(pwm: string): { ... } | Error,
    jwk2pem(jwk: { ... }): string | Error
  };
}
