// @flow
import React from "react";
import { connect } from "react-redux";

export let e = []

function object_sameDispatchIsOK() {
  type Action1 = {|
    type: string
  |};
  type Dispatch1 = Action1 => Action1;
  const action1 = (): Action1 => ({ type: 'str' })
  const mapDispatchToProps = {
    action1
  };

  type Props = {
    action1: typeof action1,
  };
  class Com extends React.Component<Props> {}

  const Connected1 = connect<Props, {||}, _,_,_,Dispatch1>(null, mapDispatchToProps)(Com);
  e.push(Connected1);
  <Connected1 />;
}

function object_differentDispatchesAreNotOK() {
  type Action1 = {|
    type: string
  |};
  type Dispatch1 = Action1 => Action1;
  const action1 = (): Action1 => ({ type: 'str' })
  const mapDispatchToProps = {
    action1
  };

  type Action2 = {|
  //$ExpectError `string` is incompatible with `number` in property `type`
    type: number
  |};
  type Dispatch2 = Action2 => Action2;

  type Props = {
    action1: typeof action1,
  };
  class Com extends React.Component<Props> {}

  const Connected1 = connect<Props, {||}, _,_,_,Dispatch1>(null, mapDispatchToProps)(Com);
  e.push(Connected1);
  <Connected1 />;

  const Connected2 = connect<Props, {||}, _,_,_,Dispatch2>(null, mapDispatchToProps)(Com);
  e.push(Connected2);
  <Connected2 />;
}

function function_sameDispatchIsOK() {
  type Action1 = {|
    type: string
  |};
  type Dispatch1 = Action1 => Action1;
  const action1 = (): Action1 => ({ type: 'str' });
  type DispatchProps = {|
    action1: () => Action1
  |};
  type MapDispatchToPropsFn = Dispatch1 => DispatchProps;
  const mapDispatchToProps: MapDispatchToPropsFn = (dispatch: Dispatch1) => ({
    action1: (...args) => dispatch(action1(...args))
  });

  type Props = {
    action1: typeof action1,
  };
  class Com extends React.Component<Props> {}

  const Connected1 = connect<Props, {||}, _,DispatchProps,_,Dispatch1>(null, mapDispatchToProps)(Com);
  e.push(Connected1);
  <Connected1 />;
}

function function_differentDispatchesAreNotOK() {
  type Action1 = {|
    type: string
  |};
  type Dispatch1 = Action1 => Action1;
  const action1 = (): Action1 => ({ type: 'str' });
  type DispatchProps = {|
    action1: () => Action1
  |};
  type MapDispatchToPropsFn = Dispatch1 => DispatchProps;
  const mapDispatchToProps: MapDispatchToPropsFn = (dispatch: Dispatch1) => ({
    action1: (...args) => dispatch(action1(...args))
  });

  type Action2 = {|
  //$ExpectError `string` is incompatible with `number` in property `type`
    type: number
  |};
  type Dispatch2 = Action2 => Action2;

  type Props = {
    action1: typeof action1,
  };
  class Com extends React.Component<Props> {}

  const Connected1 = connect<Props, {||}, _,DispatchProps,_,Dispatch1>(null, mapDispatchToProps)(Com);
  e.push(Connected1);
  <Connected1 />;

  const Connected2 = connect<Props, {||}, _,DispatchProps,_,Dispatch2>(null, mapDispatchToProps)(Com);
  e.push(Connected2);
  <Connected2 />;
}
