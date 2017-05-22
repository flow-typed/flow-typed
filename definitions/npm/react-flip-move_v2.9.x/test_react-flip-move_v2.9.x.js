import React from 'react';
import FlipMove from 'react-flip-move';
import type { ElementShape } from 'react-flip-move';

function childHook(el: ElementShape, node: ?HTMLElement) {}
function childrenHook(els: Array<ElementShape>, nodes: Array<?HTMLElement>) {}

<FlipMove
  easing="ease-out"
  duration={100}
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
    width: 0,
  })}
  maintainContainerHeight={true}
  verticalAlignment="top"
  onStart={childHook}
  onFinish={childHook}
  onStartAll={childrenHook}
  onFinishAll={childrenHook}
  style={{
    height: 0,
    color: 'red',
  }}
>
  <div />
  <div />
</FlipMove>;

<FlipMove
  duration="100"
  delay="100"
  staggerDurationBy="100"
  staggerDelayBy="100"
  appearAnimation="accordionHorizontal"
  enterAnimation={true}
  leaveAnimation={{
    from: { opacity: "0.5" },
    to: { opacity: "1" },
  }}
  verticalAlignment="bottom"
/>;

// $ExpectError
<FlipMove easing={0} />;
// $ExpectError
<FlipMove duration={true} />;
// $ExpectError
<FlipMove delay={true} />;
// $ExpectError
<FlipMove staggerDurationBy={true} />;
// $ExpectError
<FlipMove staggerDelayBy={true} />;
// $ExpectError
<FlipMove typeName={0} />;
// $ExpectError
<FlipMove appearAnimation="foo" />;
// $ExpectError
<FlipMove enterAnimation={{ from: 0, to: 0, }} />;
// $ExpectError
<FlipMove
  leaveAnimation={{
    from: { height: 0 },
    to: { height: 10 },
  }}
/>;
// $ExpectError
<FlipMove disableAllAnimations={0} />;
// $ExpectError
<FlipMove getPosition={() => {}} />;
// $ExpectError
<FlipMove maintainContainerHeight={0} />;
// $ExpectError
<FlipMove verticalAlignment="foo" />;
// $ExpectError
<FlipMove onStart={(n: number) => {}} />;
// $ExpectError
<FlipMove onFinish={(n: number) => {}} />;
// $ExpectError
<FlipMove onStartAll={(n: number) => {}} />;
// $ExpectError
<FlipMove onFinishAll={(n: number) => {}} />;
