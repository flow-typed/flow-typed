// @flow
import s from 'underscore.string';

var string1 = 'hello',
    string2 = 'world!',
    cs      = s(string1);

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
(cs.levenshtein(string1): number);
// $ExpectError
s.levenshtein(1, string2);
// $ExpectError
(cs.levenshtein(1): number);
// $ExpectError
s.levenshtein(string1, 1);
// $ExpectError
(s.levenshtein(string1, string2): string);

(s.capitalize(string1): string);
(s.capitalize(string1, true): string);
(cs.capitalize().value(): string);
(cs.capitalize(true).value(): string);
// $ExpectError
s.capitalize(string1, 1);
// $ExpectError
(cs.capitalize(1).value(): string);
// $ExpectError
(s.capitalize(string1): number);

(s.decapitalize(string1): string);
(cs.decapitalize().value(): string);
// $ExpectError
s.decapitalize(1);
// $ExpectError
(s.decapitalize(string1): number);

(s.chop(string1, 2): Array<string>);
(cs.chop(2): Array<string>);
// $ExpectError
s.chop(string1);
// $ExpectError
(cs.chop(): Array<string>);
// $ExpectError
(s.chop(string1): Array<number>);

(s.clean(string1): string);
(cs.clean().value(): string);
// $ExpectError
s.clean(1);
// $ExpectError
(s.clean(string1): number);

(s.swapCase(string1): string);
(cs.swapCase().value(): string);
// $ExpectError
s.swapCase(1);
// $ExpectError
(s.swapCase(string1): number);

(s.include(string1, string2): boolean);
(cs.include(string1): boolean);
// $ExpectError
(cs.include(): boolean);
// $ExpectError
s.include(1);
// $ExpectError
(cs.include(1): boolean);
// $ExpectError
s.include(string1, 2);
// $ExpectError
(s.include(string1, string2): string);

(s.count(string1, string2): number);
(cs.count(string2): number);
(s.escapeHTML(string1): string);
(cs.escapeHTML().value(): string);
(s.unescapeHTML(string1): string);
(cs.unescapeHTML().value(): string);
(s.insert(string1, 1, string2): string);
(cs.insert(1, string2).value(): string);

(s.replaceAll(string1, string2, string1): string);
(cs.replaceAll(string1, string2).value(): string);
(s.replaceAll(string1, string2, string1, true): string);
(cs.replaceAll(string1, string2, true).value(): string);

(s.isBlank(string1): boolean);
(cs.isBlank(): boolean);

(s.join(','): string);
(cs.join().value(): string);
(s.join(',', string1): string);
(cs.join(string1).value(): string);
(s.join(',', string1, string2): string);
(cs.join(string1, string2).value(): string);
(s.join(',', string1, string2, string1, string2): string);
(cs.join(string1, string2, string1, string2).value(): string);

(s.lines(string1): Array<string>);
(cs.lines(): Array<string>);

(s.wrap(string1, {}): string);
(cs.wrap({}).value(): string);

(s.dedent(string1): string);
(cs.dedent().value(): string);
(s.dedent(string1, string2): string);
(cs.dedent(string2).value(): string);

(s.reverse(string1): string);
(cs.reverse().value(): string);
(s.splice(string1, 1, 1, string2): string);
(cs.splice(1, 1, string2).value(): string);

(s.startsWith(string1, string2): boolean);
(cs.startsWith(string1): boolean);
(s.startsWith(string1, string2, 1): boolean);
(cs.startsWith(string1, 1): boolean);

(s.endsWith(string1, string2): boolean);
(cs.endsWith(string1): boolean);
(s.endsWith(string1, string2, 1): boolean);
(cs.endsWith(string1, 1): boolean);

(s.pred(string1): string);
(cs.pred().value(): string);
(s.succ(string1): string);
(cs.succ().value(): string);
(s.titleize(string1): string);
(cs.titleize().value(): string);

(s.camelize(string1): string);
(cs.camelize().value(): string);
(s.camelize(string1, true): string);
(cs.camelize(true).value(): string);

(s.classify(string1): string);
(cs.classify().value(): string);
(s.underscored(string1): string);
(cs.underscored().value(): string);
(s.dasherize(string1): string);
(cs.dasherize().value(): string);
(s.humanize(string1): string);
(cs.humanize().value(): string);

(s.trim(string1): string);
(cs.trim().value(): string);
(s.trim(string1, string2): string);
(cs.trim(string1).value(): string);
(s.ltrim(string1): string);
(cs.ltrim().value(): string);
(s.rtrim(string1, string2): string);
(cs.rtrim(string1).value(): string);

(s.truncate(string1, 1, string2): string);
(cs.truncate(1, string1).value(): string);
(s.prune(string1, 1, string2): string);
(cs.prune(1, string1).value(): string);
(s.words(string1, string2): Array<string>);
(cs.words(string1): Array<string>);
(s.words(string1, /\b/): Array<string>);
(cs.words(/\b/): Array<string>);

(s.sprintf(string1): string);
(cs.sprintf().value(): string);
(s.sprintf(string1, 1): string);
(cs.sprintf(1).value(): string);
(s.sprintf(string1, 1, 1.2): string);
(cs.sprintf(1, 1.2).value(): string);
(s.sprintf(string1, 1, 1.2, string2): string);
(cs.sprintf(1, 1.2, string1).value(): string);
(s.sprintf(string1, 1, string2, 3.4): string);
(cs.sprintf(1, string1, 3.4).value(): string);

(s.pad(string1, 1): string);
(cs.pad(1).value(): string);
(s.pad(string1, 1, string2): string);
(cs.pad(1, string1).value(): string);
(s.pad(string1, 1, string2, 'left'): string);
(cs.pad(1, string1, 'left').value(): string);
(s.pad(string1, 1, string2, 'right'): string);
(cs.pad(1, string1, 'right').value(): string);
(s.pad(string1, 1, string2, 'both'): string);
(cs.pad(1, string1, 'both').value(): string);
(s.lpad(string1, 1): string);
(cs.lpad(1).value(): string);
(s.lpad(string1, 1, string2): string);
(cs.lpad(1, string1).value(): string);
(s.rpad(string1, 1): string);
(cs.rpad(1).value(): string);
(s.rpad(string1, 1, string2): string);
(cs.rpad(1, string1).value(): string);
(s.lrpad(string1, 1): string);
(cs.lrpad(1).value(): string);
(s.lrpad(string1, 1, string2): string);
(cs.lrpad(1, string1).value(): string);
// $ExpectError
(s.pad(string1, 1, string2, 'bidirectional'): string);

(s.toNumber(string1, 1): number);
(cs.toNumber(1): number);
(s.strRight(string1, string2): string);
(cs.strRight(string1).value(): string);
(s.strRightBack(string1, string2): string);
(cs.strRightBack(string1).value(): string);
(s.strLeft(string1, string2): string);
(cs.strLeft(string1).value(): string);
(s.strLeftBack(string1, string2): string);
(cs.strLeftBack(string1).value(): string);
(s.stripTags(string1): string);
(cs.stripTags().value(): string);

(s.toSentence([string1, string2]): string);
(s.toSentence([string1, string2], string1): string);
(s.toSentence([string1, string2], string1, string2): string);
// $ExpectError
(cs.toSentence());

(s.toSentenceSerial([string1, string2]): string);
(s.toSentenceSerial([string1, string2], string1): string);
(s.toSentenceSerial([string1, string2], string1, string2): string);
// $ExpectError
(cs.toSentenceSerial());

(s.repeat(string1, 1): string);
(cs.repeat(1).value(): string);
(s.repeat(string1, 1, string2): string);
(cs.repeat(1, string1).value(): string);

(s.surround(string1, string2): string);
(cs.surround(string1).value(): string);

(s.quote(string1): string);
(cs.quote().value(): string);
(s.quote(string1, string2): string);
(cs.quote(string1).value(): string);
(s.unquote(string1): string);
(cs.unquote().value(): string);
(s.unquote(string1, string2): string);
(cs.unquote(string1).value(): string);

(s.slugify(string1): string);
(cs.slugify().value(): string);
(s.naturalCmp(string1, string2): number);
(cs.naturalCmp(string1): number);

(s.toBoolean(string1): ?boolean);
(cs.toBoolean(): ?boolean);
(s.toBoolean(string1, [string2]): ?boolean);
(cs.toBoolean([string2]): ?boolean);
(s.toBoolean(string1, [string1, string2], [string2, /\b/]): ?boolean);
(cs.toBoolean([string1, string2], [string2, /\b/]): ?boolean);

(s.map(string1, (x => x)): string);
(cs.map((x => x)).value(): string);

// $ExpectError
(s.map(string1, (x => 1)): string);

(cs.toUpperCase().split(): Array<string>);
(cs.tap(x => x).value(): string);
