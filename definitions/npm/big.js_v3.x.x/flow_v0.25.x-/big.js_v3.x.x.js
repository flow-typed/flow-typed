declare module "big.js" {
  declare type $npm$big$number$object = number | string | Big;
  declare type $npm$cmp$result = -1 | 0 | 1;
  declare type DIGIT = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  declare type ROUND_DOWN = 0;
  declare type ROUND_HALF_UP = 1;
  declare type ROUND_HALF_EVEN = 2;
  declare type ROUND_UP = 3;
  declare type RM = ROUND_DOWN | ROUND_HALF_UP | ROUND_HALF_EVEN | ROUND_UP;

  declare class Big {
    // Properties
    static DP: number;
    static RM: RM;
    static E_NEG: number;
    static E_POS: number;

    c: Array<DIGIT>;
    e: number;
    s: -1 | 1;

    // Constructors
    static (value: $npm$big$number$object): Big;
    constructor(value: $npm$big$number$object): Big;

    // Methods
    abs(): Big;
    cmp(n: $npm$big$number$object): $npm$cmp$result;
    div(n: $npm$big$number$object): Big;
    eq(n: $npm$big$number$object): boolean;
    gt(n: $npm$big$number$object): boolean;
    gte(n: $npm$big$number$object): boolean;
    lt(n: $npm$big$number$object): boolean;
    lte(n: $npm$big$number$object): boolean;
    minus(n: $npm$big$number$object): Big;
    mod(n: $npm$big$number$object): Big;
    plus(n: $npm$big$number$object): Big;
    pow(exp: number): Big;
    round(dp: ?number, rm: ?RM): Big;
    sqrt(): Big;
    times(n: $npm$big$number$object): Big;
    toExponential(dp: ?number): string;
    toFixed(dp: ?number): string;
    toPrecision(sd: ?number): string;
    toString(): string;
    valueOf(): string;
    toJSON(): string;
  }

  declare module.exports: typeof Big;
}
