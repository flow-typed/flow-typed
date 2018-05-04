// @flow
import * as React from 'react';
import { it, describe } from 'flow-typed-test';
import {
  Query,
  Mutation,
  graphql,
  withApollo,
  type MutationFunction,
  type MutationResult,
  type QueryRenderProps,
  type OperationComponent,
  type GraphqlQueryControls,
  type ChildProps,
  type GraphqlData,
} from 'react-apollo';

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

type IQuery = {
  foo: string,
  bar: string,
};

const withData: OperationComponent<IQuery> = graphql(query);

it('works with functional component', () => {
  const FunctionalWithData = withData(({ data }) => {
    // $ExpectError string type beeing treated as numerical
    if (data.foo > 1) return <span />;

    return null;
  });
});

it('works with class component, this requires a stricter definition', () => {
  type BasicComponentProps = ChildProps<{}, IQuery>;
  class BasicComponent extends React.Component<BasicComponentProps> {
    render() {
      const { foo, bar } = this.props.data;

      // $ExpectError string type beeing treated as numerical
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
    data: GraphqlQueryControls & IQuery,
    mutate: any, // The mutation is actually required or we get a error at the withData
  } & CmplxOwnProps;
  class CmplxComponent extends React.Component<CmplxComponentProps> {
    render() {
      const { data: { loading, error, bar, foo }, faz } = this.props;
      if (loading) return <div>Loading</div>;
      if (error) return <h1>ERROR</h1>;

      // $ExpectError string type beeing treated as numerical
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
    data: IQuery & GraphqlQueryControls,
  } & Cmplx2OwnProps;
  class Cmplx2Component extends React.Component<Cmplx2ComponentProps> {
    render() {
      const { data: { loading, error, bar, foo }, faz } = this.props;
      if (loading) return <div>Loading</div>;
      if (error) return <h1>ERROR</h1>;

      // $ExpectError string type beeing treated as numerical
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
    query GetCharacter($episode: String!) {
      hero(episode: $episode) {
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

it('works with Variables specified', () => {

  type Hero = {
    name: string,
    id: string,
    appearsIn: string[],
    friends: Hero[],
  };

  type Response = {
    hero: Hero,
  };

  type InputProps = {
    episode: string,
  };

  type Variables = {
    episode: string,
  };

  type Props = GraphqlData<Response, Variables> & {
    someProp: string,
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
        variables: { episode: 10 },
      };
    },
    props: ({ data, ownProps }) => ({
      ...data,
      // $ExpectError [string] This type cannot be compared to number
      episode: ownProps.episode > 1,
      // $ExpectError property `isHero`. Property not found on object type
      isHero: data && data.hero && data.hero.isHero,
      // $ExpectError Property `someProp`. This type is incompatible with string
      someProp: 1,
    }),
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

it('works with withApollo HOC', () => {
  const Manual = withApollo(({ client }) => {
    // XXX please don't ever actually do this
    client.query({ query: HERO_QUERY });
    return null;
  });

  // withApollo passes `client` property so that it is no longer required
  (Manual: React.ComponentType<{}>);
})

describe('Query', () => {
  it('works', () => {
    type Vars = {|foo: string|}
    type Res = {|res: string|}
    const vars: Vars = {foo: 'bar'}
    const q = (
      <Query variables={vars} query={HERO_QUERY}>
        {({data}: QueryRenderProps<Res, Vars>) => {
          // $ExpectError Cannot get `data.res`
          data.res
          if (!data) {
            return
          }
          const d1: Res | {||} = data
          // $ExpectError Cannot get `data.res` because property `res` is missing in object type
          const s: string = data.res
          if (d1.res) {
            const d2: Res = d1
            const s: string = d1.res
          }
        }}
      </Query>
    )
  })
})

describe('Mutation', () => {
  it('works', () => {
    type Vars = {|foo: string|}
    type Res = {|res: string|}
    const vars: Vars = {foo: 'bar'}
    const q = (
      <Mutation variables={vars} mutation={HERO_QUERY}>
        {(update: MutationFunction<Vars>, {data}: MutationResult<Res>) => {
          // $ExpectError Cannot get `data.res`
          data.res
          if (!data) {
            return
          }
          const d1: Res = data
          const s: string = data.res
        }}
      </Mutation>
    )
  })
})
