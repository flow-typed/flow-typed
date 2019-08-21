// @flow
import * as React from "react";
import { it, describe } from "flow-typed-test";
import {useQuery, useMutation, useSubscription, useLazyQuery, useApolloClient} from "@apollo/react-hooks";

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
  friends: Hero[]
};

type IQuery = {
  foo: string,
  bar: string
};

describe("useQuery hook", () => {
  type Data = {
    a: string,
    b: string,
  };
  type Variables = {
    c: string,
  };
  const result = useQuery<Data, Variables>('test');
  
  const {data, loading, error} = result;
  it("handles data correctly", () => {
    if (data) {
      const a: string = data.a;
      // $ExpectError cannot assign `data.b` to `b` because string [2] is incompatible with number
      const b: number = data.b;
    }
  });
  it("handles loading state correctly", () => {
    if (error) {
      (error.message: string);
      (error.graphQLErrors: Array<any>);
      // $ExpectError
      (error.graphQLErrors: string);
      (error.networkError: Error | null);
      const extraInfo = error.extraInfo;
    }
  });
  it("handles error state correctly", () => {
    (loading: boolean);
    // $ExpectError
    (loading: string);
  });
});

describe("useMutation hook", () => {
  type Data = {
    a: string,
    b: string,
  };
  type Variables = {
    c: string,
  };
  const mutation = useMutation<Data, Variables>('test');
  
  const {data, loading, error} = result;
  it("handles data correctly", () => {
    if (data) {
      const a: string = data.a;
      // $ExpectError cannot assign `data.b` to `b` because string [2] is incompatible with number
      const b: number = data.b;
    }
  });
  it("handles loading state correctly", () => {
    if (error) {
      (error.message: string);
      (error.graphQLErrors: Array<any>);
      // $ExpectError
      (error.graphQLErrors: string);
      (error.networkError: Error | null);
      const extraInfo = error.extraInfo;
    }
  });
  it("handles error state correctly", () => {
    (loading: boolean);
    // $ExpectError
    (loading: string);
  });
});

