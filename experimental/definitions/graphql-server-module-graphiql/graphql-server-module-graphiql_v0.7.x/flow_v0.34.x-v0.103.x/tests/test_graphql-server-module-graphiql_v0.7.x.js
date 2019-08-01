// @flow

import { renderGraphiQL } from 'graphql-server-module-graphiql';
import type { GraphiQLData } from 'graphql-server-module-graphiql';

// $ExpectError
renderGraphiQL();

// $ExpectError
renderGraphiQL({});

const html : string = renderGraphiQL({endpointURL: '/graphiql'});

const options : GraphiQLData = {
  endpointURL: '/graphiql',
  subscriptionsEndpoint: '/ws',
  query: '{film(filmID: 1) {director}}',
  variables: {},
  operationName: '?',
  result: {
  "data": {"film": {"director": "George Lucas"}}},
  passHeader: 'x-my-header: my-value'
};
const html2 = renderGraphiQL(options);
(html2 : string)
