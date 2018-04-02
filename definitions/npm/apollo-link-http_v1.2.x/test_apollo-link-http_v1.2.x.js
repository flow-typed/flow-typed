// @flow
import { createHttpLink, HttpLink } from "apollo-link-http";
import type { FetchOptions, ApolloLink, RequestHandler } from "apollo-link-http";

const options: FetchOptions = {};

// $ExpectError
options.uri = 123;
options.uri = "/uri";

//TODO: options.fetch

// $ExpectError
options.includeExtensions = "false";
options.includeExtensions = false;

// $ExpectError
options.credentials = 123;
options.credentials = "credentials";

// $ExpectError
options.foobar = "foobar";

let apolloLink: ApolloLink;
// $ExpectError
apolloLink = createHttpLink({ uri: 123 });
apolloLink = createHttpLink(options);

let httpLink: HttpLink;
// $ExpectError
httpLink = new HttpLink({ uri: 123 });
httpLink = new HttpLink(options);

const requester: RequestHandler = httpLink.requester;
