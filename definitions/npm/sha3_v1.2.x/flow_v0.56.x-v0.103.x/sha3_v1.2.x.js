declare module "sha3" {
  declare class SHA3Hash {
    constructor(hashLength?: 224 | 256 | 384 | 512): SHA3Hash;
    update(data: any, inputEncoding?: 'binary' | 'ascii' | 'utf8'): void;
    digest(type?: 'hex' | 'binary'): string;
  }

  declare module.exports: {
    SHA3Hash: Class<SHA3Hash>
  }
}
