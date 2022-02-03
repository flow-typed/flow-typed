declare module 'bcrypt' {
  declare type AOrB = 'a' | 'b';

  declare interface Bcrypt {
    /**
     * @param rounds The cost of processing the data. Default 10.
     * @param minor The minor version of bcrypt to use. Either 'a' or 'b'. Default 'b'.
     *
     * @example
     * const bcrypt = require('bcrypt');
     * const saltRounds = 10;
     *
     * const salt = bcrypt.genSaltSync(saltRounds);
     */
    genSaltSync(rounds?: number, minor?: AOrB): string;

    /**
     * @param rounds The cost of processing the data. Default 10.
     * @param minor The minor version of bcrypt to use. Either 'a' or 'b'. Default 'b'.
     * @return A promise to be either resolved with the generated salt or rejected with an Error
     *
     * @example
     * const bcrypt = require('bcrypt');
     * const saltRounds = 10;
     *
     * (async () => {
     *     const salt = await bcrypt.genSalt(saltRounds);
     * })();
     */
    genSalt(rounds?: number, minor?: AOrB): Promise<string>;

    /**
     * @param rounds The cost of processing the data. Default 10.
     * @param minor The minor version of bcrypt to use. Either 'a' or 'b'. Default 'b'.
     * @param callback A callback to be fire once the salt has been generated. Uses eio making it asynchronous.
     *
     * @example
     * const bcrypt = require('bcrypt');
     * const saltRounds = 10;
     *
     * // Technique 1 (generate a salt and hash on separate function calls):
     * bcrypt.genSalt(saltRounds, (err, salt) => {
     *     // ...
     * });
     */
    genSalt(callback: (err: Error | void, salt: string) => void): void;
    genSalt(rounds: number, callback: (err: Error | void, salt: string) => void): void;
    genSalt(
      rounds: number,
      minor: AOrB,
      callback: (err: Error | void, salt: string) => void,
    ): void;

    /**
     * @param data The data to be encrypted.
     * @param saltOrRounds The salt to be used to hash the password. If specified as a number then a
     * salt will be generated with the specified number of rounds and used.
     *
     * @example
     * const bcrypt = require('bcrypt');
     * const saltRounds = 10;
     * const myPlaintextPassword = 's0/\/\P4$$w0rD';
     *
     * // Technique 1 (generate a salt and hash on separate function calls):
     * const salt = bcrypt.genSaltSync(saltRounds);
     * const hash = bcrypt.hashSync(myPlaintextPassword, salt);
     * // Store hash in your password DB.
     *
     * // Technique 2 (auto-gen a salt and hash):
     * const hash2 = bcrypt.hashSync(myPlaintextPassword, saltRounds);
     * // Store hash in your password DB.
     */
    hashSync(data: string | Buffer, saltOrRounds: string | number): string;

    /**
     * @param data The data to be encrypted.
     * @param saltOrRounds The salt to be used in encryption. If specified as a number then a
     * salt will be generated with the specified number of rounds and used.
     * @return A promise to be either resolved with the encrypted data salt or rejected with an Error
     *
     * @example
     * const bcrypt = require('bcrypt');
     * const saltRounds = 10;
     * const myPlaintextPassword = 's0/\/\P4$$w0rD';
     *
     * (async () => {
     *     // Technique 1 (generate a salt and hash on separate function calls):
     *     const salt = await bcrypt.genSalt(saltRounds);
     *     const hash = await bcrypt.hash(myPlaintextPassword, salt);
     *     // Store hash in your password DB.
     *
     *     // Technique 2 (auto-gen a salt and hash):
     *     const hash2 = await bcrypt.hash(myPlaintextPassword, saltRounds);
     *     // Store hash in your password DB.
     * })();
     */
    hash(data: string | Buffer, saltOrRounds: string | number): Promise<string>;

    /**
     * @param data The data to be encrypted.
     * @param saltOrRounds The salt to be used in encryption. If specified as a number then a
     * salt will be generated with the specified number of rounds and used.
     * @param callback A callback to be fired once the data has been encrypted. Uses eio making it asynchronous.
     *
     * @example
     * const bcrypt = require('bcrypt');
     * const saltRounds = 10;
     * const myPlaintextPassword = 's0/\/\P4$$w0rD';
     *
     * // Technique 1 (generate a salt and hash on separate function calls):
     * bcrypt.genSalt(saltRounds, (err, salt) => {
     *     bcrypt.hash(myPlaintextPassword, salt, (err, hash) => {
     *         // Store hash in your password DB.
     *     });
     * });
     *
     * // Technique 2 (auto-gen a salt and hash):
     * bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
     *     // Store hash in your password DB.
     * });
     */
    hash(
      data: string | Buffer,
      saltOrRounds: string | number,
      callback: (err: Error | void, encrypted: string) => void,
    ): void;

    /**
     * @param data The data to be encrypted.
     * @param encrypted The data to be compared against.
     *
     * @example
     * const bcrypt = require('bcrypt');
     * const myPlaintextPassword = 's0/\/\P4$$w0rD';
     * const someOtherPlaintextPassword = 'not_bacon';
     *
     * // Load hash from your password DB.
     * bcrypt.compareSync(myPlaintextPassword, hash); // true
     * bcrypt.compareSync(someOtherPlaintextPassword, hash); // false
     */
    compareSync(data: string | Buffer, encrypted: string): boolean;

    /**
     * @param data The data to be encrypted.
     * @param encrypted The data to be compared against.
     * @return A promise to be either resolved with the comparison result salt or rejected with an Error
     *
     * @example
     * const bcrypt = require('bcrypt');
     * const myPlaintextPassword = 's0/\/\P4$$w0rD';
     * const someOtherPlaintextPassword = 'not_bacon';
     *
     * (async () => {
     *     // Load hash from your password DB.
     *     const result1 = await bcrypt.compare(myPlaintextPassword, hash);
     *     // result1 == true
     *
     *     const result2 = await bcrypt.compare(someOtherPlaintextPassword, hash);
     *     // result2 == false
     * })();
     */
    compare(data: string | Buffer, encrypted: string): Promise<boolean>;

    /**
     * @param data The data to be encrypted.
     * @param encrypted The data to be compared against.
     * @param callback A callback to be fire once the data has been compared. Uses eio making it asynchronous.
     *
     * @example
     * const bcrypt = require('bcrypt');
     * const myPlaintextPassword = 's0/\/\P4$$w0rD';
     * const someOtherPlaintextPassword = 'not_bacon';
     *
     * // Load hash from your password DB.
     * bcrypt.compare(myPlaintextPassword, hash, (err, result) => {
     *     // result == true
     * });
     * bcrypt.compare(someOtherPlaintextPassword, hash, (err, result) => {
     *     // result == false
     * });
     */
    compare(
      data: string | Buffer,
      encrypted: string,
      callback: (err: Error | void, same: boolean) => void,
    ): void;

    /**
     * @param encrypted Hash from which the number of rounds used should be extracted.
     * @returns The number of rounds used to encrypt a given hash.
     */
    getRounds(encrypted: string): number;
  }

  declare module.exports: Bcrypt;
}
