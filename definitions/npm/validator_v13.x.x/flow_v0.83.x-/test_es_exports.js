// @flow
import blacklist from 'validator/es/lib/blacklist';
import contains from 'validator/es/lib/contains';
import equals from 'validator/es/lib/equals';
import escape from 'validator/es/lib/escape';
import isAfter from 'validator/es/lib/isAfter';
import isAlpha from 'validator/es/lib/isAlpha';
import isAlphanumeric from 'validator/es/lib/isAlphanumeric';
import isBase32 from 'validator/es/lib/isBase32';
import isBase58 from 'validator/es/lib/isBase58';
import isBase64 from 'validator/es/lib/isBase64';
import isBefore from 'validator/es/lib/isBefore';
import isBIC from 'validator/es/lib/isBIC';
import isBoolean from 'validator/es/lib/isBoolean';
import isBtcAddress from 'validator/es/lib/isBtcAddress';
import isByteLength from 'validator/es/lib/isByteLength';
import isCreditCard from 'validator/es/lib/isCreditCard';
import isCurrency from 'validator/es/lib/isCurrency';
import isDataURI from 'validator/es/lib/isDataURI';
import isDate from 'validator/es/lib/isDate';
import isDecimal from 'validator/es/lib/isDecimal';
import isDivisibleBy from 'validator/es/lib/isDivisibleBy';
import isEAN from 'validator/es/lib/isEAN';
import isEmail from 'validator/es/lib/isEmail';
import isEmpty from 'validator/es/lib/isEmpty';
import isEthereumAddress from 'validator/es/lib/isEthereumAddress';
import isFloat from 'validator/es/lib/isFloat';
import isFQDN from 'validator/es/lib/isFQDN';
import isFullWidth from 'validator/es/lib/isFullWidth';
import isHalfWidth from 'validator/es/lib/isHalfWidth';
import isHash from 'validator/es/lib/isHash';
import isHexadecimal from 'validator/es/lib/isHexadecimal';
import isHexColor from 'validator/es/lib/isHexColor';
import isHSL from 'validator/es/lib/isHSL';
import isIBAN from 'validator/es/lib/isIBAN';
import isIdentityCard from 'validator/es/lib/isIdentityCard';
import isIMEI from 'validator/es/lib/isIMEI';
import isIn from 'validator/es/lib/isIn';
import isInt from 'validator/es/lib/isInt';
import isIP from 'validator/es/lib/isIP';
import isIPRange from 'validator/es/lib/isIPRange';
import isISBN from 'validator/es/lib/isISBN';
import isISIN from 'validator/es/lib/isISIN';
import isISO31661Alpha2 from 'validator/es/lib/isISO31661Alpha2';
import isISO31661Alpha3 from 'validator/es/lib/isISO31661Alpha3';
import isISO4217 from 'validator/es/lib/isISO4217';
import isISO8601 from 'validator/es/lib/isISO8601';
import isISRC from 'validator/es/lib/isISRC';
import isISSN from 'validator/es/lib/isISSN';
import isJSON from 'validator/es/lib/isJSON';
import isJWT from 'validator/es/lib/isJWT';
import isLatLong from 'validator/es/lib/isLatLong';
import isLength from 'validator/es/lib/isLength';
import isLicensePlate from 'validator/es/lib/isLicensePlate';
import isLocale from 'validator/es/lib/isLocale';
import isLowercase from 'validator/es/lib/isLowercase';
import isMACAddress from 'validator/es/lib/isMACAddress';
import isMagnetURI from 'validator/es/lib/isMagnetURI';
import isMD5 from 'validator/es/lib/isMD5';
import isMimeType from 'validator/es/lib/isMimeType';
import isMobilePhone from 'validator/es/lib/isMobilePhone';
import isMongoId from 'validator/es/lib/isMongoId';
import isMultibyte from 'validator/es/lib/isMultibyte';
import isNumeric from 'validator/es/lib/isNumeric';
import isOctal from 'validator/es/lib/isOctal';
import isPassportNumber from 'validator/es/lib/isPassportNumber';
import isPort from 'validator/es/lib/isPort';
import isPostalCode from 'validator/es/lib/isPostalCode';
import isRFC3339 from 'validator/es/lib/isRFC3339';
import isRgbColor from 'validator/es/lib/isRgbColor';
import isSemVer from 'validator/es/lib/isSemVer';
import isSlug from 'validator/es/lib/isSlug';
import isStrongPassword from 'validator/es/lib/isStrongPassword';
import isSurrogatePair from 'validator/es/lib/isSurrogatePair';
import isTaxID from 'validator/es/lib/isTaxID';
import isUppercase from 'validator/es/lib/isUppercase';
import isURL from 'validator/es/lib/isURL';
import isUUID from 'validator/es/lib/isUUID';
import isVariableWidth from 'validator/es/lib/isVariableWidth';
import isVAT from 'validator/es/lib/isVAT';
import isWhitelisted from 'validator/es/lib/isWhitelisted';
import ltrim from 'validator/es/lib/ltrim';
import matches from 'validator/es/lib/matches';
import normalizeEmail from 'validator/es/lib/normalizeEmail';
import rtrim from 'validator/es/lib/rtrim';
import stripLow from 'validator/es/lib/stripLow';
import toBoolean from 'validator/es/lib/toBoolean';
import toDate from 'validator/es/lib/toDate';
import toFloat from 'validator/es/lib/toFloat';
import toInt from 'validator/es/lib/toInt';
import trim from 'validator/es/lib/trim';
import whitelist from 'validator/es/lib/whitelist';
