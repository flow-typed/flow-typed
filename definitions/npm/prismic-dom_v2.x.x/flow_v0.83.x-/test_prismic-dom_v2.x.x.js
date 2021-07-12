// @flow strict
import { describe, it } from 'flow-typed-test';
import PrismicDom, {
  RichText,
  Link,
  HTMLSerializer,
  type Elements,
} from 'prismic-dom';

describe('prismic-dom', () => {
  describe('default export', () => {
    describe('RichText', () => {
      it('asHtml', () => {
        const a: string = PrismicDom.RichText.asHtml('text');
        // $FlowExpectedError[incompatible-type] only returns string
        const b: number = PrismicDom.RichText.asHtml('text');
        PrismicDom.RichText.asHtml('text', () => '')
        // $FlowExpectedError[incompatible-call] link resolver returns string
        PrismicDom.RichText.asHtml('text', () => {})
        // $FlowExpectedError[incompatible-call] second arg must be empty or func
        PrismicDom.RichText.asHtml('text', '')
      });

      it('asText', () => {
        const a: string = PrismicDom.RichText.asText('text');
        // $FlowExpectedError[incompatible-type] only returns string
        const b: number = PrismicDom.RichText.asText('text');
        PrismicDom.RichText.asText('text', 'with join string');
        // $FlowExpectedError[incompatible-call] second arg must be empty or string
        PrismicDom.RichText.asText('text', 5);
      });

      it('Elements', () => {
        const ele: Elements = PrismicDom.RichText.Elements;
      });
    });

    describe('Link', () => {
      it('url', () => {
        const a: string = PrismicDom.Link.url('some link');
        PrismicDom.Link.url('some link', () => '');
        // $FlowExpectedError[incompatible-type] returns a string only
        const b: number = PrismicDom.Link.url('some link');
        // $FlowExpectedError[incompatible-call] must have args
        PrismicDom.Link.url();
      })
    });
  });

  describe('RichText export', () => {
    it('asHtml', () => {
      const a: string = RichText.asHtml('text');
      // $FlowExpectedError[incompatible-type] only returns string
      const b: number = RichText.asHtml('text');
      RichText.asHtml('text', () => '')
      // $FlowExpectedError[incompatible-call] link resolver returns string
      RichText.asHtml('text', () => {})
      // $FlowExpectedError[incompatible-call] second arg must be empty or func
      RichText.asHtml('text', '')
    });

    it('asText', () => {
      const a: string = RichText.asText('text');
      // $FlowExpectedError[incompatible-type] only returns string
      const b: number = RichText.asText('text');
      RichText.asText('text', 'with join string');
      // $FlowExpectedError[incompatible-call] second arg must be empty or string
      RichText.asText('text', 5);
    });

    it('Elements', () => {
      const ele: Elements = RichText.Elements;
    });
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
    const a: string = HTMLSerializer(
      'heading6',
      '',
      'text',
      ['string1', 'string2'],
      0,
    );
    HTMLSerializer(
      'heading6',
      '',
      null,
      ['string1', 'string2'],
      0,
    );
    HTMLSerializer(
      // $FlowExpectedError[prop-missing] must be passed element key
      'random',
      '',
      // $FlowExpectedError[incompatible-call] either null or string
      123,
      // $FlowExpectedError[incompatible-call] must be array of string
      ['string1', 5],
      // $FlowExpectedError[incompatible-call] must index number
      '',
    );
    // $FlowExpectedError[incompatible-type] returns a string only
    const b: number = HTMLSerializer(
      'heading6',
      '',
      'text',
      ['string1', 'string2'],
      0,
    );
  });
});

