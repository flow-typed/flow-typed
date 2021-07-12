// @flow strict
import { describe, it } from 'flow-typed-test';
import PrismicDom, { RichText, Link, HTMLSerializer } from 'prismic-dom';

describe('prismic-dom', () => {
  describe('default export', () => {
    describe('RichText', () => {

    });

    describe('Link', () => {
      const a: string = PrismicDom.Link.url('some link');
      PrismicDom.Link.url('some link', () => '');
      // $FlowExpectedError[incompatible-type] returns a string only
      const b: number = PrismicDom.Link.url('some link');
      // $FlowExpectedError[incompatible-call] must have args
      PrismicDom.Link.url();
    });
  });

  describe('RichText export', () => {

  });

  describe('Link export', () => {
    const a: string = Link.url('some link');
    Link.url('some link', () => '');
    // $FlowExpectedError[incompatible-type] returns a string only
    const b: number = Link.url('some link');
    // $FlowExpectedError[incompatible-call] must have args
    Link.url();
  });

  describe('HTMLSerializer export', () => {

  });
});

