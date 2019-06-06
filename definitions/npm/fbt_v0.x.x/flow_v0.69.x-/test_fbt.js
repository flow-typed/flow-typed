// @flow
import React from 'react';
import { describe, it } from 'flow-typed-test';

import fbt, { IntlVariations, IntlViewerContext, init, fbt as fbt2 } from 'fbt';

describe('IntlViewerContext', () => {
  it('should mutate locale property', () => {
    IntlViewerContext.locale = 'ru_RU';
  });

  it('should raise an error when mutate locale property not string', () => {
    // $ExpectError: need string
    IntlViewerContext.locale = 123;
  });

  it('should mutate GENDER property', () => {
    IntlViewerContext.GENDER = IntlVariations.GENDER_FEMALE;
  });

  it('should raise an error when mutate GENDER not opaque type', () => {
    // $ExpectError: need opaque type from IntlVariations
    IntlViewerContext.GENDER = 1;
  });

  it('should raise an error when mutate missing prop', () => {
    // $ExpectError: `abcd` is missing in IntlViewerContext
    IntlViewerContext.abcd = 123;
  });
});

describe('init', () => {
  it('should raise an error when call init without arguments', () => {
    // $ExpectError: first argument is required
    init();
  });

  it('should raise an error when call init with invalid argument', () => {
    // $ExpectError: first argument must be an object
    init(11);

    // $ExpectError: `translations` is missing in first argument
    init({});
  });

  it('should pass when used properly', () => {
    init({
      translations: {
        ru_RU: {
          mur: 'Приветули!',
        },
      },
    });
  });
});

describe('fbt as function', () => {
  it('should pass when used fbt as export var', () => {
    const fbtResult: string = fbt2('text', 'desc');
  });

  it('should pass when used properly', () => {
    const fbtResult = fbt('text', 'desc');

    const s: string = fbtResult + '';
    const s2: string = fbtResult.toString();

    fbt('text', 'desc', {});

    fbt('text', 'desc', {
      subject: IntlVariations.GENDER_UNKNOWN,
      author: 'murAmur',
      project: 'flow-typed',
      preserveWhitespace: false,
      common: false,
      doNotExtract: false,
    });
  });

  it('should raise an error when call `fbt` with invalid argument', () => {
    // $ExpectError: first argument is required
    fbt();

    // $ExpectError: first argument must be a string
    fbt(1);

    // $ExpectError: second argument is required
    fbt('str');

    // $ExpectError: second argument must be a string
    fbt('str', 1);

    // $ExpectError: third argument must be an object
    fbt('str', 'str', 111);

    fbt('str', 'str', {
      // $ExpectError: invalid value
      subject: 1,
    });

    // $ExpectError: `abcd` is missing in options
    fbt('str', 'str', { abcd: 69 });
  });
});

describe('fbt.param()', () => {
  it('should pass when used properly', () => {
    fbt.param('age', 18);
    fbt.param('age', 18, {});
    fbt.param('age', 18, { number: true });
    fbt.param('age', 18, { number: 1 });
    fbt.param('age', 18, { gender: IntlVariations.GENDER_UNKNOWN });
    fbt.param('age', 18, { gender: IntlVariations.GENDER_FEMALE });
  });

  it('should raise an error when call `.param()` with invalid argument', () => {
    // $ExpectError: first argument must be a string
    fbt.param(12, 18);
    // $ExpectError: third argument must be an object
    fbt.param('age', 18, 11);
    // $ExpectError: `abcd` is missing
    fbt.param('age', 18, { abcd: true });
    // $ExpectError
    fbt.param('age', 18, { number: 'need numeber' });

    // $ExpectError: BITMASK_GENDER is missing in enum
    fbt.param('age', 18, { gender: IntlVariations.BITMASK_GENDER });
  });
});

describe('fbt.sameParam()', () => {
  it('should pass when used properly', () => {
    fbt.sameParam('mur');
  });

  it('should raise an error when call `.sameParam()` with invalid argument', () => {
    // $ExpectError: first argument must be a string
    fbt.sameParam(12);
  });
});

describe('fbt.name()', () => {
  it('should pass when used properly', () => {
    fbt.name('test', IntlVariations.GENDER_FEMALE);
  });

  it('should raise an error when call `.name()` with invalid argument', () => {
    // $ExpectError: first argument must be a string
    fbt.name(1, IntlVariations.GENDER_FEMALE);

    // $ExpectError: `BITMASK_GENDER` is missing in enum
    fbt.name('test', IntlVariations.BITMASK_GENDER);
  });
});

describe('fbt.enum()', () => {
  it('should pass when used properly', () => {
    fbt.enum(1, ['test', 'test2']);
    fbt.enum('BOAT', {
      CAR: 'car',
      HOUSE: 'house',
      BOAT: 'boat',
      HOUSEBOAT: 'houseboat',
    });
  });

  it('should raise an error when call `.sameParam()` with invalid argument', () => {
    // $ExpectError: first argument must be a number
    fbt.enum('1', ['test', 'test2']);

    // $ExpectError: first argument must be one key from object
    fbt.enum('MISSING_KEY', { CAR: 'car' });
  });
});
