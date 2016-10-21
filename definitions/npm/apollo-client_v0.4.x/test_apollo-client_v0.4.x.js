/* @flow */
import ApolloClient, { createFragment } from 'apollo-client';

// $ExpectError
const a: ApolloClient = new ApolloClient(false);

// $ExpectError
const client = new ApolloClient({
    batchInterval: 'string'
})
