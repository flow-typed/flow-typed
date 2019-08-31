declare module 'pem-jwk' {
  declare module.exports: {
  	pem2jwk(pwm: string): Object | Error,
    jwk2pem(jwk: Object): string | Error
  };
}
