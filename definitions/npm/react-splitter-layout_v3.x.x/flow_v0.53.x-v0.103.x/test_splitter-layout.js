import { describe, it } from 'flow-typed-test';
import React from 'react';
import SplitterLayout from 'react-splitter-layout';

it('checks it takes at least 1 pane', () => {
  /* react-splitter-layout accepts several children but will render only the
   * first 2. When there's only one child it will render this child without the
   * splitter element. It also accepts `undefined` or `null` as child, and in
   * this case it will render only the other child. Because this is a licit
   * usage we test it here to prevent future regressions, even if the libdef as
   * it's currently defined doesn't special-case these values.
   *
   * In the future we might want to stricten the libdef to accept only 2
   * children as it's likely a mistake to accept more than 2.
   */
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
