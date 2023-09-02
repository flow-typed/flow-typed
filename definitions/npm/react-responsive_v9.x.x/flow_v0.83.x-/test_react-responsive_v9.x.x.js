// @flow
import { describe, test } from 'flow-typed-test';
import * as React from 'react';
import MediaQuery, {
  useMediaQuery,
  toQuery,
  Context,
} from 'react-responsive';

describe('react-responsive', () => {
  test('MediaQuery', () => {
    (
      <MediaQuery
        query="test"
      >
        child
      </MediaQuery>
    );

    (
      <MediaQuery
        // $FlowExpectedError[incompatible-type]
        query={123}
      >
        child
      </MediaQuery>
    );

    (
      // $FlowExpectedError[prop-missing]
      <MediaQuery
        foo="bar"
      >
        child
      </MediaQuery>
    );
  });

  test('useMediaQuery', () => {
    (useMediaQuery({
      query: '(max-width: 768px)',
    }): boolean);

    // $FlowExpectedError[incompatible-cast]
    (useMediaQuery({
      query: '(max-width: 768px)',
    }): string);

    useMediaQuery({
      // $FlowExpectedError[incompatible-call]
      query: 123,
    });

    // $FlowExpectedError[prop-missing]
    useMediaQuery({
      foo: 'bar',
    });
  });

  test('toQuery', () => {
    toQuery({});
    (toQuery({}): string);
    toQuery({ minAspectRatio: 'test' });

    // $FlowExpectedError[incompatible-cast]
    (toQuery({}): number);
    // $FlowExpectedError[incompatible-call]
    toQuery();
    // $FlowExpectedError[incompatible-call]
    toQuery({ minAspectRatio: 123 });
    // $FlowExpectedError[prop-missing]
    toQuery({ foo: 'bar' });
    // $FlowExpectedError[extra-arg]
    toQuery({}, {});
  });

  test('Context', () => {
    const value = React.useContext(Context);
    // $FlowExpectedError[incompatible-use]
    value.colorIndex
    if (value) {
      value.colorIndex;
    }
  });
});
