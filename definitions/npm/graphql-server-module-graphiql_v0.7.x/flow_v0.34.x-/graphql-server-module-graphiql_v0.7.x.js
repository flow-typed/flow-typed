declare module 'graphql-server-module-graphiql' {

  declare export type GraphiQLData = {
      endpointURL: string;
      subscriptionsEndpoint?: string;
      query?: string;
      variables?: { [mixed] : mixed };
      operationName?: string;
      result?: { [mixed] : mixed };
      passHeader?: string;
  }

  declare export function renderGraphiQL(data: GraphiQLData): string;

}
