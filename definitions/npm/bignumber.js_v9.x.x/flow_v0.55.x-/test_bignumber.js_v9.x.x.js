// @flow

import { describe, it } from "flow-typed-test";

import { BigNumber } from "bignumber.js";

describe("BigNumber main usages", () => {
  it("should validate default usage", () => {
    const x = new BigNumber(123.4567);
    const y = BigNumber("123456.7e-3");
    const z = new BigNumber(x);
    x.isEqualTo(y) && y.isEqualTo(z) && x.isEqualTo(z);
    const a = new BigNumber(1011, 2);
    const b = new BigNumber("zz.9", 36);
    const c = x.plus(y);
    x.minus(y);

    x
      .dividedBy(y)
      .plus(z)
      .times(9);
    x
      .times("1.23456780123456789e+9")
      .plus(9876.5432321)
      .dividedBy("4444562598.111772")
      .integerValue();

    x
      .squareRoot()
      .dividedBy(y)
      .exponentiatedBy(3)
      .isEqualTo(
        x
          .sqrt()
          .div(y)
          .pow(3)
      ); // true
    x
      .modulo(y)
      .multipliedBy(z)
      .eq(x.mod(y).times(z));

    x.toExponential(5);
    x.toFixed(5);
    x.toPrecision(5);
    x.toNumber();

    x.toString(16);
    y.toFormat(2);

    BigNumber.config({ DECIMAL_PLACES: 10, ROUNDING_MODE: 4 });
    x.dividedBy(y);
    z.squareRoot();
    z.exponentiatedBy(-3);
    z.toString(2);
    z.multipliedBy(z).decimalPlaces(10);
    z.toFraction();
    z.toFraction(1000);
  });

  it("supports clone", () => {
    const BN = BigNumber.clone({ DECIMAL_PLACES: 5 });
    const aa = new BigNumber(1);
    const bb = new BN(1);
    aa.div(3);
    bb.div(3);
  });
});
