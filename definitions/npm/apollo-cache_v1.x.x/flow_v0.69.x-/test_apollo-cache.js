// @flow
import { it } from 'flow-typed-test';
import { ApolloCache } from 'apollo-cache';

it('should provide global types', () => {
  declare function f(c: $npm$apolloCache$ApolloCache): void;

  f(new ApolloCache());

  // $ExpectError
  f(ApolloCache());
});
