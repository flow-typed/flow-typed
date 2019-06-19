// @flow
import React from "react";
import { connect, type Connector } from "react-redux";

// copy & paste from redux libedef :(
type ReduxDispatch<A: { type: $Subtype<string> }> = (action: A) => A;

type Action = { type: "A" } | { type: "B" };
type Dispatch = ReduxDispatch<Action>;

type State = {
  c: number,
  d: string
};

type Props1 = {
  a: number,
  b: string
};

const C1 = (props: Props1) =>
  <div>
    {props.a} {props.b}
  </div>;

type Props2 = {
  a: number,
  b: string,
  dispatch: Dispatch
};

class C2 extends React.Component<Props2> {
  render() {
    return (
      // $ExpectError
      <div onClick={this.props.dispatch()}>
        {this.props.a} {this.props.b}
      </div>
    );
  }
}

class C3 extends React.Component<Props2> {
  render() {
    return (
      <div onClick={this.props.dispatch({ type: "A" })}>
        {this.props.a} {this.props.b}
      </div>
    );
  }
}

type Props3 = {
  a: number,
  b: string,
  e?: boolean
};

const C4 = (props: Props3) =>
  <div>
    {props.a} {props.b} {props.e ? "true" : "false"}
  </div>;

type Props4 = {
  a: number,
  b: string,
  e: boolean,
  dispatch: Dispatch
};

class C5 extends React.Component<Props4> {
  static defaultProps = { e: true };
  render() {
    return (
      <div onClick={this.props.dispatch({ type: "A" })}>
        {this.props.a} {this.props.b} {this.props.e ? "true" : "false"}
      </div>
    );
  }
}

//
// connect()
//

const CC1 = connect()(C1);
<CC1 a={1} b="s" />;
// $ExpectError
<CC1 />; // missing a, b
// $ExpectError
<CC1 a={1} />; // missing b
// $ExpectError
<CC1 a="s" b="s" />; // wrong a type

const CC3 = connect()(C3);
<CC3 a={1} b="s" />;
// $ExpectError
<CC3 />; // missing a, b
// $ExpectError
<CC3 a={1} />; // missing b
// $ExpectError
<CC3 a="s" b="s" />; // wrong a type

//
// connect(null, null, nul, options)
//

connect(null, null, null, { pure: true })(C1);
// $ExpectError
connect(null, null, null, { pure: 1 })(C1); // wrong type
connect(null, null, null, { withRef: true })(C1);
// $ExpectError
connect(null, null, null, { withRef: 1 })(C1); // wrong type
const CC4 = connect(null, null, null, {})(C1);
<CC4 a={1} b="s" />;
// $ExpectError
<CC4 />; // missing a, b

//
// connect(mapStateToProps)
//

type OwnProps1 = { b: string };
// without ownProps
const connector5: Connector<OwnProps1, Props1> = connect((state: State): {
  a: number
} => ({
  a: state.c
}));
const CC5 = connector5(C1);
<CC5 b="s" />;
// $ExpectError
<CC5 />; // missing b
// $ExpectError
<CC5 b={1} />; // wrong b type

// with ownProps
const connector6: Connector<
  OwnProps1,
  Props1
> = connect((state: State, ownProps: OwnProps1): Props1 => ({
  a: state.c,
  b: ownProps.b + "s"
}));
const CC6 = connector6(C1);
<CC6 b="s" />;
// $ExpectError
<CC6 />; // missing b
// $ExpectError
<CC6 b={1} />; // wrong b type

//
// connect(null, mapDispatchToProps)
//

type OwnProps2 = {
  a: number,
  b: string
};
// without ownProps
const connector7: Connector<
  OwnProps2,
  Props2
> = connect(null, (dispatch: Dispatch) => ({ dispatch }));
const CC7 = connector7(C3);
<CC7 a={1} b="s" />;
// $ExpectError
<CC7 a={1} />; // missing b
// $ExpectError
<CC7 a="s" b="s" />; // wrong b type

type OwnProps3 = { a: number };
// with ownProps
const connector8: Connector<
  OwnProps3,
  Props2
> = connect(null, (dispatch: Dispatch, ownProps: OwnProps3) => ({
  dispatch,
  b: ownProps.a + "s"
}));
const CC8 = connector8(C3);
<CC8 a={1} />;
// $ExpectError
<CC8 />; // missing a
// $ExpectError
<CC8 a="s" />; // wrong b type

//
// connect(mapStateToProps, mapDispatchToProps)
//

const connector9: Connector<OwnProps1, Props2> = connect(
  (state: State) => ({ a: state.c }),
  (dispatch: Dispatch) => ({ dispatch })
);
const CC9 = connector9(C3);
<CC9 b="s" />;
// $ExpectError
<CC9 />; // missing b
// $ExpectError
<CC9 b={1} />; // wrong b type

//
// connect(() => mapStateToProps)
//
const connector10: Connector<OwnProps1, Props2> = connect((): (State => {
  a: number
}) => (state: State) => ({ a: state.c }));
const CC10 = connector10(C3);
<CC10 b="s" />;
// $ExpectError
<CC10 />; // missing b
// $ExpectError
<CC10 b={1} />; // wrong b type

//
// connect(mapStateToProps, mapDispatchToProps, MergeProps)
//

const connector11: Connector<{}, Props2> = connect(
  (state: State) => ({ a: state.c }),
  (dispatch: Dispatch) => ({ dispatch }),
  (stateProps, dispatchProps) =>
    Object.assign({}, stateProps, dispatchProps, { b: "s" })
);
const CC11 = connector11(C3);
<CC11 />;

//
// ConnectedComponent
//
(CC1.WrappedComponent: C1);

// with defaultProps

//
// connect()
//

const CC12 = connect()(C4);
<CC12 a={1} b="s" />;
// $ExpectError
<CC12 />; // missing a, b
// $ExpectError
<CC12 a={1} />; // missing b
// $ExpectError
<CC12 a="s" b="s" />; // wrong a type
// $ExpectError
<CC12 a={1} b="s" e="s" />; // wrong e type

// const CC13 = connect()(C5);
// <CC13 a={1} b="s" />;
// // ignore$ExpectErr
// <CC13 />; // missing a, b
// // ignore$ExpectErr
// <CC13 a={1} />; // missing b
// // ignore$ExpectErr
// <CC13 a="s" b="s" />; // wrong a type
// // ignore$ExpectErr
// <CC13 a={1} b="s" e="s" />; // wrong e type

//
// connect(mapStateToProps)
//

// without ownProps
const connector14 = connect((state: State): {
  a: number
} => ({
  a: state.c
}));
const CC14 = connector14(C4);
<CC14 b="s" />;
// $ExpectError
<CC14 />; // missing b
// $ExpectError
<CC14 b={1} />; // wrong b type
// $ExpectError
<CC14 b="s" e={5} />; // wrong e type
<CC14 b="s" e={false} />;

const CC15 = connector14(C5);
<CC15 b="s" />;
// $ExpectError
<CC15 />; // missing b
// $ExpectError
<CC15 b={1} />; // wrong b type
// $ExpectError
<CC15 b="s" e={5} />; // wrong e type
<CC15 b="s" e={false} />;

// with ownProps
const connector15 = connect((state: State, ownProps: OwnProps1): {
  a: number,
  b: string
} => ({
  a: state.c,
  b: ownProps.b + "s"
}));
const CC16 = connector15(C4);
<CC16 b="s" />;
// $ExpectError
<CC16 />; // missing b
// $ExpectError
<CC16 b={1} />; // wrong b type
// $ExpectError
<CC16 b="s" e={5} />; // wrong e type
<CC16 b="s" e={false} />;

const CC17 = connector15(C5);
<CC17 b="s" />;
// $ExpectError
<CC17 />; // missing b
// $ExpectError
<CC17 b={1} />; // wrong b type
// $ExpectError
<CC17 b="s" e={5} />; // wrong e type
<CC17 b="s" e={false} />;

//
// connect(null, mapDispatchToProps)
//

// // without ownProps
// const connector16 = connect(null, (dispatch: Dispatch) => ({ dispatch }));
// const CC18 = connector16(C5);
// <CC18 a={1} b="s" />;
// // ignore$ExpectErr
// <CC18 a={1} />; // missing b
// // ignore$ExpectErr
// <CC18 a="s" b="s" />; // wrong a type
// // ignore$ExpectErr
// <CC18 a={1} b="s" e={5} />; // wrong e type
// <CC18 a={1} b="s" e={false} />;

// // with ownProps
// const connector17 = connect(
//   null,
//   (dispatch: Dispatch, ownProps: OwnProps3) => ({
//     dispatch,
//     b: ownProps.a + "s"
//   })
// );
// const CC19 = connector17(C5);
// <CC19 a={1} />;
// // ignore$ExpectErr
// <CC19 />; // missing a
// // ignore$ExpectErr
// <CC19 a="s" />; // wrong a type
// // ignore$ExpectErr
// <CC19 a={1} e={5} />; // wrong e type
// <CC19 a={1} e={false} />;

//
// connect(mapStateToProps, mapDispatchToProps)
//

// const connector18 = connect(
//   (state: State) => ({ a: state.c }),
//   (dispatch: Dispatch) => ({ dispatch })
// );
// const CC20 = connector18(C5);
// <CC20 b="s" />;
// // ignore$ExpectErr
// <CC20 />; // missing b
// // ignore$ExpectErr
// <CC20 b={1} />; // wrong b type
// // ignore$ExpectErr
// <CC20 b="s" e={5} />; // wrong e type
// <CC20 b="s" e={false} />;

//
// connect(() => mapStateToProps)
//
// const connector19 = connect((): (State => {
//   a: number
// }) => (state: State) => ({ a: state.c }));
// const CC21 = connector19(C5);
// <CC21 b="s" />;
// // ignore$ExpectErr
// <CC21 />; // missing b
// // ignore$ExpectErr
// <CC21 b={1} />; // wrong b type
// // ignore$ExpectErr
// <CC21 b="s" e={5} />; // wrong e type
// <CC21 b="s" e={false} />;

//
// connect(mapStateToProps, mapDispatchToProps, MergeProps)
//

// const connector20 = connect(
//   (state: State) => ({ a: state.c }),
//   (dispatch: Dispatch) => ({ dispatch }),
//   (stateProps, dispatchProps) =>
//     Object.assign({}, stateProps, dispatchProps, { b: "s" })
// );
// const CC22 = connector20(C5);
// <CC22 />;
// // ignore$ExpectErr
// <CC22 e={5} />; // wrong e type
// <CC22 e={false} />;
