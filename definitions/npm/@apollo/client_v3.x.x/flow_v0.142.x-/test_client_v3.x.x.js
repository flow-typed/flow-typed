// @flow

import { describe, it } from 'flow-typed-test';
import { ApolloCache, ApolloClient, ApolloLink, ApolloProvider, createHttpLink, useSubscription } from '@apollo/client';
import type { FetchResult, OnSubscriptionDataOptions, Operation } from '@apollo/client';
import { MockedProvider } from "@apollo/client/testing";
import { onError } from "@apollo/client/link/error";
import * as React from 'react';
import { RetryLink } from '@apollo/client/link/retry';

const client = new ApolloClient<{ ... }>({ cache: new ApolloCache() });

type MutationData = {|
  id: string,
|};

type MutationVariables = {|
  myVar: string,
|};

describe('ApolloLink', () => {
  it('concatenates from an array of links', () => {
    const link = ApolloLink.from([new RetryLink()]);
  });

  it('rejects construction from wrong type', () => {
    class BadLink {}

    // $FlowExpectedError[incompatible-call]
    const link = ApolloLink.from([new BadLink()]);
  });
});

describe('ApolloClient', () => {
  describe('mutate', () => {
    it('returns data type', async () => {
      const result: FetchResult<MutationData> = await client.mutate<MutationData, MutationVariables>({ mutation: {}, variables: { myVar: 'foo' } });
      const data: ?MutationData = result.data;

      // $FlowExpectedError[prop-missing]
      const notData: ?{| wrong: string |} = result.data;
    });
    it('accepts correct variables type', () => {
      client.mutate<MutationData, MutationVariables>({ mutation: {}, variables: { myVar: 'foo' } });
    });
    it('rejects wrong variables type', () => {
      // $FlowExpectedError[prop-missing]
      client.mutate<MutationData, MutationVariables>({mutation: {}, variables: {wrongVariable: 99}});
    });
  });
});

type SubscriptionData = {|
  id: string,
|};

type SubscriptionVariables = {|
  scope: string,
|};

type WrongData = {|
  wrong: "type",
|};

describe('useSubscription', () => {
  it('obSubscriptionData accepts correct subscription data type', () => {
    const query = {};
    const onSubscriptionData = (data: OnSubscriptionDataOptions<SubscriptionData>) => {
      const subscriptionData: ?SubscriptionData = data.subscriptionData.data;
    };
    useSubscription<SubscriptionData, SubscriptionVariables>(query, { onSubscriptionData });
  });

  it('obSubscriptionData rejects wrong subscription data type', () => {
    const query = {};
    const onSubscriptionData = (data: OnSubscriptionDataOptions<WrongData>) => {
      const subscriptionData: ?WrongData = data.subscriptionData.data;
    };
    // $FlowExpectedError[prop-missing]
    useSubscription<SubscriptionData, SubscriptionVariables>(query, { onSubscriptionData });
  });
});

describe('ApolloProvider', () => {
  it('accepts a client and children', () => {
    <ApolloProvider client={client} ><div /></ApolloProvider>;
  });

  it('requires a client', () => {
    // $FlowExpectedError[prop-missing]
    <ApolloProvider><div /></ApolloProvider>;
  });

  it('requires children', () => {
    // $FlowExpectedError[prop-missing]
    <ApolloProvider client={client} />;
  });
});

describe('MockedProvider', () => {
  it('accepts mocks', () => {
    const query = {};
    const mocks = [
      {
        request: {
          query,
          variables: {
            filters: {
              startDate: null,
              endDate: null,
              contractingCompanyIds: null,
              maintenanceEventIds: null,
              subsystemIds: null,
            },
            contractingCompanyIds: null,
            maintenanceEventIds: null,
            subsystemIds: null,
          },
        },
        result: {
          data: {
            getChartData: {
              chartData: [],
            }
          },
        },
      },
    ];
    <MockedProvider mocks={mocks}><div /></MockedProvider>;
  });
});

describe("links", () => {
  it("creates httpLink", () => {
    const httpLink: ApolloLink = createHttpLink({ uri: "http://example.com" });
  });
  it("creates onError link", () => {
    onError(({ operation, networkError, response }) => {
      const op: Operation = operation;

      // $FlowExpectedError[incompatible-type]
      const opx: ApolloLink = operation;
    });
  })
});
