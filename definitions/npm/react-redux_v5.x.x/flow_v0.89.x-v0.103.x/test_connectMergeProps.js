// @flow
import React from "react";
import { connect } from "react-redux";

export let e = []

function onlyOwnProps_ok() {
  opaque type Action = 'action';
  type Dispatch = Action => Action;

  type OwnProps = {|
    passthrough: string
  |}
  type Props = {
    ...OwnProps
  };
  class Com extends React.Component<Props> {}

  const mergeProps = (stateProps: {||}, dispatchProps: {|dispatch: Dispatch|}, ownProps: OwnProps) => {
    return {
      ...ownProps
    }
  }

  const Connected = connect<Props, OwnProps, _,_,_,Dispatch>(null, null, mergeProps)(Com);
  e.push(Connected);
  <Connected passthrough="foo" />;
}

function onlyOwnProps_wrongDispatch() {
  opaque type Action = 'action';
  type Dispatch = Action => Action;

  type OwnProps = {|
    passthrough: string
  |}
  type Props = {
    ...OwnProps
  };
  class Com extends React.Component<Props> {}

  const mergeProps = (stateProps: {||}, dispatchProps: {|dispatch: string|}, ownProps: OwnProps) => {
    return {
      ...ownProps
    }
  }

  const Connected = connect<Props, OwnProps, _,_,_,Dispatch>(
    null,
    null,
    //$ExpectError string [1] is incompatible with  `Dispatch` [2] in property `dispatch`
    mergeProps
  )(Com);
  e.push(Connected);
  <Connected passthrough="foo" />;
}

function onlyOwnProps_noPassthrough() {
  opaque type Action = 'action';
  type Dispatch = Action => Action;

  type OwnProps = {|
    passthrough: string
  |}
  type Props = {
    ...OwnProps
  };
  class Com extends React.Component<Props> {}

  const mergeProps = (stateProps: {||}, dispatchProps: {|dispatch: Dispatch|}, ownProps: OwnProps) => {
    return {
      a: 1
    }
  }

  const Connected = connect<Props, OwnProps, _,_,_,Dispatch>(
    null,
    null,
    //$ExpectError property `passthrough` is missing in object literal [1] but exists in `OwnProps` [2]
    mergeProps
  )(Com);
  e.push(Connected);
  <Connected passthrough="foo" />;
}

function onlyStateProps_ok() {
  type State = {|
    +state1: 'state1'
  |}
  opaque type Action = 'action';
  type Dispatch = Action => Action;

  type OwnProps = {|
    passthrough: string
  |}
  type StateProps = {|
    state1: 'state1'
  |}
  type Props = {
    ...OwnProps,
    ...StateProps,
  };
  class Com extends React.Component<Props> {}

  const mapStateToProps = state => ({state1: state.state1})

  const mergeProps = (stateProps: StateProps, dispatchProps: {|dispatch: Dispatch|}, ownProps: OwnProps) => {
    return {
      ...ownProps,
      ...stateProps,
    }
  }

  const Connected = connect<Props, OwnProps, _,_,_,Dispatch>(mapStateToProps, null, mergeProps)(Com);
  e.push(Connected);
  <Connected passthrough="foo" />;
}

function onlyStateProps_wrongDispatch() {
  type State = {|
    +state1: 'state1'
  |}
  opaque type Action = 'action';
  type Dispatch = Action => Action;

  type OwnProps = {|
    passthrough: string
  |}
  type StateProps = {|
    state1: 'state1'
  |}
  type Props = {
    ...OwnProps,
    ...StateProps
  };
  class Com extends React.Component<Props> {}

  const mapStateToProps = state => ({
    state1: state.state1
  })

  const mergeProps = (stateProps: StateProps, dispatchProps: {|dispatch: string|}, ownProps: OwnProps) => {
    return {
      ...ownProps,
      ...stateProps
    }
  }

  const Connected = connect<Props, OwnProps, _,_,_,Dispatch>(
    mapStateToProps,
    null,
    //$ExpectError string [1] is incompatible with  `Dispatch` [2] in property `dispatch`
    mergeProps
  )(Com);
  e.push(Connected);
  <Connected passthrough="foo" />;
}

function onlyDispatchPropsObject_ok() {
  type State = {|
    +state1: 'state1'
  |}
  opaque type Action = 'action1';
  type Dispatch = Action => Action;
  const action1 = (): Action => 'action1'

  type OwnProps = {|
    passthrough: string
  |}
  type DispatchProps = {|
    action1: typeof action1
  |}
  type Props = {
    ...OwnProps,
    ...DispatchProps,
  };
  class Com extends React.Component<Props> {}

  const mapDispatchToProps = {
    action1
  }

  const mergeProps = (stateProps: {||}, dispatchProps: DispatchProps, ownProps: OwnProps) => {
    return {
      ...ownProps,
      ...dispatchProps,
    }
  }

  const Connected = connect<Props, OwnProps, _,_,_,Dispatch>(undefined, mapDispatchToProps, mergeProps)(Com);
  e.push(Connected);
  <Connected passthrough="foo" />;
}

function onlyDispatchPropsObject_wrongExpectedState() {
  type State = {|
    +state1: 'state1'
  |}
  opaque type Action = 'action1';
  type Dispatch = Action => Action;
  const action1 = (): Action => 'action1'

  type OwnProps = {|
    passthrough: string
  |}
  type DispatchProps = {|
    action1: typeof action1
  |}
  type Props = {
    ...OwnProps,
    ...DispatchProps,
  };
  class Com extends React.Component<Props> {}

  const mapDispatchToProps = {
    action1
  }

  const mergeProps = (stateProps: {wrong: boolean}, dispatchProps: DispatchProps, ownProps: OwnProps) => {
    return {
      ...ownProps,
      ...dispatchProps,
    }
  }

  const Connected = connect<Props, OwnProps, _,_,_,Dispatch>(
    undefined,
    mapDispatchToProps,
    //$ExpectError property `wrong` is missing in object type [1] but exists in object type [2]
    mergeProps
  )(Com);
  e.push(Connected);
  <Connected passthrough="foo" />;
}

function onlyDispatchPropsFunction_ok() {
  type State = {|
    +state1: 'state1'
  |}
  opaque type Action = 'action1';
  type Dispatch = Action => Action;
  const action1 = (): Action => 'action1'

  type OwnProps = {|
    passthrough: string
  |}
  type DispatchProps = {|
    action1: typeof action1
  |}
  type Props = {
    ...OwnProps,
    ...DispatchProps,
  };
  class Com extends React.Component<Props> {}

  const mapDispatchToPropsFn = dispatch => ({
    action1: () => dispatch(action1())
  })

  const mergeProps = (stateProps: {||}, dispatchProps: DispatchProps, ownProps: OwnProps) => {
    return {
      ...ownProps,
      ...dispatchProps,
    }
  }

  const Connected = connect<Props, OwnProps, _,_,_,Dispatch>(null, mapDispatchToPropsFn, mergeProps)(Com);
  e.push(Connected);
  <Connected passthrough="foo" />;
}

function onlyDispatchPropsFunction_WrongExpectedState() {
  type State = {|
    +state1: 'state1'
  |}
  opaque type Action = 'action1';
  type Dispatch = Action => Action;
  const action1 = (): Action => 'action1'

  type OwnProps = {|
    passthrough: string
  |}
  type DispatchProps = {|
    action1: typeof action1
  |}
  type Props = {
    ...OwnProps,
    ...DispatchProps,
  };
  class Com extends React.Component<Props> {}

  type MapDispatchToPropsFn = Dispatch => DispatchProps
  const mapDispatchToPropsFn: MapDispatchToPropsFn = dispatch => ({
    action1: () => dispatch(action1())
  })

  const mergeProps = (stateProps: {|wrong:boolean|}, dispatchProps: DispatchProps, ownProps: OwnProps) => {
    return {
      ...ownProps,
      ...dispatchProps,
    }
  }

  //$ExpectError property `wrong` is missing in  object type [1] but exists in  object type [2]
  const Connected = connect<Props, OwnProps, _,_,_,Dispatch>(null, mapDispatchToPropsFn, mergeProps)(Com);
  e.push(Connected);
  <Connected passthrough="foo" />;
}

function onlyDispatchPropsFunction_wrongDispatchProp() {
  type State = {|
    +state1: 'state1'
  |}
  opaque type Action = 'action1';
  type Dispatch = Action => Action;
  const action1 = (): Action => 'action1'

  type OwnProps = {|
    passthrough: string
  |}
  type DispatchProps = {|
    action1: typeof action1
  |}
  type Props = {
    ...OwnProps,
    ...DispatchProps,
  };
  class Com extends React.Component<Props> {}

  const mapDispatchToPropsFn = dispatch => ({
    action1: () => 123
  })

  const mergeProps = (stateProps: {||}, dispatchProps: DispatchProps, ownProps: OwnProps) => {
    return {
      ...ownProps,
      ...dispatchProps,
    }
  }

  const Connected = connect<Props, OwnProps, _,_,_,Dispatch>(
    null,
    //$ExpectError number [1] is incompatible with  string literal `action1` [2]
    mapDispatchToPropsFn,
    mergeProps
  )(Com);
  e.push(Connected);
  <Connected passthrough="foo" />;
}

function stateAndDispatchPropsFunction_ok() {
  type State = {|
    +state1: 'state1'
  |}
  opaque type Action = 'action1';
  type Dispatch = Action => Action;
  const action1 = (): Action => 'action1'

  type OwnProps = {|
    passthrough: string
  |}
  type StateProps = {|
    state1: 'state1'
  |}
  type DispatchProps = {|
    action1: typeof action1
  |}
  type Props = {
    ...OwnProps,
    ...StateProps,
    ...DispatchProps,
  };
  class Com extends React.Component<Props> {}

  const mapStateToProps = state => ({
    state1: state.state1
  })

  const mapDispatchToPropsFn = dispatch => ({
    action1: () => dispatch(action1())
  })

  const mergeProps = (stateProps: StateProps, dispatchProps: DispatchProps, ownProps: OwnProps) => {
    return {
      ...ownProps,
      ...stateProps,
      ...dispatchProps,
    }
  }

  const Connected = connect<Props, OwnProps, _,_,_,Dispatch>(
    mapStateToProps,
    mapDispatchToPropsFn,
    mergeProps
  )(Com);
  e.push(Connected);
  <Connected passthrough="foo" />;
}

function stateAndDispatchPropsFunction_wrongState() {
  type State = {|
    +state1: 'state1'
  |}
  opaque type Action = 'action1';
  type Dispatch = Action => Action;
  const action1 = (): Action => 'action1'

  type OwnProps = {|
    passthrough: string
  |}
  type StateProps = {|
    state1: 'state1'
  |}
  type DispatchProps = {|
    action1: typeof action1
  |}
  type Props = {
    ...OwnProps,
    ...StateProps,
    ...DispatchProps,
  };
  class Com extends React.Component<Props> {}

  const mapStateToProps = state => ({
    state1: state.state1
  })

  const mapDispatchToPropsFn = dispatch => ({
    action1: () => dispatch(action1())
  })

  const mergeProps = (
    // yes, a bit cryptic
    //$ExpectError property `state1` is missing in  object type [1] but exists in  object literal [2]
    stateProps: {|wrong:boolean|},
    dispatchProps: DispatchProps,
    ownProps: OwnProps
  ) => {
    return {
      ...ownProps,
      state1: 'state1',
      ...dispatchProps,
    }
  }

  const Connected = connect<Props, OwnProps, _,_,_,Dispatch>(
    mapStateToProps,
    mapDispatchToPropsFn,
    mergeProps
  )(Com);
  e.push(Connected);
  <Connected passthrough="foo" />;
}

function stateAndDispatchPropsFunction_wrongDispatch() {
  type State = {|
    +state1: 'state1'
  |}
  opaque type Action = 'action1';
  type Dispatch = Action => Action;
  const action1 = (): Action => 'action1'

  type OwnProps = {|
    passthrough: string
  |}
  type StateProps = {|
    state1: 'state1'
  |}
  type DispatchProps = {|
    action1: typeof action1
  |}
  type Props = {
    ...OwnProps,
    ...StateProps,
    ...DispatchProps,
  };
  class Com extends React.Component<Props> {}

  const mapStateToProps = state => ({
    state1: state.state1
  })

  const mapDispatchToPropsFn = dispatch => ({
    //$ExpectError number [1] is incompatible with string literal `action1` [2]
    action1: () => 123
  })

  const mergeProps = (stateProps: StateProps, dispatchProps: DispatchProps, ownProps: OwnProps) => {
    return {
      ...ownProps,
      ...stateProps,
      ...dispatchProps,
    }
  }

  const Connected = connect<Props, OwnProps, _,_,_,Dispatch>(
    mapStateToProps,
    mapDispatchToPropsFn,
    mergeProps
  )(Com);
  e.push(Connected);
  <Connected passthrough="foo" />;
}

function returnsTotallyDifferentProps() {
  type State = {|
    +state1: 'state1'
  |}
  opaque type Action = 'action1';
  type Dispatch = Action => Action;
  const action1 = (): Action => 'action1'

  type OwnProps = {|
    passthrough: string
  |}
  type StateProps = {|
    state1: 'state1'
  |}
  type DispatchProps = {|
    action1: typeof action1
  |}
  type Props = {
    a: 1,
    b: 2,
    c: 3
  };
  class Com extends React.Component<Props> {}

  const mapStateToProps = state => ({
    state1: state.state1
  })

  const mapDispatchToPropsFn = dispatch => ({
    action1: () => dispatch(action1())
  })

  const mergeProps = (stateProps: StateProps, dispatchProps: DispatchProps, ownProps: OwnProps) => {
    return {
      a: 1,
      b: 2,
      c: 3,
      d: 4
    }
  }

  const Connected = connect<Props, OwnProps, _,_,_,Dispatch>(
    mapStateToProps,
    mapDispatchToPropsFn,
    mergeProps
  )(Com);
  e.push(Connected);
  <Connected passthrough="foo" />;
}

function returnsTotallyDifferentPropsWithError() {
  type State = {|
    +state1: 'state1'
  |}
  opaque type Action = 'action1';
  type Dispatch = Action => Action;
  const action1 = (): Action => 'action1'

  type OwnProps = {|
    passthrough: string
  |}
  type StateProps = {|
    state1: 'state1'
  |}
  type DispatchProps = {|
    action1: typeof action1
  |}
  type Props = {
    a: 1,
    b: 2,
    c: 3
  };
  class Com extends React.Component<Props> {}

  const mapStateToProps = state => ({
    state1: state.state1
  })

  const mapDispatchToPropsFn = dispatch => ({
    action1: () => dispatch(action1())
  })

  const mergeProps = (stateProps: StateProps, dispatchProps: DispatchProps, ownProps: OwnProps) => {
    //$ExpectError property `c` is missing in object literal [1] but exists in  `Props` [2]
    return {
      a: 1,
      b: 2,
    }
  }

  const Connected = connect<Props, OwnProps, _,_,_,Dispatch>(
    mapStateToProps,
    mapDispatchToPropsFn,
    mergeProps
  )(Com);
  e.push(Connected);
  <Connected passthrough="foo" />;
}
