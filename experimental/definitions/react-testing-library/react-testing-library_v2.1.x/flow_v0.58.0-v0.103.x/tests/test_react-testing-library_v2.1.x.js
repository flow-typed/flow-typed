// @flow

import React from 'react';
import { render, Simulate, wait, fireEvent, renderIntoDocument, cleanup } from 'react-testing-library';
import { describe, it } from 'flow-typed-test';

describe('wait()', () => {
  it('should fail on invalid inputs', () => {
    // $ExpectError
    wait(1);
    // $ExpectError
    wait(() => {}, 1);
  });

  it('should pass on correct inputs', () => {
    wait(() => {});
    wait(() => {}, { timeout: 1 });
  });
});

describe('render()', () => {
  class Component extends React.Component<{}> {}
  const {
    container,
    unmount,
    queryByTestId,
    getByTestId,
    queryByText,
    getByText,
    queryByPlaceholderText,
    getByPlaceholderText,
    queryByLabelText,
    getByLabelText,
    queryByAltText,
    getByAltText
  } = render(<Component/>);

  it('unmount() should has 0 arguments', () => {
    unmount();
    // $ExpectError
    unmount(1);
  });

  it('container should be an html element', () => {
    // $ExpectError
    const a: number = container;
    const b: HTMLElement = container;
  });

  it('queryByTestId should return maybe html element', () => {
    // $ExpectError
    const a: HTMLElement = queryByTestId('1');
    const b: ?HTMLElement = queryByTestId('2');
  });

  it('getByTestId should return html element', () => {
    const a: HTMLElement = getByTestId('1');
  });

  it('queryByText should return maybe html element', () => {
    // $ExpectError
    const a: HTMLElement = queryByText('1');
    const b: ?HTMLElement = queryByText('2');
  });

  it('queryByText should return html element', () => {
    const a: HTMLElement = getByText('1');
  });

  it('queryByPlaceholderText should return maybe html element', () => {
    // $ExpectError
    const a: HTMLElement = queryByPlaceholderText('1');
    const b: ?HTMLElement = queryByPlaceholderText('2');
  });

  it('getByPlaceholderText should return html element', () => {
    const a: HTMLElement = getByPlaceholderText('1');
  });

  it('queryByLabelText should return maybe html element', () => {
    // $ExpectError
    const a: HTMLElement = queryByLabelText('1');
    const b: ?HTMLElement = queryByLabelText('2');
  });

  it('getByLabelText should return html element', () => {
    const a: HTMLElement = getByLabelText('1');
  });

  it('queryByAltText should return maybe html element', () => {
    // $ExpectError
    const a: HTMLElement = queryByAltText('1');
    const b: ?HTMLElement = queryByAltText('2');
  });

  it('getByAltText should return html element', () => {
    const a: HTMLElement = getByAltText('1');
  });
});

describe('renderIntoDocument()', () => {
  class Component extends React.Component<{}> {}
  const {
    container,
    unmount,
    queryByTestId,
    getByTestId,
    queryByText,
    getByText,
    queryByPlaceholderText,
    getByPlaceholderText,
    queryByLabelText,
    getByLabelText,
    queryByAltText,
    getByAltText
  } = renderIntoDocument(<Component/>);

  it('unmount() should has 0 arguments', () => {
    unmount();
    // $ExpectError
    unmount(1);
  });

  it('container should be an html element', () => {
    // $ExpectError
    const a: number = container;
    const b: HTMLElement = container;
  });

  it('queryByTestId should return maybe html element', () => {
    // $ExpectError
    const a: HTMLElement = queryByTestId('1');
    const b: ?HTMLElement = queryByTestId('2');
  });

  it('getByTestId should return html element', () => {
    const a: HTMLElement = getByTestId('1');
  });

  it('queryByText should return maybe html element', () => {
    // $ExpectError
    const a: HTMLElement = queryByText('1');
    const b: ?HTMLElement = queryByText('2');
  });

  it('queryByText should return html element', () => {
    const a: HTMLElement = getByText('1');
  });

  it('queryByPlaceholderText should return maybe html element', () => {
    // $ExpectError
    const a: HTMLElement = queryByPlaceholderText('1');
    const b: ?HTMLElement = queryByPlaceholderText('2');
  });

  it('getByPlaceholderText should return html element', () => {
    const a: HTMLElement = getByPlaceholderText('1');
  });

  it('queryByLabelText should return maybe html element', () => {
    // $ExpectError
    const a: HTMLElement = queryByLabelText('1');
    const b: ?HTMLElement = queryByLabelText('2');
  });

  it('getByLabelText should return html element', () => {
    const a: HTMLElement = getByLabelText('1');
  });

  it('queryByAltText should return maybe html element', () => {
    // $ExpectError
    const a: HTMLElement = queryByAltText('1');
    const b: ?HTMLElement = queryByAltText('2');
  });

  it('getByAltText should return html element', () => {
    const a: HTMLElement = getByAltText('1');
  });
});

describe('cleanup()', () => {
  it('should be a function w/o arguments', () => {
    cleanup();
    // $ExpectError
    cleanup(1);
  });
});

describe('fireEvent()', () => {
  const htmlEl = document.createElement('div');

  it('should be callable', () => {
    fireEvent(htmlEl, new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }));
  });

  it('should throw on invalid arguments', () => {
    // $ExpectError
    fireEvent(1);
    // $ExpectError
    fireEvent(htmlEl, 1);
  });

  it('should expose fire event helpers', () => {
    fireEvent.copy(htmlEl);
    fireEvent.cut(htmlEl);
    fireEvent.paste(htmlEl);
    fireEvent.compositionEnd(htmlEl);
    fireEvent.compositionStart(htmlEl);
    fireEvent.compositionUpdate(htmlEl);
    fireEvent.keyDown(htmlEl);
    fireEvent.keyPress(htmlEl);
    fireEvent.keyUp(htmlEl);
    fireEvent.focus(htmlEl);
    fireEvent.blur(htmlEl);
    fireEvent.change(htmlEl);
    fireEvent.input(htmlEl);
    fireEvent.invalid(htmlEl);
    fireEvent.submit(htmlEl);
    fireEvent.click(htmlEl);
    fireEvent.contextMenu(htmlEl);
    fireEvent.dblClick(htmlEl);
    fireEvent.doubleClick(htmlEl);
    fireEvent.drag(htmlEl);
    fireEvent.dragEnd(htmlEl);
    fireEvent.dragEnter(htmlEl);
    fireEvent.dragExit(htmlEl);
    fireEvent.dragLeave(htmlEl);
    fireEvent.dragOver(htmlEl);
    fireEvent.dragStart(htmlEl);
    fireEvent.drop(htmlEl);
    fireEvent.mouseDown(htmlEl);
    fireEvent.mouseEnter(htmlEl);
    fireEvent.mouseLeave(htmlEl);
    fireEvent.mouseMove(htmlEl);
    fireEvent.mouseOut(htmlEl);
    fireEvent.mouseOver(htmlEl);
    fireEvent.mouseUp(htmlEl);
    fireEvent.select(htmlEl);
    fireEvent.touchCancel(htmlEl);
    fireEvent.touchEnd(htmlEl);
    fireEvent.touchMove(htmlEl);
    fireEvent.touchStart(htmlEl);
    fireEvent.scroll(htmlEl);
    fireEvent.wheel(htmlEl);
    fireEvent.abort(htmlEl);
    fireEvent.canPlay(htmlEl);
    fireEvent.canPlayThrough(htmlEl);
    fireEvent.durationChange(htmlEl);
    fireEvent.emptied(htmlEl);
    fireEvent.encrypted(htmlEl);
    fireEvent.ended(htmlEl);
    fireEvent.loadedData(htmlEl);
    fireEvent.loadedMetadata(htmlEl);
    fireEvent.loadStart(htmlEl);
    fireEvent.pause(htmlEl);
    fireEvent.play(htmlEl);
    fireEvent.playing(htmlEl);
    fireEvent.progress(htmlEl);
    fireEvent.rateChange(htmlEl);
    fireEvent.seeked(htmlEl);
    fireEvent.seeking(htmlEl);
    fireEvent.stalled(htmlEl);
    fireEvent.suspend(htmlEl);
    fireEvent.timeUpdate(htmlEl);
    fireEvent.volumeChange(htmlEl);
    fireEvent.waiting(htmlEl);
    fireEvent.load(htmlEl);
    fireEvent.error(htmlEl);
    fireEvent.animationStart(htmlEl);
    fireEvent.animationEnd(htmlEl);
    fireEvent.animationIteration(htmlEl);
    fireEvent.transitionEnd(htmlEl);
  });
});
