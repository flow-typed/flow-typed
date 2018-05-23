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
      // $ExpectError - link required to initialize ApolloClient
      new ApolloClient({
        cache
      });
    });

    it("raises error when missing link on default", () => {
      // $ExpectError - link required to initialize ApolloClient
      new ApolloClientDefault({
        cache
      });
    });

    it("raises error when missing cache", () => {
      // $ExpectError - cache required to initialize ApolloClient
      new ApolloClient({
        link
      });
    });

    it("raises error when passing invalid connectToDevTools", () => {
      // $ExpectError - connectToDevTools must be boolean
      new ApolloClient({
        link,
        cache,
        connectToDevTools: "true"
      });
    });

    it("raises error when passing invalid ssrMode", () => {
      // $ExpectError - ssrMode must be boolean
      new ApolloClient({
        link,
        cache,
        ssrMode: "true"
      });
    });

    it("raises error when passing invalid ssrForceFetchDelay", () => {
      // $ExpectError - ssrForceFetchDelay must be number
      new ApolloClient({
        link,
        cache,
        ssrForceFetchDelay: "true"
      });
    });

    it("raises error when passing invalid queryDeduplication", () => {
      // $ExpectError - queryDeduplication must be boolean
      new ApolloClient({
        link,
        cache,
        queryDeduplication: "true"
      });
    });

    it("raises error when passing invalid defaultOptions", () => {
      // $ExpectError - defaultOptions fetchPolicy is invalid
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
