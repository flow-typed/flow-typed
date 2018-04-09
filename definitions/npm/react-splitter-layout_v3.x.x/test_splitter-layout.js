import { describe, it } from 'flow-typed-test';
import React from 'react';
import SplitterLayout from 'react-splitter-layout';

it('checks it takes at least 1 pane', () => {
  let element = (
    <SplitterLayout>
      <div>pane 1</div>
      <div>pane 2</div>
    </SplitterLayout>
  );

  element = (
    <SplitterLayout>
      <div>pane 1</div>
    </SplitterLayout>
  );

  element = (
    <SplitterLayout>
      <div>pane 1</div>
      {undefined}
    </SplitterLayout>
  )

  element = (
    <SplitterLayout>
      {null}
      <div>pane 1</div>
    </SplitterLayout>
  )

  // Note: react-splitter-layout will render only the first 2
  element = (
    <SplitterLayout>
      <div>pane 1</div>
      <div>pane 2</div>
      <div>pane 3</div>
    </SplitterLayout>
  );

  // $ExpectError
  element = <SplitterLayout/>;
});

it('checks various props', () => {
  let element = (
    <SplitterLayout
      customClassName="classname"
      vertical={true}
      percentage
      primaryIndex={1}
      primaryMinSize={50}
      secondaryMinSize={25}
      secondaryInitialSize={25}
      onDragStart={() => {}}
      onDragEnd={() => {}}
      onSecondaryPaneSizeChange={(size: number) => {}}
    >
      <div>pane 1</div>
      <div>pane 2</div>
    </SplitterLayout>
  );

  element = (
    <SplitterLayout
      onSecondaryPaneSizeChange={() => {}}
    >
      <div>pane 1</div>
      <div>pane 2</div>
    </SplitterLayout>
  );

  element = (
    // $ExpectError
    <SplitterLayout
      onSecondaryPaneSizeChange={(size: string) => {}}
    >
      <div>pane 1</div>
      <div>pane 2</div>
    </SplitterLayout>
  );

  element = (
    // $ExpectError
    <SplitterLayout
      primaryIndex={2}
    >
      <div>pane 1</div>
      <div>pane 2</div>
    </SplitterLayout>
  );
});
