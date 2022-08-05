// @flow
import { describe, test } from 'flow-typed-test';

describe('json-api', () => {
  test('JsonApi$Json', () => {
    ({ foo: 123 }: JsonApi$Json);
    ({ $call: 123 }: JsonApi$Json);
    ({
      strings: ['asdf', 'qwer'],
    }: JsonApi$Json);
    (null: JsonApi$Json);

    (JSON.parse(''): JsonApi$Json);

    // $FlowExpectedError[incompatible-cast]
    (() => {}: JsonApi$Json);
  });

  test('JsonApi$Meta', () => {
    ({ a: null }: JsonApi$Meta);
    ({ a: '' }: JsonApi$Meta);
    ({ a: { a: { a: '' } } }: JsonApi$Meta);

    (JSON.parse(''): JsonApi$Meta);

    // $FlowExpectedError[incompatible-cast]
    ('test': JsonApi$Meta);
  });

  test('JsonApi$Link', () => {
    ('test': JsonApi$Link);
    ({
      href: 'test',
    }: JsonApi$Link);
    ({
      href: 'test',
      meta: {
        href: 'test',
      },
    }: JsonApi$Link);

    // $FlowExpectedError[incompatible-cast]
    ({}: JsonApi$Link);
    // $FlowExpectedError[incompatible-cast]
    ({
      href: 1,
    }: JsonApi$Link);
    // $FlowExpectedError[incompatible-cast]
    ({
      href: 'test',
      meta: 1,
    }: JsonApi$Link);
    // $FlowExpectedError[incompatible-cast]
    ({
      href: 'test',
      foo: 1,
    }: JsonApi$Link);
  });

  test('JsonApi$Links', () => {
    ({}: JsonApi$Links);
    ({
      self: 'link',
      related: {
        href: 'test',
      },
      foo: 'link',
    }: JsonApi$Links);

    ({
      // $FlowExpectedError[incompatible-cast]
      related: 1,
    }: JsonApi$Links);
    ({
      // $FlowExpectedError[incompatible-cast]
      foo: 1,
    }: JsonApi$Links);
  });

  test('JsonApi$PaginationLinks', () => {
    ({ ...null }: JsonApi$PaginationLinks);
    ({
      first: 'test',
      last: {
        href: 'test',
        meta: { a: null },
      },
      prev: {
        href: 'test',
      },
      next: 'test',
    }: JsonApi$PaginationLinks);

    // $FlowExpectedError[prop-missing]
    ({
      foo: 'test',
    }: JsonApi$PaginationLinks);
    ({
      // $FlowExpectedError[incompatible-cast]
      first: 1,
    }: JsonApi$PaginationLinks);
  });

  test('JsonApi$Error', () => {
    ({ ...null }: JsonApi$Error);
    ({
      id: 'test',
      links: {
        about: {
          href: 'test',
        },
      },
      status: 'test',
      code: 'test',
      title: 'test',
      detail: 'test',
      source: {
        pointer: 'test',
        parameter: 'test',
      },
      meta: {
        foo: null,
      },
    }: JsonApi$Error);

    ({
      // $FlowExpectedError[incompatible-cast]
      id: 1,
    }: JsonApi$Error);
    ({
      // $FlowExpectedError[incompatible-cast]
      links: 'test',
    }: JsonApi$Error);
    ({
      // $FlowExpectedError[incompatible-cast]
      status: 1,
    }: JsonApi$Error);
    ({
      // $FlowExpectedError[incompatible-cast]
      code: 1,
    }: JsonApi$Error);
    ({
      // $FlowExpectedError[incompatible-cast]
      title: 1,
    }: JsonApi$Error);
    ({
      // $FlowExpectedError[incompatible-cast]
      detail: 1,
    }: JsonApi$Error);
    ({
      // $FlowExpectedError[incompatible-cast]
      source: 1,
    }: JsonApi$Error);
    // $FlowExpectedError[prop-missing]
    ({
      source: {
        foo: 'test',
      },
    }: JsonApi$Error);
    ({
      // $FlowExpectedError[incompatible-cast]
      meta: 'test',
    }: JsonApi$Error);
  });

  test('JsonApi$Object', () => {
    ({ ...null }: JsonApi$Object);
    ({
      version: 'test',
      meta: {
        foo: 'test',
      }
    }: JsonApi$Object);

    ({
      // $FlowExpectedError[incompatible-cast]
      version: 1,
    }: JsonApi$Object);
    ({
      // $FlowExpectedError[incompatible-cast]
      meta: 1,
    }: JsonApi$Object);
    // $FlowExpectedError[prop-missing]
    ({
      foo: 'test',
    }: JsonApi$Object);
  });

  test('JsonApi$Attributes', () => {
    ({}: JsonApi$Attributes);
    ({
      foo: '',
      bar: {},
      baz: null,
    }: JsonApi$Attributes);

    // $FlowExpectedError[incompatible-function-indexer]
    (() => {}: JsonApi$Attributes);
  });

  test('JsonApi$ResourceIdentifier', () => {
    ({
      id: 'test',
      type: 'test',
    }: JsonApi$ResourceIdentifier);
    ({
      id: 'test',
      type: 'test',
      meta: {
        foo: 'a',
      }
    }: JsonApi$ResourceIdentifier);

    // $FlowExpectedError[prop-missing]
    ({ ...null }: JsonApi$ResourceIdentifier);
    // $FlowExpectedError[prop-missing]
    ({
      id: 'test',
      type: 'test',
      foo: 'test',
    }: JsonApi$ResourceIdentifier);
  });

  test('JsonApi$ResourceLinkage', () => {
    const resourceIdentifier: JsonApi$ResourceIdentifier = {
      id: 'test',
      type: 'test',
    };

    (resourceIdentifier: JsonApi$ResourceLinkage);
    ([resourceIdentifier]: JsonApi$ResourceLinkage);
    (null: JsonApi$ResourceLinkage);

    // $FlowExpectedError[incompatible-cast]
    ({ foo: 'a' }: JsonApi$ResourceLinkage);
    // $FlowExpectedError[incompatible-cast]
    (['', resourceIdentifier]: JsonApi$ResourceLinkage);
  });

  test('JsonApi$Relationship', () => {
    ({ ...null }: JsonApi$Relationship);
    ({
      links: {
        self: {
          href: 'test',
        },
        related: {
          href: 'test',
        },
        foo: {
          href: 'test',
        },
      },
      data: [{
        id: 'test',
        type: 'test',
      }],
      meta: {
        a: 'test',
        b: 1,
      },
    }: JsonApi$Relationship);

    ({
      // $FlowExpectedError[incompatible-cast]
      links: 1,
    }: JsonApi$Relationship);
    ({
      // $FlowExpectedError[incompatible-cast]
      data: 'test',
    }: JsonApi$Relationship);
    ({
      // $FlowExpectedError[incompatible-cast]
      meta: 'test',
    }: JsonApi$Relationship);
  });

  test('JsonApi$Relationships', () => {
    declare var relationship: JsonApi$Relationship;

    ({}: JsonApi$Relationships);
    ({ a: relationship, b: relationship }: JsonApi$Relationships);

    // $FlowExpectedError[incompatible-cast]
    ({ a: 'test' }: JsonApi$Relationships);
  });

  test('JsonApi$Resource', () => {

  });

  test('JsonApi$DataDocument', () => {

  });

  test('JsonApi$MetaDocument', () => {

  });

  test('JsonApi$ErrorDocument', () => {

  });

  test('JsonApi$Document', () => {

  });
});
