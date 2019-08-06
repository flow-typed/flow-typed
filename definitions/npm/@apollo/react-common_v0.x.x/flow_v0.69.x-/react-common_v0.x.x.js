declare module '@apollo/react-common/@@apollo-client' {
  // TODO
  declare export type ApolloClient<T> = T;
}

declare module '@apollo/react-common/lib/context/ApolloContext' {
  import type { ApolloClient } from '@apollo/react-common/@@apollo-client';

  declare export type ApolloContextValue<TCache> = {
    client?: ApolloClient<TCache>,
    renderPromises?: {},
  };

  declare export function getApolloContext(): React$Context<
    ApolloContextValue<any>
  >;

  declare export function resetApolloContext(): void;
}

declare module '@apollo/react-common/lib/context/ApolloProvider' {
  import type { ApolloClient } from '@apollo/react-common/@@apollo-client';

  declare export type ApolloProviderProps<TCache> = $ReadOnly<{|
    client: ApolloClient<TCache>,
    children: React$Node,
  |}>;

  declare export var ApolloProvider: React$ComponentType<
    ApolloProviderProps<any>
  >;
}

declare module '@apollo/react-common/lib/context/ApolloConsumer' {
  import type { ApolloClient } from '@apollo/react-common/@@apollo-client';

  declare export type ApolloConsumerProps = {
    children: (client: ApolloClient<{}>) => React$Node,
  };

  declare export var ApolloConsumer: React$ComponentType<ApolloConsumerProps>;
}

declare module '@apollo/react-common' {
  declare export * from '@apollo/react-common/lib/context/ApolloContext'
  declare export * from '@apollo/react-common/lib/context/ApolloConsumer'
  declare export * from '@apollo/react-common/lib/context/ApolloProvider'
}
