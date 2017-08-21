// @flow
import React from 'react'
import { connect } from 'react-redux'
import type { Connector } from 'react-redux'

// copy & paste from redux libedef :(
type ReduxDispatch<A: { type: $Subtype<string> }> = (action: A) => A

type Action = { type: 'A' } | { type: 'B' }
type Dispatch = ReduxDispatch<Action>

type State = {
  c: number,
  d: string,
}

type Props1 = {
  a: number,
  b: string,
}

const C1 = (props: Props1) =>
  <div>
    {props.a} {props.b}
  </div>

type Props2 = {
  a: number,
  b: string,
  dispatch: Dispatch,
}

class C2 extends React.Component<void, Props2, void> {
  render() {
    return (
      // $ExpectError
      <div onClick={this.props.dispatch()}>
        {this.props.a} {this.props.b}
      </div>
    )
  }
}

class C3 extends React.Component<void, Props2, void> {
  render() {
    return (
      <div onClick={this.props.dispatch({ type: 'A' })}>
        {this.props.a} {this.props.b}
      </div>
    )
  }
}

//
// connect()
//

const CC1 = connect()(C1)
;<CC1 a={1} b="s" />
// $ExpectError
;<CC1 /> // missing a, b
// $ExpectError
;<CC1 a={1} /> // missing b
// $ExpectError
;<CC1 a="s" b="s" /> // wrong a type

const CC3 = connect()(C3)
;<CC3 a={1} b="s" />
// $ExpectError
;<CC3 /> // missing a, b
// $ExpectError
;<CC3 a={1} /> // missing b
// $ExpectError
;<CC3 a="s" b="s" /> // wrong a type

//
// connect(null, null, nul, options)
//

connect(null, null, null, { pure: true })(C1)
// $ExpectError
connect(null, null, null, { pure: 1 })(C1) // wrong type
connect(null, null, null, { withRef: true })(C1)
// $ExpectError
connect(null, null, null, { withRef: 1 })(C1) // wrong type
const CC4 = connect(null, null, null, {})(C1)
;<CC4 a={1} b="s" />
// $ExpectError
;<CC4 /> // missing a, b

//
// connect(mapStateToProps)
//

type OwnProps1 = { b: string }
// without ownProps
const connector5: Connector<OwnProps1, Props1> = connect((state: State) => ({
  a: state.c,
}))
const CC5 = connector5(C1)
;<CC5 b="s" />
// $ExpectError
;<CC5 /> // missing b
// $ExpectError
;<CC5 b={1} /> // wrong b type

// with ownProps
const connector6: Connector<
  OwnProps1,
  Props1
> = connect((state: State, ownProps: OwnProps1) => ({
  a: state.c,
  b: ownProps.b + 's',
}))
const CC6 = connector6(C1)
;<CC6 b="s" />
// $ExpectError
;<CC6 /> // missing b
// $ExpectError
;<CC6 b={1} /> // wrong b type

//
// connect(null, mapDispatchToProps)
//

type OwnProps2 = {
  a: number,
  b: string,
}
// without ownProps
const connector7: Connector<
  OwnProps2,
  Props2
> = connect(null, (dispatch: Dispatch) => ({ dispatch }))
const CC7 = connector7(C3)
;<CC7 a={1} b="s" />
// $ExpectError
;<CC7 a={1} /> // missing b
// $ExpectError
;<CC7 a="s" b="s" /> // wrong b type

type OwnProps3 = { a: number }
// with ownProps
const connector8: Connector<
  OwnProps3,
  Props2
> = connect(null, (dispatch: Dispatch, ownProps: OwnProps3) => ({
  dispatch,
  b: ownProps.a + 's',
}))
const CC8 = connector8(C3)
;<CC8 a={1} />
// $ExpectError
;<CC8 /> // missing a
// $ExpectError
;<CC8 a="s" /> // wrong b type

//
// connect(mapStateToProps, mapDispatchToProps)
//

const connector9: Connector<OwnProps1, Props2> = connect(
  (state: State) => ({ a: state.c }),
  (dispatch: Dispatch) => ({ dispatch })
)
const CC9 = connector9(C3)
;<CC9 b="s" />
// $ExpectError
;<CC9 /> // missing b
// $ExpectError
;<CC9 b={1} /> // wrong b type

//
// connect(mapStateToProps, mapDispatchToProps, MergeProps)
//

const connector10: Connector<{}, Props2> = connect(
  (state: State) => ({ a: state.c }),
  (dispatch: Dispatch) => ({ dispatch }),
  (stateProps, dispatchProps) =>
    Object.assign({}, stateProps, dispatchProps, { b: 's' })
)
const CC10 = connector10(C3)
;<CC10 />

//
// ConnectedComponent
//
;(CC1.WrappedComponent: C1)
