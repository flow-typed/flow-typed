// @flow

import React from 'react';
import {
  render,
  wait,
  fireEvent,
  cleanup,
  waitForDomChange,
  waitForElement,
  within,
} from 'react-testing-library';
import { describe, it } from 'flow-typed-test';
import { domainToASCII } from 'url';

describe('wait', () => {
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

describe('waitForDomChange', () => {
  it('should fail on invalid inputs', () => {
    // $ExpectError
    waitForDomChange(1);
    // $ExpectError
    waitForDomChange('1');
  });

  it('should pass on correct inputs', () => {
    waitForDomChange({ container: document.createElement('div') });
    waitForDomChange({ timeout: 1 });
  });
});

describe('waitForElement', () => {
  it('should fail on invalid inputs', () => {
    // $ExpectError
    waitForElement(1);
    // $ExpectError
    waitForElement(() => {}, 1);
  });

  it('should pass on correct inputs', () => {
    waitForElement(() => document.createElement('div'));
    waitForElement(() => document.createElement('div'), {
      container: document.createElement('div'),
      timeout: 100,
    });
  });

  it('should return a usable value.', async n => {
    const usernameElement = await waitForElement(() =>
      document.createElement('input')
    );

    usernameElement.value = 'chucknorris';
  });
});

describe('render', () => {
  class Component extends React.Component<{}> {}
  const {
    container,
    unmount,
    baseElement,
    asFragment,
    debug,
    rerender,
    getByAltText,
    getAllByAltText,
    queryByAltText,
    queryAllByAltText,
    getByDisplayValue,
    getAllByDisplayValue,
    queryByDisplayValue,
    queryAllByDisplayValue,
    getByLabelText,
    getAllByLabelText,
    queryByLabelText,
    queryAllByLabelText,
    getByPlaceholderText,
    getAllByPlaceholderText,
    queryByPlaceholderText,
    queryAllByPlaceholderText,
    getByRole,
    getAllByRole,
    queryByRole,
    queryAllByRole,
    getBySelectText,
    getAllBySelectText,
    queryBySelectText,
    queryAllBySelectText,
    getByTestId,
    getAllByTestId,
    queryByTestId,
    queryAllByTestId,
    getByText,
    getAllByText,
    queryByText,
    queryAllByText,
    getByTitle,
    getAllByTitle,
    queryByTitle,
    queryAllByTitle,
    getByValue,
    getAllByValue,
    queryByValue,
    queryAllByValue,
  } = render(<Component />);

  it('unmount should has 0 arguments', () => {
    unmount();
    // $ExpectError
    unmount(1);
  });

  it('container should be an html element', () => {
    // $ExpectError
    const a: number = container;
    const b: HTMLElement = container;
  });

  it('baseElement should be an html element', () => {
    // $ExpectError
    const a: number = baseElement;
    const b: HTMLElement = baseElement;
  });

  it('asFragment should return a document fragment', () => {
    // $ExpectError
    const a: HTMLElement = asFragment();
    const b: DocumentFragment = asFragment();
  })

  it('debug maybe has 1 argument an html element', () => {
    // $ExpectError
    debug(1);
    debug(container);
  });

  it('rerender should has 1 argument an react element', () => {
    // $ExpectError
    rerender();
    rerender(<Component />);
  });

  it('getByAltText should return HTML element', () => {
    const a: HTMLElement = getByAltText('1');
  });

  it('getAllByAltText should return array of HTML element', () => {
    // $ExpectError
    const a: HTMLElement = getAllByAltText('1');
    const b: Array<HTMLElement> = getAllByAltText('2');
  });

  it('queryByAltText should return maybe HTML element', () => {
    // $ExpectError
    const a: HTMLElement = queryByAltText('1');
    const b: ?HTMLElement = queryByAltText('2');
  });

  it('queryAllByAltText should return array of HTML element', () => {
    // $ExpectError
    const a: HTMLElement = queryAllByAltText('1');
    const b: Array<HTMLElement> = queryAllByAltText('2');
  });

  it('getByDisplayValue should return HTML element', () => {
    const a: HTMLElement = getByDisplayValue('1');
  });

  it('getAllByDisplayValue should return array of HTML element', () => {
    // $ExpectError
    const a: HTMLElement = getAllByDisplayValue('1');
    const b: Array<HTMLElement> = getAllByDisplayValue('2');
  });

  it('queryByDisplayValue should return maybe HTML element', () => {
    // $ExpectError
    const a: HTMLElement = queryByDisplayValue('1');
    const b: ?HTMLElement = queryByDisplayValue('2');
  });

  it('queryAllByDisplayValue should return array of HTML element', () => {
    // $ExpectError
    const a: HTMLElement = queryAllByDisplayValue('1');
    const b: Array<HTMLElement> = queryAllByDisplayValue('2');
  });

  it('getByLabelText should return HTML element', () => {
    const a: HTMLElement = getByLabelText('1');
  });

  it('getAllByLabelText should return array of HTML element', () => {
    // $ExpectError
    const a: HTMLElement = getAllByLabelText('1');
    const b: Array<HTMLElement> = getAllByLabelText('2');
  });

  it('queryByLabelText should return maybe HTML element', () => {
    // $ExpectError
    const a: HTMLElement = queryByLabelText('1');
    const b: ?HTMLElement = queryByLabelText('2');
  });

  it('queryAllByLabelText should return array of HTML element', () => {
    // $ExpectError
    const a: HTMLElement = queryAllByLabelText('1');
    const b: Array<HTMLElement> = queryAllByLabelText('2');
  });

  it('getByPlaceholderText should return HTML element', () => {
    const a: HTMLElement = getByPlaceholderText('1');
  });

  it('getAllByPlaceholderText should return array of HTML element', () => {
    // $ExpectError
    const a: HTMLElement = getAllByPlaceholderText('1');
    const b: Array<HTMLElement> = getAllByPlaceholderText('2');
  });

  it('queryByPlaceholderText should return maybe HTML element', () => {
    // $ExpectError
    const a: HTMLElement = queryByPlaceholderText('1');
    const b: ?HTMLElement = queryByPlaceholderText('2');
  });

  it('queryAllByPlaceholderText should return array of HTML element', () => {
    // $ExpectError
    const a: HTMLElement = queryAllByPlaceholderText('1');
    const b: Array<HTMLElement> = queryAllByPlaceholderText('2');
  });

  it('getByRole should return HTML element', () => {
    const a: HTMLElement = getByRole('1');
  });

  it('getAllByRole should return array of HTML element', () => {
    // $ExpectError
    const a: HTMLElement = getAllByRole('1');
    const b: Array<HTMLElement> = getAllByRole('2');
  });

  it('queryByRole should return maybe HTML element', () => {
    // $ExpectError
    const a: HTMLElement = queryByRole('1');
    const b: ?HTMLElement = queryByRole('2');
  });

  it('queryAllByRole should return array of HTML element', () => {
    // $ExpectError
    const a: HTMLElement = queryAllByRole('1');
    const b: Array<HTMLElement> = queryAllByRole('2');
  });

  it('getBySelectText should return HTML element', () => {
    const a: HTMLElement = getBySelectText('1');
  });

  it('getAllBySelectText should return array of HTML element', () => {
    // $ExpectError
    const a: HTMLElement = getAllBySelectText('1');
    const b: Array<HTMLElement> = getAllBySelectText('2');
  });

  it('queryBySelectText should return maybe HTML element', () => {
    // $ExpectError
    const a: HTMLElement = queryBySelectText('1');
    const b: ?HTMLElement = queryBySelectText('2');
  });

  it('queryAllBySelectText should return array of HTML element', () => {
    // $ExpectError
    const a: HTMLElement = queryAllBySelectText('1');
    const b: Array<HTMLElement> = queryAllBySelectText('2');
  });

  it('getByTestId should return HTML element', () => {
    const a: HTMLElement = getByTestId('1');
  });

  it('getAllByTestId should return array of HTML element', () => {
    // $ExpectError
    const a: HTMLElement = getAllByTestId('1');
    const b: Array<HTMLElement> = getAllByTestId('2');
  });

  it('queryByTestId should return maybe HTML element', () => {
    // $ExpectError
    const a: HTMLElement = queryByTestId('1');
    const b: ?HTMLElement = queryByTestId('2');
  });

  it('queryAllByTestId should return array of HTML element', () => {
    // $ExpectError
    const a: HTMLElement = queryAllByTestId('1');
    const b: Array<HTMLElement> = queryAllByTestId('2');
  });

  it('getByText should return HTML element', () => {
    const a: HTMLElement = getByText('1');
  });

  it('getAllByText should return array of HTML element', () => {
    // $ExpectError
    const a: HTMLElement = getAllByText('1');
    const b: Array<HTMLElement> = getAllByText('2');
  });

  it('queryByText should return maybe HTML element', () => {
    // $ExpectError
    const a: HTMLElement = queryByText('1');
    const b: ?HTMLElement = queryByText('2');
  });

  it('queryAllByText should return array of HTML element', () => {
    // $ExpectError
    const a: HTMLElement = queryAllByText('1');
    const b: Array<HTMLElement> = queryAllByText('2');
  });

  it('getByTitle should return HTML element', () => {
    const a: HTMLElement = getByTitle('1');
  });

  it('getAllByTitle should return array of HTML element', () => {
    // $ExpectError
    const a: HTMLElement = getAllByTitle('1');
    const b: Array<HTMLElement> = getAllByTitle('2');
  });

  it('queryByTitle should return maybe HTML element', () => {
    // $ExpectError
    const a: HTMLElement = queryByTitle('1');
    const b: ?HTMLElement = queryByTitle('2');
  });

  it('queryAllByTitle should return array of HTML element', () => {
    // $ExpectError
    const a: HTMLElement = queryAllByTitle('1');
    const b: Array<HTMLElement> = queryAllByTitle('2');
  });

  it('getByValue should return HTML element', () => {
    const a: HTMLElement = getByValue('1');
  });

  it('getAllByValue should return array of HTML element', () => {
    // $ExpectError
    const a: HTMLElement = getAllByValue('1');
    const b: Array<HTMLElement> = getAllByValue('2');
  });

  it('queryByValue should return maybe HTML element', () => {
    // $ExpectError
    const a: HTMLElement = queryByValue('1');
    const b: ?HTMLElement = queryByValue('2');
  });

  it('queryAllByValue should return array of HTML element', () => {
    // $ExpectError
    const a: HTMLElement = queryAllByValue('1');
    const b: Array<HTMLElement> = queryAllByValue('2');
  });
});

describe('cleanup', () => {
  it('should be a function w/o arguments', () => {
    cleanup();
    // $ExpectError
    cleanup(1);
  });
});

describe('within', () => {
  class Component extends React.Component<{}> {}
  const { container } = render(<Component />);

  it('should has html element as argument', () => {
    // $ExpectError
    within();
    within(container);
  });

  it('should have getByAltText', () => {
    within(container).getByAltText('1');
  });

  it('should have getAllByAltText', () => {
    within(container).getAllByAltText('1');
  });

  it('should have queryByAltText', () => {
    within(container).queryByAltText('1');
  });

  it('should have queryAllByAltText', () => {
    within(container).queryAllByAltText('1');
  });

  it('should have getByDisplayValue', () => {
    within(container).getByDisplayValue('1');
  });

  it('should have getAllByDisplayValue', () => {
    within(container).getAllByDisplayValue('1');
  });

  it('should have queryByDisplayValue', () => {
    within(container).queryByDisplayValue('1');
  });

  it('should have queryAllByDisplayValue', () => {
    within(container).queryAllByDisplayValue('1');
  });

  it('should have getByLabelText', () => {
    within(container).getByLabelText('1');
  });

  it('should have getAllByLabelText', () => {
    within(container).getAllByLabelText('1');
  });

  it('should have queryByLabelText', () => {
    within(container).queryByLabelText('1');
  });

  it('should have queryAllByLabelText', () => {
    within(container).queryAllByLabelText('1');
  });

  it('should have getByPlaceholderText', () => {
    within(container).getByPlaceholderText('1');
  });

  it('should have getAllByPlaceholderText', () => {
    within(container).getAllByPlaceholderText('1');
  });

  it('should have queryByPlaceholderText', () => {
    within(container).queryByPlaceholderText('1');
  });

  it('should have queryAllByPlaceholderText', () => {
    within(container).queryAllByPlaceholderText('1');
  });

  it('should have getByRole', () => {
    within(container).getByRole('1');
  });

  it('should have getAllByRole', () => {
    within(container).getAllByRole('1');
  });

  it('should have queryByRole', () => {
    within(container).queryByRole('1');
  });

  it('should have queryAllByRole', () => {
    within(container).queryAllByRole('1');
  });

  it('should have getBySelectText', () => {
    within(container).getBySelectText('1');
  });

  it('should have getAllBySelectText', () => {
    within(container).getAllBySelectText('1');
  });

  it('should have queryBySelectText', () => {
    within(container).queryBySelectText('1');
  });

  it('should have queryAllBySelectText', () => {
    within(container).queryAllBySelectText('1');
  });

  it('should have getByTestId', () => {
    within(container).getByTestId('1');
  });

  it('should have getAllByTestId', () => {
    within(container).getAllByTestId('1');
  });

  it('should have queryByTestId', () => {
    within(container).queryByTestId('1');
  });

  it('should have queryAllByTestId', () => {
    within(container).queryAllByTestId('1');
  });

  it('should have getByText', () => {
    within(container).getByText('1');
  });

  it('should have getAllByText', () => {
    within(container).getAllByText('1');
  });

  it('should have queryByText', () => {
    within(container).queryByText('1');
  });

  it('should have queryAllByText', () => {
    within(container).queryAllByText('1');
  });

  it('should have getByTitle', () => {
    within(container).getByTitle('1');
  });

  it('should have getAllByTitle', () => {
    within(container).getAllByTitle('1');
  });

  it('should have queryByTitle', () => {
    within(container).queryByTitle('1');
  });

  it('should have queryAllByTitle', () => {
    within(container).queryAllByTitle('1');
  });

  it('should have getByValue', () => {
    within(container).getByValue('1');
  });

  it('should have getAllByValue', () => {
    within(container).getAllByValue('1');
  });

  it('should have queryByValue', () => {
    within(container).queryByValue('1');
  });

  it('should have queryAllByValue', () => {
    within(container).queryAllByValue('1');
  });
});

describe('fireEvent', () => {
  const htmlEl = document.createElement('div');

  it('should be callable', () => {
    fireEvent(
      htmlEl,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );
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

describe('text matching API', () => {
  class Component extends React.Component<{}> {}
  const {
    getByAltText,
    getAllByAltText,
    queryByAltText,
    queryAllByAltText,
    getByDisplayValue,
    getAllByDisplayValue,
    queryByDisplayValue,
    queryAllByDisplayValue,
    getByLabelText,
    getAllByLabelText,
    queryByLabelText,
    queryAllByLabelText,
    getByPlaceholderText,
    getAllByPlaceholderText,
    queryByPlaceholderText,
    queryAllByPlaceholderText,
    getByRole,
    getAllByRole,
    queryByRole,
    queryAllByRole,
    getBySelectText,
    getAllBySelectText,
    queryBySelectText,
    queryAllBySelectText,
    getByTestId,
    getAllByTestId,
    queryByTestId,
    queryAllByTestId,
    getByText,
    getAllByText,
    queryByText,
    queryAllByText,
    getByTitle,
    getAllByTitle,
    queryByTitle,
    queryAllByTitle,
    getByValue,
    getAllByValue,
    queryByValue,
    queryAllByValue,
  } = render(<Component />);

  it('getByAltText should accept text match arguments', () => {
    getByAltText('1');
    getByAltText('1', { trim: true, collapseWhitespace: true, exact: true });
    getByAltText(/1/);
    getByAltText(/1/, { trim: true, collapseWhitespace: true, exact: true });
    getByAltText((content: string, element) => true);
    getByAltText((content: string, element) => true, {
      trim: true,
      collapseWhitespace: true,
      exact: true,
    });
  });

  it('getAllByAltText should accept text match arguments', () => {
    const result: Array<HTMLElement> = getAllByAltText('1');
  });

  it('queryByAltText should accept text match arguments', () => {
    queryByAltText('1');
    queryByAltText('1', { trim: true, collapseWhitespace: true, exact: true });
    queryByAltText(/1/);
    queryByAltText(/1/, { trim: true, collapseWhitespace: true, exact: true });
    queryByAltText((content: string, element) => true);
    queryByAltText((content: string, element) => true, {
      trim: true,
      collapseWhitespace: true,
      exact: true,
    });
  });

  it('queryAllByAltText should accept text match arguments', () => {
    const result: Array<HTMLElement> = queryAllByAltText('1');
  });

  it('getByDisplayValue should accept text match arguments', () => {
    getByDisplayValue('1');
    getByDisplayValue('1', {
      trim: true,
      collapseWhitespace: true,
      exact: true,
    });
    getByDisplayValue(/1/);
    getByDisplayValue(/1/, {
      trim: true,
      collapseWhitespace: true,
      exact: true,
    });
    getByDisplayValue((content: string, element) => true);
    getByDisplayValue((content: string, element) => true, {
      trim: true,
      collapseWhitespace: true,
      exact: true,
    });
  });

  it('getAllByDisplayValue should accept text match arguments', () => {
    const result: Array<HTMLElement> = getAllByDisplayValue('1');
  });

  it('queryByDisplayValue should accept text match arguments', () => {
    queryByDisplayValue('1');
    queryByDisplayValue('1', {
      trim: true,
      collapseWhitespace: true,
      exact: true,
    });
    queryByDisplayValue(/1/);
    queryByDisplayValue(/1/, {
      trim: true,
      collapseWhitespace: true,
      exact: true,
    });
    queryByDisplayValue((content: string, element) => true);
    queryByDisplayValue((content: string, element) => true, {
      trim: true,
      collapseWhitespace: true,
      exact: true,
    });
  });

  it('queryAllByDisplayValue should accept text match arguments', () => {
    const result: Array<HTMLElement> = queryAllByDisplayValue('1');
  });

  it('getByLabelText should accept text match arguments', () => {
    getByLabelText('1');
    getByLabelText('1', { trim: true, collapseWhitespace: true, exact: true });
    getByLabelText(/1/);
    getByLabelText(/1/, { trim: true, collapseWhitespace: true, exact: true });
    getByLabelText((content: string, element) => true);
    getByLabelText((content: string, element) => true, {
      trim: true,
      collapseWhitespace: true,
      exact: true,
      selector: 'A',
    });
  });

  it('getAllByLabelText should accept text match arguments', () => {
    const result: Array<HTMLElement> = getAllByLabelText('1');
  });

  it('queryByLabelText should accept text match arguments', () => {
    queryByLabelText('1');
    queryByLabelText('1', { trim: true, collapseWhitespace: true, exact: true });
    queryByLabelText(/1/);
    queryByLabelText(/1/, {
      trim: true,
      collapseWhitespace: true,
      exact: true,
      selector: 'A',
    });
    queryByLabelText((content: string, element) => true);
    queryByLabelText((content: string, element) => true, {
      trim: true,
      collapseWhitespace: true,
      exact: true,
      selector: 'A',
    });
  });

  it('queryAllByLabelText should accept text match arguments', () => {
    const result: Array<HTMLElement> = queryAllByLabelText('1');
  });

  it('getByPlaceholderText should accept text match arguments', () => {
    getByPlaceholderText('1');
    getByPlaceholderText('1', {
      trim: true,
      collapseWhitespace: true,
      exact: true,
    });
    getByPlaceholderText(/1/);
    getByPlaceholderText(/1/, {
      trim: true,
      collapseWhitespace: true,
      exact: true,
    });
    getByPlaceholderText((content: string, element) => true);
    getByPlaceholderText((content: string, element) => true, {
      trim: true,
      collapseWhitespace: true,
      exact: true,
    });
  });

  it('getAllByPlaceholderText should accept text match arguments', () => {
    const result: Array<HTMLElement> = getAllByPlaceholderText('1');
  });

  it('queryByPlaceholderText should accept text match arguments', () => {
    queryByPlaceholderText('1');
    queryByPlaceholderText('1', {
      trim: true,
      collapseWhitespace: true,
      exact: true,
    });
    queryByPlaceholderText(/1/);
    queryByPlaceholderText(/1/, {
      trim: true,
      collapseWhitespace: true,
      exact: true,
    });
    queryByPlaceholderText((content: string, element) => true);
    queryByPlaceholderText((content: string, element) => true, {
      trim: true,
      collapseWhitespace: true,
      exact: true,
    });
  });

  it('queryAllByPlaceholderText should accept text match arguments', () => {
    const result: Array<HTMLElement> = queryAllByPlaceholderText('1');
  });

  it('getByRole should accept text match arguments', () => {
    getByRole('1');
    getByRole('1', { trim: true, collapseWhitespace: true, exact: true });
    getByRole(/1/);
    getByRole(/1/, { trim: true, collapseWhitespace: true, exact: true });
    getByRole((content: string, element) => true);
    getByRole((content: string, element) => true, {
      trim: true,
      collapseWhitespace: true,
      exact: true,
    });
  });

  it('getAllByRole should accept text match arguments', () => {
    const result: Array<HTMLElement> = getAllByRole('1');
  });

  it('queryByRole should accept text match arguments', () => {
    queryByRole('1');
    queryByRole('1', { trim: true, collapseWhitespace: true, exact: true });
    queryByRole(/1/);
    queryByRole(/1/, { trim: true, collapseWhitespace: true, exact: true });
    queryByRole((content: string, element) => true);
    queryByRole((content: string, element) => true, {
      trim: true,
      collapseWhitespace: true,
      exact: true,
    });
  });

  it('queryAllByRole should accept text match arguments', () => {
    const result: Array<HTMLElement> = queryAllByRole('1');
  });

  it('getBySelectText should accept text match arguments', () => {
    getBySelectText('1');
    getBySelectText('1', { trim: true, collapseWhitespace: true, exact: true });
    getBySelectText(/1/);
    getBySelectText(/1/, { trim: true, collapseWhitespace: true, exact: true });
    getBySelectText((content: string, element) => true);
    getBySelectText((content: string, element) => true, {
      trim: true,
      collapseWhitespace: true,
      exact: true,
    });
  });

  it('getAllBySelectText should accept text match arguments', () => {
    const result: Array<HTMLElement> = getAllBySelectText('1');
  });

  it('queryBySelectText should accept text match arguments', () => {
    queryBySelectText('1');
    queryBySelectText('1', {
      trim: true,
      collapseWhitespace: true,
      exact: true,
    });
    queryBySelectText(/1/);
    queryBySelectText(/1/, {
      trim: true,
      collapseWhitespace: true,
      exact: true,
    });
    queryBySelectText((content: string, element) => true);
    queryBySelectText((content: string, element) => true, {
      trim: true,
      collapseWhitespace: true,
      exact: true,
    });
  });

  it('queryAllBySelectText should accept text match arguments', () => {
    const result: Array<HTMLElement> = queryAllBySelectText('1');
  });

  it('getByTestId should accept text match arguments', () => {
    getByTestId('1');
    getByTestId('1', { trim: true, collapseWhitespace: true, exact: true });
    getByTestId(/1/);
    getByTestId(/1/, { trim: true, collapseWhitespace: true, exact: true });
    getByTestId((content: string, element) => true);
    getByTestId((content: string, element) => true, {
      trim: true,
      collapseWhitespace: true,
      exact: true,
    });
  });

  it('getAllByTestId should accept text match arguments', () => {
    const result: Array<HTMLElement> = getAllByTestId('1');
  });

  it('queryByTestId should accept text match arguments', () => {
    queryByTestId('1');
    queryByTestId('1', { trim: true, collapseWhitespace: true, exact: true });
    queryByTestId(/1/);
    queryByTestId(/1/, { trim: true, collapseWhitespace: true, exact: true });
    queryByTestId((content: string, element) => true);
    queryByTestId((content: string, element) => true, {
      trim: true,
      collapseWhitespace: true,
      exact: true,
    });
  });

  it('queryAllByTestId should accept text match arguments', () => {
    const result: Array<HTMLElement> = queryAllByTestId('1');
  });

  it('getByText should accept text match arguments', () => {
    getByText('1');
    getByText('1', { trim: true, collapseWhitespace: true, exact: true });
    getByText(/1/);
    getByText(/1/, { trim: true, collapseWhitespace: true, exact: true });
    getByText((content: string, element) => true);
    getByText((content: string, element) => true, {
      trim: true,
      collapseWhitespace: true,
      exact: true,
      selector: 'A',
    });
  });

  it('getAllByText should accept text match arguments', () => {
    const result: Array<HTMLElement> = getAllByText('1');
  });

  it('queryByText should accept text match arguments', () => {
    queryByText('1');
    queryByText('1', { trim: true, collapseWhitespace: true, exact: true });
    queryByText(/1/);
    queryByText(/1/, { trim: true, collapseWhitespace: true, exact: true });
    queryByText((content: string, element) => true);
    queryByText((content: string, element) => true, {
      trim: true,
      collapseWhitespace: true,
      exact: true,
      selector: 'A',
    });
  });

  it('queryAllByText should accept text match arguments', () => {
    const result: Array<HTMLElement> = queryAllByText('1');
  });

  it('getByTitle should accept text match arguments', () => {
    getByTitle('1');
    getByTitle('1', { trim: true, collapseWhitespace: true, exact: true });
    getByTitle(/1/);
    getByTitle(/1/, { trim: true, collapseWhitespace: true, exact: true });
    getByTitle((content: string, element) => true);
    getByTitle((content: string, element) => true, {
      trim: true,
      collapseWhitespace: true,
      exact: true,
    });
  });

  it('getAllByTitle should accept text match arguments', () => {
    const result: Array<HTMLElement> = getAllByTitle('1');
  });

  it('queryByTitle should accept text match arguments', () => {
    queryByTitle('1');
    queryByTitle('1', { trim: true, collapseWhitespace: true, exact: true });
    queryByTitle(/1/);
    queryByTitle(/1/, { trim: true, collapseWhitespace: true, exact: true });
    queryByTitle((content: string, element) => true);
    queryByTitle((content: string, element) => true, {
      trim: true,
      collapseWhitespace: true,
      exact: true,
    });
  });

  it('queryAllByTitle should accept text match arguments', () => {
    const result: Array<HTMLElement> = queryAllByTitle('1');
  });

  it('getByValue should accept text match arguments', () => {
    getByValue('1');
    getByValue('1', { trim: true, collapseWhitespace: true, exact: true });
    getByValue(/1/);
    getByValue(/1/, { trim: true, collapseWhitespace: true, exact: true });
    getByValue((content: string, element) => true);
    getByValue((content: string, element) => true, {
      trim: true,
      collapseWhitespace: true,
      exact: true,
    });
  });

  it('getAllByValue should accept text match arguments', () => {
    const result: Array<HTMLElement> = getAllByValue('1');
  });

  it('queryByValue should accept text match arguments', () => {
    queryByValue('1');
    queryByValue('1', { trim: true, collapseWhitespace: true, exact: true });
    queryByValue(/1/);
    queryByValue(/1/, { trim: true, collapseWhitespace: true, exact: true });
    queryByValue((content: string, element) => true);
    queryByValue((content: string, element) => true, {
      trim: true,
      collapseWhitespace: true,
      exact: true,
    });
  });

  it('queryAllByValue should accept text match arguments', () => {
    const result: Array<HTMLElement> = queryAllByValue('1');
  });
});
