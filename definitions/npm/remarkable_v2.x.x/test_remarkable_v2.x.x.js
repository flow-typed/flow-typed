// @flow

import { describe, it } from 'flow-typed-test';

import { Remarkable, utils } from 'remarkable';
import { linkify } from 'remarkable/linkify';

let md;

describe('the Remarkable constructor', () => {
  it('should validate on default usage', () => {
    md = new Remarkable();

    new Remarkable({
      html: false,
      xhtmlOut: false,
      breaks: false,
      langPrefix: 'language-',
      linkTarget: '_blank',
      typographer: false,
      quotes: '“”‘’',
      highlight(/*str, lang*/) {
        return '';
      },
    });

    // $ExpectError
    new Remarkable('');

    md.render('# Remarkable rulezz!');
    // $ExpectError
    md.render(true);
  });
});

describe('the parse method', () => {
  it('should accept strings as first param', () => {
    md.parse('');
    // $ExpectError
    md.parse(true);
    // $ExpectError
    md.parse(1);
  });
});

describe('the parseInline method', () => {
  it('should accept strings as first param', () => {
    md.parseInline('');
    // $ExpectError
    md.parseInline(true);
    // $ExpectError
    md.parseInline(1);
  });
});

describe('the set method', () => {
  it('should accept settings as first param', () => {
    md.set('commonmark');
    md.set({ html: true });
    md.set({ xhtmlOut: true });
    md.set({ breaks: true });
    md.set({ langPrefix: '' });
    md.set({ typographer: true });
    md.set({ quotes: '' });
    md.set({ highlight: (str: string, lang: string) => '' });
  });
});

describe('the renderInline method', () => {
  it('should accept strings as first param', () => {
    md.renderInline('');
    // $ExpectError
    md.renderInline(true);
  });
});

describe('the utils helpers', () => {
  it('should validate on default usage', () => {
    utils.isString('foo');
    utils.isString(1);
    utils.isString({});
    utils.isString();

    utils.has({ foo: 'bar' }, 'foo');
    utils.has({}, 'foo');

    utils.assign({}, { foo: 'bar' }, { baz: 'qux' });

    utils.unescapeMd('\\<foo /\\>');

    utils.isValidEntityCode(0xd800);
    utils.isValidEntityCode(0xd7ff);
    utils.isValidEntityCode(1000);

    utils.fromCodePoint(0xffff + 1);
    utils.fromCodePoint(0xffff);

    utils.replaceEntities('');
    utils.replaceEntities('&nbsp;');

    utils.replaceEntities('<script>alert("&copy;")</script>');
  });
});

describe('the linkify plugin', () => {
  it('should validate on default usage', () => {
    md = new Remarkable().use(linkify);
  });
});
