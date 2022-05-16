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
      validator.isBoolean('test');
      validator.isBoolean('test', {
        loose: true,
      });
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isBoolean();
      // $FlowExpectedError[incompatible-call]
      validator.isBoolean(123);
      // $FlowExpectedError[incompatible-call]
      validator.isBoolean('test', 123);
      // $FlowExpectedError[prop-missing]
      validator.isBoolean('test', {
        foo: 'bar',
      });
      validator.isBoolean('test', {
        // $FlowExpectedError[incompatible-call]
        loose: 'test',
      });
    });
  });

  describe('isBtcAddress', () => {
    it('works', () => {
      validator.isBtcAddress('test');
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isBtcAddress();
      // $FlowExpectedError[incompatible-call]
      validator.isBtcAddress(123);
      // $FlowExpectedError[extra-arg]
      validator.isBtcAddress('test', 'test');
    });
  });

  describe('isByteLength', () => {
    it('works', () => {
      validator.isByteLength('test');
      validator.isByteLength('test', {
        min: 1,
        max: 5,
      });
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isByteLength();
      // $FlowExpectedError[incompatible-call]
      validator.isByteLength(123);
      // $FlowExpectedError[incompatible-call]
      validator.isByteLength('test', 123);
      // $FlowExpectedError[prop-missing]
      validator.isByteLength('test', {
        foo: 'bar',
      });
      validator.isByteLength('test', {
        // $FlowExpectedError[incompatible-call]
        min: 'test',
      });
      validator.isByteLength('test', {
        // $FlowExpectedError[incompatible-call]
        max: 'test',
      });
    });
  });

  describe('isCreditCard', () => {
    it('works', () => {
      validator.isCreditCard('test');
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isCreditCard();
      // $FlowExpectedError[incompatible-call]
      validator.isCreditCard(123);
      // $FlowExpectedError[extra-arg]
      validator.isCreditCard('test', 'test');
    });
  });

  describe('isCurrency', () => {
    it('works', () => {
      validator.isCurrency('test');
      validator.isCurrency('test', {
        symbol: '$',
        require_symbol: true,
        allow_space_after_symbol: true,
        symbol_after_digits: true,
        allow_negatives: true,
        parens_for_negatives: true,
        negative_sign_before_digits: true,
        negative_sign_after_digits: true,
        allow_negative_sign_placeholder: true,
        thousands_separator: '.',
        decimal_separator: ',',
        allow_decimal: true,
        require_decimal: true,
        digits_after_decimal: [1],
        allow_space_after_digits: true,
      });
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isCurrency();
      // $FlowExpectedError[incompatible-call]
      validator.isCurrency(123);
      // $FlowExpectedError[prop-missing]
      validator.isCurrency('test', {
        foo: 'bar',
      });
    });
  });

  describe('isDataURI', () => {
    it('works', () => {
      validator.isDataURI('test');
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isDataURI();
      // $FlowExpectedError[incompatible-call]
      validator.isDataURI(123);
      // $FlowExpectedError[extra-arg]
      validator.isDataURI('test', 'test');
    });
  });

  describe('isDate', () => {
    it('works', () => {
      validator.isDate('test');
      validator.isDate('test', {
        format: 'test',
        strictMode: true,
        delimiters: ['/'],
      });
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isDate();
      // $FlowExpectedError[incompatible-call]
      validator.isDate(123);
      // $FlowExpectedError[prop-missing]
      validator.isDate('test', {
        foo: 'bar',
      });
      validator.isDate('test', {
        // $FlowExpectedError[incompatible-call]
        format: 123,
      });
      validator.isDate('test', {
        // $FlowExpectedError[incompatible-call]
        strictMode: 'test',
      });
      validator.isDate('test', {
        // $FlowExpectedError[incompatible-call]
        delimiters: [1],
      });
    });
  });

  describe('isDecimal', () => {
    it('works', () => {
      validator.isDecimal('test');
      validator.isDecimal('test', {
        force_decimal: true,
        decimal_digits: 'test',
        locale: 'en-US',
      });
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isDecimal();
      // $FlowExpectedError[incompatible-call]
      validator.isDecimal(123);
      // $FlowExpectedError[incompatible-call]
      validator.isDecimal('test', 123);
      // $FlowExpectedError[prop-missing]
      validator.isDecimal('test', {
        foo: 'bar',
      });
      validator.isDecimal('test', {
        // $FlowExpectedError[incompatible-call]
        force_decimal: 'test',
      });
      validator.isDecimal('test', {
        // $FlowExpectedError[incompatible-call]
        decimal_digits: true,
      });
      validator.isDecimal('test', {
        // $FlowExpectedError[incompatible-call]
        locale: 'test',
      });
    });
  });

  describe('isDivisibleBy', () => {
    it('works', () => {
      validator.isDivisibleBy('test', 123);
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isDivisibleBy();
      // $FlowExpectedError[incompatible-call]
      validator.isDivisibleBy('test');
      // $FlowExpectedError[incompatible-call]
      validator.isDivisibleBy('test', 'test');
    });
  });

  describe('isEAN', () => {
    it('works', () => {
      validator.isEAN('test');
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isEAN();
      // $FlowExpectedError[incompatible-call]
      validator.isEAN(123);
      // $FlowExpectedError[extra-arg]
      validator.isEAN('test', 'test');
    });
  });

  describe('isEmail', () => {
    it('works', () => {
      validator.isEmail('test');
      validator.isEmail('test', {
        allow_display_name: true,
        require_display_name: true,
        allow_utf8_local_part: true,
        require_tld: true,
        ignore_max_length: true,
        allow_ip_domain: true,
        domain_specific_validation: true,
        host_blacklist: ['test'],
      });
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isEmail();
      // $FlowExpectedError[incompatible-call]
      validator.isEmail(123);
      // $FlowExpectedError[incompatible-call]
      validator.isEmail('test', 123);
      // $FlowExpectedError[prop-missing]
      validator.isEmail('test', {
        foo: 'bar',
      });
    });
  });

  describe('isEmpty', () => {
    it('works', () => {
      validator.isEmpty('test');
      validator.isEmpty('test', {
        ignore_whitespace: true,
      });
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isEmpty();
      // $FlowExpectedError[incompatible-call]
      validator.isEmpty(123);
      // $FlowExpectedError[incompatible-call]
      validator.isEmpty('test', 123);
      // $FlowExpectedError[prop-missing]
      validator.isEmpty('test', {
        foo: 'bar',
      });
      validator.isEmpty('test', {
        // $FlowExpectedError[incompatible-call]
        ignore_whitespace: 'test',
      });
    });
  });

  describe('isEthereumAddress', () => {
    it('works', () => {
      validator.isEthereumAddress('test');
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isEthereumAddress();
      // $FlowExpectedError[incompatible-call]
      validator.isEthereumAddress(123);
      // $FlowExpectedError[extra-arg]
      validator.isEthereumAddress('test', 'test');
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
