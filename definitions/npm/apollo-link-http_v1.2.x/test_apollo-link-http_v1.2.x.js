// @flow
import { createHttpLink, HttpLink } from "apollo-link-http";
import type { FetchOptions, ApolloLink, RequestHandler } from "apollo-link-http";

const options: FetchOptions = {};

// $FlowExpectedError
options.uri = 123;
options.uri = "/uri";

//TODO: options.fetch

// $FlowExpectedError
options.includeExtensions = "false";
options.includeExtensions = false;

// $FlowExpectedError
options.credentials = 123;
options.credentials = "credentials";

// $FlowExpectedError
options.foobar = "foobar";

let apolloLink: ApolloLink;
// $FlowExpectedError
apolloLink = createHttpLink({ uri: 123 });
apolloLink = createHttpLink(options);

let httpLink: HttpLink;
// $FlowExpectedError
httpLink = new HttpLink({ uri: 123 });
httpLink = new HttpLink(options);

const requester: RequestHandler = httpLink.requester;
