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
} from '@testing-library/react';
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
  });

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

  it('getByAltText should return HTML element by default', () => {
    const a: HTMLElement = getByAltText<HTMLElement>('1');
  });

  it('getByAltText should return passed element', () => {
    const a: HTMLButtonElement = getByAltText<HTMLButtonElement>('1');
  });

  it('getAllByAltText should return array of HTML element by default', () => {
    // $ExpectError
    const a: HTMLElement = getAllByAltText<HTMLElement>('1');
    const b: Array<HTMLElement> = getAllByAltText<HTMLElement>('2');
  });

  it('getAllByAltText should return passed element', () => {
    const b: Array<HTMLButtonElement> = getAllByAltText<HTMLButtonElement>('2');
  });

  it('queryByAltText should return maybe HTML element by default', () => {
    // $ExpectError
    const a: HTMLElement = queryByAltText<HTMLElement>('1');
    const b: ?HTMLElement = queryByAltText<HTMLElement>('2');
  });

  it('queryByAltText should return maybe passed element', () => {
    const b: ?HTMLButtonElement = queryByAltText<HTMLButtonElement>('2');
  });

  it('queryAllByAltText should return array of HTML element by default', () => {
    // $ExpectError
    const a: HTMLElement = queryAllByAltText<HTMLElement>('1');
    const b: Array<HTMLElement> = queryAllByAltText<HTMLElement>('2');
  });

  it('queryAllByAltText should return array of passed element', () => {
    const b: Array<HTMLButtonElement> = queryAllByAltText<HTMLButtonElement>('2');
  });

  it('getByDisplayValue should return HTML element by default', () => {
    const a: HTMLElement = getByDisplayValue<HTMLElement>('1');
  });

  it('getByDisplayValue should return passed element', () => {
    const a: HTMLButtonElement = getByDisplayValue<HTMLButtonElement>('1');
  });

  it('getAllByDisplayValue should return array of HTML element by default', () => {
    // $ExpectError
    const a: HTMLElement = getAllByDisplayValue<HTMLElement>('1');
    const b: Array<HTMLElement> = getAllByDisplayValue<HTMLElement>('2');
  });

  it('getAllByDisplayValue should return array of passed element', () => {
    const b: Array<HTMLButtonElement> = getAllByDisplayValue<HTMLButtonElement>('2');
  });

  it('queryByDisplayValue should return maybe HTML element by default', () => {
    // $ExpectError
    const a: HTMLElement = queryByDisplayValue<HTMLElement>('1');
    const b: ?HTMLElement = queryByDisplayValue<HTMLElement>('2');
  });

  it('queryByDisplayValue should return maybe passed element', () => {
    const b: ?HTMLButtonElement = queryByDisplayValue<HTMLButtonElement>('2');
  });

  it('queryAllByDisplayValue should return array of HTML element by default', () => {
    // $ExpectError
    const a: HTMLElement = queryAllByDisplayValue<HTMLElement>('1');
    const b: Array<HTMLElement> = queryAllByDisplayValue<HTMLElement>('2');
  });

  it('queryAllByDisplayValue should return array of passed element', () => {
    const b: Array<HTMLButtonElement> = queryAllByDisplayValue<HTMLButtonElement>('2');
  });

  it('getByLabelText should return HTML element by default', () => {
    const a: HTMLElement = getByLabelText<HTMLElement>('1');
  });

  it('getByLabelText should return passed element', () => {
    const a: HTMLButtonElement = getByLabelText<HTMLButtonElement>('1');
  });

  it('getAllByLabelText should return array of HTML element by default', () => {
    // $ExpectError
    const a: HTMLElement = getAllByLabelText<HTMLElement>('1');
    const b: Array<HTMLElement> = getAllByLabelText<HTMLElement>('2');
  });

  it('getAllByLabelText should return array of passed element', () => {
    const b: Array<HTMLButtonElement> = getAllByLabelText<HTMLButtonElement>('2');
  });

  it('queryByLabelText should return maybe HTML element by default', () => {
    // $ExpectError
    const a: HTMLElement = queryByLabelText<HTMLElement>('1');
    const b: ?HTMLElement = queryByLabelText<HTMLElement>('2');
  });

  it('queryByLabelText should return maybe passed element', () => {
    const b: ?HTMLButtonElement = queryByLabelText<HTMLButtonElement>('2');
  });

  it('queryAllByLabelText should return array of HTML element by default', () => {
    // $ExpectError
    const a: HTMLElement = queryAllByLabelText<HTMLElement>('1');
    const b: Array<HTMLElement> = queryAllByLabelText<HTMLElement>('2');
  });

  it('queryAllByLabelText should return array of passed element', () => {
    const b: Array<HTMLButtonElement> = queryAllByLabelText<HTMLButtonElement>('2');
  });

  it('getByPlaceholderText should return HTML element by default', () => {
    const a: HTMLElement = getByPlaceholderText<HTMLElement>('1');
  });

  it('getByPlaceholderText should return passed element', () => {
    const a: HTMLButtonElement = getByPlaceholderText<HTMLButtonElement>('1');
  });

  it('getAllByPlaceholderText should return array of HTML element by default', () => {
    // $ExpectError
    const a: HTMLElement = getAllByPlaceholderText<HTMLElement>('1');
    const b: Array<HTMLElement> = getAllByPlaceholderText<HTMLElement>('2');
  });

  it('getAllByPlaceholderText should return array of passed element', () => {
    const b: Array<HTMLButtonElement> = getAllByPlaceholderText<HTMLButtonElement>('2');
  });

  it('queryByPlaceholderText should return maybe HTML element by default', () => {
    // $ExpectError
    const a: HTMLElement = queryByPlaceholderText<HTMLElement>('1');
    const b: ?HTMLElement = queryByPlaceholderText<HTMLElement>('2');
  });

  it('queryByPlaceholderText should return maybe passed element', () => {
    const b: ?HTMLButtonElement = queryByPlaceholderText<HTMLButtonElement>('2');
  });

  it('queryAllByPlaceholderText should return array of HTML element by default', () => {
    // $ExpectError
    const a: HTMLElement = queryAllByPlaceholderText<HTMLElement>('1');
    const b: Array<HTMLElement> = queryAllByPlaceholderText<HTMLElement>('2');
  });

  it('queryAllByPlaceholderText should return array of passed element', () => {
    const b: Array<HTMLButtonElement> = queryAllByPlaceholderText<HTMLButtonElement>('2');
  });

  it('getByRole should return HTML element by default', () => {
    const a: HTMLElement = getByRole<HTMLElement>('1');
  });

  it('getByRole should return passed element', () => {
    const a: HTMLButtonElement = getByRole<HTMLButtonElement>('1');
  });

  it('getAllByRole should return array of HTML element by default', () => {
    // $ExpectError
    const a: HTMLElement = getAllByRole<HTMLElement>('1');
    const b: Array<HTMLElement> = getAllByRole<HTMLElement>('2');
  });

  it('getAllByRole should return array of passed element', () => {
    const b: Array<HTMLButtonElement> = getAllByRole<HTMLButtonElement>('2');
  });

  it('queryByRole should return maybe HTML element by default', () => {
    // $ExpectError
    const a: HTMLElement = queryByRole<HTMLElement>('1');
    const b: ?HTMLElement = queryByRole<HTMLElement>('2');
  });

  it('queryByRole should return maybe passed element', () => {
    const b: ?HTMLButtonElement = queryByRole<HTMLButtonElement>('2');
  });

  it('queryAllByRole should return array of HTML element by default', () => {
    // $ExpectError
    const a: HTMLElement = queryAllByRole<HTMLElement>('1');
    const b: Array<HTMLElement> = queryAllByRole<HTMLElement>('2');
  });

  it('queryAllByRole should return array of passed element', () => {
    const b: Array<HTMLButtonElement> = queryAllByRole<HTMLButtonElement>('2');
  });

  it('getBySelectText should return HTML element by default', () => {
    const a: HTMLElement = getBySelectText<HTMLElement>('1');
  });

  it('getBySelectText should return passed element', () => {
    const a: HTMLButtonElement = getBySelectText<HTMLButtonElement>('1');
  });

  it('getAllBySelectText should return array of HTML element by default', () => {
    // $ExpectError
    const a: HTMLElement = getAllBySelectText<HTMLElement>('1');
    const b: Array<HTMLElement> = getAllBySelectText<HTMLElement>('2');
  });

  it('getAllBySelectText should return array of passed element', () => {
    const b: Array<HTMLButtonElement> = getAllBySelectText<HTMLButtonElement>('2');
  });

  it('queryBySelectText should return maybe HTML element by default', () => {
    // $ExpectError
    const a: HTMLElement = queryBySelectText<HTMLElement>('1');
    const b: ?HTMLElement = queryBySelectText<HTMLElement>('2');
  });

  it('queryBySelectText should return maybe passed element', () => {
    const b: ?HTMLButtonElement = queryBySelectText<HTMLButtonElement>('2');
  });

  it('queryAllBySelectText should return array of HTML element by default', () => {
    // $ExpectError
    const a: HTMLElement = queryAllBySelectText<HTMLElement>('1');
    const b: Array<HTMLElement> = queryAllBySelectText<HTMLElement>('2');
  });

  it('queryAllBySelectText should return array of passed element', () => {
    const b: Array<HTMLButtonElement> = queryAllBySelectText<HTMLButtonElement>('2');
  });

  it('getByTestId should return HTML element by default', () => {
    const a: HTMLElement = getByTestId<HTMLElement>('1');
  });

  it('getByTestId should return passed element', () => {
    const a: HTMLButtonElement = getByTestId<HTMLButtonElement>('1');
  });

  it('getAllByTestId should return array of HTML element by default', () => {
    // $ExpectError
    const a: HTMLElement = getAllByTestId<HTMLElement>('1');
    const b: Array<HTMLElement> = getAllByTestId<HTMLElement>('2');
  });

  it('getAllByTestId should return array of passed element', () => {
    const b: Array<HTMLButtonElement> = getAllByTestId<HTMLButtonElement>('2');
  });

  it('queryByTestId should return maybe HTML element by default', () => {
    // $ExpectError
    const a: HTMLElement = queryByTestId<HTMLElement>('1');
    const b: ?HTMLElement = queryByTestId<HTMLElement>('2');
  });

  it('queryByTestId should return maybe passed element', () => {
    const b: ?HTMLButtonElement = queryByTestId<HTMLButtonElement>('2');
  });

  it('queryAllByTestId should return array of HTML element by default', () => {
    // $ExpectError
    const a: HTMLElement = queryAllByTestId<HTMLElement>('1');
    const b: Array<HTMLElement> = queryAllByTestId<HTMLElement>('2');
  });

  it('queryAllByTestId should return array of passed element', () => {
    const b: Array<HTMLButtonElement> = queryAllByTestId<HTMLButtonElement>('2');
  });

  it('getByText should return HTML element by default', () => {
    const a: HTMLElement = getByText<HTMLElement>('1');
  });

  it('getByText should return passed element', () => {
    const a: HTMLButtonElement = getByText<HTMLButtonElement>('1');
  });

  it('getAllByText should return array of HTML element by default', () => {
    // $ExpectError
    const a: HTMLElement = getAllByText<HTMLElement>('1');
    const b: Array<HTMLElement> = getAllByText<HTMLElement>('2');
  });

  it('getAllByText should return array of passed element', () => {
    const b: Array<HTMLButtonElement> = getAllByText<HTMLButtonElement>('2');
  });

  it('queryByText should return maybe HTML element by default', () => {
    // $ExpectError
    const a: HTMLElement = queryByText<HTMLElement>('1');
    const b: ?HTMLElement = queryByText<HTMLElement>('2');
  });

  it('queryByText should return maybe passed element', () => {
    const b: ?HTMLButtonElement = queryByText<HTMLButtonElement>('2');
  });

  it('queryAllByText should return array of HTML element by default', () => {
    // $ExpectError
    const a: HTMLElement = queryAllByText<HTMLElement>('1');
    const b: Array<HTMLElement> = queryAllByText<HTMLElement>('2');
  });

  it('queryAllByText should return array of passed element', () => {
    const b: Array<HTMLButtonElement> = queryAllByText<HTMLButtonElement>('2');
  });

  it('getByTitle should return HTML element by default', () => {
    const a: HTMLElement = getByTitle<HTMLElement>('1');
  });

  it('getByTitle should return passed element', () => {
    const a: HTMLButtonElement = getByTitle<HTMLButtonElement>('1');
  });

  it('getAllByTitle should return array of HTML element by default', () => {
    // $ExpectError
    const a: HTMLElement = getAllByTitle<HTMLElement>('1');
    const b: Array<HTMLElement> = getAllByTitle<HTMLElement>('2');
  });

  it('getAllByTitle should return array of passed element', () => {
    const b: Array<HTMLButtonElement> = getAllByTitle<HTMLButtonElement>('2');
  });

  it('queryByTitle should return maybe HTML element by default', () => {
    // $ExpectError
    const a: HTMLElement = queryByTitle<HTMLElement>('1');
    const b: ?HTMLElement = queryByTitle<HTMLElement>('2');
  });

  it('queryByTitle should return maybe passed element', () => {
    const b: ?HTMLButtonElement = queryByTitle<HTMLButtonElement>('2');
  });

  it('queryAllByTitle should return array of HTML element by default', () => {
    // $ExpectError
    const a: HTMLElement = queryAllByTitle<HTMLElement>('1');
    const b: Array<HTMLElement> = queryAllByTitle<HTMLElement>('2');
  });

  it('queryAllByTitle should return array of passed element', () => {
    const b: Array<HTMLButtonElement> = queryAllByTitle<HTMLButtonElement>('2');
  });

  it('getByValue should return HTML element by default', () => {
    const a: HTMLElement = getByValue<HTMLElement>('1');
  });

  it('getByValue should return passed element', () => {
    const a: HTMLButtonElement = getByValue<HTMLButtonElement>('1');
  });

  it('getAllByValue should return array of HTML element by default', () => {
    // $ExpectError
    const a: HTMLElement = getAllByValue<HTMLElement>('1');
    const b: Array<HTMLElement> = getAllByValue<HTMLElement>('2');
  });

  it('getAllByValue should return array of passed element', () => {
    const b: Array<HTMLButtonElement> = getAllByValue<HTMLButtonElement>('2');
  });

  it('queryByValue should return maybe HTML element by default', () => {
    // $ExpectError
    const a: HTMLElement = queryByValue<HTMLElement>('1');
    const b: ?HTMLElement = queryByValue<HTMLElement>('2');
  });

  it('queryByValue should return maybe passed element', () => {
    const b: ?HTMLButtonElement = queryByValue<HTMLButtonElement>('2');
  });

  it('queryAllByValue should return array of HTML element by default', () => {
    // $ExpectError
    const a: HTMLElement = queryAllByValue<HTMLElement>('1');
    const b: Array<HTMLElement> = queryAllByValue<HTMLElement>('2');
  });
  it('queryAllByValue should return array of passed element', () => {
    const b: Array<HTMLButtonElement> = queryAllByValue<HTMLButtonElement>('2');
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
    within(container).getByAltText<HTMLElement>('1');
  });

  it('should have getAllByAltText', () => {
    within(container).getAllByAltText<HTMLElement>('1');
  });

  it('should have queryByAltText', () => {
    within(container).queryByAltText<HTMLElement>('1');
  });

  it('should have queryAllByAltText', () => {
    within(container).queryAllByAltText<HTMLElement>('1');
  });

  it('should have getByDisplayValue', () => {
    within(container).getByDisplayValue<HTMLElement>('1');
  });

  it('should have getAllByDisplayValue', () => {
    within(container).getAllByDisplayValue<HTMLElement>('1');
  });

  it('should have queryByDisplayValue', () => {
    within(container).queryByDisplayValue<HTMLElement>('1');
  });

  it('should have queryAllByDisplayValue', () => {
    within(container).queryAllByDisplayValue<HTMLElement>('1');
  });

  it('should have getByLabelText', () => {
    within(container).getByLabelText<HTMLElement>('1');
  });

  it('should have getAllByLabelText', () => {
    within(container).getAllByLabelText<HTMLElement>('1');
  });

  it('should have queryByLabelText', () => {
    within(container).queryByLabelText<HTMLElement>('1');
  });

  it('should have queryAllByLabelText', () => {
    within(container).queryAllByLabelText<HTMLElement>('1');
  });

  it('should have getByPlaceholderText', () => {
    within(container).getByPlaceholderText<HTMLElement>('1');
  });

  it('should have getAllByPlaceholderText', () => {
    within(container).getAllByPlaceholderText<HTMLElement>('1');
  });

  it('should have queryByPlaceholderText', () => {
    within(container).queryByPlaceholderText<HTMLElement>('1');
  });

  it('should have queryAllByPlaceholderText', () => {
    within(container).queryAllByPlaceholderText<HTMLElement>('1');
  });

  it('should have getByRole', () => {
    within(container).getByRole<HTMLElement>('1');
  });

  it('should have getAllByRole', () => {
    within(container).getAllByRole<HTMLElement>('1');
  });

  it('should have queryByRole', () => {
    within(container).queryByRole<HTMLElement>('1');
  });

  it('should have queryAllByRole', () => {
    within(container).queryAllByRole<HTMLElement>('1');
  });

  it('should have getBySelectText', () => {
    within(container).getBySelectText<HTMLElement>('1');
  });

  it('should have getAllBySelectText', () => {
    within(container).getAllBySelectText<HTMLElement>('1');
  });

  it('should have queryBySelectText', () => {
    within(container).queryBySelectText<HTMLElement>('1');
  });

  it('should have queryAllBySelectText', () => {
    within(container).queryAllBySelectText<HTMLElement>('1');
  });

  it('should have getByTestId', () => {
    within(container).getByTestId<HTMLElement>('1');
  });

  it('should have getAllByTestId', () => {
    within(container).getAllByTestId<HTMLElement>('1');
  });

  it('should have queryByTestId', () => {
    within(container).queryByTestId<HTMLElement>('1');
  });

  it('should have queryAllByTestId', () => {
    within(container).queryAllByTestId<HTMLElement>('1');
  });

  it('should have getByText', () => {
    within(container).getByText<HTMLElement>('1');
  });

  it('should have getAllByText', () => {
    within(container).getAllByText<HTMLElement>('1');
  });

  it('should have queryByText', () => {
    within(container).queryByText<HTMLElement>('1');
  });

  it('should have queryAllByText', () => {
    within(container).queryAllByText<HTMLElement>('1');
  });

  it('should have getByTitle', () => {
    within(container).getByTitle<HTMLElement>('1');
  });

  it('should have getAllByTitle', () => {
    within(container).getAllByTitle<HTMLElement>('1');
  });

  it('should have queryByTitle', () => {
    within(container).queryByTitle<HTMLElement>('1');
  });

  it('should have queryAllByTitle', () => {
    within(container).queryAllByTitle<HTMLElement>('1');
  });

  it('should have getByValue', () => {
    within(container).getByValue<HTMLElement>('1');
  });

  it('should have getAllByValue', () => {
    within(container).getAllByValue<HTMLElement>('1');
  });

  it('should have queryByValue', () => {
    within(container).queryByValue<HTMLElement>('1');
  });

  it('should have queryAllByValue', () => {
    within(container).queryAllByValue<HTMLElement>('1');
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
    getByAltText<HTMLElement>('1');
    getByAltText<HTMLElement>('1', { trim: true, collapseWhitespace: true, exact: true });
    getByAltText<HTMLElement>(/1/);
    getByAltText<HTMLElement>(/1/, { trim: true, collapseWhitespace: true, exact: true });
    getByAltText<HTMLElement>((content: string, element) => true);
    getByAltText<HTMLElement>((content: string, element) => true, {
      trim: true,
      collapseWhitespace: true,
      exact: true,
    });
  });

  it('getAllByAltText should accept text match arguments', () => {
    const result: Array<HTMLElement> = getAllByAltText<HTMLElement>('1');
  });

  it('queryByAltText should accept text match arguments', () => {
    queryByAltText<HTMLElement>('1');
    queryByAltText<HTMLElement>('1', { trim: true, collapseWhitespace: true, exact: true });
    queryByAltText<HTMLElement>(/1/);
    queryByAltText<HTMLElement>(/1/, { trim: true, collapseWhitespace: true, exact: true });
    queryByAltText<HTMLElement>((content: string, element) => true);
    queryByAltText<HTMLElement>((content: string, element) => true, {
      trim: true,
      collapseWhitespace: true,
      exact: true,
    });
  });

  it('queryAllByAltText should accept text match arguments', () => {
    const result: Array<HTMLElement> = queryAllByAltText<HTMLElement>('1');
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
    queryByDisplayValue<HTMLElement>('1');
    queryByDisplayValue<HTMLElement>('1', {
      trim: true,
      collapseWhitespace: true,
      exact: true,
    });
    queryByDisplayValue<HTMLElement>(/1/);
    queryByDisplayValue<HTMLElement>(/1/, {
      trim: true,
      collapseWhitespace: true,
      exact: true,
    });
    queryByDisplayValue<HTMLElement>((content: string, element) => true);
    queryByDisplayValue<HTMLElement>((content: string, element) => true, {
      trim: true,
      collapseWhitespace: true,
      exact: true,
    });
  });

  it('queryAllByDisplayValue should accept text match arguments', () => {
    const result: Array<HTMLElement> = queryAllByDisplayValue<HTMLElement>('1');
  });

  it('getByLabelText should accept text match arguments', () => {
    getByLabelText<HTMLElement>('1');
    getByLabelText<HTMLElement>('1', { trim: true, collapseWhitespace: true, exact: true });
    getByLabelText<HTMLElement>(/1/);
    getByLabelText<HTMLElement>(/1/, { trim: true, collapseWhitespace: true, exact: true });
    getByLabelText<HTMLElement>((content: string, element) => true);
    getByLabelText<HTMLElement>((content: string, element) => true, {
      trim: true,
      collapseWhitespace: true,
      exact: true,
      selector: 'A',
    });
  });

  it('getAllByLabelText should accept text match arguments', () => {
    const result: Array<HTMLElement> = getAllByLabelText<HTMLElement>('1');
  });

  it('queryByLabelText should accept text match arguments', () => {
    queryByLabelText<HTMLElement>('1');
    queryByLabelText<HTMLElement>('1', {
      trim: true,
      collapseWhitespace: true,
      exact: true,
    });
    queryByLabelText<HTMLElement>(/1/);
    queryByLabelText<HTMLElement>(/1/, {
      trim: true,
      collapseWhitespace: true,
      exact: true,
      selector: 'A',
    });
    queryByLabelText<HTMLElement>((content: string, element) => true);
    queryByLabelText<HTMLElement>((content: string, element) => true, {
      trim: true,
      collapseWhitespace: true,
      exact: true,
      selector: 'A',
    });
  });

  it('queryAllByLabelText should accept text match arguments', () => {
    const result: Array<HTMLElement> = queryAllByLabelText<HTMLElement>('1');
  });

  it('getByPlaceholderText should accept text match arguments', () => {
    getByPlaceholderText<HTMLElement>('1');
    getByPlaceholderText<HTMLElement>('1', {
      trim: true,
      collapseWhitespace: true,
      exact: true,
    });
    getByPlaceholderText<HTMLElement>(/1/);
    getByPlaceholderText<HTMLElement>(/1/, {
      trim: true,
      collapseWhitespace: true,
      exact: true,
    });
    getByPlaceholderText<HTMLElement>((content: string, element) => true);
    getByPlaceholderText<HTMLElement>((content: string, element) => true, {
      trim: true,
      collapseWhitespace: true,
      exact: true,
    });
  });

  it('getAllByPlaceholderText should accept text match arguments', () => {
    const result: Array<HTMLElement> = getAllByPlaceholderText<HTMLElement>('1');
  });

  it('queryByPlaceholderText should accept text match arguments', () => {
    queryByPlaceholderText<HTMLElement>('1');
    queryByPlaceholderText<HTMLElement>('1', {
      trim: true,
      collapseWhitespace: true,
      exact: true,
    });
    queryByPlaceholderText<HTMLElement>(/1/);
    queryByPlaceholderText<HTMLElement>(/1/, {
      trim: true,
      collapseWhitespace: true,
      exact: true,
    });
    queryByPlaceholderText<HTMLElement>((content: string, element) => true);
    queryByPlaceholderText<HTMLElement>((content: string, element) => true, {
      trim: true,
      collapseWhitespace: true,
      exact: true,
    });
  });

  it('queryAllByPlaceholderText should accept text match arguments', () => {
    const result: Array<HTMLElement> = queryAllByPlaceholderText<HTMLElement>('1');
  });

  it('getByRole should accept text match arguments', () => {
    getByRole<HTMLElement>('1');
    getByRole<HTMLElement>('1', { trim: true, collapseWhitespace: true, exact: true });
    getByRole<HTMLElement>(/1/);
    getByRole<HTMLElement>(/1/, { trim: true, collapseWhitespace: true, exact: true });
    getByRole<HTMLElement>((content: string, element) => true);
    getByRole<HTMLElement>((content: string, element) => true, {
      trim: true,
      collapseWhitespace: true,
      exact: true,
    });
  });

  it('getAllByRole should accept text match arguments', () => {
    const result: Array<HTMLElement> = getAllByRole<HTMLElement>('1');
  });

  it('queryByRole should accept text match arguments', () => {
    queryByRole<HTMLElement>('1');
    queryByRole<HTMLElement>('1', { trim: true, collapseWhitespace: true, exact: true });
    queryByRole<HTMLElement>(/1/);
    queryByRole<HTMLElement>(/1/, { trim: true, collapseWhitespace: true, exact: true });
    queryByRole<HTMLElement>((content: string, element) => true);
    queryByRole<HTMLElement>((content: string, element) => true, {
      trim: true,
      collapseWhitespace: true,
      exact: true,
    });
  });

  it('queryAllByRole should accept text match arguments', () => {
    const result: Array<HTMLElement> = queryAllByRole<HTMLElement>('1');
  });

  it('getBySelectText should accept text match arguments', () => {
    getBySelectText<HTMLElement>('1');
    getBySelectText<HTMLElement>('1', { trim: true, collapseWhitespace: true, exact: true });
    getBySelectText<HTMLElement>(/1/);
    getBySelectText<HTMLElement>(/1/, { trim: true, collapseWhitespace: true, exact: true });
    getBySelectText<HTMLElement>((content: string, element) => true);
    getBySelectText<HTMLElement>((content: string, element) => true, {
      trim: true,
      collapseWhitespace: true,
      exact: true,
    });
  });

  it('getAllBySelectText should accept text match arguments', () => {
    const result: Array<HTMLElement> = getAllBySelectText<HTMLElement>('1');
  });

  it('queryBySelectText should accept text match arguments', () => {
    queryBySelectText<HTMLElement>('1');
    queryBySelectText<HTMLElement>('1', {
      trim: true,
      collapseWhitespace: true,
      exact: true,
    });
    queryBySelectText<HTMLElement>(/1/);
    queryBySelectText<HTMLElement>(/1/, {
      trim: true,
      collapseWhitespace: true,
      exact: true,
    });
    queryBySelectText<HTMLElement>((content: string, element) => true);
    queryBySelectText<HTMLElement>((content: string, element) => true, {
      trim: true,
      collapseWhitespace: true,
      exact: true,
    });
  });

  it('queryAllBySelectText should accept text match arguments', () => {
    const result: Array<HTMLElement> = queryAllBySelectText<HTMLElement>('1');
  });

  it('getByTestId should accept text match arguments', () => {
    getByTestId<HTMLElement>('1');
    getByTestId<HTMLElement>('1', { trim: true, collapseWhitespace: true, exact: true });
    getByTestId<HTMLElement>(/1/);
    getByTestId<HTMLElement>(/1/, { trim: true, collapseWhitespace: true, exact: true });
    getByTestId<HTMLElement>((content: string, element) => true);
    getByTestId<HTMLElement>((content: string, element) => true, {
      trim: true,
      collapseWhitespace: true,
      exact: true,
    });
  });

  it('getAllByTestId should accept text match arguments', () => {
    const result: Array<HTMLElement> = getAllByTestId<HTMLElement>('1');
  });

  it('queryByTestId should accept text match arguments', () => {
    queryByTestId<HTMLElement>('1');
    queryByTestId<HTMLElement>('1', { trim: true, collapseWhitespace: true, exact: true });
    queryByTestId<HTMLElement>(/1/);
    queryByTestId<HTMLElement>(/1/, { trim: true, collapseWhitespace: true, exact: true });
    queryByTestId<HTMLElement>((content: string, element) => true);
    queryByTestId<HTMLElement>((content: string, element) => true, {
      trim: true,
      collapseWhitespace: true,
      exact: true,
    });
  });

  it('queryAllByTestId should accept text match arguments', () => {
    const result: Array<HTMLElement> = queryAllByTestId<HTMLElement>('1');
  });

  it('getByText should accept text match arguments', () => {
    getByText<HTMLElement>('1');
    getByText<HTMLElement>('1', { trim: true, collapseWhitespace: true, exact: true });
    getByText<HTMLElement>(/1/);
    getByText<HTMLElement>(/1/, { trim: true, collapseWhitespace: true, exact: true });
    getByText<HTMLElement>((content: string, element) => true);
    getByText<HTMLElement>((content: string, element) => true, {
      trim: true,
      collapseWhitespace: true,
      exact: true,
      selector: 'A',
    });
  });

  it('getAllByText should accept text match arguments', () => {
    const result: Array<HTMLElement> = getAllByText<HTMLElement>('1');
  });

  it('queryByText should accept text match arguments', () => {
    queryByText<HTMLElement>('1');
    queryByText<HTMLElement>('1', { trim: true, collapseWhitespace: true, exact: true });
    queryByText<HTMLElement>(/1/);
    queryByText<HTMLElement>(/1/, { trim: true, collapseWhitespace: true, exact: true });
    queryByText<HTMLElement>((content: string, element) => true);
    queryByText<HTMLElement>((content: string, element) => true, {
      trim: true,
      collapseWhitespace: true,
      exact: true,
      selector: 'A',
    });
  });

  it('queryAllByText should accept text match arguments', () => {
    const result: Array<HTMLElement> = queryAllByText<HTMLElement>('1');
  });

  it('getByTitle should accept text match arguments', () => {
    getByTitle<HTMLElement>('1');
    getByTitle<HTMLElement>('1', { trim: true, collapseWhitespace: true, exact: true });
    getByTitle<HTMLElement>(/1/);
    getByTitle<HTMLElement>(/1/, { trim: true, collapseWhitespace: true, exact: true });
    getByTitle<HTMLElement>((content: string, element) => true);
    getByTitle<HTMLElement>((content: string, element) => true, {
      trim: true,
      collapseWhitespace: true,
      exact: true,
    });
  });

  it('getAllByTitle should accept text match arguments', () => {
    const result: Array<HTMLElement> = getAllByTitle<HTMLElement>('1');
  });

    queryByTitle<HTMLElement>('1');
    queryByTitle<HTMLElement>('1', { trim: true, collapseWhitespace: true, exact: true });
    queryByTitle<HTMLElement>(/1/);
    queryByTitle<HTMLElement>(/1/, { trim: true, collapseWhitespace: true, exact: true });
  it('queryByTitle should accept text match arguments', () => {
    queryByTitle<HTMLElement>((content: string, element) => true);
    queryByTitle<HTMLElement>((content: string, element) => true, {
      trim: true,
      collapseWhitespace: true,
      exact: true,
    });
  });

  it('queryAllByTitle should accept text match arguments', () => {
    const result: Array<HTMLElement> = queryAllByTitle<HTMLElement>('1');
  });

  it('getByValue should accept text match arguments', () => {
    getByValue<HTMLElement>('1');
    getByValue<HTMLElement>('1', { trim: true, collapseWhitespace: true, exact: true });
    getByValue<HTMLElement>(/1/);
    getByValue<HTMLElement>(/1/, { trim: true, collapseWhitespace: true, exact: true });
    getByValue<HTMLElement>((content: string, element) => true);
    getByValue<HTMLElement>((content: string, element) => true, {
      trim: true,
      collapseWhitespace: true,
      exact: true,
    });
  });

  it('getAllByValue should accept text match arguments', () => {
    const result: Array<HTMLElement> = getAllByValue<HTMLElement>('1');
  });

  it('queryByValue should accept text match arguments', () => {
    queryByValue<HTMLElement>('1');
    queryByValue<HTMLElement>('1', { trim: true, collapseWhitespace: true, exact: true });
    queryByValue<HTMLElement>(/1/);
    queryByValue<HTMLElement>(/1/, { trim: true, collapseWhitespace: true, exact: true });
    queryByValue<HTMLElement>((content: string, element) => true);
    queryByValue<HTMLElement>((content: string, element) => true, {
      trim: true,
      collapseWhitespace: true,
      exact: true,
    });
  });

  it('queryAllByValue should accept text match arguments', () => {
    const result: Array<HTMLElement> = queryAllByValue<HTMLElement>('1');
  });
});
