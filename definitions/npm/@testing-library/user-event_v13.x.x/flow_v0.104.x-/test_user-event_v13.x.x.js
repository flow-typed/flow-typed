// @flow

import { describe, it } from 'flow-typed-test';
import userEvent from '@testing-library/user-event';

// Mock @testing-lib/react
declare function getByTestId(string): HTMLElement;
declare function getByText(string): HTMLElement;
declare function getByRole(string): HTMLElement;
declare function getByLabelText(string): HTMLElement;
declare function getByTestId(string): HTMLElement;
declare function queryByText(string): ?HTMLElement;
declare function queryByRole(string): HTMLElement | null;

describe('click', () => {
  const label = getByText('');

  it('should validate on default usage', () => {
    userEvent.click(label);
  });
  it('should validate on extra params', () => {
    userEvent.click(label, { ctrlKey: true, shiftKey: true });
    userEvent.click(label, {}, { skipHover: true, clickCount: 3 });
  });
  it('should error on invalid params', () => {
    // $FlowExpectedError[incompatible-call]
    userEvent.click(queryByText(''));
    // $FlowExpectedError[prop-missing]
    userEvent.click(label, {}, { fail: true });
  });
});

describe('dblClick', () => {
  const checkbox = getByTestId('');

  it('should validate on default usage', () => {
    userEvent.dblClick(checkbox);
  });
  it('should validate on extra params', () => {
    userEvent.dblClick(checkbox, { ctrlKey: true, shiftKey: true });
    userEvent.dblClick(checkbox, {}, { skipHover: true, clickCount: 3 });
  });
  it('should error on invalid params', () => {
    // $FlowExpectedError[incompatible-call]
    userEvent.dblClick(queryByText(''));
    // $FlowExpectedError[prop-missing]
    userEvent.dblClick(checkbox, {}, { fail: true });
  });
});

describe('type', () => {
  const input = getByRole('');

  it('should validate on default usage', () => {
    userEvent.type(input, '');
  });
  it('should validate on extra params', () => {
    userEvent.type(input, '', { skipClick: true });
  });
  it('should validate on extra params being delay', () => {
    userEvent.type(input, '', { delay: 123 }).then(() => {});
  });
  it('should error on invalid promise', () => {
    // $FlowExpectedError[incompatible-use]
    userEvent.type(input, '').then(() => {});
  });
  it('should error on invalid params', () => {
    // $FlowExpectedError[incompatible-call]
    userEvent.type(queryByText(''), '');
    // $FlowExpectedError[incompatible-call]
    userEvent.type(input, { skipClick: true });
    // $FlowExpectedError[incompatible-call]
    userEvent.type(input, '', { fail: true });
  });
});

describe('keyboard', () => {
  it('should validate on default usage', () => {
    userEvent.keyboard('');
  });
  it('should validate on extra params', () => {
    userEvent.keyboard('', { autoModify: false });
  });
  it('should validate on extra params being delay', () => {
    userEvent.keyboard('', { delay: 123 }).then(() => {});
  });
  it('should validate returned keyboard state', () => {
    // Basic check for shape of state
    const {
      pressed,
      modifiers: { alt, caps, ctrl, meta, shift },
      activeElement,
      carryValue,
      carryChar,
    } = userEvent.keyboard('');
  });
  it('should error on invalid promise', () => {
    // $FlowExpectedError[prop-missing]
    userEvent.keyboard('').then(() => {});
  });
  it('should error on invalid params', () => {
    // $FlowExpectedError[incompatible-call]
    userEvent.keyboard(queryByText(''), '');
    // $FlowExpectedError[incompatible-call]
    userEvent.keyboard('', { fail: true });
  });
});

describe('upload', () => {
  const input = getByLabelText('');
  const file = new File([''], '', { type: 'image/png' });
  const files = [
    new File([''], '', { type: 'image/png' }),
    new File([''], '', { type: 'image/png' }),
  ];

  it('should validate on default usage', () => {
    userEvent.upload(input, file);
    userEvent.upload(input, files);
  });
  it('should validate on extra params', () => {
    userEvent.upload(input, file, { clickInit: { ctrlKey: true } });
  });
  it('should error on invalid params', () => {
    // $FlowExpectedError[incompatible-call]
    userEvent.upload(queryByText(''), file);
    // $FlowExpectedError[incompatible-call]
    userEvent.upload(input, '');
    // $FlowExpectedError[prop-missing]
    userEvent.upload(input, file, { fail: true });
  });
});

describe('clear', () => {
  it('should validate on default usage', () => {
    userEvent.clear(getByRole(''));
  });
  it('should error on invalid params', () => {
    // $FlowExpectedError[incompatible-call]
    userEvent.clear(queryByRole(''));
  });
});

describe('selectOptions', () => {
  const select = getByTestId('');

  it('should validate on default usage', () => {
    userEvent.selectOptions(
      select,
      ([getByText(''), getByText('')]: HTMLElement[])
    );
  });
  it('should validate on extra params', () => {
    userEvent.selectOptions(select, (['1', '3']: string[]), { ctrlKey: true });
  });
  it('should error on invalid params', () => {
    // $FlowExpectedError[incompatible-call]
    userEvent.selectOptions(queryByText(''), (['1', '3']: string[]));
    // $FlowExpectedError[incompatible-call]
    userEvent.selectOptions(select, {});
    userEvent.selectOptions(
      select,
      // $FlowExpectedError[incompatible-call]
      ([queryByText(''), queryByText('')]: Array<?HTMLElement>)
    );
    // $FlowExpectedError[incompatible-call]
    userEvent.selectOptions(select, (['1', '3']: string[]), true);
  });
});

describe('deselectOptions', () => {
  const select = getByTestId('');

  it('should validate on default usage', () => {
    userEvent.deselectOptions(
      select,
      ([getByText(''), getByText('')]: HTMLElement[])
    );
  });
  it('should validate on extra params', () => {
    userEvent.deselectOptions(select, (['1', '3']: string[]), {
      ctrlKey: true,
    });
  });
  it('should error on invalid params', () => {
    // $FlowExpectedError[incompatible-call]
    userEvent.deselectOptions(queryByText(''), (['1', '3']: string[]));
    // $FlowExpectedError[incompatible-call]
    userEvent.deselectOptions(select, {});
    userEvent.deselectOptions(
      select,
      // $FlowExpectedError[incompatible-call]
      ([queryByText(''), queryByText('')]: Array<?HTMLElement>)
    );
    // $FlowExpectedError[incompatible-call]
    userEvent.deselectOptions(select, (['1', '3']: string[]), true);
  });
});

describe('tab', () => {
  it('should validate on default usage', () => {
    userEvent.tab();
  });
  it('should validate on extra params', () => {
    userEvent.tab({ shift: true });
    userEvent.tab({ focusTrap: document });
  });
  it('should error on invalid params', () => {
    // $FlowExpectedError[incompatible-exact]
    userEvent.tab(getByText(''));
    // $FlowExpectedError[prop-missing]
    userEvent.tab({ fail: true });
  });
});

describe('hover', () => {
  const button = getByRole('');

  it('should validate on default usage', () => {
    userEvent.hover(button);
  });
  it('should validate on extra params', () => {
    userEvent.hover(button, { ctrlKey: true });
  });
  it('should error on invalid params', () => {
    // $FlowExpectedError[incompatible-call]
    userEvent.hover(queryByText(''));
    // $FlowExpectedError[incompatible-call]
    userEvent.hover(button, true);
  });
});

describe('unhover', () => {
  const button = getByRole('');

  it('should validate on default usage', () => {
    userEvent.unhover(button);
  });
  it('should validate on extra params', () => {
    userEvent.unhover(button, { ctrlKey: true });
  });
  it('should error on invalid params', () => {
    // $FlowExpectedError[incompatible-call]
    userEvent.unhover(queryByText(''));
    // $FlowExpectedError[incompatible-call]
    userEvent.unhover(button, true);
  });
});

describe('paste', () => {
  const textbox = getByRole('');

  it('should validate on default usage', () => {
    userEvent.paste(textbox, '');
  });
  it('should validate on extra params', () => {
    userEvent.paste(textbox, '', { ctrlKey: true });
    userEvent.paste(textbox, '', {}, { initialSelectionStart: 123 });
  });
  it('should error on invalid params', () => {
    // $FlowExpectedError[incompatible-call]
    userEvent.paste(queryByRole(''), '');
    // $FlowExpectedError[incompatible-call]
    userEvent.paste(textbox, {});
    // $FlowExpectedError[prop-missing]
    userEvent.paste(textbox, '', {}, { fail: true });
  });
});
