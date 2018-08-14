// @flow
import React from 'react';
import injectSheet, { JssProvider } from 'react-jss';

const styles = {
  test: {
    backgroundColor: '#000',
    color: '#fff'
  },
};

type Props = {
  classes: $ObjMap<typeof styles, () => string>,
  children?: React$Node
}

class TestComponent extends React.Component<Props> {
  props: Props;

  render() {
    <div className={this.props.classes.test}>{this.props.children}</div>
  }
}

// $ExpectError - missing styles
injectSheet()(TestComponent);

// $ExpectError - wrong parameter
injectSheet(123)(TestComponent);

// should work
injectSheet(styles)(TestComponent);

<JssProvider />;

