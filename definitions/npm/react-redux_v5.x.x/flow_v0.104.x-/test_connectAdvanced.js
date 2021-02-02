// @flow
import React from "react";
import { connectAdvanced } from "react-redux";

function testConnectAdvanced() {
  type Props = {
    fromStateToProps: string,
    fromInputProps: string,
    ...
  };
  class Com extends React.Component<Props> {
    render() {
      return <div>{this.props.fromInputProps} {this.props.fromStateToProps}</div>;
    }
  }

  type State = { a: number, ... };
  type InputProps = { fromInputProps: string, ... };
  const mapStateToProps = (state: State, props: InputProps) => {
    return {
      fromInputProps: 'str' + props.fromInputProps,
      fromStateToProps: 'str' + state.a
    }
  };

  const selectorFactory = (dispatch: *, selectorFactoryOptions: *) => {
    const {
      getDisplayName,
      methodName,
      renderCountProp,
      shouldHandleStateChanges,
      storeKey,
      withRef,
      displayName,
      wrappedComponentName,
    }: {
      getDisplayName: (name: string) => string,
      methodName: string,
      renderCountProp: ?string,
      shouldHandleStateChanges: boolean,
      storeKey: string,
      withRef: boolean,
      displayName: string,
      wrappedComponentName: string,
      ...
    } = selectorFactoryOptions;
    return mapStateToProps;
  }

  const Connected = connectAdvanced(selectorFactory)(Com);
  <Connected fromInputProps={'data'}/>;
  //$FlowExpectedError expects props to match second argument of mapStateToProps
  <Connected fromInputProps={123}/>;
  //$FlowExpectedError takes in only React components
  connectAdvanced(selectorFactory)('');
}

function testConnectAdvancedWithStatelessFunctionalComponent() {
  type Props = {
    fromStateToProps: string,
    fromInputProps: string,
    ...
  };
  const Com = (props: Props) => <div>{props.fromInputProps} {props.fromStateToProps}</div>;

  type State = { a: number, ... };
  type InputProps = { fromInputProps: string, ... };
  const mapStateToProps = (state: State, props: InputProps) => {
    return {
      fromInputProps: 'str' + props.fromInputProps,
      fromStateToProps: 'str' + state.a
    }
  };

  const selectorFactory = (dispatch: *, selectorFactoryOptions: *) => {
    return mapStateToProps;
  }

  const Connected = connectAdvanced(selectorFactory)(Com);
  <Connected fromInputProps={'data'}/>;
  //$FlowExpectedError expects props to match second argument of mapStateToProps
  <Connected fromInputProps={123}/>;
}

function testConnectAdvancedConnectOptions() {
  const selectorFactory = () => () => ({});
  connectAdvanced(selectorFactory, {
    getDisplayName: (name: string) => name + name,
    methodName: 'methodName',
    renderCountProp: 'renderCount',
    shouldHandleStateChanges: false,
    storeKey: 'storeKey',
    withRef: false,
  });

  //$FlowExpectedError getDisplayName must take a string
  connectAdvanced(selectorFactory, {getDisplayName: (name: number) => name + name});

  //$FlowExpectedError getDisplayName must return a string
  connectAdvanced(selectorFactory, {getDisplayName: (name: string) => name.length});

  //$FlowExpectedError methodName must be a string
  connectAdvanced(selectorFactory, {methodName: 5});

  //$FlowExpectedError renderCountProp must be a string
  connectAdvanced(selectorFactory, {renderCountProp: 5});

  //$FlowExpectedError shouldHandleStateChanges must be defined if passed in
  connectAdvanced(selectorFactory, {shouldHandleStateChanges: null});

  //$FlowExpectedError storeKey must be a string
  connectAdvanced(selectorFactory, {storeKey: 5});

  //$FlowExpectedError withRef must be defined if passed in
  connectAdvanced(selectorFactory, {withRef: null});

  connectAdvanced(selectorFactory, {otherOption: "other options are allowed"});
}

function testConnectAdvancedExtraOptions() {
  const selectorFactory = (dispatch: *, selectorFactoryOptions: *) => {
    const { otherOption }: { otherOption: string, ... } = selectorFactoryOptions;
    return () => ({});
  }

  connectAdvanced(selectorFactory, {otherOption: "other options typecheck too"});
  //$FlowExpectedError selectorFactory expects otherOption to be a specific type
  connectAdvanced(selectorFactory, {otherOption: 5});
}
