// @flow
import React from 'react'
import {connect} from 'react-redux'

type Props = {
  name: string,
  timeOfDay: string,
  updateTime: (time: string) => void,
  dispatch: Function
}

class Test extends React.Component<void, Props, void> {
  render () {
    return <span>Hello {this.props.name}. It's {this.props.timeOfDay}</span>
  }
}

// $ExpectError
const a1 = <Test name='john' />; // missing props
// $ExpectError
const a2 = <Test name='john' timeOfDay='hg' />; // missing props
// $ExpectError
const a3 = <Test name='john' timeOfDay='hg' updateTime={() => undefined} />; // missing props

const a4 = <Test name='john' timeOfDay='hg' updateTime={() => undefined} dispatch={() => null} />;
// $ExpectError
const a5 = <Test name={2345} timeOfDay='hg' updateTime={() => undefined} dispatch={() => null} />; // name must be string

const ConnectedTestB = connect()(Test)

// Works without dispatch. Injected implicitly
const b1 = <ConnectedTestB name='hjh' timeOfDay='morning' updateTime={() => undefined} />;
// $ExpectError
const b2 = <ConnectedTestB name='hjh' timeOfDay='morning' />; // missing prop: updateTime
// $ExpectError
const b3 = <ConnectedTestB name={234} timeOfDay='morning' updateTime={() => undefined} />; // name: string

const ConnectedTestC = connect(
  (state: Object) => ({timeOfDay: 'connectionTime'}),
  // (dispatch: Function) => ({
  //   updateTime: (time: string) => undefined
  // })
)(Test);

// Works without dispatch OR timeOfDay. Injected implicitly
const c1 = <ConnectedTestC name='hjh' updateTime={() => undefined} />;
// $ExpectError
const c2 = <ConnectedTestC name='hjh' />; // missing prop: updateTime
// $ExpectError
const c3 = <ConnectedTestC name='345' timeOfDay={23443} updateTime={() => undefined} />; // timeOfDay: string

const ConnectedTestD = connect(
  (state: Object) => ({timeOfDay: 'connectionTime'}),
  (dispatch: Function) => ({
    updateTime: (time: string) => undefined,
    dispatch
  })
)(Test);

// Works without dispatch OR timeOfDay OR updateTime. Injected implicitly
const d1 = <ConnectedTestD name='hjh' />;
// $ExpectError
const d2 = <ConnectedTestD />; // missing prop: name
// $ExpectError
const d3 = <ConnectedTestD name='345' timeOfDay={23443} updateTime={() => undefined} />; // timeOfDay: string
