// @flow

declare module bcrypt {
  declare function genSaltSync(rounds?: number): string;
  declare function genSalt(rounds: number, callback: (err: Error, salt: string) => void): void;
  declare function genSalt(callback: (err: Error, salt:string) => void): void;
  declare function hashSync(data: any, salt: string): string;
  declare function hashSync(data: any, rounds: number): string;
  declare function hash(data: any, salt: string, callback: (err: Error, encrypted: string) => void): void;
  declare function hash(data: any, rounds: number, callback: (err: Error, encrypted: string) => void): void;
  declare function compareSync(data: any, encrypted: string): boolean;
  declare function compare(data: any, encrypted: string, callback: (err: Error, same: boolean) => void): void;
  declare function getRounds(encrypted: string): number;
}
