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
      validator.isFloat('test');
      validator.isFloat('test', {
        min: 1,
        max: 5,
        gt: 1,
        lt: 5,
        locale: 'pl-Pl',
      });
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isFloat();
      // $FlowExpectedError[incompatible-call]
      validator.isFloat(123);
      // $FlowExpectedError[incompatible-call]
      validator.isFloat('test', 123);
      // $FlowExpectedError[prop-missing]
      validator.isFloat('test', {
        foo: 'bar',
      });
    });
  });

  describe('isFQDN', () => {
    it('works', () => {
      validator.isFQDN('test');
      validator.isFQDN('test', {
        require_tld: true,
        allow_underscores: true,
        allow_trailing_dot: true,
        allow_numeric_tld: true,
        allow_wildcard: true,
      });
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isFQDN();
      // $FlowExpectedError[incompatible-call]
      validator.isFQDN(123);
      // $FlowExpectedError[incompatible-call]
      validator.isFQDN('test', 123);
      // $FlowExpectedError[prop-missing]
      validator.isFQDN('test', {
        foo: 'bar',
      });
    });
  });

  describe('isFullWidth', () => {
    it('works', () => {
      validator.isFullWidth('test');
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isFullWidth();
      // $FlowExpectedError[incompatible-call]
      validator.isFullWidth(123);
      // $FlowExpectedError[extra-arg]
      validator.isFullWidth('test', 'test');
    });
  });

  describe('isHalfWidth', () => {
    it('works', () => {
      validator.isHalfWidth('test');
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isHalfWidth();
      // $FlowExpectedError[incompatible-call]
      validator.isHalfWidth(123);
      // $FlowExpectedError[extra-arg]
      validator.isHalfWidth('test', 'test');
    });
  });

  describe('isHash', () => {
    it('works', () => {
      validator.isHash('test', 'md5');
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isHash();
      // $FlowExpectedError[incompatible-call]
      validator.isHash(123);
      // $FlowExpectedError[incompatible-call]
      validator.isHash('test');
      // $FlowExpectedError[incompatible-call]
      validator.isHash('test', 123);
    });
  });

  describe('isHexadecimal', () => {
    it('works', () => {
      validator.isHexadecimal('test');
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isHexadecimal();
      // $FlowExpectedError[incompatible-call]
      validator.isHexadecimal(123);
      // $FlowExpectedError[extra-arg]
      validator.isHexadecimal('test', 'test');
    });
  });

  describe('isHexColor', () => {
    it('works', () => {
      validator.isHexColor('test');
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isHexColor();
      // $FlowExpectedError[incompatible-call]
      validator.isHexColor(123);
      // $FlowExpectedError[extra-arg]
      validator.isHexColor('test', 'test');
    });
  });

  describe('isHSL', () => {
    it('works', () => {
      validator.isHSL('test');
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isHSL();
      // $FlowExpectedError[incompatible-call]
      validator.isHSL(123);
      // $FlowExpectedError[extra-arg]
      validator.isHSL('test', 'test');
    });
  });

  describe('isIBAN', () => {
    it('works', () => {
      validator.isIBAN('test');
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isIBAN();
      // $FlowExpectedError[incompatible-call]
      validator.isIBAN(123);
      // $FlowExpectedError[extra-arg]
      validator.isIBAN('test', 'test');
    });
  });

  describe('isIdentityCard', () => {
    it('works', () => {
      validator.isIdentityCard('test');
      validator.isIdentityCard('test', 'ES');
      validator.isIdentityCard('test', 'any');
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isIdentityCard();
      // $FlowExpectedError[incompatible-call]
      validator.isIdentityCard(123);
      // $FlowExpectedError[incompatible-call]
      validator.isIdentityCard('test', 'random');
    });
  });

  describe('isIMEI', () => {
    it('works', () => {
      validator.isIMEI('test');
      validator.isIMEI('test', {
        allow_hyphens: true,
      });
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isIMEI();
      // $FlowExpectedError[incompatible-call]
      validator.isIMEI(123);
      // $FlowExpectedError[incompatible-call]
      validator.isIMEI('test', 123);
      // $FlowExpectedError[prop-missing]
      validator.isIMEI('test', {
        foo: 'bar',
      });
      validator.isIMEI('test', {
        // $FlowExpectedError[incompatible-call]
        allow_hyphens: 'test',
      });
    });
  });

  describe('isIn', () => {
    it('works', () => {
      validator.isIn('test', [1, 'test']);
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isIn();
      // $FlowExpectedError[incompatible-call]
      validator.isIn('test');
      // $FlowExpectedError[incompatible-call]
      validator.isIn('test', 'test');
    });
  });

  describe('isInt', () => {
    it('works', () => {
      validator.isInt('test');
      validator.isInt('test', {
        min: 1,
        max: 5,
        allow_leading_zeroes: true,
        lt: 1,
        gt: 2,
      });
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isInt();
      // $FlowExpectedError[incompatible-call]
      validator.isInt(123);
      // $FlowExpectedError[incompatible-call]
      validator.isInt('test', 123);
      // $FlowExpectedError[prop-missing]
      validator.isInt('test', {
        foo: 'bar',
      });
    });
  });

  describe('isIP', () => {
    it('works', () => {
      validator.isIP('test');
      validator.isIP('test', 4);
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isIP();
      // $FlowExpectedError[incompatible-call]
      validator.isIP(123);
      // $FlowExpectedError[incompatible-call]
      validator.isIP('test', 1);
    });
  });

  describe('isIPRange', () => {
    it('works', () => {
      validator.isIPRange('test');
      validator.isIPRange('test', 4);
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isIPRange();
      // $FlowExpectedError[incompatible-call]
      validator.isIPRange(123);
      // $FlowExpectedError[incompatible-call]
      validator.isIPRange('test', 1);
    });
  });

  describe('isISBN', () => {
    it('works', () => {
      validator.isISBN('test');
      validator.isISBN('test', 10);
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isISBN();
      // $FlowExpectedError[incompatible-call]
      validator.isISBN(123);
      // $FlowExpectedError[incompatible-call]
      validator.isISBN('test', 1);
    });
  });

  describe('isISIN', () => {
    it('works', () => {
      validator.isISIN('test');
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isISIN();
      // $FlowExpectedError[incompatible-call]
      validator.isISIN(123);
      // $FlowExpectedError[extra-arg]
      validator.isISIN('test', 'test');
    });
  });

  describe('isISO31661Alpha2', () => {
    it('works', () => {
      validator.isISO31661Alpha2('test');
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isISO31661Alpha2();
      // $FlowExpectedError[incompatible-call]
      validator.isISO31661Alpha2(123);
      // $FlowExpectedError[extra-arg]
      validator.isISO31661Alpha2('test', 'test');
    });
  });

  describe('isISO31661Alpha3', () => {
    it('works', () => {
      validator.isISO31661Alpha3('test');
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isISO31661Alpha3();
      // $FlowExpectedError[incompatible-call]
      validator.isISO31661Alpha3(123);
      // $FlowExpectedError[extra-arg]
      validator.isISO31661Alpha3('test', 'test');
    });
  });

  describe('isISO4217', () => {
    it('works', () => {
      validator.isISO4217('test');
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isISO4217();
      // $FlowExpectedError[incompatible-call]
      validator.isISO4217(123);
      // $FlowExpectedError[extra-arg]
      validator.isISO4217('test', 'test');
    });
  });

  describe('isISO8601', () => {
    it('works', () => {
      validator.isISO8601('test');
      validator.isISO8601('test', {
        strict: true,
      });
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isISO8601();
      // $FlowExpectedError[incompatible-call]
      validator.isISO8601(123);
      // $FlowExpectedError[incompatible-call]
      validator.isISO8601('test', 123);
      // $FlowExpectedError[prop-missing]
      validator.isISO8601('test', {
        foo: 'bar',
      });
      validator.isISO8601('test', {
        // $FlowExpectedError[incompatible-call]
        strict: 'test',
      });
    });
  });

  describe('isISRC', () => {
    it('works', () => {
      validator.isISRC('test');
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isISRC();
      // $FlowExpectedError[incompatible-call]
      validator.isISRC(123);
      // $FlowExpectedError[extra-arg]
      validator.isISRC('test', 'test');
    });
  });

  describe('isISSN', () => {
    it('works', () => {
      validator.isISSN('test');
      validator.isISSN('test', {
        case_sensitive: true,
        require_hyphen: true,
      });
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isISSN();
      // $FlowExpectedError[incompatible-call]
      validator.isISSN(123);
      // $FlowExpectedError[incompatible-call]
      validator.isISSN('test', 123);
      // $FlowExpectedError[prop-missing]
      validator.isISSN('test', {
        foo: 'bar',
      });
      validator.isISSN('test', {
        // $FlowExpectedError[incompatible-call]
        case_sensitive: 'test',
      });
      validator.isISSN('test', {
        // $FlowExpectedError[incompatible-call]
        require_hyphen: 'test',
      });
    });
  });

  describe('isJSON', () => {
    it('works', () => {
      validator.isJSON('test');
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isJSON();
      // $FlowExpectedError[incompatible-call]
      validator.isJSON(123);
      // $FlowExpectedError[extra-arg]
      validator.isJSON('test', 'test');
    });
  });

  describe('isJWT', () => {
    it('works', () => {
      validator.isJWT('test');
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isJWT();
      // $FlowExpectedError[incompatible-call]
      validator.isJWT(123);
      // $FlowExpectedError[extra-arg]
      validator.isJWT('test', 'test');
    });
  });

  describe('isLatLong', () => {
    it('works', () => {
      validator.isLatLong('test');
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isLatLong();
      // $FlowExpectedError[incompatible-call]
      validator.isLatLong(123);
      // $FlowExpectedError[extra-arg]
      validator.isLatLong('test', 'test');
    });
  });

  describe('isLength', () => {
    it('works', () => {
      validator.isLength('test');
      validator.isLength('test', {
        min: 1,
        max: 5,
      });
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isLength();
      // $FlowExpectedError[incompatible-call]
      validator.isLength(123);
      // $FlowExpectedError[incompatible-call]
      validator.isLength('test', 123);
      // $FlowExpectedError[prop-missing]
      validator.isLength('test', {
        foo: 'bar',
      });
      validator.isLength('test', {
        // $FlowExpectedError[incompatible-call]
        min: 'test',
      });
      validator.isLength('test', {
        // $FlowExpectedError[incompatible-call]
        max: 'test',
      });
    });
  });

  describe('isLicensePlate', () => {
    it('works', () => {
      validator.isLicensePlate('test');
      validator.isLicensePlate('test', 'cs-CZ');
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isLicensePlate();
      // $FlowExpectedError[incompatible-call]
      validator.isLicensePlate(123);
      // $FlowExpectedError[incompatible-call]
      validator.isLicensePlate('test', 'test');
    });
  });

  describe('isLocale', () => {
    it('works', () => {
      validator.isLocale('test');
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isLocale();
      // $FlowExpectedError[incompatible-call]
      validator.isLocale(123);
      // $FlowExpectedError[extra-arg]
      validator.isLocale('test', 'test');
    });
  });

  describe('isLowercase', () => {
    it('works', () => {
      validator.isLowercase('test');
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isLowercase();
      // $FlowExpectedError[incompatible-call]
      validator.isLowercase(123);
      // $FlowExpectedError[extra-arg]
      validator.isLowercase('test', 'test');
    });
  });

  describe('isMACAddress', () => {
    it('works', () => {
      validator.isMACAddress('test');
      validator.isMACAddress('test', {
        no_colons: true,
      });
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isMACAddress();
      // $FlowExpectedError[incompatible-call]
      validator.isMACAddress(123);
      // $FlowExpectedError[incompatible-call]
      validator.isMACAddress('test', 123);
      // $FlowExpectedError[prop-missing]
      validator.isMACAddress('test', {
        foo: 'bar',
      });
      validator.isMACAddress('test', {
        // $FlowExpectedError[incompatible-call]
        no_colons: 'test',
      });
    });
  });

  describe('isMagnetURI', () => {
    it('works', () => {
      validator.isMagnetURI('test');
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isMagnetURI();
      // $FlowExpectedError[incompatible-call]
      validator.isMagnetURI(123);
      // $FlowExpectedError[extra-arg]
      validator.isMagnetURI('test', 'test');
    });
  });

  describe('isMD5', () => {
    it('works', () => {
      validator.isMD5('test');
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isMD5();
      // $FlowExpectedError[incompatible-call]
      validator.isMD5(123);
      // $FlowExpectedError[extra-arg]
      validator.isMD5('test', 'test');
    });
  });

  describe('isMimeType', () => {
    it('works', () => {
      validator.isMimeType('test');
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isMimeType();
      // $FlowExpectedError[incompatible-call]
      validator.isMimeType(123);
      // $FlowExpectedError[extra-arg]
      validator.isMimeType('test', 'test');
    });
  });

  describe('isMobilePhone', () => {
    it('works', () => {
      validator.isMobilePhone('test');
      validator.isMobilePhone('test', 'any');
      validator.isMobilePhone('test', 'zh-TW');
      validator.isMobilePhone('test', 'en-CA');
      validator.isMobilePhone('test', 'en-CA', {
        strictMode: true,
      });
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isMobilePhone();
      // $FlowExpectedError[incompatible-call]
      validator.isMobilePhone(123);
      // $FlowExpectedError[incompatible-call]
      validator.isMobilePhone('test', 'test');
      // $FlowExpectedError[prop-missing]
      validator.isMobilePhone('test', 'en-CA', {
        foo: 'bar',
      });
      validator.isMobilePhone('test', 'en-CA', {
        // $FlowExpectedError[incompatible-call]
        strictMode: 'test',
      });
    })
  });

  describe('isMongoId', () => {
    it('works', () => {
      validator.isMongoId('test');
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isMongoId();
      // $FlowExpectedError[incompatible-call]
      validator.isMongoId(123);
      // $FlowExpectedError[extra-arg]
      validator.isMongoId('test', 'test');
    });
  });

  describe('isMultibyte', () => {
    it('works', () => {
      validator.isMultibyte('test');
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isMultibyte();
      // $FlowExpectedError[incompatible-call]
      validator.isMultibyte(123);
      // $FlowExpectedError[extra-arg]
      validator.isMultibyte('test', 'test');
    });
  });

  describe('isNumeric', () => {
    it('works', () => {
      validator.isNumeric('test');
      validator.isNumeric('test', {
        no_symbols: true,
      });
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isNumeric();
      // $FlowExpectedError[incompatible-call]
      validator.isNumeric(123);
      // $FlowExpectedError[incompatible-call]
      validator.isNumeric('test', 123);
      // $FlowExpectedError[prop-missing]
      validator.isNumeric('test', {
        foo: 'bar',
      });
      validator.isNumeric('test', {
        // $FlowExpectedError[incompatible-call]
        no_symbols: 'test',
      });
    });
  });

  describe('isOctal', () => {
    it('works', () => {
      validator.isOctal('test');
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isOctal();
      // $FlowExpectedError[incompatible-call]
      validator.isOctal(123);
      // $FlowExpectedError[extra-arg]
      validator.isOctal('test', 'test');
    });
  });

  describe('isPassportNumber', () => {
    it('works', () => {
      validator.isPassportNumber('test');
      validator.isPassportNumber('test', 'test');
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isPassportNumber();
      // $FlowExpectedError[incompatible-call]
      validator.isPassportNumber(123);
      // $FlowExpectedError[incompatible-call]
      validator.isPassportNumber('test', 123);
    });
  });

  describe('isPort', () => {
    it('works', () => {
      validator.isPort('test');
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isPort();
      // $FlowExpectedError[incompatible-call]
      validator.isPort(123);
      // $FlowExpectedError[extra-arg]
      validator.isPort('test', 'test');
    });
  });

  describe('isPostalCode', () => {
    it('works', () => {
      validator.isPostalCode('test', 'ZM');
      validator.isPostalCode('test', 'any');
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isPostalCode();
      // $FlowExpectedError[incompatible-call]
      validator.isPostalCode(123);
      // $FlowExpectedError[incompatible-call]
      validator.isPostalCode('test', 'test');
    });
  });

  describe('isRFC3339', () => {
    it('works', () => {
      validator.isRFC3339('test');
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isRFC3339();
      // $FlowExpectedError[incompatible-call]
      validator.isRFC3339(123);
      // $FlowExpectedError[extra-arg]
      validator.isRFC3339('test', 'test');
    });
  });

  describe('isRgbColor', () => {
    it('works', () => {
      validator.isRgbColor('test');
      validator.isRgbColor('test', true);
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isRgbColor();
      // $FlowExpectedError[incompatible-call]
      validator.isRgbColor(123);
      // $FlowExpectedError[incompatible-call]
      validator.isRgbColor('test', 'test');
    });
  });

  describe('isSemVer', () => {
    it('works', () => {
      validator.isSemVer('test');
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isSemVer();
      // $FlowExpectedError[incompatible-call]
      validator.isSemVer(123);
      // $FlowExpectedError[extra-arg]
      validator.isSemVer('test', 'test');
    });
  });

  describe('isSlug', () => {
    it('works', () => {
      validator.isSlug('test');
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isSlug();
      // $FlowExpectedError[incompatible-call]
      validator.isSlug(123);
      // $FlowExpectedError[extra-arg]
      validator.isSlug('test', 'test');
    });
  });

  describe('isStrongPassword', () => {
    it('works', () => {
      validator.isStrongPassword('test');
      validator.isStrongPassword('test', {
        minLength: 1,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
        returnScore: true,
        pointsPerUnique: 1,
        pointsPerRepeat: 1,
        pointsForContainingLower: 1,
        pointsForContainingUpper: 1,
        pointsForContainingNumber: 1,
        pointsForContainingSymbol: 1,
      });
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isStrongPassword();
      // $FlowExpectedError[incompatible-call]
      validator.isStrongPassword(123);
      // $FlowExpectedError[incompatible-call]
      validator.isStrongPassword('test', 'test');
      // $FlowExpectedError[prop-missing]
      validator.isStrongPassword('test', {
        foo: 'bar',
      });
    });
  });

  describe('isSurrogatePair', () => {
    it('works', () => {
      validator.isSurrogatePair('test');
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isSurrogatePair();
      // $FlowExpectedError[incompatible-call]
      validator.isSurrogatePair(123);
      // $FlowExpectedError[extra-arg]
      validator.isSurrogatePair('test', 'test');
    });
  });

  describe('isTaxID', () => {
    it('works', () => {
      validator.isTaxID('test');
      validator.isTaxID('test', 'test');
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isTaxID();
      // $FlowExpectedError[incompatible-call]
      validator.isTaxID(123);
      // $FlowExpectedError[incompatible-call]
      validator.isTaxID('test', 123);
    });
  });

  describe('isUppercase', () => {
    it('works', () => {
      validator.isUppercase('test');
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isUppercase();
      // $FlowExpectedError[incompatible-call]
      validator.isUppercase(123);
      // $FlowExpectedError[extra-arg]
      validator.isUppercase('test', 'test');
    });
  });

  describe('isURL', () => {
    it('works', () => {
      validator.isURL('test');
      validator.isURL('test', {
        protocols: ['test'],
        require_tld: true,
        require_protocol: true,
        require_host: true,
        require_port: true,
        require_valid_protocol: true,
        allow_underscores: true,
        host_whitelist: ['', / /],
        host_blacklist: ['', / /],
        allow_trailing_dot: true,
        allow_protocol_relative_urls: true,
        disallow_auth: true,
        allow_fragments: true,
        allow_query_components: true,
      });
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isURL();
      // $FlowExpectedError[incompatible-call]
      validator.isURL(123);
      // $FlowExpectedError[incompatible-call]
      validator.isURL('test', 'test');
      // $FlowExpectedError[prop-missing]
      validator.isURL('test', {
        foo: 'bar',
      });
    });
  });

  describe('isUUID', () => {
    it('works', () => {
      validator.isUUID('test');
      validator.isUUID('test', 4);
      validator.isUUID('test', 'all');
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isUUID();
      // $FlowExpectedError[incompatible-call]
      validator.isUUID(123);
      // $FlowExpectedError[incompatible-call]
      validator.isUUID('test', 1);
    });
  });

  describe('isVariableWidth', () => {
    it('works', () => {
      validator.isVariableWidth('test');
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isVariableWidth();
      // $FlowExpectedError[incompatible-call]
      validator.isVariableWidth(123);
      // $FlowExpectedError[extra-arg]
      validator.isVariableWidth('test', 'test');
    });
  });

  describe('isVAT', () => {
    it('works', () => {
      validator.isVAT('test', 'test');
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isVAT();
      // $FlowExpectedError[incompatible-call]
      validator.isVAT('test');
      // $FlowExpectedError[incompatible-call]
      validator.isVAT('test', 123);
    });
  });

  describe('isWhitelisted', () => {
    it('works', () => {
      validator.isWhitelisted('test', 'test');
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.isWhitelisted();
      // $FlowExpectedError[incompatible-call]
      validator.isWhitelisted('test');
      // $FlowExpectedError[incompatible-call]
      validator.isWhitelisted('test', 123);
    });
  });

  describe('ltrim', () => {
    it('works', () => {
      validator.ltrim('test');
      validator.ltrim('test', 'test');
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.ltrim();
      // $FlowExpectedError[incompatible-call]
      validator.ltrim(123);
      // $FlowExpectedError[incompatible-call]
      validator.ltrim('test', 123);
    });
  });

  describe('matches', () => {
    it('works', () => {
      validator.matches('test', / /);
      validator.matches('test', 'test');
      validator.matches('test', 'test', 'test');
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      validator.matches();
      // $FlowExpectedError[incompatible-call]
      validator.matches('test');
      // $FlowExpectedError[incompatible-call]
      validator.matches('test', / /, 'test');
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
