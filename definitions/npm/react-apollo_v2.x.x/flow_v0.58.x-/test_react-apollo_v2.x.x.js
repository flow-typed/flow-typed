// @flow
import * as React from "react";
import { it, describe } from "flow-typed-test";
import {
  ApolloProvider,
  ApolloConsumer,
  Query,
  Mutation,
  Subscription,
  graphql,
  withApollo,
  type MutationFunction,
  type MutationResult,
  type QueryRenderProps,
  type OperationComponent,
  type GraphqlQueryControls,
  type ChildProps,
  type GraphqlData,
  type PureQueryOptions,
  type SubscriptionResult
} from "react-apollo";

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
  friends: Hero[]
};

type IQuery = {
  foo: string,
  bar: string
};

const withData: OperationComponent<IQuery> = graphql(query);

it("works with functional component", () => {
  const FunctionalWithData = withData(({ data }) => {
    // $ExpectError string type being treated as numerical
    if (data.foo > 1) return <span />;

    return null;
  });
});

it("works with class component, this requires a stricter definition", () => {
  type BasicComponentProps = ChildProps<{}, IQuery>;
  class BasicComponent extends React.Component<BasicComponentProps> {
    render() {
      const { foo, bar } = this.props.data;

      // $ExpectError string type being treated as numerical
      if (bar > 1) return null;

      // The below works as expected
      return <div>{foo.length} string length</div>;
    }
  }
  const BasicClassWithData = withData(BasicComponent);
});

it("works with class component with it's own variable", () => {
  type CmplxOwnProps = {| faz: string |};
  type CmplxComponentProps = {
    data: GraphqlQueryControls<> & IQuery,
    mutate: any // The mutation is actually required or we get a error at the withData
  } & CmplxOwnProps;
  class CmplxComponent extends React.Component<CmplxComponentProps> {
    render() {
      const { data: { loading, error, bar, foo }, faz } = this.props;
      if (loading) return <div>Loading</div>;
      if (error) return <h1>ERROR</h1>;

      // $ExpectError string type being treated as numerical
      if (bar > 1) return null;

      // The below works as expected
      return (
        <div>
          {foo.length} string length compared to faz {faz.length} length
        </div>
      );
    }
  }
  const withFancyData: OperationComponent<IQuery, CmplxOwnProps> = graphql(
    query
  );
  const CmplxWithData = withFancyData(CmplxComponent);
});

it("works with class component with it's own variable Props specified at the end", () => {
  // Same as above but with the Props specified at the end
  // since we don't rely on the ChildProps<P, R> we don't need the mutate: any
  type Cmplx2OwnProps = { faz: string }; // We can have exact own props as we don't rely on the TMergedProps
  type Cmplx2ComponentProps = {
    data: IQuery & GraphqlQueryControls<>
  } & Cmplx2OwnProps;
  class Cmplx2Component extends React.Component<Cmplx2ComponentProps> {
    render() {
      const { data: { loading, error, bar, foo }, faz } = this.props;
      if (loading) return <div>Loading</div>;
      if (error) return <h1>ERROR</h1>;

      // $ExpectError string type being treated as numerical
      if (bar > 1) return null;

      // The below works as expected
      return (
        <div>
          {foo.length} string length compared to faz {faz.length} length
        </div>
      );
    }
  }
  const withFancyData2: OperationComponent<
    IQuery,
    Cmplx2OwnProps,
    *,
    Cmplx2ComponentProps
  > = graphql(query);
  const Cmplx2WithData = withFancyData2(Cmplx2Component);
});

const HERO_QUERY = gql`
  query GetCharacter($episode: String!, offset: Int) {
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

it("works with Variables specified", () => {
  type Response = {
    hero: Hero
  };

  type InputProps = {
    episode: string
  };

  type Variables = {
    episode: string
  };

  type Props = GraphqlData<Response, Variables> & {
    someProp: string
  };

  const withCharacter: OperationComponent<
    Response,
    InputProps,
    Variables,
    Props
  > = graphql(HERO_QUERY, {
    options: ({ episode }) => {
      // $ExpectError [string] The operand of an arithmetic operation must be a number
      episode * 10;
      return {
        // $ExpectError [number] This type is incompatible with string
        variables: { episode: 10 }
      };
    },
    props: ({ data, ownProps }) => ({
      ...data,
      // $ExpectError [string] This type cannot be compared to number
      episode: ownProps.episode > 1,
      // $ExpectError property `isHero`. Property not found on object type
      isHero: data && data.hero && data.hero.isHero,
      // $ExpectError Property `someProp`. This type is incompatible with string
      someProp: 1
    })
  });

  withCharacter(({ loading, hero, error }) => {
    if (loading) return <div>Loading</div>;
    if (error) return <h1>ERROR</h1>;
    return null;
  });

  class Character extends React.Component<Props> {
    render() {
      const { loading, hero, error } = this.props;
      if (loading) return <div>Loading</div>;
      if (error) return <h1>ERROR</h1>;
      return null; // actual component with data;
    }
  }
  const CharacterWithData = withCharacter(Character);
});

it("works with withApollo HOC", () => {
  const Manual = withApollo(({ client }) => {
    // XXX please don't ever actually do this
    client.query({ query: HERO_QUERY });
    return null;
  });

  // withApollo passes `client` property so that it is no longer required
  (Manual: React.ComponentType<{}>);
});

type HeroQueryVariables = {
  episode: string,
  offset?: ?number
};
class HeroQueryComp extends Query<
  { hero: ?Hero },
  { episode: string, offset?: ?number }
> {}

describe("<Query />", () => {
  it("works", () => {
    type Vars = {| foo: string |};
    type Res = {| res: string |};
    const vars: Vars = { foo: "bar" };
    const q = (
      <Query variables={vars} query={HERO_QUERY}>
        {({ data }: QueryRenderProps<Res, Vars>) => {
          // $ExpectError Cannot get `data.res`
          data.res;
          if (!data) {
            return;
          }
          const d1: Res | {||} = data;
          // $ExpectError Cannot get `data.res` because property `res` is missing in object type
          const s: string = data.res;
          if (d1.res) {
            const d2: Res = d1;
            const s: string = d1.res;
          }
        }}
      </Query>
    );
  });

  it("works when extending Query with types", () => {
    <HeroQueryComp query={HERO_QUERY} variables={{ episode: "episode" }}>
      {({ data, loading, error }) => {
        if (loading) return "Loading....";
        if (error) return "Error!";
        // $ExpectError Cannot get `data.hero`. data may be undefined
        data.hero;
        if (!data || !data.hero) {
          return;
        }
        const hero = data.hero;

        const nameAgain: string = hero.name;
        // $ExpectError unknown is not a property on Hero
        const unknown = hero.unknown;

        return <div>{nameAgain}</div>;
      }}
    </HeroQueryComp>;
  });

  it("raises an error if accessing a prop in children function that doesnt exist", () => {
    <HeroQueryComp query={HERO_QUERY} variables={{ episode: "episode" }}>
      {// $ExpectError cannot render HeroQueryComp becuase errors is missing in children function (should be error instead of errors)
      ({ data, loading, errors }) => {
        if (loading) return "Loading....";
        if (errors) return "Error!";
        return String(data);
      }}
    </HeroQueryComp>;
  });

  describe("refetch", () => {
    it("works if passed variablees that match the query", () => {
      <HeroQueryComp query={HERO_QUERY} variables={{ episode: "episode" }}>
        {({ data, refetch }) => {
          const onClick = () => {
            refetch();
            refetch({ episode: "otherEpisode" });
            // $ExpectError refetch variables do not match variables for query
            refetch({ notEpisode: "otherEpisode" });
          };
          return <button onClick={onClick}>Click!</button>;
        }}
      </HeroQueryComp>;
    });
  });

  describe("fetchMore", () => {
    it("works when passed valid options", () => {
      <HeroQueryComp query={HERO_QUERY} variables={{ episode: "episode" }}>
        {({ data, fetchMore }) => {
          const onClick = () => {
            fetchMore({
              variables: { episode: "episode2" },
              updateQuery: (prev, options) => {
                if (!options.fetchMoreResult) return prev;
                return {
                  hero: options.fetchMoreResult.hero
                };
              }
            });

            const variables: $Shape<HeroQueryVariables> = { offset: 1 };
            fetchMore({
              variables: variables,
              updateQuery: (prev, options) => {
                if (!options.fetchMoreResult) return prev;
                return {
                  hero: options.fetchMoreResult.hero
                };
              }
            });

            const otherVariables = { other: "1234" };
            fetchMore({
              query: OTHER_QUERY,
              variables: otherVariables,
              updateQuery: (prev, options) => {
                if (!options.fetchMoreResult) return prev;
                return {
                  other: options.fetchMoreResult.other
                };
              }
            });
          };
          return <button onClick={onClick}>Click!</button>;
        }}
      </HeroQueryComp>;
    });

    it("raises an error when passed invalid options", () => {
      <HeroQueryComp query={HERO_QUERY} variables={{ episode: "episode" }}>
        {({ data, fetchMore }) => {
          const onClick = () => {
            // $ExpectError variables must match $Shape of query variables
            fetchMore({
              variables: { other: "hello" },
              updateQuery: (prev, options) => {
                if (!options.fetchMoreResult) return prev;
                return {
                  hero: options.fetchMoreResult.hero
                };
              }
            });

            // $ExpectError must pass query option if passing different variables than query
            fetchMore({
              variables: { other: "1234" },
              updateQuery: (prev, options) => {
                if (!options.fetchMoreResult) return prev;
                return {
                  other: options.fetchMoreResult.other
                };
              }
            });

            fetchMore({
              variables: { episode: "episode2" },
              updateQuery: (prev, options) => {
                if (!options.fetchMoreResult) return prev;
                // $ExpectError updateQuery return type must match query response type
                return {
                  other: options.fetchMoreResult.hero
                };
              }
            });
          };
          return <button onClick={onClick}>Click!</button>;
        }}
      </HeroQueryComp>;
    });
  });

  describe("updateQuery", () => {
    it("works", () => {
      <HeroQueryComp query={HERO_QUERY} variables={{ episode: "episode" }}>
        {({ updateQuery }) => {
          // $ExpectError updateQuery return type must match previous result type
          updateQuery((previousResult, options) => ({ hello: 'flow' }))
          const renameHero = (newName: string) => updateQuery((previousResult, options) => {
            // $ExpectError Cannot get `options.unknownProperty` because property `unknownProperty` is missing in options
            const a = options.unknownProperty
            const { variables } = options
            return { ...previousResult, name: newName }
          })
        }}
      </HeroQueryComp>;
    })
  })
});

type HeroSubcriptionVariables = {
  heroId: string
};
class HeroSubscriptionComp extends Subscription<
  { hero: ?Hero },
  HeroSubcriptionVariables
> {}

describe("<Subscription />", () => {
  it("works", () => {
    type Vars = {| foo: string |};
    type Res = {| res: string |};
    const vars: Vars = { foo: "1" };
    const q = (
      <Subscription variables={vars} subscription={HERO_SUBSCRIPTION}>
        {({ data }: SubscriptionResult<Res, Vars>) => {
          // $ExpectError Cannot get `data.res`
          data.res;
          if (!data) {
            return;
          }
          const d1: Res | {||} = data;
          // $ExpectError Cannot get `data.res` because property `res` is missing in object type
          const s: string = data.res;
          if (d1.res) {
            const d2: Res = d1;
            const s: string = d1.res;
          }
        }}
      </Subscription>
    );
  });
  it("works when extending Subscription with types", () => {
    <HeroSubscriptionComp subscription={HERO_SUBSCRIPTION} variables={{ heroId: "123" }}>
      {({ data, loading, error }) => {
        if (loading) return "Loading....";
        if (error) return "Error!";
        // $ExpectError Cannot get `data.hero`. data may be undefined
        data.hero;
        if (!data || !data.hero) {
          return;
        }
        const hero = data.hero;

        const nameAgain: string = hero.name;
        // $ExpectError unknown is not a property on Hero
        const unknown = hero.unknown;

        return <div>{nameAgain}</div>;
      }}
    </HeroSubscriptionComp>;
  });
  it("errors if wrong variables passed", () => {
    type Vars = {| foo: string |};
    type Res = {| res: string |};
    const q = (
      <Subscription variables={{ foo: 1 }} subscription={HERO_SUBSCRIPTION}>
        { // $ExpectError variables must match shape of query variables
          ({ data }: SubscriptionResult<Res, Vars>) => {
        }}
      </Subscription>
    );
  });
});

type UpdateHeroMutationVariables = {
  input: { id: string, name: string }
};
class UpdateHeroMutationComp extends Mutation<
  { updateHero?: ?{ hero: ?Hero } },
  UpdateHeroMutationVariables
> {}

describe("<Mutation />", () => {
  it("works", () => {
    type Vars = {| foo: string |};
    type Res = {| res: string |};
    const vars: Vars = { foo: "bar" };
    const q = (
      <Mutation variables={vars} mutation={HERO_QUERY}>
        {(
          update: MutationFunction<Res, Vars>,
          { data }: MutationResult<Res>
        ) => {
          // $ExpectError Cannot get `data.res`
          data.res;
          if (!data) {
            return;
          }
          const d1: Res = data;
          const s: string = data.res;
        }}
      </Mutation>
    );
  });

  it("works when extending Mutation with types", () => {
    <UpdateHeroMutationComp mutation={HERO_MUTATION}>
      {(updateHero, { loading, error, data, called }) => {
        const onClick = () => {
          updateHero({
            variables: { input: { id: "1", name: "hero1" } }
          });
          // $ExpectError variables must match Mutation variables
          updateHero({
            variables: { id: "1", name: "hero1" }
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

  describe("optimisticResponse", () => {
    it("works when passed an optimisticResponse object", () => {
      <UpdateHeroMutationComp mutation={HERO_MUTATION}>
        {updateHero => {
          const optimisticResponse = {
            updateHero: {
              __typename: "UpdateHeroPayload",
              hero: {
                __typename: "Hero",
                name: "Hero1",
                id: "1"
              }
            }
          };
          const onClick = () => {
            updateHero({
              optimisticResponse,
              variables: { input: { id: "1", name: "hero1" } }
            });

            // $ExpectError optimisticResponse must be an object
            updateHero({
              optimisticResponse: "optimisticResponse",
              variables: { input: { id: "1", name: "hero1" } }
            });
          };
          return <button onClick={onClick}>Click</button>;
        }}
      </UpdateHeroMutationComp>;
    });
  });

  describe("refetchQueries", () => {
    it("works when passed refetchQueries to Mutation component", () => {
      const queryOption = {
        query: HERO_QUERY,
        variables: { episode: "episode" }
      };
      const refetchQueries: PureQueryOptions[] = [queryOption];

      <UpdateHeroMutationComp
        mutation={HERO_MUTATION}
        refetchQueries={refetchQueries}
      >
        {updateHero => {
          const onClick = () => {
            updateHero({
              variables: { input: { id: "1", name: "hero1" } }
            });
          };
          return <button onClick={onClick}>Click</button>;
        }}
      </UpdateHeroMutationComp>;

      // $ExpectError refetchQueries must be an array of queries or a function that returns an array of queries
      <UpdateHeroMutationComp
        mutation={HERO_MUTATION}
        refetchQueries={queryOption}
      >
        {updateHero => {
          const onClick = () => {
            updateHero({
              variables: { input: { id: "1", name: "hero1" } }
            });
          };
          return <button onClick={onClick}>Click</button>;
        }}
      </UpdateHeroMutationComp>;
    });

    it("works when passed refetchQueries to mutation function", () => {
      <UpdateHeroMutationComp mutation={HERO_MUTATION}>
        {updateHero => {
          const onClick = () => {
            const queryOption = {
              query: HERO_QUERY,
              variables: { episode: "episode" }
            };
            const refetchQueries: PureQueryOptions[] = [queryOption];
            updateHero({
              variables: { input: { id: "1", name: "hero1" } },
              refetchQueries
            });
            updateHero({
              variables: { input: { id: "1", name: "hero1" } },
              refetchQueries: () => refetchQueries
            });

            updateHero({
              variables: { input: { id: "1", name: "hero1" } },
              // $ExpectError refetchQueries must be an array of queries or a function that returns an array of queries
              refetchQueries: () => queryOption
            });
            // $ExpectError refetchQueries must be an array of queries or a function that returns an array of queries
            updateHero({
              variables: { input: { id: "1", name: "hero1" } },
              refetchQueries: queryOption
            });
          };
          return <button onClick={onClick}>Click</button>;
        }}
      </UpdateHeroMutationComp>;
    });
  });

  describe("update", () => {
    it("can manually update the cache after a mutation by passing update prop to the Mutation component", () => {
      <UpdateHeroMutationComp
        mutation={HERO_MUTATION}
        update={(cache, { data }) => {
          // $ExpectError data may be undefined
          data.updateHero;
          if (data && data.updateHero) {
            const hero = cache.readQuery({
              query: HERO_QUERY,
              variables: { episoe: "episode" }
            });
            cache.writeQuery({
              query: HERO_QUERY,
              variables: { episode: "episode" },
              data: { hero: data.updateHero }
            });
          }
        }}
      >
        {updateHero => {
          const onClick = () => {
            updateHero({
              variables: { input: { id: "1", name: "hero1" } }
            });
          };
          return <button onClick={onClick}>Click</button>;
        }}
      </UpdateHeroMutationComp>;
    });

    it("can manually update the cache after a mutation using update on the mutation function", () => {
      <UpdateHeroMutationComp mutation={HERO_MUTATION}>
        {updateHero => {
          const onClick = () => {
            updateHero({
              variables: { input: { id: "1", name: "hero1" } },
              update: (cache, { data }) => {
                // $ExpectError data may be undefined
                data.updateHero;

                if (data && data.updateHero) {
                  const hero = cache.readQuery({
                    query: HERO_QUERY,
                    variables: { episoe: "episode" }
                  });
                  cache.writeQuery({
                    query: HERO_QUERY,
                    variables: { episode: "episode" },
                    data: { hero: data.updateHero }
                  });
                  if (data.updateHero && data.updateHero.hero) {
                    cache.writeFragment({
                      id: "1",
                      fragment: gql`
                        fragment myHero on Hero {
                          name
                        }
                      `,
                      data: {
                        name: data.updateHero.hero.name
                      }
                    });
                  }

                  // $ExpectError readQuery requires query
                  cache.readQuery({
                    variables: { episode: "episode" }
                  });
                  // $ExpectError writeQuery requires data
                  cache.writeQuery({
                    query: HERO_QUERY,
                    variables: { episode: "episode" }
                  });
                  // $ExpectError writeFragment requires id
                  cache.writeFragment({
                    fragment: gql`
                      fragment myHero on Hero {
                        name
                      }
                    `,
                    data: {
                      name: "name"
                    }
                  });
                  // $ExpectError cannot call unknownFunction on cache
                  cache.unknwonFunction();
                }
              }
            });
          };
          return <button onClick={onClick}>Click</button>;
        }}
      </UpdateHeroMutationComp>;
    });
  });
});

describe("<ApolloProvider />", () => {
  it("works when passed client", () => {
    // Should be an instance of ApolloClient
    const client = {};
    <ApolloProvider client={client}>
      <div />
    </ApolloProvider>;
  });

  it("raises an error when not passed a client", () => {
    // $ExpectError ApolloPrivder requires client prop
    <ApolloProvider>
      <div />
    </ApolloProvider>;
  });

  it("raises an error when not passed children", () => {
    // Should be an instance of ApolloClient
    const client = {};

    // $ExpectError ApolloPrivder requires client prop
    <ApolloProvider client={client} />;
  });
});

describe("<ApolloConsumer />", () => {
  it("passes ApolloClient to the consumer children", () => {
    <ApolloConsumer>
      {client => {
        const onClick = () => {
          client.resetStore();
          client.query({ query: HERO_QUERY });
          client.readQuery({
            query: HERO_QUERY,
            variables: { episode: "episode" }
          });
          // $ExpectError doSomethingElse is not a method of ApolloClient
          client.doSomethingElse();
        };
        return <button onClick={onClick}>Click</button>;
      }}
    </ApolloConsumer>;
  });
});
