declare module 'pem-jwk' {
  declare module.exports: {
    jwk2pem: (jwk: Object) => string | Error
  };
}
