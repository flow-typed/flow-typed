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

    // $FlowExpectedError[incompatible-type]
    (() => {}: JsonApi$Json);
  });

  test('JsonApi$Meta', () => {
    ({ a: null }: JsonApi$Meta);
    ({ a: '' }: JsonApi$Meta);
    ({ a: { a: { a: '' } } }: JsonApi$Meta);

    (JSON.parse(''): JsonApi$Meta);

    // $FlowExpectedError[incompatible-type]
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

    // $FlowExpectedError[incompatible-type]
    ({}: JsonApi$Link);
    // $FlowExpectedError[incompatible-type]
    ({
      href: 1,
    }: JsonApi$Link);
    // $FlowExpectedError[incompatible-type]
    ({
      href: 'test',
      meta: 1,
    }: JsonApi$Link);
    // $FlowExpectedError[incompatible-type]
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
      // $FlowExpectedError[incompatible-type]
      related: 1,
    }: JsonApi$Links);
    ({
      // $FlowExpectedError[incompatible-type]
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
      // $FlowExpectedError[incompatible-type]
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
      // $FlowExpectedError[incompatible-type]
      id: 1,
    }: JsonApi$Error);
    ({
      // $FlowExpectedError[incompatible-type]
      links: 'test',
    }: JsonApi$Error);
    ({
      // $FlowExpectedError[incompatible-type]
      status: 1,
    }: JsonApi$Error);
    ({
      // $FlowExpectedError[incompatible-type]
      code: 1,
    }: JsonApi$Error);
    ({
      // $FlowExpectedError[incompatible-type]
      title: 1,
    }: JsonApi$Error);
    ({
      // $FlowExpectedError[incompatible-type]
      detail: 1,
    }: JsonApi$Error);
    ({
      // $FlowExpectedError[incompatible-type]
      source: 1,
    }: JsonApi$Error);
    ({
      // $FlowExpectedError[prop-missing]
      source: {
        foo: 'test',
      },
    }: JsonApi$Error);
    ({
      // $FlowExpectedError[incompatible-type]
      meta: 'test',
    }: JsonApi$Error);
  });

  test('JsonApi$Object', () => {
    ({ ...null }: JsonApi$Object);
    ({
      version: 'test',
      meta: {
        foo: 'test',
      },
    }: JsonApi$Object);

    ({
      // $FlowExpectedError[incompatible-type]
      version: 1,
    }: JsonApi$Object);
    ({
      // $FlowExpectedError[incompatible-type]
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
      },
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

    // $FlowExpectedError[incompatible-type]
    ({ foo: 'a' }: JsonApi$ResourceLinkage);
    // $FlowExpectedError[incompatible-type]
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
      data: [
        {
          id: 'test',
          type: 'test',
        },
      ],
      meta: {
        a: 'test',
        b: 1,
      },
    }: JsonApi$Relationship);

    ({
      // $FlowExpectedError[incompatible-type]
      links: 1,
    }: JsonApi$Relationship);
    ({
      // $FlowExpectedError[incompatible-type]
      data: 'test',
    }: JsonApi$Relationship);
    ({
      // $FlowExpectedError[incompatible-type]
      meta: 'test',
    }: JsonApi$Relationship);
  });

  test('JsonApi$Relationships', () => {
    declare var relationship: JsonApi$Relationship;

    ({}: JsonApi$Relationships);
    ({ a: relationship, b: relationship }: JsonApi$Relationships);

    // $FlowExpectedError[incompatible-type]
    ({ a: 'test' }: JsonApi$Relationships);
  });

  test('JsonApi$Resource', () => {
    declare var attributes: JsonApi$Attributes;
    declare var relationships: JsonApi$Relationships;
    declare var links: JsonApi$Links;
    declare var meta: JsonApi$Meta;

    ({ type: 'test' }: JsonApi$Resource);
    ({
      type: 'test',
      id: 'test',
      attributes,
      relationships,
      links,
      meta,
    }: JsonApi$Resource);

    // $FlowExpectedError[prop-missing]
    ({ ...null }: JsonApi$Resource);
    ({
      type: 'test',
      // $FlowExpectedError[incompatible-type]
      id: 1,
    }: JsonApi$Resource);
    ({
      type: 'test',
      // $FlowExpectedError[incompatible-type]
      attributes: 1,
    }: JsonApi$Resource);
    ({
      type: 'test',
      // $FlowExpectedError[incompatible-type]
      relationships: 1,
    }: JsonApi$Resource);
    ({
      type: 'test',
      // $FlowExpectedError[incompatible-type]
      links: 1,
    }: JsonApi$Resource);
    ({
      type: 'test',
      // $FlowExpectedError[incompatible-type]
      meta: 1,
    }: JsonApi$Resource);
  });

  test('JsonApi$DataDocument', () => {
    declare var resource: JsonApi$Resource;
    declare var resourceIdentifier: JsonApi$ResourceIdentifier;
    declare var meta: JsonApi$Meta;
    declare var object: JsonApi$Object;
    declare var links: JsonApi$Links;
    declare var paginationLinks: JsonApi$PaginationLinks;

    ({
      data: [resource, resourceIdentifier],
    }: JsonApi$DataDocument);
    ({
      data: resource,
    }: JsonApi$DataDocument);
    ({
      data: resourceIdentifier,
    }: JsonApi$DataDocument);
    ({
      data: null,
      meta,
      jsonapi: object,
      links,
      included: [resource],
    }: JsonApi$DataDocument);
    ({
      data: null,
      links: paginationLinks,
    }: JsonApi$DataDocument);

    // $FlowExpectedError[prop-missing]
    ({ ...null }: JsonApi$DataDocument);
    ({
      data: null,
      // $FlowExpectedError[incompatible-type]
      meta: 1,
    }: JsonApi$DataDocument);
    ({
      data: null,
      // $FlowExpectedError[incompatible-type]
      jsonapi: 1,
    }: JsonApi$DataDocument);
    ({
      data: null,
      // $FlowExpectedError[incompatible-type]
      links: 1,
    }: JsonApi$DataDocument);
    ({
      data: null,
      // $FlowExpectedError[incompatible-type]
      included: 1,
    }: JsonApi$DataDocument);
    ({
      data: null,
      // $FlowExpectedError[incompatible-type]
      included: resource,
    }: JsonApi$DataDocument);
  });

  test('JsonApi$MetaDocument', () => {
    declare var meta: JsonApi$Meta;
    declare var object: JsonApi$Object;
    declare var links: JsonApi$Links;

    ({
      meta,
    }: JsonApi$MetaDocument);
    ({
      meta,
      jsonapi: object,
      links,
    }: JsonApi$MetaDocument);

    // $FlowExpectedError[prop-missing]
    ({ ...null }: JsonApi$MetaDocument);
    ({
      // $FlowExpectedError[incompatible-type]
      meta: 1,
    }: JsonApi$MetaDocument);
    ({
      meta,
      // $FlowExpectedError[incompatible-type]
      jsonapi: 1,
    }: JsonApi$MetaDocument);
    ({
      meta,
      // $FlowExpectedError[incompatible-type]
      links: 1,
    }: JsonApi$MetaDocument);
  });

  test('JsonApi$ErrorDocument', () => {
    declare var error: JsonApi$Error;
    declare var meta: JsonApi$Meta;
    declare var object: JsonApi$Object;
    declare var links: JsonApi$Links;

    ({
      errors: [error],
    }: JsonApi$ErrorDocument);
    ({
      errors: [error],
      meta,
      jsonapi: object,
      links,
    }: JsonApi$ErrorDocument);

    // $FlowExpectedError[prop-missing]
    ({ ...null }: JsonApi$ErrorDocument);
    ({
      // $FlowExpectedError[incompatible-type]
      errors: error,
    }: JsonApi$ErrorDocument);
    ({
      errors: [error],
      // $FlowExpectedError[incompatible-type]
      meta: 1,
    }: JsonApi$ErrorDocument);
    ({
      errors: [error],
      // $FlowExpectedError[incompatible-type]
      jsonapi: 1,
    }: JsonApi$ErrorDocument);
    ({
      errors: [error],
      // $FlowExpectedError[incompatible-type]
      links: 1,
    }: JsonApi$ErrorDocument);
  });

  test('JsonApi$Document', () => {
    declare var dataDocument: JsonApi$DataDocument;
    declare var metaDocument: JsonApi$MetaDocument;
    declare var errorDocument: JsonApi$ErrorDocument;

    (dataDocument: JsonApi$Document);
    (metaDocument: JsonApi$Document);
    (errorDocument: JsonApi$Document);

    // $FlowExpectedError[incompatible-type]
    ('': JsonApi$Document);
  });
});
