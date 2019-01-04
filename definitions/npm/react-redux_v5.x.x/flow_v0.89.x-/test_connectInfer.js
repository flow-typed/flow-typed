/*
  Keep here examples which still work without type parameters specified,
  even if the current Flow verion still reports misleading errors.
  This helps keep the usage of Flow amazing type inferent on the good level.
*/
// @flow
import React from "react";
import { connect } from "react-redux";

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

  const Connected = connect(mapStateToProps)(Com);
  Connected.WrappedComponent;
  <Connected passthrough={123} forMapStateToProps={'data'} passthroughWithDefaultProp={123}/>;
  // OK without passthroughWithDefaultProp
  <Connected passthrough={123} forMapStateToProps={'data'}/>;
  // Flow erroneously complains about `fromStateToProps`
  // fixing the original issue fixes the wrongly titled error.
  //$ExpectError wrong type for passthrough
  <Connected passthrough={''} forMapStateToProps={'data'} passthroughWithDefaultProp={123}/>;
  //$ExpectError wrong type for forMapStateToProps
  <Connected passthrough={123} forMapStateToProps={321} passthroughWithDefaultProp={123}/>;
  // Flow erroneously complains about `fromStateToProps`
  // fixing the original issue fixes the wrongly titled error.
  //$ExpectError wrong type for  passthroughWithDefaultProp
  <Connected passthrough={123} forMapStateToProps={'data'} passthroughWithDefaultProp={''}/>;
  // Flow also erroneously complains about fromStateToProps
  //$ExpectError passthrough missing
  <Connected forMapStateToProps={'data'} />;
  //$ExpectError forMapStateToProps missing
  <Connected passthrough={123}/>;
  //$ExpectError takes in only React components
  connect(mapStateToProps)('');
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
  // Here Flow reports that `fromStateToProps` is missing from props,
  // while the real error is still the wrong type for passthroug,
  // giving passthrough a number fixes the wrongly titled error.
  //$ExpectError wrong type for passthrough
  <Connected passthrough={''} forMapStateToProps={'data'}/>;
  //$ExpectError wrong type for forMapStateToProps
  <Connected passthrough={123} forMapStateToProps={321} />;
  // Here Flow reports that `fromStateToProps` is missing from props,
  // while the real error is still the missing passthroug property,
  // giving the passthrough property fixes the wrongly titled error.
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
  // Here Flow reports that `fromStateToProps` is missing from props,
  // while the real error is still the missing passthroug property,
  // giving the passthrough property fixes the wrongly titled error.
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
  // Here Flow reports that `fromStateToProps` is missing from props,
  // while the real error is still the missing passthroug property,
  // giving the passthrough property fixes the wrongly titled error.
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
  // Here Flow reports that `fromStateToProps` is missing from props,
  // while the real error is still the missing passthroug property,
  // giving the passthrough property fixes the wrongly titled error.
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
  // Here Flow reports that `dispatch1` is missing from props,
  // while the real error is still the missing passthroug property,
  // giving the passthrough property fixes the wrongly titled error.
  //$ExpectError no passthrough
  <Connected />;

  const mapDispatchToPropsWithoutDispatch2 = {
    dispatch1: (num: number) => {}
  };
  const Connected2 = connect(null, mapDispatchToPropsWithoutDispatch2)(Com);
  // Here Flow reports that `dispatch1` is missing from props,
  // while the real error is still the missing `dispatch2`,
  // giving the `mapDispatchToProps` to connect above
  // fixes the wrongly titled error.
  //$ExpectError no dispatch2
  <Connected2 passthrough={123}/>;

  const mapDispatchToPropsWithWrongDispatch1 = {
    dispatch1: (num: string) => {},
    dispatch2: () => {}
  };
  const Connected3 = connect(null, mapDispatchToPropsWithWrongDispatch1)(Com);
  // Here Flow reports that `dispatch1` is missing from props,
  // while the real error is still the wrong type of `dispatch1`,
  // giving `num` the correct type fixes the wrongly titled error.
  //$ExpectError dispatch1 should be number
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
  // Here Flow reports that `fromStateToProps` is missing from props,
  // while the real error is still the missing passthroug property,
  // giving the passthrough property fixes the wrongly titled error.
  //$ExpectError no passthrough
  <Connected/>;

  const mapDispatchToProps2 = {
    dispatch1: () => {}
  };
  const Connected2 = connect(mapStateToProps, mapDispatchToProps2)(Com);
  // Here Flow reports that `dispatch1` is missing from props,
  // while the real error is still the missing `dispatch2`,
  // fixing the original issue fixes the wrongly titled error.
  //$ExpectError no dispatch2
  <Connected2 passthrough={123} forMapStateToProps="str"/>;
}

function testMapDispatchToPropsPassesActionCreatorsWithMapStateToPropsAndMergeProps() {
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
  const Connected = connect(mapStateToProps, mapDispatchToProps, mergeProps)(Com);
  <Connected passthrough={123} forMapStateToProps="str" forMergeProps={1234}/>;
  // Here Flow reports that `forMapStateToProps` is missing from props,
  // while the real error is still the missing `passthrough`,
  // fixing the original issue fixes the wrongly titled error.
  //$ExpectError no passthrough
  <Connected/>;
  //$ExpectError forMapStateToProps missing
  <Connected forMapDispatchToProps={'more data'} forMergeProps={1234} />;
  //$ExpectError forMergeProps is missing
  <Connected forMapStateToProps={'data'} />;
  //$ExpectError forMergeProps is wrong type
  <Connected forMapStateToProps={'data'} forMapDispatchToProps={'more data'} forMergeProps={'not number'} />;

  const mapDispatchToProps2 = {
    dispatch1: () => {}
  };
  const Connected2 = connect(mapStateToProps, mapDispatchToProps2)(Com);
  // Here Flow reports that `dispatch1` is missing from props,
  // while the real error is still the missing `dispatch2`,
  // fixing the original issue fixes the wrongly titled error.
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

function testHoistConnectedComponent() {
  type Props = {passthrough: number, passthroughWithDefaultProp: number, fromStateToProps: string};
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

  const Connected = connect(mapStateToProps)(Com);
  // OK without passthroughWithDefaultProp
  <Connected passthrough={123} forMapStateToProps={'data'}/>;
  // OK with passthroughWithDefaultProp
  <Connected passthrough={123} passthroughWithDefaultProp={456} forMapStateToProps={'data'}/>;
  // OK with declared static property
  Connected.myStatic;
  //$ExpectError property `notStatic` is missing in statics
  Connected.notStatic;
}

function checkIfStateTypeIsRespectedAgain() {
  type State = {num: number, str: string};

  const mapStateToProps = (state: State) => {
    return { // no error
      str: state.num
    }
  };

  type Props = {
    str: string
  };

  class Com extends React.Component<Props> {
    render() {
      return <div>{this.props.str}</div>;
    }
  }

  const Connected = connect(mapStateToProps)(Com);
  // Here Flow reports that `str` is missing from props,
  // while the real error is still the type mismatch,
  // fixing the original issue fixes the wrongly titled error.
  //$ExpectError
  <Connected />;
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

  const Connected = connect(mapStateToProps)(Com);
  <Connected />;
}

function testForbidsLiteralOfInvalidTypeInMapStateToProps() {
  type Props = {
    //$ExpectError string is incompatible with number
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

  const Connected = connect(mapStateToPropsWithLiteralOfInvalidType)(Com);
  <Connected />
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

  const Connected = connect(mapStateToPropsWithStatePropertyOfInvalidType)(Com);
  // Here Flow reports that `str` is missing from props,
  // while the real error is still the type mismatch,
  // fixing the original issue fixes the wrongly titled error.
  //$ExpectError
  <Connected />;
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

  function selectorReturningNumber(state: State) {
    return state.num
  }

  const mapStateToPropsWithSelectorWithInvalidTypeReturnValue = (state: State) => {
    return {
      str: selectorReturningNumber(state)
    }
  };

  const Connected = connect(mapStateToPropsWithSelectorWithInvalidTypeReturnValue)(Com);
  // Here Flow reports that `str` is missing from props,
  // while the real error is still the type mismatch,
  // fixing the original issue fixes the wrongly titled error.
  //$ExpectError
  <Connected />
}
