// @flow
import * as React from 'react';
import { it, describe } from 'flow-typed-test';
import {
  ApolloProvider,
  ApolloConsumer,
  graphql,
  withApollo,
  type OperationComponent,
  type GraphqlQueryControls,
  type ChildProps,
  type GraphqlData,
} from '@apollo/react-hoc';

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

const withData: OperationComponent<IQuery> = graphql(query);

it('works with functional component', () => {
  const FunctionalWithData = withData(({ data }) => {
    // $FlowExpectedError string type being treated as numerical
    if (data.foo > 1) return <span />;

    return null;
  });
});

it('works with class component, this requires a stricter definition', () => {
  type BasicComponentProps = ChildProps<{ ... }, IQuery>;
  class BasicComponent extends React.Component<BasicComponentProps> {
    render() {
      const { foo, bar } = this.props.data;

      // $FlowExpectedError string type being treated as numerical
      if (bar > 1) return null;

      // The below works as expected
      return <div>{foo.length} string length</div>;
    }
  }
  const BasicClassWithData = withData(BasicComponent);
});

it("works with class component with it's own variable", () => {
  type CmplxOwnProps = { faz: string, ... };
  type CmplxComponentProps = {
    data: GraphqlQueryControls<> & IQuery,
    // The mutation is actually required or we get a error at the withData
    mutate: any,
    ...
  } & CmplxOwnProps;
  class CmplxComponent extends React.Component<CmplxComponentProps> {
    render() {
      const {
        data: { loading, error, bar, foo },
        faz,
      } = this.props;
      if (loading) return <div>Loading</div>;
      if (error) return <h1>ERROR</h1>;

      // $FlowExpectedError string type being treated as numerical
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
  type Cmplx2OwnProps = { faz: string, ... }; // We can have exact own props as we don't rely on the TMergedProps
  type Cmplx2ComponentProps = {
    data: IQuery & GraphqlQueryControls<>,
    ...
  } & Cmplx2OwnProps;
  class Cmplx2Component extends React.Component<Cmplx2ComponentProps> {
    render() {
      const {
        data: { loading, error, bar, foo },
        faz,
      } = this.props;
      if (loading) return <div>Loading</div>;
      if (error) return <h1>ERROR</h1>;

      // $FlowExpectedError string type being treated as numerical
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

it('works with Variables specified', () => {
  type Response = { hero: Hero, ... };

  type InputProps = { episode: string, ... };

  type Variables = { episode: string, ... };

  type Props = GraphqlData<Response, Variables> & { someProp: string, ... };

  const withCharacter: OperationComponent<
    Response,
    InputProps,
    Variables,
    Props
  > = graphql(HERO_QUERY, {
    options: ({ episode }) => {
      // $FlowExpectedError [string] The operand of an arithmetic operation must be a number
      episode * 10;
      return {
        // $FlowExpectedError [number] This type is incompatible with string
        variables: { episode: 10 },
      };
    },
    props: ({ data, ownProps }) => ({
      ...data,
      // $FlowExpectedError [string] This type cannot be compared to number
      episode: ownProps.episode > 1,
      // $FlowExpectedError property `isHero`. Property not found on object type
      isHero: data && data.hero && data.hero.isHero,
      // $FlowExpectedError Property `someProp`. This type is incompatible with string
      someProp: 1,
    }),
  });

  withCharacter(({ loading, error }) => {
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

it('works with withApollo HOC', () => {
  const Manual = withApollo(({ client }) => {
    // XXX please don't ever actually do this
    client.query({ query: HERO_QUERY });
    return null;
  });

  // withApollo passes `client` property so that it is no longer required
  (Manual: React.ComponentType<{ ... }>);
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
