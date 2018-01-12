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
