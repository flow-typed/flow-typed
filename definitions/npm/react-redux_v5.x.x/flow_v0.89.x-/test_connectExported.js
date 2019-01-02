// @flow
import React from "react";
import { connect } from "react-redux";

export let e = []

function testPassingPropsToConnectedComponent() {
  type OwnProps = {|
    passthrough: number,
    passthroughWithDefaultProp?: number,
    forMapStateToProps: string
  |}
  type Props = { ...OwnProps, fromStateToProps: string};
  class Com extends React.Component<Props> {
    static defaultProps = { passthroughWithDefaultProp: 123 };
    render() {
      return <div>{this.props.passthrough} {this.props.fromStateToProps}</div>;
    }
  }

  type State = {a: number};
  type InputProps = {
    forMapStateToProps: string
  };
  const mapStateToProps = (state: State, props: InputProps) => {
    return {
      fromStateToProps: 'str' + state.a
    }
  };

  const Connected = connect<Props, OwnProps, _,_,_,_>(mapStateToProps)(Com);
  e.push(Connected);
  Connected.WrappedComponent;
  <Connected passthrough={123} forMapStateToProps={'data'} passthroughWithDefaultProp={123}/>;
  // OK without passthroughWithDefaultProp
  <Connected passthrough={123} forMapStateToProps={'data'}/>;
  //$ExpectError wrong type for passthrough
  <Connected passthrough={''} forMapStateToProps={'data'} passthroughWithDefaultProp={123}/>;
  //$ExpectError wrong type for forMapStateToProps
  <Connected passthrough={123} forMapStateToProps={321} passthroughWithDefaultProp={123}/>;
  //$ExpectError wrong type for  passthroughWithDefaultProp
  <Connected passthrough={123} forMapStateToProps={'data'} passthroughWithDefaultProp={''}/>;
  //$ExpectError passthrough missing
  <Connected forMapStateToProps={'data'} />;
  //$ExpectError forMapStateToProps missing
  <Connected passthrough={123}/>;
  //$ExpectError takes in only React components
  const Connected2 = connect<Props, OwnProps, _,_,_,_>(mapStateToProps)('');
  e.push(Connected2);
}

function doesNotRequireDefinedComponentToTypeCheck1case() {
  type Props = {
    stringProp: string,
  };

  const Component = ({ stringProp }: Props) => {
    return <span>{stringProp}</span>;
  };

  const mapStateToProps = (state: {}) => ({
    // $ExpectError wrong type for stringProp
    stringProp: false,
  });

  const Connected = connect<Props, {||}, _,_,_,_>(mapStateToProps)(Component);
  <Connected />;
  e.push(Connected);
}

function doesNotRequireDefinedComponentToTypeCheck2case() {
  type Props = {
    numProp: string,
  };

  const Component = ({ numProp }: Props) => {
    return <span>{numProp}</span>;
  };

  const mapDispatchToProps = () => ({
    // $ExpectError wrong type for numProp
    numProp: false,
  });

  const Connected = connect<Props, {||}, _,_,_,_>(null, mapDispatchToProps)(Component);
  <Connected />;
  e.push(Connected);
}

function doesNotRequireDefinedComponentToTypeCheck3case() {
  type Props = {
    stringProp: string,
    numProp: number
  };

  const Component = ({ stringProp }: Props) => {
    return <span>{stringProp}</span>;
  };

  const mapStateToProps = (state: {}) => ({
    // $ExpectError wrong type for stringProp
    stringProp: false,
  });

  const mapDispatchToProps = () => ({
    // $ExpectError wrong type for numProp
    numProp: false,
  });

  const Connected = connect<Props, {||}, _,_,_,_>(mapStateToProps, mapDispatchToProps)(Component);
  <Connected />;
  e.push(Connected);
}

function doesNotRequireDefinedComponentToTypeCheck4case() {
  type Props = {
    stringProp: string,
  };

  const Component = ({ stringProp }: Props) => {
    return <span>{stringProp}</span>;
  };

  const mapStateToProps = (state: {}) => ({
    // $ExpectError wrong type for stringProp
    stringProp: false,
  });

  const Connected = connect<Props, {||}, _,_,_,_>(mapStateToProps, {})(Component);
  <Connected />;
  e.push(Connected);
}

function doesNotRequireDefinedComponentToTypeCheck5case() {
  type Props = {
    stringProp: string
  };

  const Component = ({ stringProp }: Props) => {
    return <span>{stringProp}</span>;
  };

  const mapStateToProps = () => ({});
  const mapDispatchToProps = () => ({});

  const mergeProps = () => ({
    // $ExpectError wrong type for stringProp
    stringProp: true
  });

  const Connected = connect<Props, {||}, _,_,_,_>(mapStateToProps, mapDispatchToProps, mergeProps)(Component);
  <Connected />;
  e.push(Connected);
}

function testExactProps() {
  type OwnProps = {|
    passthrough: number,
    forMapStateToProps: string,
  |};
  type Props = {|
    ...OwnProps,
    fromStateToProps: string
  |};

  class Com extends React.Component<Props> {
    render() {
      return <div>{this.props.passthrough} {this.props.fromStateToProps}</div>;
    }
  }

  type State = {a: number};
  type InputProps = {|
    forMapStateToProps: string,
    passthrough: number,
  |};

  const mapStateToProps = (state: State, props: InputProps) => {
    return {
      fromStateToProps: 'str' + state.a
    }
  };

  const Connected = connect<Props, OwnProps, _,_,_,_>(mapStateToProps)(Com);
  e.push(Connected);
  <Connected passthrough={123} forMapStateToProps={'data'} />;
  //$ExpectError extraProp what exact props does not allow
  <Connected passthrough={123} forMapStateToProps={321} extraProp={123}/>;
  //$ExpectError wrong type for forMapStateToProps
  <Connected passthrough={123} forMapStateToProps={321}/>;
  //$ExpectError passthrough missing
  <Connected forMapStateToProps={'data'} />;
  //$ExpectError forMapStateToProps missing
  <Connected passthrough={123}/>;
  //$ExpectError takes in only React components
  const Connected2 = connect<Props, OwnProps, _,_,_,_>(mapStateToProps)('');
  e.push(Connected2);
}

function testWithStatelessFunctionalComponent() {
  type OwnProps = {|
    passthrough: number,
    forMapStateToProps: string,
  |};
  type Props = {
    ...OwnProps,
    fromStateToProps: string
  };
  const Com = (props: Props) => <div>{props.passthrough} {props.fromStateToProps}</div>

  type State = {a: number};
  type InputProps = {
    forMapStateToProps: string
  };
  const mapStateToProps = (state: State, props: InputProps) => {
    return {
      fromStateToProps: 'str' + state.a
    }
  };

  const Connected = connect<Props, OwnProps, _,_,_,_>(mapStateToProps)(Com);
  e.push(Connected);
  <Connected passthrough={123} forMapStateToProps={'data'}/>;
  //$ExpectError wrong type for passthrough
  <Connected passthrough={''} forMapStateToProps={'data'}/>;
  //$ExpectError wrong type for forMapStateToProps
  <Connected passthrough={123} forMapStateToProps={321} />;
  //$ExpectError passthrough missing
  <Connected forMapStateToProps={'data'} />;
  //$ExpectError forMapStateToProps missing
  <Connected passthrough={123}/>;
  //$ExpectError takes in only React components
  const Connected2 = connect(mapStateToProps)('');
  e.push(Connected2);
}

function testMapStateToPropsDoesNotNeedProps() {
  type OwnProps = {|
    passthrough: number
  |};
  type Props = {
    ...OwnProps,
    fromStateToProps: string
  };
  class Com extends React.Component<Props> {
    render() {
      return <div>{this.props.passthrough}</div>;
    }
  }

  type State = {a: string}
  const mapStateToProps = (state: State) => {
    return {
      fromStateToProps: state.a
    }
  }

  const Connected = connect<Props, OwnProps, _,_,_,_>(mapStateToProps)(Com);
  e.push(Connected);
  <Connected passthrough={123}/>;
  //$ExpectError component property passthrough not found
  <Connected />;
}

function testMapDispatchToProps() {
  type OwnProps = {|
    passthrough: number,
    forMapStateToProps: string,
    forMapDispatchToProps: string
  |};
  type Props = {
    ...OwnProps,
    fromMapDispatchToProps: string,
    fromMapStateToProps: string
  };
  class Com extends React.Component<Props> {
    render() {
      return <div>
        {this.props.passthrough}
        {this.props.fromMapDispatchToProps}
        {this.props.fromMapStateToProps}
        </div>;
    }
  }

  type State = {a: number}
  type MapStateToPropsProps = {forMapStateToProps: string}
  const mapStateToProps = (state: State, props: MapStateToPropsProps) => {
    return {
      fromMapStateToProps: 'str' + state.a
    }
  }
  type MapDispatchToPropsProps = {forMapDispatchToProps: string}
  const mapDispatchToProps = (dispatch: *, ownProps: MapDispatchToPropsProps) => {
    return {fromMapDispatchToProps: ownProps.forMapDispatchToProps}
  }
  const Connected = connect<Props, OwnProps, _,_,_,_>(mapStateToProps, mapDispatchToProps)(Com);
  e.push(Connected);
  <Connected passthrough={123} forMapStateToProps={'data'} forMapDispatchToProps={'more data'} />;
  //$ExpectError passthrough missing
  <Connected forMapStateToProps={'data'} forMapDispatchToProps={'more data'} />;
  //$ExpectError forMapStateToProps missing
  <Connected passthrough={123} forMapDispatchToProps={'more data'} />;
  //$ExpectError forMapDispatchToProps missing
  <Connected passthrough={123} forMapStateToProps={'data'} />;
}

function testMapDispatchToPropsWithoutMapStateToProps() {
  type OwnProps = {|
    passthrough: number,
    forMapStateToProps: string,
    forMapDispatchToProps: string,
  |};
  type Props = {
    ...OwnProps,
    fromMapDispatchToProps: string
  };
  class Com extends React.Component<Props> {
    render() {
      return <div>
        {this.props.passthrough}
        {this.props.fromMapDispatchToProps}
      </div>;
    }
  }

  type MapDispatchToPropsProps = {forMapDispatchToProps: string};
  const mapDispatchToProps = (dispatch: *, ownProps: MapDispatchToPropsProps) => {
    return {fromMapDispatchToProps: ownProps.forMapDispatchToProps}
  }
  const Connected = connect<Props, OwnProps, _,_,_,_>(null, mapDispatchToProps)(Com);
  e.push(Connected);
  <Connected passthrough={123} forMapStateToProps={'data'} forMapDispatchToProps={'more data'} />;
  //$ExpectError passthrough missing
  <Connected forMapStateToProps={'data'} forMapDispatchToProps={'more data'} />;
  //$ExpectError forMapDispatchToProps missing
  <Connected passthrough={123} forMapStateToProps={'data'} />;
}

function testMapDispatchToPropsPassesActionCreators() {
  type OwnProps = {|
    passthrough: number,
  |};
  type Props = {
    ...OwnProps,
    dispatch1: (num: number) => void,
    dispatch2: () => void
  };
  class Com extends React.Component<Props> {
    render() {
      return <div>{this.props.passthrough}</div>;
    }
  }

  const mapDispatchToProps = {
    dispatch1: (num: number) => {},
    dispatch2: () => {}
  };
  const Connected = connect<Props, OwnProps, _,_,_,_>(null, mapDispatchToProps)(Com);
  e.push(Connected);
  <Connected passthrough={123}/>;
  //$ExpectError no passthrough
  <Connected/>;

  const mapDispatchToPropsWithoutDispatch2 = {
    dispatch1: (num: number) => {}
  };
  //$ExpectError no dispatch2
  const Connected2 = connect<Props, OwnProps, _,_,_,_>(null, mapDispatchToPropsWithoutDispatch2)(Com);
  e.push(Connected2);
  <Connected2 passthrough={123}/>;

  const mapDispatchToPropsWithWrongDispatch1 = {
    //$ExpectError dispatch1 should be number
    dispatch1: (num: string) => {},
    dispatch2: () => {}
  };
  const Connected3 = connect<Props, OwnProps, _,_,_,_>(null, mapDispatchToPropsWithWrongDispatch1)(Com);
  e.push(Connected3);
  <Connected3 passthrough={123}/>;
}

function testMapDispatchToPropsPassesActionCreatorsWithMapStateToProps() {
  type OwnProps = {|
    passthrough: number,
    forMapStateToProps: string
  |};
  type Props = {
    ...OwnProps,
    dispatch1: () => void,
    dispatch2: () => void,
    fromMapStateToProps: number
  };
  class Com extends React.Component<Props> {
    render() {
      return <div>{this.props.passthrough}</div>;
    }
  }
  type State = {a: number}
  type MapStateToPropsProps = {forMapStateToProps: string}
  const mapStateToProps = (state: State, props: MapStateToPropsProps) => {
    return {
      fromMapStateToProps: state.a
    }
  }
  const mapDispatchToProps = {
    dispatch1: () => {},
    dispatch2: () => {}
  };
  const Connected = connect<Props, OwnProps, _,_,_,_>(mapStateToProps, mapDispatchToProps)(Com);
  e.push(Connected);
  <Connected passthrough={123} forMapStateToProps="str"/>;
  //$ExpectError no passthrough
  <Connected forMapStateToProps="str" />;

  const mapDispatchToProps2 = {
    dispatch1: () => {}
  };
  //$ExpectError no dispatch2
  const Connected2 = connect<Props, OwnProps, _,_,_,_>(mapStateToProps, mapDispatchToProps2)(Com);
  e.push(Connected2);
  <Connected2 passthrough={123} forMapStateToProps="str"/>;
}

function testMapDispatchToPropsPassesActionCreatorsWithMapStateToPropsAndMergeProps() {
  type OwnProps1 = {|
    passthrough: number,
    forMapStateToProps: string,
    forMergeProps: number
  |};
  type OwnProps2 = {|
    passthrough: number,
    forMapStateToProps: string,
  |};
  type Props = {
    passthrough: number,
    dispatch1: () => void,
    dispatch2: () => void,
    fromMapStateToProps: number,
    fromMergeProps: number
  };
  class Com extends React.Component<Props> {
    render() {
      return <div>{this.props.passthrough}</div>;
    }
  }
  type State = {a: number}
  type MapStateToPropsProps = {forMapStateToProps: string}
  const mapStateToProps = (state: State, props: MapStateToPropsProps) => {
    return {
      fromMapStateToProps: state.a
    }
  }
  const mapDispatchToProps = {
    dispatch1: () => {},
    dispatch2: () => {}
  };
  const mergeProps = (stateProps, dispatchProps, ownProps: {forMergeProps: number}) => {
    return Object.assign({}, stateProps, dispatchProps, { fromMergeProps: 123 });
  }
  const Connected = connect<Props, OwnProps1, _,_,_,_>(mapStateToProps, mapDispatchToProps, mergeProps)(Com);
  e.push(Connected);
  <Connected passthrough={123} forMapStateToProps="str" forMergeProps={1234} />;
  //$ExpectError no passthrough
  <Connected forMapStateToProps="str" forMergeProps={1234} />;
  //$ExpectError forMapStateToProps missing
  <Connected forMergeProps={1234} />;
  //$ExpectError forMergeProps is missing
  <Connected forMapStateToProps={'data'} />;
  //$ExpectError forMergeProps is wrong type
  <Connected forMapStateToProps={'data'} forMergeProps={'not number'} />;

  const mapDispatchToProps2 = {
    dispatch1: () => {}
  };
  //$ExpectError no dispatch2
  const Connected2 = connect<Props, OwnProps2, _,_,_,_>(mapStateToProps, mapDispatchToProps2)(Com);
  e.push(Connected2);
  <Connected2 passthrough={123} forMapStateToProps="str"/>;
}

function testMergeProps() {
  type OwnProps = {|
    forMapStateToProps: string,
    forMapDispatchToProps: string,
    forMergeProps: number
  |};
  type Props = {
    fromMergeProps: number,
  };
  class Com extends React.Component<Props> {
    render() {
      return <div>
        {this.props.fromMergeProps}
      </div>;
    }
  }

  type State = {a: number}
  type MapStateToPropsProps = {forMapStateToProps: string}
  const mapStateToProps = (state: State, props: MapStateToPropsProps) => {
    return {
      fromMapStateToProps: state.a
    }
  }
  type MapDispatchToPropsProps = {forMapDispatchToProps: string}
  const mapDispatchToProps = (dispatch: *, ownProps: MapDispatchToPropsProps) => {
    return {fromMapDispatchToProps: ownProps.forMapDispatchToProps}
  }
  const mergeProps = (stateProps, dispatchProps, ownProps: {forMergeProps: number}) => {
    return {fromMergeProps: 123};
  }
  const Connected = connect<Props, OwnProps, _,_,_,_>(mapStateToProps, mapDispatchToProps, mergeProps)(Com);
  e.push(Connected);
  <Connected forMapStateToProps={'data'} forMapDispatchToProps={'more data'} forMergeProps={1234} />;
  //$ExpectError forMapStateToProps missing
  <Connected forMapDispatchToProps={'more data'} forMergeProps={1234} />;
  //$ExpectError forMergeProps is missing
  <Connected forMapStateToProps={'data'} forMapDispatchToProps={'more data'} />;
  //$ExpectError forMapDispatchToProps is missing
  <Connected forMapStateToProps={'data'} forMergeProps={1234} />;
  //$ExpectError forMapDispatchToProps is wrong type
  <Connected forMapStateToProps={'data'} forMapDispatchToProps={'more data'} forMergeProps={'not number'} />;
}

function testOptions() {
  class Com extends React.Component<{}> {
    render() {
      return <div></div>;
    }
  }
  // here in Props comes dispatch property
  e.push(connect<{}, {||}, _,_,_,_>(null, null, null, {pure: true})(Com));
  e.push(connect<{}, {||}, _,_,_,_>(null, null, null, {withRef: true})(Com));
  e.push(connect<{}, {||}, _,_,_,_>(null, null, null, {pure: false, withRef: false})(Com));
  // $ExpectError wrong type
  e.push(connect<{}, {||}, _,_,_,_>(null, null, null, {pure: 123})(Com));
  // $ExpectError wrong type
  e.push(connect<{}, {||}, _,_,_,_>(null, null, null, {ref: 123})(Com));
  // $ExpectError wrong key
  e.push(connect<{}, {||}, _,_,_,_>(null, null, null, {wrongKey: true})(Com));
}

function testDispatch() {
  type Props = {
    dispatch: empty => empty
  }
  class Com extends React.Component<Props> {
    render() {
      return <div></div>;
    }
  }
  e.push(connect<Props, {||}, _,_,_,_>()(Com));
}
function testNoDispatch() {
  type Props = {||}
  class Com extends React.Component<Props> {
    render() {
      return <div></div>;
    }
  }
  // $ExpectError property `dispatch` is missing in `Props`
  e.push(connect<Props, {||}, _,_,_,_>()(Com));
}

function testHoistConnectedComponent() {
  type OwnProps = {|
    passthrough: number,
    passthroughWithDefaultProp: number,
    forMapStateToProps: string
  |};
  type Props = {
    ...OwnProps,
    fromStateToProps: string
  };
  class Com extends React.Component<Props> {
    static defaultProps = { passthroughWithDefaultProp: 123 };
    static myStatic = 1;

    render() {
      return <div>{this.props.passthrough} {this.props.fromStateToProps}</div>;
    }
  }

  type State = {a: number};
  type InputProps = {
    forMapStateToProps: string
  };
  const mapStateToProps = (state: State, props: InputProps) => {
    return {
      fromStateToProps: 'str' + state.a
    }
  };

  const Connected = connect<Props, OwnProps, _,_,_,_>(mapStateToProps)(Com);
  e.push(Connected);
  // $ExpectError should be OK without passthroughWithDefaultProp
  <Connected passthrough={123} forMapStateToProps={'data'}/>;
  // OK with passthroughWithDefaultProp
  <Connected passthrough={123} passthroughWithDefaultProp={456} forMapStateToProps={'data'}/>;
  // OK with declared static property
  Connected.myStatic;
}
