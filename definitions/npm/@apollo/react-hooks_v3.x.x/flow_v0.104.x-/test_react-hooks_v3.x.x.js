// @flow
import * as React from 'react';
import { it, describe } from 'flow-typed-test';
import {
  useQuery,
  useMutation,
  useSubscription,
  useLazyQuery,
  useApolloClient,
} from '@apollo/react-hooks';

const gql = (strings, ...args) => {}; // graphql-tag stub

const query = gql`
  {
    foo
  }
`;
const mutation = gql`
  mutation {
    foo
  }
`;

type Hero = {
  name: string,
  id: string,
  appearsIn: string[],
  friends: Hero[],
  ...
};

type IQuery = {
  foo: string,
  bar: string,
  ...
};

describe('useQuery hook', () => {
  type Data = {
    a: string,
    b: string,
    ...
  };
  type Variables = {
    c: string,
    ...
  };
  const result = useQuery<Data, Variables>('test');

  const { data, loading, error } = result;
  it('handles data correctly', () => {
    if (data) {
      const a: string = data.a;
      // $ExpectError
      const b: number = data.b;
    }
  });
  it('handles loading state correctly', () => {
    if (error) {
      (error.message: string);
      (error.graphQLErrors: Array<any>);
      // $ExpectError
      (error.graphQLErrors: string);
      (error.networkError: Error | null);
      const extraInfo = error.extraInfo;
    }
  });
  it('handles error state correctly', () => {
    (loading: boolean);
    // $ExpectError
    (loading: string);
  });
});

describe('useMutation hook', () => {
  type TData = {|
    a: string,
    b: string,
  |};
  type TVariables = {|
    c: string,
  |};
  const [mutation, result] = useMutation<TData, TVariables>('test');

  const { data, loading, error } = result;
  it('handles data correctly', () => {
    if (data) {
      const a: string = data.a;
      // $ExpectError
      const b: number = data.b;
    }
  });
  it('handles variables correctly', async () => {
    // $ExpectError
    const mutationResult = await mutation({
      variables: {
        c: 'test',
      },
    });
    if (mutationResult.data) {
      (mutationResult.data.a: string);
      (mutationResult.data.b: string);
      (mutationResult.data.b: number);
    }
    // $ExpectError
    mutation('', {});
    // $ExpectError
    mutation('', {
      variables: {
        c: 5,
      },
    });
  });
  it('handles loading state correctly', () => {
    if (error) {
      (error.message: string);
      (error.graphQLErrors: Array<any>);
      // $ExpectError
      (error.graphQLErrors: string);
      (error.networkError: Error | null);
      const extraInfo = error.extraInfo;
    }
  });
  it('handles error state correctly', () => {
    (loading: boolean);
    // $ExpectError
    (loading: string);
  });
  it('can manually update the cache after a mutation using update on the mutation function', async () => {
    const mutationResult = await mutation({
      variables: {
        c: 'test'
      },
      update: cache => {
        cache.readQuery({ query: 'test' })
        cache.readQuery<string, number>({ query: 'test' })
        // $ExpectError
        cache.readQuery<string>({ query: 'test' })
      }
    });
  })
});
