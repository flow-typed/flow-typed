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
});
