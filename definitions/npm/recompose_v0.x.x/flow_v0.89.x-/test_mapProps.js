// @flow
import { describe, it } from 'flow-typed-test';
import React, { Component } from 'react';
import { mapProps } from 'recompose';

describe('mapProps', () => {
  declare function formatWeek(Date): string;

  type Props = {|
    +style?: {},
    +title: string,
    +weekStart: Date,
  |};

  class WeekTitle extends Component<Props> {}

  const injectTitleByWeekDate = mapProps(props => ({
    ...props,
    title: formatWeek(props.weekStart),
  }));

  const WithInjectedComponent = injectTitleByWeekDate(WeekTitle);

  it('should passes when used properly', () => {
    <WeekTitle title="title" weekStart={new Date()} />;
  });

  it('should passes when used properly', () => {
    <WithInjectedComponent weekStart={new Date()} />;
  });

  it("should rises an error when don't pass all required props", () => {
    // $ExpectError: `weekStart` is required
    <WithInjectedComponent />;
  });

  it('should rises an error pass map function return incompatible props ', () => {
    class Text extends Component<{|
      +children: string,
    |}> {}

    // $ExpectError: `children` number is incompatible with string
    mapProps(props => ({ children: 1 }))(Text);
  });
});
