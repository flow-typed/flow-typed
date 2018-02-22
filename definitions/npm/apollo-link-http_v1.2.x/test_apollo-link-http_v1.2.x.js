// @flow
import { createHttpLink, HttpLink } from "apollo-link-http";
import type { FetchOptions } from "apollo-link-http";

const options: FetchOptions = {};

// $ExpectError
options.uri = 123;
options.uri = "/uri";

//todo test options.fetch

// $ExpectError
options.includeExtensions = "false";
options.includeExtensions = false;

// $ExpectError
options.credentials = 123;
options.credentials = "credentials";

// $ExpectError
options.foobar = "foobar";

//todo change type to ApolloLink from 'apollo-link'
let apolloLink: any;
// $ExpectError
apolloLink = createHttpLink({ uri: 123 });
apolloLink = createHttpLink(options);

let httpLink: HttpLink;
// $ExpectError
httpLink = new HttpLink({ uri: 123 });
httpLink = new HttpLink(options);

//todo change type to RequestHandler from 'apollo-link'
const requester: any = httpLink.requester;
