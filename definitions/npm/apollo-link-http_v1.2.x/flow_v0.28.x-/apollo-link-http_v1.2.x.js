declare module "apollo-link-http" {
  declare export interface FetchOptions {
    uri?: string;
    //todo change to type of Global['fetch']
    fetch?: any;
    includeExtensions?: boolean;
    credentials?: string;
    headers?: any;
    fetchOptions?: any;
  }

  //todo change return type to ApolloLink from 'apollo-link'
  declare export function createHttpLink(opts: FetchOptions): any;

  declare export class HttpLink {
    //todo change type to RequestHandler from 'apollo-link'
    requester: any;
    constructor(opts: FetchOptions): HttpLink;
  }
}
