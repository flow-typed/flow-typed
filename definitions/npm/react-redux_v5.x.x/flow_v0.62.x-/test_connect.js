// @flow
import React from "react";
import { connect } from "react-redux";

function testPassingPropsToConnectedComponent() {
  type Props = {passtrough: number, fromStateToProps: string};
  class Com extends React.Component<Props> {
    render() {
      return <div>{this.props.passtrough} {this.props.fromStateToProps}</div>;
    }
  }

  type State = {a: number};
  type InputProps = {
    forMapStateToProps: string
  };
  const mapStateToProps = (state: State, props: InputProps) => {
    return {
      fromStateToProps: state.a
    }
  };

  const Connected = connect(mapStateToProps)(Com);
  <Connected passtrough={123} forMapStateToProps={'data'}/>;
  //$ExpectError passtrough missing
  <Connected forMapStateToProps={'data'} />;
  //$ExpectError forMapStateToProps missing
  <Connected passtrough={123}/>;

}

function testMapStateToPropsDoesNotNeedProps() {
  type Props = {passtrough: number, fromStateToProps: string};
  class Com extends React.Component<Props> {
    render() {
      return <div>{this.props.passtrough}</div>;
    }
  }

  type State = {a: string}
  const mapStateToProps = (state: State) => {
    return {
      fromStateToProps: state.a
    }
  }

  const Connected = connect(mapStateToProps)(Com);
  <Connected passtrough={123}/>;
  //$ExpectError component property passtrough not found
  <Connected />;
}

function testMapDispatchToProps() {
  type Props = {
    passtrough: number,
    fromMapDispatchToProps: string,
    fromMapStateToProps: string
  };
  class Com extends React.Component<Props> {
    render() {
      return <div>
        {this.props.passtrough}
        {this.props.fromMapDispatchToProps}
        {this.props.fromMapStateToProps}
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
  const Connected = connect(mapStateToProps, mapDispatchToProps)(Com);
  <Connected passtrough={123} forMapStateToProps={'data'} forMapDispatchToProps={'more data'} />;
  //$ExpectError passtrough missing
  <Connected forMapStateToProps={'data'} forMapDispatchToProps={'more data'} />;
  //$ExpectError forMapStateToProps missing
  <Connected passtrough={123} forMapDispatchToProps={'more data'} />;
  //$ExpectError forMapDispatchToProps missing
  <Connected passtrough={123} forMapStateToProps={'data'} />;
}

function testMapDispatchToPropsWithoutMapStateToProps() {
  type Props = {
    passtrough: number,
    fromMapDispatchToProps: string
  };
  class Com extends React.Component<Props> {
    render() {
      return <div>
        {this.props.passtrough}
        {this.props.fromMapDispatchToProps}
      </div>;
    }
  }

  type MapDispatchToPropsProps = {forMapDispatchToProps: string};
  const mapDispatchToProps = (dispatch: *, ownProps: MapDispatchToPropsProps) => {
    return {fromMapDispatchToProps: ownProps.forMapDispatchToProps}
  }
  const Connected = connect(null, mapDispatchToProps)(Com);
  <Connected passtrough={123} forMapStateToProps={'data'} forMapDispatchToProps={'more data'} />;
  //$ExpectError passtrough missing
  <Connected forMapStateToProps={'data'} forMapDispatchToProps={'more data'} />;
  //$ExpectError forMapDispatchToProps missing
  <Connected passtrough={123} forMapStateToProps={'data'} />;
}

function testMapDispatchToPropsPassesActionCreators() {
  type Props = {
    passtrough: number,
    dispatch1: () => {},
    dispatch2: () => {}
  };
  class Com extends React.Component<Props> {
    render() {
      return <div>{this.props.passtrough}</div>;
    }
  }

  const mapDispatchToProps = {
    dispatch1: () => {},
    dispatch2: () => {}
  };
  const Connected = connect(null, mapDispatchToProps)(Com);
  <Connected passtrough={123}/>;
  //$ExpectError no passTrough
  <Connected/>;

  const mapDispatchToProps2 = {
    dispatch1: () => {}
  };
  const Connected2 = connect(null, mapDispatchToProps2)(Com);
  //$ExpectError no dispatch2
  <Connected2 passtrough={123}/>;
}

function testMapDispatchToPropsPassesActionCreatorsWithMapStateToProps() {
  type Props = {
    passtrough: number,
    dispatch1: () => {},
    dispatch2: () => {},
    fromMapStateToProps: number
  };
  class Com extends React.Component<Props> {
    render() {
      return <div>{this.props.passtrough}</div>;
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
  <Connected passtrough={123} forMapStateToProps="str"/>;
  //$ExpectError no passTrough
  <Connected/>;

  const mapDispatchToProps2 = {
    dispatch1: () => {}
  };
  const Connected2 = connect(mapStateToProps, mapDispatchToProps2)(Com);
  //$ExpectError no dispatch2
  <Connected2 passtrough={123} forMapStateToProps="str"/>;
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
