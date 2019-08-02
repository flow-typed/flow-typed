// @flow
import * as React from "react";
import { connect } from "react-redux";

export let e = [];

function checkSimplePropertyInjection() {
  type OwnProps = {|
    foo: number,
    bar: string,
  |};
  type Props = { ...OwnProps, foo: number };
  const mapStateToProps = () => ({ foo: 5 });

  class Com extends React.Component<Props> {}

  const Connected = connect<Props, OwnProps, _, _, _, _>(mapStateToProps)(Com);

  <Connected foo={42} bar="str" />;
  //$ExpectError property `foo` is missing in props [1] but exists in `OwnProps`
  <Connected bar="str" />;
  e.push(Connected);

  function injectProp<Config: {}>(
    Component: React.AbstractComponent<Config>,
  ): React.AbstractComponent<$Diff<Config, { foo: number | void }>> {
    return function WrapperComponent(
      props: $Diff<Config, { foo: number | void }>,
    ) {
      return <Component {...props} foo={42} />;
    };
  }

  const Decorated = injectProp(Connected);
  // OK without `foo`
  <Decorated bar="str" />;
  // OK with a not needed `foo`
  <Decorated foo={42} bar="str" />;
  //$ExpectError property `bar` is missing in props [3] but exists in `Props` [4]
  <Decorated />;
  e.push(Decorated);
}

function composeWithOtherHOC_OK() {
  type OwnProps = {
    own1: number,
    injected1: string,
  };
  type Props = {
    ...$Exact<OwnProps>,
    state1: number,
  };
  const mapStateToProps = () => ({ state1: 5 });

  class Com extends React.Component<Props> {}

  function injectProp<Config: {}>(
    Component: React.AbstractComponent<Config>,
  ): React.AbstractComponent<$Diff<Config, { injected1: string | void }>> {
    return function WrapperComponent(
      props: $Diff<Config, { injected1: string | void }>,
    ) {
      return <Component {...props} injected1="str" />;
    };
  }

  declare var compose: $Compose;

  const composedDecorators = compose(
    injectProp,
    connect<Props, OwnProps, _, _, _, _>(mapStateToProps),
  );

  const Decorated = composedDecorators(Com);
  // OK without `injected1`
  <Decorated own1={1} />;
  // OK with a not needed `injected1`
  <Decorated own1={1} injected1="str" />;
  //$ExpectError property `own1` is missing in props [3] but exists in `Props` [4]
  <Decorated />;
  e.push(Decorated);
}

function composeWithOtherHOC_exactOK() {
  type OwnProps = {|
    own1: number,
    injected1: string,
  |};
  type Props = {
    ...$Exact<OwnProps>,
    state1: number,
  };
  const mapStateToProps = () => ({ state1: 5 });

  class Com extends React.Component<Props> {}

  function injectProp<Config: {}>(
    Component: React.AbstractComponent<Config>,
  ): React.AbstractComponent<$Diff<Config, { injected1: string | void }>> {
    return function WrapperComponent(
      props: $Diff<Config, { injected1: string | void }>,
    ) {
      return <Component {...props} injected1="str" />;
    };
  }

  declare var compose: $Compose;

  const composedDecorators = compose(
    injectProp,
    connect<Props, OwnProps, _, _, _, _>(mapStateToProps),
  );

  const Decorated = composedDecorators(Com);
  // OK without `injected1`
  <Decorated own1={1} />;
  //$ExpectError property `injected1` is missing in `OwnProps` [1] but exists in props
  <Decorated own1={1} injected1="str" />;
  // the ExpectError above masks the misssing `own1` error below :(
  <Decorated />;
  e.push(Decorated);
}

function composeWithOtherHOC_wrongOrder() {
  type OwnProps = {
    own1: number,
    injected1: string,
  };
  type Props = {
    ...$Exact<OwnProps>,
    state1: number,
  };
  const mapStateToProps = () => ({ state1: 5 });

  class Com extends React.Component<Props> {}

  function injectProp<Config: {}>(
    Component: React.AbstractComponent<Config>,
  ): React.AbstractComponent<$Diff<Config, { injected1: string | void }>> {
    return function WrapperComponent(
      props: $Diff<Config, { injected1: string | void }>,
    ) {
      return <Component {...props} injected1="str" />;
    };
  }

  declare var compose: $Compose;

  // injectProp must go before connect()
  const composedDecorators = compose(
    connect<Props, OwnProps, _, _, _, _>(mapStateToProps),
    injectProp,
  );

  const Decorated = composedDecorators(Com);
  //$ExpectError property `injected1` is missing in props
  <Decorated own1={1} />;
  // OK with an explicitly provided `injected1`
  <Decorated own1={1} injected1="str" />;
  e.push(Decorated);
}
