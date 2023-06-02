// @flow

import * as React from 'react';
import { it, describe } from 'flow-typed-test';
import {
  ApolloProvider,
  ApolloConsumer,
  parser,
  operationName,
  type DocumentType,
  type IDocumentDefinition
} from '@apollo/react-common';

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

const HERO_QUERY = gql`
  query GetCharacter($episode: String!, $offset: Int) {
    hero(episode: $episode, offset: $offset) {
      name
      id
      friends {
        name
        id
        appearsIn
      }
    }
  }
`;

describe('<ApolloProvider />', () => {
  it('works when passed client', () => {
    // $FlowExpectedError Should be an instance of ApolloClient
    const client = {};
    <ApolloProvider client={client}>
      <div />
    </ApolloProvider>;
  });

  it('raises an error when not passed a client', () => {
    // $FlowExpectedError ApolloProvider requires client prop
    <ApolloProvider>
      <div />
    </ApolloProvider>;
  });

  it('raises an error when not passed children', () => {
    // Should be an instance of ApolloClient
    const client = {};

    // $FlowExpectedError ApolloProvider requires client prop
    <ApolloProvider client={client} />;
  });
});

describe('<ApolloConsumer />', () => {
  it('passes ApolloClient to the consumer children', () => {
    <ApolloConsumer>
      {client => {
        const onClick = () => {
          client.resetStore();
          client.query({ query: HERO_QUERY });
          client.readQuery({
            query: HERO_QUERY,
            variables: { episode: 'episode' },
          });
          // $FlowExpectedError doSomethingElse is not a method of ApolloClient
          client.doSomethingElse();
        };
        return <button onClick={onClick}>Click</button>;
      }}
    </ApolloConsumer>;
  });
});

describe('parser', () => {
  it('returns IDocumentDefinition', () => {
    const document = {};

    const result = parser({});

    (result: IDocumentDefinition);
    // $FlowExpectedError
    (result: number);
  })
})

describe('operationName', () => {
  it('works', () => {
    const result = operationName('Query');

    (result: string);
    // $FlowExpectedError
    (result: number);
  })

  it('requires DocumentType', () => {
    // $FlowExpectedError must be a DocumentType
    const result = operationName('foo');
  })
})
