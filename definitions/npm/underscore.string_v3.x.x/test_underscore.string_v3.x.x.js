// @flow
import s from 'underscore.string';

var string1 = 'hello',
    string2 = 'world!';

(s.numberFormat(100): string);
(s.numberFormat(100, 2): string);
(s.numberFormat(100, 2, ','): string);
(s.numberFormat(100, 2, ',', '.'): string);
// $ExpectError
s.numberFormat('100');
// $ExpectError
s.numberFormat(100, '2');
// $ExpectError
s.numberFormat(100, 2, 2);
// $ExpectError
s.numberFormat(100, 2, ',', 2);
// $ExpectError
(s.numberFormat(100, 2, ',', '.'): void);

(s.levenshtein(string1, string2): number);
// $ExpectError
s.levenshtein(1, string2);
// $ExpectError
s.levenshtein(string1, 1);
// $ExpectError
(s.levenshtein(string1, string2): string);

(s.capitalize(string1): string);
(s.capitalize(string1, true): string);
// $ExpectError
s.capitalize(string1, 1);
// $ExpectError
(s.capitalize(string1): number);

(s.decapitalize(string1): string);
// $ExpectError
s.decapitalize(1);
// $ExpectError
(s.decapitalize(string1): number);

(s.chop(string1, 2): Array<string>);
// $ExpectError
s.chop(string1);
// $ExpectError
(s.chop(string1): Array<number>);

(s.clean(string1): string);
// $ExpectError
s.clean(1);
// $ExpectError
(s.clean(string1): number);

(s.swapCase(string1): string);
// $ExpectError
s.swapCase(1);
// $ExpectError
(s.swapCase(string1): number);

(s.include(string1, string2): boolean);
// $ExpectError
s.include(1);
// $ExpectError
s.include(string1, 2);
// $ExpectError
(s.include(string1, string2): string);

(s.count(string1, string2): number);
(s.escapeHTML(string1): string);
(s.unescapeHTML(string1): string);
(s.insert(string1, 1, string2): string);

(s.replaceAll(string1, string2, string1): string);
(s.replaceAll(string1, string2, string1, true): string);

(s.isBlank(string1): boolean);

(s.join(','): string);
(s.join(',', string1): string);
(s.join(',', string1, string2): string);
(s.join(',', string1, string2, string1, string2): string);

(s.lines(string1): Array<string>);

(s.wrap(string1, {}): string);

(s.dedent(string1): string);
(s.dedent(string1, string2): string);

(s.reverse(string1): string);
(s.splice(string1, 1, 1, string2): string);

(s.startsWith(string1, string2): boolean);
(s.startsWith(string1, string2, 1): boolean);


(s.endsWith(string1, string2): boolean);
(s.endsWith(string1, string2, 1): boolean);

(s.pred(string1): string);
(s.succ(string1): string);
(s.titleize(string1): string);

(s.camelize(string1): string);
(s.camelize(string1, true): string);

(s.classify(string1): string);
(s.underscored(string1): string);
(s.dasherize(string1): string);
(s.humanize(string1): string);

(s.trim(string1): string);
(s.trim(string1, string2): string);
(s.ltrim(string1): string);
(s.rtrim(string1, string2): string);

(s.truncate(string1, 1, string2): string);
(s.prune(string1, 1, string2): string);
(s.words(string1, string2): Array<string>);
(s.words(string1, /\b/): Array<string>);

(s.sprintf(string1): string);
(s.sprintf(string1, 1): string);
(s.sprintf(string1, 1, 1.2): string);
(s.sprintf(string1, 1, 1.2, string2): string);
(s.sprintf(string1, 1, string2, 3.4): string);

(s.pad(string1, 1): string);
(s.pad(string1, 1, string2): string);
(s.pad(string1, 1, string2, 'left'): string);
(s.pad(string1, 1, string2, 'right'): string);
(s.pad(string1, 1, string2, 'both'): string);
(s.lpad(string1, 1): string);
(s.lpad(string1, 1, string2): string);
(s.rpad(string1, 1): string);
(s.rpad(string1, 1, string2): string);
(s.lrpad(string1, 1): string);
(s.lrpad(string1, 1, string2): string);
// $ExpectError
(s.pad(string1, 1, string2, 'bidirectional'): string);

(s.toNumber(string1, 1): number);
(s.strRight(string1, string2): string);
(s.strRightBack(string1, string2): string);
(s.strLeft(string1, string2): string);
(s.strLeftBack(string1, string2): string);
(s.stripTags(string1): string);

(s.toSentence([string1, string2]): string);
(s.toSentence([string1, string2], string1): string);
(s.toSentence([string1, string2], string1, string2): string);

(s.toSentenceSerial([string1, string2]): string);
(s.toSentenceSerial([string1, string2], string1): string);
(s.toSentenceSerial([string1, string2], string1, string2): string);

(s.repeat(string1, 1): string);
(s.repeat(string1, 1, string2): string);

(s.surround(string1, string2): string);

(s.quote(string1): string);
(s.quote(string1, string2): string);
(s.unquote(string1): string);
(s.unquote(string1, string2): string);

(s.slugify(string1): string);
(s.naturalCmp(string1, string2): number);

(s.toBoolean(string1): ?boolean);
(s.toBoolean(string1, [string2]): ?boolean);
(s.toBoolean(string1, [string1, string2], [string2, /\b/]): ?boolean);

(s.map(string1, (x => x)): string);

// $ExpectError
(s.map(string1, (x => 1)): string);

(s(string1).trim(): string);
