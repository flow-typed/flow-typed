// @flow

import { ApolloClient, ApolloLink, ApolloCache } from "apollo-client";
import { describe, it } from "flow-typed-test";
import ApolloClientDefault from "apollo-client";

const link = new ApolloLink();
const cache = new ApolloCache();

describe("apollo-client", () => {
  describe("ApolloClient initialization", () => {
    it("passes when passed correct configuration", () => {
      new ApolloClient({
        link,
        cache
      });
    });

    it("query function passes", async () => {
      const client = new ApolloClient({
        link,
        cache
      });
      const result = await client.query({
        query: ``,
        variables: {
          hello: 'world'
        }
      });
      result.data;
    });

    it("mutate function passes", async () => {
      const client = new ApolloClient({
        link,
        cache
      });
      const result = await client.mutate({
        mutation: ``,
        variables: {
          hello: 'world'
        }
      });
      result.data;
    });

    it("passes with default export", () => {
      new ApolloClientDefault({
        link,
        cache
      });
    });

    it("passes when passed optional cnfig options", () => {
      new ApolloClient({
        link,
        cache,
        ssrMode: true,
        ssrForceFetchDelay: 1000,
        connectToDevTools: true,
        queryDeduplication: true,
        defaultOptions: {
          query: {
            fetchPolicy: "cache-and-network"
          }
        }
      });
    });

    it("raises error when missing link", () => {
      // $FlowExpectedError - link required to initialize ApolloClient
      new ApolloClient({
        cache
      });
    });

    it("raises error when missing link on default", () => {
      // $FlowExpectedError - link required to initialize ApolloClient
      new ApolloClientDefault({
        cache
      });
    });

    it("raises error when missing cache", () => {
      // $FlowExpectedError - cache required to initialize ApolloClient
      new ApolloClient({
        link
      });
    });

    it("raises error when passing invalid connectToDevTools", () => {
      // $FlowExpectedError - connectToDevTools must be boolean
      new ApolloClient({
        link,
        cache,
        connectToDevTools: "true"
      });
    });

    it("raises error when passing invalid ssrMode", () => {
      // $FlowExpectedError - ssrMode must be boolean
      new ApolloClient({
        link,
        cache,
        ssrMode: "true"
      });
    });

    it("raises error when passing invalid ssrForceFetchDelay", () => {
      // $FlowExpectedError - ssrForceFetchDelay must be number
      new ApolloClient({
        link,
        cache,
        ssrForceFetchDelay: "true"
      });
    });

    it("raises error when passing invalid queryDeduplication", () => {
      // $FlowExpectedError - queryDeduplication must be boolean
      new ApolloClient({
        link,
        cache,
        queryDeduplication: "true"
      });
    });

    it("raises error when passing invalid defaultOptions", () => {
      // $FlowExpectedError - defaultOptions fetchPolicy is invalid
      new ApolloClient({
        link,
        cache,
        defaultOptions: {
          query: {
            fetchPolicy: "invalidFetchPolicy"
          }
        }
      });
    });

    it("exposes extract", () => {
      const client = new ApolloClient({
        link,
        cache
      });
      client.extract()
    });
    it("exposes restore", () => {
      const client = new ApolloClient({
        link,
        cache
      });
      client.restore({})
    });
  });
});
