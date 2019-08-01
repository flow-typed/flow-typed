/* @flow */

import semver, {Comparator, Range, SemVer} from 'semver';

new SemVer('^3.2.0');

(semver.cmp('1.2.3', '>', '1.2.4'): boolean);

// Comparator
const comp = new Comparator('>=3.2.0');
comp.test('5.3.2');
(comp.operator: string);
(comp.value: string);

// comparator object as a ctor arg is okay
new Comparator(comp);

// static/exported properties
(semver.SEMVER_SPEC_VERSION: string);
semver.re.forEach(r => r.test('foo'));
semver.src.forEach(r => r.match(/foo/));

// exported functions
(semver.outside('1.2.3', '1.2', '>'): boolean);
semver.clean('     =v3.0.2   ');
semver.valid('foobar');
semver.inc('1.2.3', 'major', true);
semver.inc('1.2.3', 'major', true, 'beta');
semver.inc('1.2.3', 'major', 'beta');
semver.inc(new SemVer('1.2.3'), 'major', 'beta');
(semver.major('1.2.3'): number);
(semver.major(new SemVer('1.2.3')): number);
(semver.minor('1.2.3'): number);
(semver.minor(new SemVer('1.2.3')): number);
(semver.patch('1.2.3'): number);
(semver.patch(new SemVer('1.2.3')): number);
semver.sort(['9.8.7', new SemVer('1.2.3')]).forEach(x => console.log(x));
semver.rsort(['9.8.7', new SemVer('1.2.3')]).forEach(x => console.log(x));
semver.compareIdentifiers('9.8.7', new SemVer('1.2.3'));
semver.rcompareIdentifiers('9.8.7', new SemVer('1.2.3'));

semver.validRange('3.x || 4.x');
semver.validRange(new Range('3.x || 4.x'));
semver.satisfies('3.5.0', new Range('3.x || 4.x'));
semver.satisfies('3.5.0', '3.x || 4.x', true);
semver.maxSatisfying(['3.5.0', new SemVer('3.15.10')], '3.x || 4.x');
semver.gtr('3.5.0', '3.x || 4.x');
semver.gtr(new SemVer('3.5.0'), new Range('3.x || 4.x'));
semver.ltr('3.5.0', '3.x || 4.x');
semver.ltr(new SemVer('3.5.0'), new Range('3.x || 4.x'));
semver.outside('2.5.0', '3.x || 4.x', '<');
semver.outside(new SemVer('2.5.0'), new Range('3.x || 4.x'), '>', true);
semver.parse('3.5.2');
semver.parse('3.5.2', true);
semver.toComparators('3.x || 4.x');
semver.toComparators(new Range('3.x || 4.x'), true);

// $ExpectError
semver.cmp('1.2.3', '> ', '1.2.4');

// $ExpectError
semver.outside('1.2.3', '1.2', '> ');

// Range
new semver.Range('^1.2.x');
const range = new Range('3.x || 4.x');

range.test('3.4.5');
(range.raw: string);
(range.set[0][0].semver.version: string);
(range.format(): string);
(range.test('1.2.3'): boolean);
(range.toString(): string);

// range object as a ctor arg is okay
new Range(range);
