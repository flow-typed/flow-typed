// @flow
import * as React from 'react';
import { it, describe } from 'flow-typed-test';
import {
  ApolloProvider,
  ApolloConsumer,
  Query,
  Mutation,
  Subscription,
  type ApolloClient,
  type MutationFunction,
  type MutationResult,
  type QueryRenderProps,
  type PureQueryOptions,
  type SubscriptionResult,
  type RefetchQueryDescription,
} from '@apollo/react-components';

const gql = (strings, ...args) => {}; // graphql-tag stub

const query = gql`
  {
    foo
  }
`;
const mutation = gql`
  mutation {
    foo
  }
`;

type Hero = {
  name: string,
  id: string,
  appearsIn: string[],
  friends: Hero[],
  ...
};

type IQuery = {
  foo: string,
  bar: string,
  ...
};

const HERO_QUERY = gql`
  query GetCharacter($episode: String!, $offset: Int) {
    hero(episode: $episode, offset: $offset) {
      name
      id
      friends {
        name
        id
        appearsIn
      }
    }
  }
`;

const OTHER_QUERY = gql`
  query GetOther($other: String!) {
    other(other: $other) {
      name
    }
  }
`;

const HERO_MUTATION = gql`
  mutation UpdateHero($input: HeroInput!) {
    updateHero(input: $input) {
      hero {
        name
        id
      }
    }
  }
`;

const HERO_SUBSCRIPTION = gql`
  mutation onHeroUpdate($heroId: ID!) {
    heroUpdated(heroId: $heroId) {
      hero {
        name
        id
      }
    }
  }
`;

type HeroQueryVariables = {
  episode: string,
  offset?: ?number,
  ...
};
class HeroQueryComp extends Query<
  { hero: ?Hero, ... },
  { episode: string, offset?: ?number, ... }
> {}

describe('<Query />', () => {
  it('works', () => {
    type Vars = {| foo: string |};
    type Res = {| res: string |};
    const vars: Vars = { foo: 'bar' };
    const q = (
      <Query variables={vars} query={HERO_QUERY}>
        {({ data }: QueryRenderProps<Res, Vars>) => {
          // $FlowExpectedError Cannot get `data.res`
          data.res;
          if (!data) {
            return <div />;
          }
          // $FlowExpectedError Cannot get `data.res` because property `res` is missing in object type
          const s: string = data.res;
          if (data.res) {
            const _s: string = data.res;
          }
          return <div />;
        }}
      </Query>
    );
  });

  it('works when extending Query with types', () => {
    <HeroQueryComp query={HERO_QUERY} variables={{ episode: 'episode' }}>
      {({ data, loading, error }) => {
        if (loading) return 'Loading....';
        if (error) return 'Error!';
        // $FlowExpectedError Cannot get `data.hero`. data may be undefined
        data.hero;
        if (!data || !data.hero) {
          return <div />;
        }
        const hero = data.hero;

        const nameAgain: string = hero.name;
        // $FlowExpectedError unknown is not a property on Hero
        const unknown = hero.unknown;

        return <div>{nameAgain}</div>;
      }}
    </HeroQueryComp>;
  });

  it('raises an error if accessing a prop in children function that doesnt exist', () => {
    <HeroQueryComp query={HERO_QUERY} variables={{ episode: 'episode' }}>
      {// $FlowExpectedError cannot render HeroQueryComp becuase errors is missing in children function (should be error instead of errors)
      ({ data, loading, errors }) => {
        if (loading) return 'Loading....';
        if (errors) return 'Error!';
        return String(data);
      }}
    </HeroQueryComp>;
  });

  describe('refetch', () => {
    it('works if passed variablees that match the query', () => {
      <HeroQueryComp query={HERO_QUERY} variables={{ episode: 'episode' }}>
        {({ data, refetch }) => {
          const onClick = () => {
            refetch();
            refetch({ episode: 'otherEpisode' });
            // $FlowExpectedError refetch variables do not match variables for query
            refetch({ notEpisode: 'otherEpisode' });
          };
          return <button onClick={onClick}>Click!</button>;
        }}
      </HeroQueryComp>;
    });
  });

  describe('fetchMore', () => {
    it('works when passed valid options', () => {
      <HeroQueryComp query={HERO_QUERY} variables={{ episode: 'episode' }}>
        {({ data, fetchMore }) => {
          const onClick = () => {
            fetchMore({
              variables: { episode: 'episode2' },
              updateQuery: (prev, options) => {
                if (!options.fetchMoreResult) return prev;
                return {
                  hero: options.fetchMoreResult.hero,
                };
              },
            });

            const variables: $Shape<HeroQueryVariables> = { offset: 1 };
            fetchMore({
              variables: variables,
              updateQuery: (prev, options) => {
                if (!options.fetchMoreResult) return prev;
                return {
                  hero: options.fetchMoreResult.hero,
                };
              },
            });

            const otherVariables = { other: '1234' };
            fetchMore({
              query: OTHER_QUERY,
              variables: otherVariables,
              updateQuery: (prev, options) => {
                if (!options.fetchMoreResult) return prev;
                return {
                  other: options.fetchMoreResult.other,
                };
              },
            });
          };
          return <button onClick={onClick}>Click!</button>;
        }}
      </HeroQueryComp>;
    });

    it('raises an error when passed invalid options', () => {
      <HeroQueryComp query={HERO_QUERY} variables={{ episode: 'episode' }}>
        {({ data, fetchMore }) => {
          const onClick = () => {
            // $FlowExpectedError variables must match $Shape of query variables
            fetchMore({
              variables: { other: 'hello' },
              updateQuery: (prev, options) => {
                if (!options.fetchMoreResult) return prev;
                return {
                  hero: options.fetchMoreResult.hero,
                };
              },
            });

            // $FlowExpectedError must pass query option if passing different variables than query
            fetchMore({
              variables: { other: '1234' },
              updateQuery: (prev, options) => {
                if (!options.fetchMoreResult) return prev;
                return {
                  other: options.fetchMoreResult.other,
                };
              },
            });

            fetchMore({
              variables: { episode: 'episode2' },
              updateQuery: (prev, options) => {
                if (!options.fetchMoreResult) return prev;
                // $FlowExpectedError updateQuery return type must match query response type
                return {
                  other: options.fetchMoreResult.hero,
                };
              },
            });
          };
          return <button onClick={onClick}>Click!</button>;
        }}
      </HeroQueryComp>;
    });
  });

  describe('updateQuery', () => {
    it('works', () => {
      <HeroQueryComp query={HERO_QUERY} variables={{ episode: 'episode' }}>
        {({ updateQuery }) => {
          // $FlowExpectedError updateQuery return type must match previous result type
          updateQuery((previousResult, options) => ({ hello: 'flow' }));
          const renameHero = (newName: string) =>
            updateQuery((previousResult, options) => {
              // $FlowExpectedError Cannot get `options.unknownProperty` because property `unknownProperty` is missing in options
              const a = options.unknownProperty;
              const { variables } = options;
              return { ...previousResult, name: newName };
            });
          return <div />;
        }}
      </HeroQueryComp>;
    });
  });
});

type HeroSubcriptionVariables = {
  heroId: string,
  ...
};
class HeroSubscriptionComp extends Subscription<
  { hero: ?Hero, ... },
  HeroSubcriptionVariables
> {}

describe('<Subscription />', () => {
  it('works', () => {
    type Vars = {| foo: string |};
    type Res = {| res: string |};
    const vars: Vars = { foo: '1' };
    const q = (
      <Subscription variables={vars} subscription={HERO_SUBSCRIPTION}>
        {({ data }: SubscriptionResult<Res, Vars>) => {
          // $FlowExpectedError Cannot get `data.res`
          data.res;
          if (!data) {
            return <div />;
          }
          // $FlowExpectedError Cannot get `data.res` because property `res` is missing in object type
          const s: string = data.res;
          const _s: ?string = data.res;
          return <div />;
        }}
      </Subscription>
    );
  });
  it('works when extending Subscription with types', () => {
    <HeroSubscriptionComp
      subscription={HERO_SUBSCRIPTION}
      variables={{ heroId: '123' }}
    >
      {({ data, loading, error }) => {
        if (loading) return 'Loading....';
        if (error) return 'Error!';
        // $FlowExpectedError Cannot get `data.hero`. data may be undefined
        data.hero;
        if (!data || !data.hero) {
          return <div />;
        }
        const hero = data.hero;

        const nameAgain: string = hero.name;
        // $FlowExpectedError unknown is not a property on Hero
        const unknown = hero.unknown;

        return <div>{nameAgain}</div>;
      }}
    </HeroSubscriptionComp>;
  });
  it('errors if wrong variables passed', () => {
    type Vars = {| foo: string |};
    type Res = {| res: string |};
    const q = (
      // $FlowExpectedError variables must match shape of query variables
      <Subscription variables={{ foo: 1 }} subscription={HERO_SUBSCRIPTION}>
        {// $FlowExpectedError variables must match shape of query variables
        ({ data }: SubscriptionResult<Res, Vars>) => {}}
      </Subscription>
    );
  });
  it('supports onSubscriptionData prop', function() {
    const q = (
      <Subscription
        subscription={HERO_SUBSCRIPTION}
        onSubscriptionData={({
          client,
          subscriptionData,
        }: {
          client: ApolloClient<any>,
          subscriptionData: SubscriptionResult<{ hero: ?Hero, ... }>,
          ...
        }) => {
          const hero: ?Hero =
            subscriptionData.data && subscriptionData.data.hero
              ? subscriptionData.data.hero
              : null;
        }}
      />
    );
  });
});

type UpdateHeroMutationVariables = {
  input: { id: string, name: string, ... },
  ...
};
class UpdateHeroMutationComp extends Mutation<
  { updateHero?: ?{ hero: ?Hero, ... }, ... },
  UpdateHeroMutationVariables
> {}

describe('<Mutation />', () => {
  it('mutate() args are optional', () => {
    type Vars = {| foo: string |};
    type Res = {| res: string |};
    const vars: Vars = { foo: 'bar' };
    const q = (
      <Mutation variables={vars} mutation={HERO_QUERY}>
        {mutate => {
          mutate();
          return <div />;
        }}
      </Mutation>
    );
  });

  it('works', () => {
    type Vars = {| foo: string |};
    type Res = {| res: string |};
    const vars: Vars = { foo: 'bar' };
    const q = (
      <Mutation variables={vars} mutation={HERO_QUERY}>
        {(
          update: MutationFunction<Res, Vars>,
          { data, client }: MutationResult<Res>
        ) => {
          // $FlowExpectedError Cannot get `data.res`
          data.res;
          if (!data) {
            return <div />;
          }
          const d1: Res = data;
          const s: string = data.res;
          client;
          return <div />;
        }}
      </Mutation>
    );
  });

  it('works when extending Mutation with types', () => {
    <UpdateHeroMutationComp mutation={HERO_MUTATION}>
      {(updateHero, { loading, error, data, called }) => {
        const onClick = () => {
          updateHero({
            variables: { input: { id: '1', name: 'hero1' } },
          });
          // $FlowExpectedError variables must match Mutation variables
          updateHero({
            variables: { id: '1', name: 'hero1' },
          });
        };
        return (
          <div>
            <button disabled={loading} onClick={onClick}>
              Click
            </button>
            {error && error.message}
          </div>
        );
      }}
    </UpdateHeroMutationComp>;
  });

  describe('optimisticResponse', () => {
    it('works when passed an optimisticResponse object', () => {
      <UpdateHeroMutationComp mutation={HERO_MUTATION}>
        {updateHero => {
          const optimisticResponse = {
            updateHero: {
              __typename: 'UpdateHeroPayload',
              hero: {
                __typename: 'Hero',
                name: 'Hero1',
                id: '1',
              },
            },
          };
          const onClick = () => {
            updateHero({
              optimisticResponse,
              variables: { input: { id: '1', name: 'hero1' } },
            });

            // $FlowExpectedError optimisticResponse must be an object
            updateHero({
              optimisticResponse: 'optimisticResponse',
              variables: { input: { id: '1', name: 'hero1' } },
            });
          };
          return <button onClick={onClick}>Click</button>;
        }}
      </UpdateHeroMutationComp>;
    });
  });

  describe('refetchQueries', () => {
    it('works when passed refetchQueries to Mutation component', () => {
      const queryOption = {
        query: HERO_QUERY,
        variables: { episode: 'episode' },
      };
      const refetchQueries: RefetchQueryDescription = [queryOption, 'foo'];

      <UpdateHeroMutationComp
        mutation={HERO_MUTATION}
        refetchQueries={refetchQueries}
      >
        {updateHero => {
          const onClick = () => {
            updateHero({
              variables: { input: { id: '1', name: 'hero1' } },
            });
          };
          return <button onClick={onClick}>Click</button>;
        }}
      </UpdateHeroMutationComp>;

      // $FlowExpectedError refetchQueries must be an array of queries or a function that returns an array of queries
      <UpdateHeroMutationComp
        mutation={HERO_MUTATION}
        refetchQueries={queryOption}
      >
        {updateHero => {
          const onClick = () => {
            updateHero({
              variables: { input: { id: '1', name: 'hero1' } },
            });
          };
          return <button onClick={onClick}>Click</button>;
        }}
      </UpdateHeroMutationComp>;
    });

    it('works when passed refetchQueries to mutation function', () => {
      <UpdateHeroMutationComp mutation={HERO_MUTATION}>
        {updateHero => {
          const onClick = () => {
            const queryOption = {
              query: HERO_QUERY,
              variables: { episode: 'episode' },
            };
            const refetchQueries: PureQueryOptions[] = [queryOption];
            updateHero({
              variables: { input: { id: '1', name: 'hero1' } },
              refetchQueries,
            });
            updateHero({
              variables: { input: { id: '1', name: 'hero1' } },
              refetchQueries: () => refetchQueries,
            });

            updateHero({
              variables: { input: { id: '1', name: 'hero1' } },
              // $FlowExpectedError refetchQueries must be an array of queries or a function that returns an array of queries
              refetchQueries: () => queryOption,
            });
            // $FlowExpectedError refetchQueries must be an array of queries or a function that returns an array of queries
            updateHero({
              variables: { input: { id: '1', name: 'hero1' } },
              refetchQueries: queryOption,
            });
          };
          return <button onClick={onClick}>Click</button>;
        }}
      </UpdateHeroMutationComp>;
    });
  });

  describe('update', () => {
    it('can manually update the cache after a mutation by passing update prop to the Mutation component', () => {
      <UpdateHeroMutationComp
        mutation={HERO_MUTATION}
        update={(cache, { data }) => {
          // $FlowExpectedError data may be undefined
          data.updateHero;
          if (data && data.updateHero) {
            const hero = cache.readQuery({
              query: HERO_QUERY,
              variables: { episoe: 'episode' },
            });
            cache.writeQuery({
              query: HERO_QUERY,
              variables: { episode: 'episode' },
              data: { hero: data.updateHero },
            });
          }
        }}
      >
        {updateHero => {
          const onClick = () => {
            updateHero({
              variables: { input: { id: '1', name: 'hero1' } },
            });
          };
          return <button onClick={onClick}>Click</button>;
        }}
      </UpdateHeroMutationComp>;
    });

    it('can manually update the cache after a mutation using update on the mutation function', () => {
      <UpdateHeroMutationComp mutation={HERO_MUTATION}>
        {updateHero => {
          const onClick = () => {
            updateHero({
              variables: { input: { id: '1', name: 'hero1' } },
              update: (cache, { data }) => {
                // $FlowExpectedError data may be undefined
                data.updateHero;

                if (data && data.updateHero) {
                  const hero = cache.readQuery({
                    query: HERO_QUERY,
                    variables: { episoe: 'episode' },
                  });
                  cache.writeQuery({
                    query: HERO_QUERY,
                    variables: { episode: 'episode' },
                    data: { hero: data.updateHero },
                  });
                  if (data.updateHero && data.updateHero.hero) {
                    cache.writeFragment({
                      id: '1',
                      fragment: gql`
                        fragment myHero on Hero {
                          name
                        }
                      `,
                      data: {
                        name: data.updateHero.hero.name,
                      },
                    });
                  }

                  // $FlowExpectedError readQuery requires query
                  cache.readQuery({
                    variables: { episode: 'episode' },
                  });
                  // $FlowExpectedError writeQuery requires data
                  cache.writeQuery({
                    query: HERO_QUERY,
                    variables: { episode: 'episode' },
                  });
                  // $FlowExpectedError writeFragment requires id
                  cache.writeFragment({
                    fragment: gql`
                      fragment myHero on Hero {
                        name
                      }
                    `,
                    data: {
                      name: 'name',
                    },
                  });
                  // $FlowExpectedError cannot call unknownFunction on cache
                  cache.unknwonFunction();
                }
              },
            });
          };
          return <button onClick={onClick}>Click</button>;
        }}
      </UpdateHeroMutationComp>;
    });
  });
});

describe('<ApolloProvider />', () => {
  it('works when passed client', () => {
    // Should be an instance of ApolloClient
    const client = {};
    <ApolloProvider client={client}>
      <div />
    </ApolloProvider>;
  });

  it('raises an error when not passed a client', () => {
    // $FlowExpectedError ApolloPrivder requires client prop
    <ApolloProvider>
      <div />
    </ApolloProvider>;
  });

  it('raises an error when not passed children', () => {
    // Should be an instance of ApolloClient
    const client = {};

    // $FlowExpectedError ApolloPrivder requires client prop
    <ApolloProvider client={client} />;
  });
});

describe('<ApolloConsumer />', () => {
  it('passes ApolloClient to the consumer children', () => {
    <ApolloConsumer>
      {client => {
        const onClick = () => {
          client.resetStore();
          client.query({ query: HERO_QUERY });
          client.readQuery({
            query: HERO_QUERY,
            variables: { episode: 'episode' },
          });
          // $FlowExpectedError doSomethingElse is not a method of ApolloClient
          client.doSomethingElse();
        };
        return <button onClick={onClick}>Click</button>;
      }}
    </ApolloConsumer>;
  });
});
