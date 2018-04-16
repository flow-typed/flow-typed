// @flow
import React from "react";
import { connect } from "react-redux";

function testPassingPropsToConnectedComponent() {
  type Props = {passthrough: number, passthroughWithDefaultProp: number, fromStateToProps: string};
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

  const Connected = connect(mapStateToProps)(Com);
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
  connect(mapStateToProps)('');
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

  connect(mapStateToProps)(Component);
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

  connect(null, mapDispatchToProps)(Component);
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

  connect(mapStateToProps, mapDispatchToProps)(Component);
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

  connect(mapStateToProps, {})(Component);
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

  connect(mapStateToProps, mapDispatchToProps, mergeProps)(Component);
}

function testExactProps() {
  type Props = {|
    forMapStateToProps: string,
    passthrough: number,
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

  const Connected = connect(mapStateToProps)(Com);
  <Connected passthrough={123} forMapStateToProps={'data'} />;
  //$ExpectError extra prop what exact props does not allow
  <Connected passthrough={123} forMapStateToProps={321} extraProp={123}/>;
  //$ExpectError wrong type for forMapStateToProps
  <Connected passthrough={123} forMapStateToProps={321}/>;
  //$ExpectError passthrough missing
  <Connected forMapStateToProps={'data'} />;
  //$ExpectError forMapStateToProps missing
  <Connected passthrough={123}/>;
  //$ExpectError takes in only React components
  connect(mapStateToProps)('');
}

function testWithStatelessFunctionalComponent() {
  type Props = {passthrough: number, fromStateToProps: string};
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

  const Connected = connect(mapStateToProps)(Com);
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
  connect(mapStateToProps)('');
}

function testMapStateToPropsDoesNotNeedProps() {
  type Props = {passthrough: number, fromStateToProps: string};
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

  const Connected = connect(mapStateToProps)(Com);
  <Connected passthrough={123}/>;
  //$ExpectError component property passthrough not found
  <Connected />;
}

function testMapDispatchToProps() {
  type Props = {
    passthrough: number,
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
  const Connected = connect(mapStateToProps, mapDispatchToProps)(Com);
  <Connected passthrough={123} forMapStateToProps={'data'} forMapDispatchToProps={'more data'} />;
  //$ExpectError passthrough missing
  <Connected forMapStateToProps={'data'} forMapDispatchToProps={'more data'} />;
  //$ExpectError forMapStateToProps missing
  <Connected passthrough={123} forMapDispatchToProps={'more data'} />;
  //$ExpectError forMapDispatchToProps missing
  <Connected passthrough={123} forMapStateToProps={'data'} />;
}

function testMapDispatchToPropsWithoutMapStateToProps() {
  type Props = {
    passthrough: number,
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
  const Connected = connect(null, mapDispatchToProps)(Com);
  <Connected passthrough={123} forMapStateToProps={'data'} forMapDispatchToProps={'more data'} />;
  //$ExpectError passthrough missing
  <Connected forMapStateToProps={'data'} forMapDispatchToProps={'more data'} />;
  //$ExpectError forMapDispatchToProps missing
  <Connected passthrough={123} forMapStateToProps={'data'} />;
}

function testMapDispatchToPropsPassesActionCreators() {
  type Props = {
    passthrough: number,
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
  const Connected = connect(null, mapDispatchToProps)(Com);
  <Connected passthrough={123}/>;
  //$ExpectError no passthrough
  <Connected/>;

  const mapDispatchToPropsWithoutDispatch2 = {
    dispatch1: (num: number) => {}
  };
  const Connected2 = connect(null, mapDispatchToPropsWithoutDispatch2)(Com);
  //$ExpectError no dispatch2
  <Connected2 passthrough={123}/>;

  const mapDispatchToPropsWithWrongDispatch1 = {
    //$ExpectError dispatch1 should be number
    dispatch1: (num: string) => {},
    dispatch2: () => {}
  };
  const Connected3 = connect(null, mapDispatchToPropsWithWrongDispatch1)(Com);
  <Connected3 passthrough={123}/>;
}

function testMapDispatchToPropsPassesActionCreatorsWithMapStateToProps() {
  type Props = {
    passthrough: number,
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
  const Connected = connect(mapStateToProps, mapDispatchToProps)(Com);
  <Connected passthrough={123} forMapStateToProps="str"/>;
  //$ExpectError no passthrough
  <Connected/>;

  const mapDispatchToProps2 = {
    dispatch1: () => {}
  };
  const Connected2 = connect(mapStateToProps, mapDispatchToProps2)(Com);
  //$ExpectError no dispatch2
  <Connected2 passthrough={123} forMapStateToProps="str"/>;
}

function testMergeProps() {
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
  const Connected = connect(mapStateToProps, mapDispatchToProps, mergeProps)(Com);
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
  connect(null, null, null, {pure: true})(Com);
  connect(null, null, null, {withRef: true})(Com);
  connect(null, null, null, {pure: false, withRef: false})(Com);
  // $ExpectError wrong type
  connect(null, null, null, {pure: 123})(Com);
  // $ExpectError wrong type
  connect(null, null, null, {ref: 123})(Com);
  // $ExpectError wrong key
  connect(null, null, null, {wrongKey: true})(Com);
}

function testAllowsKnownPropInMapStateToProps() {
  type Props = {
    str: string
  };

  class Com extends React.Component<Props> {
    render() {
      return <div>{this.props.str}</div>;
    }
  }

  type State = {num: number, str: string};

  const mapStateToProps = (state: State) => {
    return {
      str: state.str
    }
  };

  connect(mapStateToProps)(Com);
}

function testForbidsLiteralOfInvalidTypeInMapStateToProps() {
  type Props = {
    // $ExpectError string is incompatible with number
    str: string
  };

  class Com extends React.Component<Props> {
    render() {
      return <div>{this.props.str}</div>;
    }
  }

  type State = {num: number, str: string};

  const mapStateToPropsWithLiteralOfInvalidType = (state: State) => {
    return {
      str: 123
    }
  };

  // $ExpectError string is incompatible with number
  connect(mapStateToPropsWithLiteralOfInvalidType)(Com);
}

function testForbidsStateProperyOfInvalidTypeInMapStateToProps() {
  type Props = {
    str: string
  };

  class Com extends React.Component<Props> {
    render() {
      return <div>{this.props.str}</div>;
    }
  }

  type State = {num: number, str: string};

  const mapStateToPropsWithStatePropertyOfInvalidType = (state: State) => {
    return {
      str: state.num
    }
  };

  // $ExpectError string is incompatible with number
  connect(mapStateToPropsWithStatePropertyOfInvalidType)(Com);
}

function testForbidsSelectorWithInvalidReturnTypeInMapStateToProps() {
  type Props = {
    str: string
  };

  class Com extends React.Component<Props> {
    render() {
      return <div>{this.props.str}</div>;
    }
  }

  type State = {num: number, str: string};

  function selectorReturningNumber(state: State): number {
    return state.num
  }

  const mapStateToPropsWithSelectorWithInvalidTypeReturnValue = (state: State) => {
    return {
      str: selectorReturningNumber(state)
    }
  };

  // $ExpectError string is incompatible with number
  connect(mapStateToPropsWithSelectorWithInvalidTypeReturnValue)(Com);
}

function testForbidsUnknownPropInMapStateToProps() {
  type Props = {
    str: string
  };

  // $ExpectError undefined prop notThere
  class Com extends React.Component<Props> {
    render() {
      return <div>{this.props.str}</div>;
    }
  }

  type State = {num: number, str: string};

  const mapStateToPropsWithUnknownProp = (state: State) => {
    // $ExpectError undefined prop notThere
    return {
      str: state.str,
      notThere: 123
    }
  };

  // $ExpectError notThere is missing in Props
  connect(mapStateToPropsWithUnknownProp)(Com);
}

function testAllowsKnownPropInMapDispatchToProps() {
  type Props = {
    strToNumber: string => number
  };

  class Com extends React.Component<Props> {
    render() {
      return <div>{this.props.strToNumber("123")}</div>;
    }
  }

  const mapDispatchToProps = (dispatch: *) => {
    return {
      strToNumber: (str: string) => 123
    }
  };

  connect(null, mapDispatchToProps)(Com);
}

function testForbidsInvalidTypeInMapDispatchToProps() {
  type Props = {
    // $ExpectError string is incompatible with number
    strToNumber: string => number
  };

  class Com extends React.Component<Props> {
    render() {
      return <div>{this.props.strToNumber("123")}</div>;
    }
  }

  const mapDispatchToPropsWithInvalidType = (dispatch: *) => {
    // $ExpectError string is incompatible with number
    return {
      strToNumber: (num: number) => 123
    }
  };

  // $ExpectError string is incompatible with number
  connect(null, mapDispatchToPropsWithInvalidType)(Com);
}

function testForbidsUnknownPropInMapDispatchToProps() {
  type Props = {
    strToNumber: string => number
  };

  // $ExpectError undefined prop notThere
  class Com extends React.Component<Props> {
    render() {
      return <div>{this.props.strToNumber("123")}</div>;
    }
  }

  const mapDispatchToPropsWithUnknownProp = (dispatch: *) => {
    // $ExpectError undefined prop notThere
    return {
      strToNumber: (str: string) => 123,
      notThere: (num: number) => 123
    }
  };

  // $ExpectError notThere is missing in Props
  connect(null, mapDispatchToPropsWithUnknownProp)(Com);
}

function testAllowsKnownPropInMapDispatchToPropsObject() {
  type Props = {
    onChange: string => mixed
  };

  class Com extends React.Component<Props> {
    render() {
      return <div onClick={() => this.props.onChange("123")}>Call</div>;
    }
  }

  const mapDispatchToProps = {
    onChange: (str: string) => ({ action: 'CHANGE', payload: str })
  };

  connect(null, mapDispatchToProps)(Com);
}

function testForbidsInvalidTypeInMapDispatchToPropsObject() {
  type Props = {
    strToNumber: string => number
  };

  class Com extends React.Component<Props> {
    render() {
      return <div>{this.props.strToNumber("123")}</div>;
    }
  }

  const mapDispatchToPropsWithInvalidType = {
    strToNumber: (num: number) => 123
  };

  // $ExpectError string is incompatible with number
  connect(null, mapDispatchToPropsWithInvalidType)(Com);
}

function testForbidsUnknownPropInMapDispatchToPropsObject() {
  type Props = {
    strToNumber: string => number
  };

  class Com extends React.Component<Props> {
    render() {
      return <div>{this.props.strToNumber("123")}</div>;
    }
  }

  const mapDispatchToPropsWithUnknownProp = {
    strToNumber: (str: string) => 123,
    notThere: (num: number) => 123
  };

  // $ExpectError notThere is missing in Props
  connect(null, mapDispatchToPropsWithUnknownProp)(Com);
}

function testAllowsKnownPropsInMergeProps() {
  type Props = {
    str: string,
    strToNumber: string => number
  };

  class Com extends React.Component<Props> {
    render() {
      return <div>{this.props.str} {this.props.strToNumber("123")}</div>;
    }
  }

  type State = {num: number, str: string};

  const mapStateToProps = (state: State) => {
    return {
      // Allows arbitrary props in this case
      strForMerge: state.str
    }
  };

  const mapDispatchToProps = (dispatch: *) => {
    return {
      // Allows arbitrary props in this case
      strToNumberForMerge: (str: string) => 123
    }
  };

  const mergeProps = function(stateProps, dispatchProps) {
    return {
      str: stateProps.strForMerge,
      strToNumber: dispatchProps.strToNumberForMerge
    }
  }

  connect(mapStateToProps, mapDispatchToProps, mergeProps)(Com);
}

function testForbidsInvalidTypeInMergeProps() {
  type Props = {
    // $ExpectError string is incompatible with number
    str: string,
    strToNumber: string => number
  };

  class Com extends React.Component<Props> {
    render() {
      return <div>{this.props.str} {this.props.strToNumber("123")}</div>;
    }
  }

  type State = {num: number, str: string};

  const mapStateToProps = (state: State) => {
    return {
      // Allows arbitrary props in this case
      strForMerge: state.str
    }
  };

  const mapDispatchToProps = (dispatch: *) => {
    return {
      // Allows arbitrary props in this case
      strToNumberForMerge: (str: string) => 123
    }
  };

  const mergePropsWithInvalidType = function(stateProps, dispatchProps) {
    // $ExpectError string is incompatible with number
    return {
      str: 123,
      strToNumber: dispatchProps.strToNumberForMerge,
    }
  }

  // $ExpectError string is incompatible with number
  connect(mapStateToProps, mapDispatchToProps, mergePropsWithInvalidType)(Com);
}

function testForbidsUnknownPropsInMergeProps() {
  type Props = {
    str: string,
    strToNumber: string => number
  };

  // $ExpectError undefined prop notThere
  class Com extends React.Component<Props> {
    render() {
      return <div>{this.props.str} {this.props.strToNumber("123")}</div>;
    }
  }

  type State = {num: number, str: string};

  const mapStateToProps = (state: State) => {
    return {
      // Allows arbitrary props in this case
      strForMerge: state.str
    }
  };

  const mapDispatchToProps = (dispatch: *) => {
    return {
      // Allows arbitrary props in this case
      strToNumberForMerge: (str: string) => 123
    }
  };

  const mergePropsWithUnknownProp = function(stateProps, dispatchProps) {
    // $ExpectError undefined prop notThere
    return {
      str: stateProps.strForMerge,
      strToNumber: dispatchProps.strToNumberForMerge,
      notThere: 3
    }
  }

  // $ExpectError notThere is missing in Props
  connect(mapStateToProps, mapDispatchToProps, mergePropsWithUnknownProp)(Com);
}
