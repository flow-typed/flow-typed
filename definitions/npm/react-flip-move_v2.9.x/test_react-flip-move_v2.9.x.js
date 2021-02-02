import React from "react";
import FlipMove from "react-flip-move";
import type { ElementShape } from "react-flip-move";

function childHook(el: ElementShape, node: ?HTMLElement) {}
function childrenHook(els: Array<ElementShape>, nodes: Array<?HTMLElement>) {}

function test() {
  <FlipMove
    duration="100"
    delay="100"
    staggerDurationBy="100"
    staggerDelayBy="100"
    appearAnimation="accordionHorizontal"
    enterAnimation={true}
    leaveAnimation={{
      from: { opacity: "0.5" },
      to: { opacity: "1" }
    }}
    verticalAlignment="bottom"
  />;

  <FlipMove
    duration={100}
    easing="ease-out"
    delay={100}
    staggerDurationBy={100}
    staggerDelayBy={100}
    typeName="ul"
    appearAnimation="elevator"
    enterAnimation="fade"
    leaveAnimation="accordionVertical"
    disableAllAnimations={true}
    getPosition={(node: HTMLElement) => ({
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      height: 0,
      width: 0
    })}
    maintainContainerHeight={true}
    verticalAlignment="top"
    onStart={childHook}
    onFinish={childHook}
    onStartAll={childrenHook}
    onFinishAll={childrenHook}
    style={{
      height: 0,
      color: "red"
    }}
  >
    <div/>
    <div/>
  </FlipMove>;

// $FlowExpectedError
  <FlipMove easing={0}/>;
// $FlowExpectedError
  <FlipMove duration={true}/>;
// $FlowExpectedError
  <FlipMove delay={true}/>;
// $FlowExpectedError
  <FlipMove staggerDurationBy={true}/>;
// $FlowExpectedError
  <FlipMove staggerDelayBy={true}/>;
// $FlowExpectedError
  <FlipMove typeName={0}/>;
// $FlowExpectedError
  <FlipMove appearAnimation="foo"/>;
// $FlowExpectedError
  <FlipMove enterAnimation={{ from: 0, to: 0 }}/>;
// $FlowExpectedError
  <FlipMove leaveAnimation={{ from: { height: 0 }, to: { height: 10 } }}/>;
// $FlowExpectedError
  <FlipMove disableAllAnimations={0}/>;
// $FlowExpectedError
  <FlipMove getPosition={() => {
  }}/>;
// $FlowExpectedError
  <FlipMove maintainContainerHeight={0}/>;
// $FlowExpectedError
  <FlipMove verticalAlignment="foo"/>;
// $FlowExpectedError
  <FlipMove onStart={(n: number) => {
  }}/>;
// $FlowExpectedError
  <FlipMove onFinish={(n: number) => {
  }}/>;
// $FlowExpectedError
  <FlipMove onStartAll={(n: number) => {
  }}/>;
// $FlowExpectedError
  <FlipMove onFinishAll={(n: number) => {
  }}/>;
}
