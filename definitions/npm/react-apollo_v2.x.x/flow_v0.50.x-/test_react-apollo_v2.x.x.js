// @flow
import React from 'react';
import { describe, it } from 'flow-typed-test';
import { graphql, type OperationComponent } from 'react-apollo';

const query = () => {};

type Hero = {
  name: string,
  id: string,
};

type Response = {
  hero: Hero,
};

export type InputProps = {
  episode: string,
};

describe('OperationComponent', () => {
  it('should pass Response to wrapped component', () => {
    const withCharacter: OperationComponent<Response, InputProps> = graphql(
      query,
      {
        options: ({ episode }) => ({
          variables: { episode },
        }),
      }
    );

    withCharacter(({ data: { loading, hero, error } }) => {
      if (loading) return <div>Loading</div>;
      if (error) return <h1>ERROR</h1>;
      return <p>{hero.name}</p>;
    });
  });
});
