// @flow
import React from "react";
import { connect } from "react-redux";

export let e = []

function onlyDispatchFunction_samePropsAreOK() {
  type State = {||}
  type Action = {|
    type: 'action'
  |};
  type DispatchAction = Action => Action;
  type Thunk = (Dispatch, State) => Promise<number>
  type DispatchThunk = Thunk => Promise<number>
  type Dispatch = DispatchAction & DispatchThunk

  const action = (): Action => ({ type: 'action' });
  const thunk = (): Thunk => (d: Dispatch) => Promise.resolve(1);
  type DispatchProps = {|
    action: typeof action,
    thunk: () => Promise<number>,
  |};
  type MapDispatchToPropsFn = Dispatch => DispatchProps;
  const mapDispatchToProps: MapDispatchToPropsFn = (dispatch) => ({
    action: () => dispatch(action()),
    thunk: () => dispatch(thunk())
  });

  type Props = {
    // in the case of a function passed to `connect()` Flow infers
    // the same type of function is both the Props and DispatchProps objects
    // (see the testDispatchThunk() to get the difference)
    ...DispatchProps
  };
  class Com extends React.Component<Props> {}

  const Connected = connect<Props, {||}, _,DispatchProps,_,Dispatch>(null, mapDispatchToProps)(Com);
  e.push(Connected);
  <Connected />;
}

function onlyDispatchObject_differentDispatchPropsAreOK() {
  type State = {||}
  type Action = {|
    type: 'action'
  |};
  type DispatchAction = Action => Action;
  type Thunk = (Dispatch, State) => Promise<number>
  type DispatchThunk = Thunk => Promise<number>
  type Dispatch = DispatchAction & DispatchThunk

  const action = (): Action => ({ type: 'action' });
  const thunk = (): Thunk => (d: Dispatch) => Promise.resolve(1);

  type DispatchProps = {|
    action: typeof action,
    // here the property returns a thunk...
    thunk: () => Thunk,
  |};
  const mapDispatchToProps = {
    action,
    thunk
  };

  type Props = {
    action: typeof action,
    // ... and here the property returns a return value of thunk
    // as dispatch calls it for us with `dispatch` and `getState`
    thunk: () => Promise<number>,
  };
  class Com extends React.Component<Props> {}

  const Connected = connect<Props, {||}, _,DispatchProps,_,Dispatch>(null, mapDispatchToProps)(Com);
  e.push(Connected);
  <Connected />;
}

function onlyDispatchObject_sameDispatchPropsAreErroneous() {
  type State = {||}
  type Action = {|
    type: 'action'
  |};
  type DispatchAction = Action => Action;
  type Thunk = (Dispatch, State) => Promise<number>
  type DispatchThunk = Thunk => Promise<number>
  type Dispatch = DispatchAction & DispatchThunk

  const action = (): Action => ({ type: 'action' });
  const thunk = (): Thunk => (d: Dispatch) => Promise.resolve(1);

  type DispatchProps = {|
    action: typeof action,
    //$ExpectError here the property returns a thunk...
    thunk: () => Thunk,
  |};
  const mapDispatchToProps = {
    action,
    thunk
  };

  type Props = {
    // trying to pass the not passed to dispatch types (against the redux dispatch monad)
    ...DispatchProps,
  };
  class Com extends React.Component<Props> {}

  const Connected = connect<Props, {||}, _,DispatchProps,_,Dispatch>(null, mapDispatchToProps)(Com);
  e.push(Connected);
  <Connected />;
}

function stateAndDispatchObject_differentDispatchPropsAreOK() {
  type State = {|
    state1: 'state1'
  |}
  type Action = {|
    type: 'action'
  |};
  type DispatchAction = Action => Action;
  type Thunk = (Dispatch, State) => Promise<number>
  type DispatchThunk = Thunk => Promise<number>
  type Dispatch = DispatchAction & DispatchThunk

  const action = (): Action => ({ type: 'action' });
  const thunk = (): Thunk => (d: Dispatch) => Promise.resolve(1);

  type StateProps = {|
    state1: 'state1',
  |};
  const mapStateToProps = state => ({
    state1: state.state1
  })

  type DispatchProps = {|
    action: typeof action,
    // here the property returns a thunk...
    thunk: () => Thunk,
  |};
  const mapDispatchToProps = {
    action,
    thunk
  };

  type Props = {
    ...StateProps,
    action: typeof action,
    // ... and here the property returns a return value of thunk
    // as dispatch calls it for us with `dispatch` and `getState`
    thunk: () => Promise<number>,
  };
  class Com extends React.Component<Props> {}

  const Connected = connect<Props, {||}, _,DispatchProps,_,Dispatch>(mapStateToProps, mapDispatchToProps)(Com);
  e.push(Connected);
  <Connected />;
}

function stateAndDispatchObject_sameDispatchPropsAreErroneous() {
  type State = {||}
  type Action = {|
    type: 'action'
  |};
  type DispatchAction = Action => Action;
  type Thunk = (Dispatch, State) => Promise<number>
  type DispatchThunk = Thunk => Promise<number>
  type Dispatch = DispatchAction & DispatchThunk

  const action = (): Action => ({ type: 'action' });
  const thunk = (): Thunk => (d: Dispatch) => Promise.resolve(1);

  type StateProps = {|
    state1: 'state1',
  |};
  const mapStateToProps = state => ({
    state1: state.state1
  })

  type DispatchProps = {|
    action: typeof action,
    //$ExpectError here the property returns a thunk...
    thunk: () => Thunk,
  |};
  const mapDispatchToProps = {
    action,
    thunk
  };

  type Props = {
    ...StateProps,
    // trying to pass the not passed to dispatch types (against the redux dispatch monad)
    ...DispatchProps,
  };
  class Com extends React.Component<Props> {}

  const Connected = connect<Props, {||}, _,DispatchProps,_,Dispatch>(mapStateToProps, mapDispatchToProps)(Com);
  e.push(Connected);
  <Connected />;
}
