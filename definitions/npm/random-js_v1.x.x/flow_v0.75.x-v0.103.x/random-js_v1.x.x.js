declare module "random-js" {
  declare class Engine {}
  declare class MtEngine extends Engine {
    [[call]]: () => number;
    seed(value?: mixed): this;
    seedWithArray(value: mixed[]): this;
    autoSeed(): this;
    discard(count?: number): this;
    getUseCount(): number;
  }
  declare class Random {
    static engines: {
      +nativeMath: Engine,
      +browserCrypto: Engine,
      +mt19937: MtEngine
    };
    static (engine?: Engine): Random;
    constructor(engine?: Engine): Random;
    integer(min: number, max: number, inclusive?: boolean): number;
    real(min: number, max: number, inclusive?: boolean): number;
    bool(): boolean;
    bool(percentage: number): boolean;
    bool(numerator: number, denominator: number): boolean;
    pick<T>(array: T[], begin?: number, end?: number): T;
    shuffle<T>(array: T[]): T[];
    sample<T>(array: T[], sampleSize: number): T[];
    die(sideCount: number): number;
    dice(sideCount: number, dieCount: number): number[];
    uuid(): string;
    string(length: number): string;
    string(length: number, pool: string): string;
    hex(length: number, uppercase?: boolean): string;
    date(start: Date, end: Date): Date;

    static integer(
      min: number,
      max: number,
      inclusive?: boolean
    ): (engine: Engine) => number;
    static real(
      min: number,
      max: number,
      inclusive?: boolean
    ): (engine: Engine) => number;
    static bool(): (engine: Engine) => boolean;
    static bool(percentage: number): (engine: Engine) => boolean;
    static bool(
      numerator: number,
      denominator: number
    ): (engine: Engine) => boolean;
    static pick<T>(engine: Engine, array: T[], begin?: number, end?: number): T;
    static picker<T>(
      array: T[],
      begin?: number,
      end?: number
    ): (engine: Engine) => T;
    static shuffle<T>(engine: Engine, array: T[]): T[];
    static sample<T>(engine: Engine, array: T[], sampleSize: number): T[];
    static die(sideCount: number): (engine: Engine) => number;
    static dice(
      sideCount: number,
      dieCount: number
    ): (engine: Engine) => number[];
    static uuid(engine: Engine): string;
    static string(): (engine: Engine, length: number) => string;
    static string(pool: string): (length: number, engine: Engine) => string;
    static hex(uppercase?: boolean): (length: number, engine: Engine) => string;
    static date(start: Date, end: Date): (engine: Engine) => Date;
  }
  declare module.exports: typeof Random;
}
