// @flow
import { describe, it } from 'flow-typed-test';
import validator from 'validator';

describe('validator', () => {
  describe('blacklist', () => {
    it('works', () => {
      validator.blacklist('test', '\\[\\]');
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.blacklist();
      // $FlowExpectedError[incompatible-call]
      validator.blacklist('test');
      // $FlowExpectedError[incompatible-call]
      validator.blacklist('test', 123);
    });
  });

  describe('contains', () => {
    it('works', () => {
      validator.contains('test', 'test');
      validator.contains('test', 5, {
        ignoreCase: true,
        minOccurrences: 5,
      });
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.contains();
      // $FlowExpectedError[incompatible-call]
      validator.contains('test');
      // $FlowExpectedError[prop-missing]
      validator.contains('test', 1, {
        foo: 'bar',
      });
      validator.contains('test', 1, {
        // $FlowExpectedError[incompatible-call]
        ignoreCase: 'test',
      });
      validator.contains('test', 1, {
        // $FlowExpectedError[incompatible-call]
        minOccurrences: 'test',
      });
    });
  });

  describe('equals', () => {
    it('works', () => {
      validator.equals('test', 'test');
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.equals();
      // $FlowExpectedError[incompatible-call]
      validator.equals('test');
      // $FlowExpectedError[incompatible-call]
      validator.equals(123);
      // $FlowExpectedError[incompatible-call]
      validator.equals('test', 123);
    });
  });

  describe('escape', () => {
    it('works', () => {
      (validator.escape('test'): string);
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-cast]
      (validator.escape('test'): boolean);
      // $FlowExpectedError[incompatible-call]
      validator.escape();
      // $FlowExpectedError[extra-arg]
      validator.escape('test', 'test');
    });
  });

  describe('isAfter', () => {
    it('works', () => {
      validator.isAfter('test');
      validator.isAfter('test', Date.now());
      validator.isAfter('test', 'test');
      validator.isAfter('test', new Date());
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isAfter();
      // $FlowExpectedError[incompatible-call]
      validator.isAfter('test', false);
      // $FlowExpectedError[incompatible-call]
      validator.isAfter(123);
    });
  });

  describe('isAlpha', () => {
    it('works', () => {
      validator.isAlpha('test');
      validator.isAlpha('test', 'pl-PL');
      validator.isAlpha('test', 'pl-PL', {
        ignore: 'test',
      });
      validator.isAlpha('test', 'pl-PL', {
        ignore: / /,
      });
      validator.isAlpha('test', 'pl-PL', {});
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isAlpha();
      // $FlowExpectedError[incompatible-call]
      validator.isAlpha(123);
      // $FlowExpectedError[incompatible-call]
      validator.isAlpha('test', 'random');
      // $FlowExpectedError[incompatible-call]
      validator.isAlpha('test', {
        ignore: 123,
      });
      // $FlowExpectedError[incompatible-call]
      validator.isAlpha('test', {
        foo: 'bar',
      });
    });
  });

  describe('isAlphanumeric', () => {
    it('works', () => {
      validator.isAlphanumeric('test');
      validator.isAlphanumeric('test', 'pl-PL');
      validator.isAlphanumeric('test', 'pl-PL', {
        ignore: 'test',
      });
      validator.isAlphanumeric('test', 'pl-PL', {
        ignore: / /,
      });
      validator.isAlphanumeric('test', 'pl-PL', {});
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isAlphanumeric();
      // $FlowExpectedError[incompatible-call]
      validator.isAlphanumeric(123);
      // $FlowExpectedError[incompatible-call]
      validator.isAlphanumeric('test', 'random');
      // $FlowExpectedError[incompatible-call]
      validator.isAlphanumeric('test', {
        ignore: 123,
      });
      // $FlowExpectedError[incompatible-call]
      validator.isAlphanumeric('test', {
        foo: 'bar',
      });
    });
  });

  describe('isAscii', () => {
    it('works', () => {
      validator.isAscii('test');
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isAscii();
      // $FlowExpectedError[incompatible-call]
      validator.isAscii(123);
      // $FlowExpectedError[extra-arg]
      validator.isAscii('test', 'test');
    });
  });

  describe('isBase32', () => {
    it('works', () => {
      validator.isBase32('test');
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isBase32();
      // $FlowExpectedError[incompatible-call]
      validator.isBase32(123);
      // $FlowExpectedError[extra-arg]
      validator.isBase32('test', 'test');
    });
  });

  describe('isBase58', () => {
    it('works', () => {
      validator.isBase58('test');
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isBase58();
      // $FlowExpectedError[incompatible-call]
      validator.isBase58(123);
      // $FlowExpectedError[extra-arg]
      validator.isBase58('test', 'test');
    });
  });

  describe('isBase64', () => {
    it('works', () => {
      validator.isBase64('test');
      validator.isBase64('test', {
        urlSafe: true,
      });
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isBase64();
      // $FlowExpectedError[incompatible-call]
      validator.isBase64(123);
      // $FlowExpectedError[incompatible-call]
      validator.isBase64('test', 'test');
      // $FlowExpectedError[prop-missing]
      validator.isBase64('test', {
        foo: 'bar',
      });
      validator.isBase64('test', {
        // $FlowExpectedError[incompatible-call]
        urlSafe: 'test',
      });
    });
  });

  describe('isBefore', () => {
    it('works', () => {
      validator.isBefore('test');
      validator.isBefore('test', Date.now());
      validator.isBefore('test', 'test');
      validator.isBefore('test', new Date());
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isBefore();
      // $FlowExpectedError[incompatible-call]
      validator.isBefore('test', false);
      // $FlowExpectedError[incompatible-call]
      validator.isBefore(123);
    });
  });

  describe('isBIC', () => {
    it('works', () => {
      validator.isBIC('test');
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isBIC();
      // $FlowExpectedError[incompatible-call]
      validator.isBIC(123);
      // $FlowExpectedError[extra-arg]
      validator.isBIC('test', 'test');
    });
  });

  describe('isBoolean', () => {
    it('works', () => {

    });
  });

  describe('isBtcAddress', () => {
    it('works', () => {

    });
  });

  describe('isByteLength', () => {
    it('works', () => {

    });
  });

  describe('isCreditCard', () => {
    it('works', () => {

    });
  });

  describe('isCurrency', () => {
    it('works', () => {

    });
  });

  describe('isDataURI', () => {
    it('works', () => {

    });
  });

  describe('isDate', () => {
    it('works', () => {

    });
  });

  describe('isDecimal', () => {
    it('works', () => {

    });
  });

  describe('isDivisibleBy', () => {
    it('works', () => {

    });
  });

  describe('isEAN', () => {
    it('works', () => {

    });
  });

  describe('isEmail', () => {
    it('works', () => {

    });
  });

  describe('isEmpty', () => {
    it('works', () => {

    });
  });

  describe('isEthereumAddress', () => {
    it('works', () => {

    });
  });

  describe('isFloat', () => {
    it('works', () => {

    });
  });

  describe('isFQDN', () => {
    it('works', () => {

    });
  });

  describe('isFullWidth', () => {
    it('works', () => {

    });
  });

  describe('isHalfWidth', () => {
    it('works', () => {

    });
  });

  describe('isHash', () => {
    it('works', () => {

    });
  });

  describe('isHexadecimal', () => {
    it('works', () => {

    });
  });

  describe('isHexColor', () => {
    it('works', () => {

    });
  });

  describe('isHSL', () => {
    it('works', () => {

    });
  });

  describe('isIBAN', () => {
    it('works', () => {

    });
  });

  describe('isIdentityCard', () => {
    it('works', () => {

    });
  });

  describe('isIMEI', () => {
    it('works', () => {

    });
  });

  describe('isIn', () => {
    it('works', () => {

    });
  });

  describe('isInt', () => {
    it('works', () => {

    });
  });

  describe('isIP', () => {
    it('works', () => {

    });
  });

  describe('isIPRange', () => {
    it('works', () => {

    });
  });

  describe('isISBN', () => {
    it('works', () => {

    });
  });

  describe('isISIN', () => {
    it('works', () => {

    });
  });

  describe('isISO31661Alpha2', () => {
    it('works', () => {

    });
  });

  describe('isISO31661Alpha3', () => {
    it('works', () => {

    });
  });

  describe('isISO4217', () => {
    it('works', () => {

    });
  });

  describe('isISO8601', () => {
    it('works', () => {

    });
  });

  describe('isISRC', () => {
    it('works', () => {

    });
  });

  describe('isISSN', () => {
    it('works', () => {

    });
  });

  describe('isJSON', () => {
    it('works', () => {

    });
  });

  describe('isJWT', () => {
    it('works', () => {

    });
  });

  describe('isLatLong', () => {
    it('works', () => {

    });
  });

  describe('isLength', () => {
    it('works', () => {

    });
  });

  describe('isLicensePlate', () => {
    it('works', () => {

    });
  });

  describe('isLocale', () => {
    it('works', () => {

    });
  });

  describe('isLowercase', () => {
    it('works', () => {

    });
  });

  describe('isMACAddress', () => {
    it('works', () => {

    });
  });

  describe('isMagnetURI', () => {
    it('works', () => {

    });
  });

  describe('isMD5', () => {
    it('works', () => {

    });
  });

  describe('isMimeType', () => {
    it('works', () => {

    });
  });

  describe('isMobilePhone', () => {
    it('works', () => {

    });
  });

  describe('isMACAddress', () => {
    it('works', () => {

    });
  });

  describe('isMongoId', () => {
    it('works', () => {

    });
  });

  describe('isMultibyte', () => {
    it('works', () => {

    });
  });

  describe('isNumeric', () => {
    it('works', () => {

    });
  });

  describe('isOctal', () => {
    it('works', () => {

    });
  });

  describe('isPassportNumber', () => {
    it('works', () => {

    });
  });

  describe('isPort', () => {
    it('works', () => {

    });
  });

  describe('isPostalCode', () => {
    it('works', () => {

    });
  });

  describe('isRFC3339', () => {
    it('works', () => {

    });
  });

  describe('isRgbColor', () => {
    it('works', () => {

    });
  });

  describe('isSemVer', () => {
    it('works', () => {

    });
  });

  describe('isSlug', () => {
    it('works', () => {

    });
  });

  describe('isStrongPassword', () => {
    it('works', () => {

    });
  });

  describe('isSurrogatePair', () => {
    it('works', () => {

    });
  });

  describe('isTaxID', () => {
    it('works', () => {

    });
  });

  describe('isUppercase', () => {
    it('works', () => {

    });
  });

  describe('isURL', () => {
    it('works', () => {

    });
  });

  describe('isUUID', () => {
    it('works', () => {

    });
  });

  describe('isVariableWidth', () => {
    it('works', () => {

    });
  });

  describe('isVAT', () => {
    it('works', () => {

    });
  });

  describe('isWhitelisted', () => {
    it('works', () => {

    });
  });

  describe('ltrim', () => {
    it('works', () => {

    });
  });

  describe('matches', () => {
    it('works', () => {

    });
  });

  describe('normalizeEmail', () => {
    it('works', () => {

    });
  });

  describe('rtrim', () => {
    it('works', () => {

    });
  });

  describe('stripLow', () => {
    it('works', () => {

    });
  });

  describe('toBoolean', () => {
    it('works', () => {

    });
  });

  describe('toDate', () => {
    it('works', () => {

    });
  });

  describe('toFloat', () => {
    it('works', () => {

    });
  });

  describe('toInt', () => {
    it('works', () => {

    });
  });

  describe('trim', () => {
    it('works', () => {

    });
  });

  describe('whitelist', () => {
    it('works', () => {

    });
  });
});
