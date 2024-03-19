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

describe('setup', () => {
  it('should validate on default usage', () => {
    const user = userEvent.setup();
  });
  it('should validate on extra params', () => {
    const user = userEvent.setup({ delay: null });
  });
  it('should error on invalid params', () => {
    let user;
    // $FlowExpectedError[incompatible-call]
    // $FlowExpectedError[incompatible-exact]
    user = userEvent.setup(queryByText(''));
    // $FlowExpectedError[prop-missing]
    user = userEvent.setup({ fail: true });
  });
});

describe('clear', () => {
  const user = userEvent.setup();

  it('should validate on default usage', async () => {
    await user.clear(getByRole(''));
  });
  it('should error on invalid params', async () => {
    // $FlowExpectedError[incompatible-call]
    await user.clear(queryByRole(''));
  });
});

describe('click', () => {
  const user = userEvent.setup();
  const label = getByText('');

  it('should validate on default usage', async () => {
    await user.click(label);
  });
  it('should validate on extra params', async () => {
    await user.click(label, { delay: 500 });
    await user.click(label, { skipHover: true });
  });
  it('should error on invalid params', async () => {
    // $FlowExpectedError[incompatible-call]
    await user.click(queryByText(''));
    // $FlowExpectedError[prop-missing]
    await user.click(label, { fail: true });
  });
});

describe('copy', () => {
  const user = userEvent.setup();

  it('should validate on default usage', async () => {
    await user.copy();
  });
  it('should validate on extra params', async () => {
    await user.copy({ delay: 500 });
    await user.copy({ writeToClipboard: false });
  });
  it('should error on invalid params', async () => {
    // $FlowExpectedError[incompatible-call]
    // $FlowExpectedError[incompatible-exact]
    await user.copy(queryByText(''));
    // $FlowExpectedError[prop-missing]
    await user.copy({ fail: true });
  });
  it('should return a DataTransfer object', async () => {
    const dt = user.copy();
    dt?.getData('text');
  });
});

describe('cut', () => {
  const user = userEvent.setup();

  it('should validate on default usage', async () => {
    await user.cut();
  });
  it('should validate on extra params', async () => {
    await user.cut({ delay: 500 });
    await user.cut({ writeToClipboard: false });
  });
  it('should error on invalid params', async () => {
    // $FlowExpectedError[incompatible-call]
    // $FlowExpectedError[incompatible-exact]
    await user.cut(queryByText(''));
    // $FlowExpectedError[prop-missing]
    await user.cut({ fail: true });
  });
  it('should return a DataTransfer object', async () => {
    const dt = user.cut();
    dt?.getData('text');
  });
});

describe('dblClick', () => {
  const user = userEvent.setup();
  const checkbox = getByTestId('');

  it('should validate on default usage', async () => {
    await user.dblClick(checkbox);
  });
  it('should validate on extra params', async () => {
    await user.dblClick(checkbox, { ctrlKey: true, shiftKey: true });
    await user.dblClick(checkbox, { skipHover: true, clickCount: 3 });
  });
  it('should error on invalid params', async () => {
    // $FlowExpectedError[incompatible-call]
    // $FlowExpectedError[incompatible-exact]
    await user.dblClick(queryByText(''));
    // $FlowExpectedError[prop-missing]
    await user.dblClick(checkbox, { fail: true });
  });
});

describe('deselectOptions', () => {
  const user = userEvent.setup();
  const select = getByTestId('');

  it('should validate on default usage', async () => {
    await user.deselectOptions(
      select,
      ([getByText(''), getByText('')]: HTMLElement[])
    );
  });
  it('should validate on extra params', async () => {
    await user.deselectOptions(select, (['1', '3']: string[]), {
      ctrlKey: true,
    });
  });
  it('should error on invalid params', async () => {
    // $FlowExpectedError[incompatible-call]
    await user.deselectOptions(queryByText(''), (['1', '3']: string[]));
    // $FlowExpectedError[incompatible-call]
    await user.deselectOptions(select, {});
    await user.deselectOptions(
      select,
      // $FlowExpectedError[incompatible-call]
      ([queryByText(''), queryByText('')]: Array<?HTMLElement>)
    );
    // $FlowExpectedError[incompatible-call]
    await user.deselectOptions(select, (['1', '3']: string[]), true);
  });
});

describe('hover', () => {
  const user = userEvent.setup();
  const button = getByRole('');

  it('should validate on default usage', async () => {
    await user.hover(button);
  });
  it('should validate on extra params', async () => {
    await user.hover(button, { ctrlKey: true });
  });
  it('should error on invalid params', async () => {
    // $FlowExpectedError[incompatible-call]
    await user.hover(queryByText(''));
    // $FlowExpectedError[incompatible-call]
    await user.hover(button, true);
  });
});

describe('keyboard', () => {
  const user = userEvent.setup();

  it('should validate on default usage', async () => {
    await user.keyboard('');
  });
  it('should validate on extra params', async () => {
    await user.keyboard('', { autoModify: false });
  });
  it('should validate on extra params being delay', async () => {
    await user.keyboard('', { delay: 123 }).then(() => {});
  });
  it('should validate returned keyboard state', async () => {
    // Basic check for shape of state
    const {
      pressed,
      modifiers: { alt, caps, ctrl, meta, shift },
      activeElement,
      carryValue,
      carryChar,
    } = await user.keyboard('');
  });
  it('should error on invalid promise', async () => {
    // $FlowExpectedError[prop-missing]
    await user.keyboard('').then(() => {});
  });
  it('should error on invalid params', async () => {
    // $FlowExpectedError[incompatible-call]
    await user.keyboard(queryByText(''), '');
    // $FlowExpectedError[incompatible-call]
    await user.keyboard('', { fail: true });
  });
});

describe('pointer', () => {
  const user = userEvent.setup();

  it('should validate on default usage', async () => {});
  it('should validate on extra params', async () => {});
  it('should error on invalid params', async () => {});
});

describe('paste', () => {
  const user = userEvent.setup();

  it('should validate on default usage', async () => {
    await user.paste();
  });
  it('should validate on extra params', async () => {
    await user.paste({ clipboardData: '' }, { delay: 500 });
  });
  it('should error on invalid params', async () => {
    // $FlowExpectedError[incompatible-call]
    await user.paste(queryByText(''));
    // $FlowExpectedError[prop-missing]
    await user.paste({ fail: true });
  });
});

describe('selectOptions', () => {
  const user = userEvent.setup();
  const select = getByTestId('');

  it('should validate on default usage', async () => {
    await user.selectOptions(
      select,
      ([getByText(''), getByText('')]: HTMLElement[])
    );
  });
  it('should validate on extra params', async () => {
    await user.selectOptions(select, (['1', '3']: string[]), { ctrlKey: true });
  });
  it('should error on invalid params', async () => {
    // $FlowExpectedError[incompatible-call]
    await user.selectOptions(queryByText(''), (['1', '3']: string[]));
    // $FlowExpectedError[incompatible-call]
    await user.selectOptions(select, {});
    await user.selectOptions(
      select,
      // $FlowExpectedError[incompatible-call]
      ([queryByText(''), queryByText('')]: Array<?HTMLElement>)
    );
    // $FlowExpectedError[incompatible-call]
    await user.selectOptions(select, (['1', '3']: string[]), true);
  });
});

describe('tripleClick', () => {
  const user = userEvent.setup();

  it('should validate on default usage', async () => {});
  it('should validate on extra params', async () => {});
  it('should error on invalid params', async () => {});
});

describe('type', () => {
  const user = userEvent.setup();
  const input = getByRole('');

  it('should validate on default usage', async () => {
    await user.type(input, '');
  });
  it('should validate on extra params', async () => {
    await user.type(input, '', { skipClick: true });
  });
  it('should validate on extra params being delay', async () => {
    await user.type(input, '', { delay: 123 }).then(() => {});
  });
  it('should error on invalid promise', async () => {
    // $FlowExpectedError[incompatible-use]
    await user.type(input, '').then(() => {});
  });
  it('should error on invalid params', async () => {
    // $FlowExpectedError[incompatible-call]
    await user.type(queryByText(''), '');
    // $FlowExpectedError[incompatible-call]
    await user.type(input, { skipClick: true });
    // $FlowExpectedError[incompatible-call]
    await user.type(input, '', { fail: true });
  });
});

describe('unhover', () => {
  const user = userEvent.setup();
  const button = getByRole('');

  it('should validate on default usage', async () => {
    await user.unhover(button);
  });
  it('should validate on extra params', async () => {
    await user.unhover(button, { ctrlKey: true });
  });
  it('should error on invalid params', async () => {
    // $FlowExpectedError[incompatible-call]
    await user.unhover(queryByText(''));
    // $FlowExpectedError[incompatible-call]
    await user.unhover(button, true);
  });
});

describe('upload', () => {
  const user = userEvent.setup();
  const input = getByLabelText('');
  const file = new File([''], '', { type: 'image/png' });
  const files = [
    new File([''], '', { type: 'image/png' }),
    new File([''], '', { type: 'image/png' }),
  ];

  it('should validate on default usage', async () => {
    await user.upload(input, file);
    await user.upload(input, files);
  });
  it('should validate on extra params', async () => {
    await user.upload(input, file, { clickInit: { ctrlKey: true } });
  });
  it('should error on invalid params', async () => {
    // $FlowExpectedError[incompatible-call]
    await user.upload(queryByText(''), file);
    // $FlowExpectedError[incompatible-call]
    await user.upload(input, '');
    // $FlowExpectedError[prop-missing]
    await user.upload(input, file, { fail: true });
  });
});

describe('tab', () => {
  const user = userEvent.setup();

  it('should validate on default usage', async () => {
    await user.tab();
  });
  it('should validate on extra params', async () => {
    await user.tab({ shift: true });
    await user.tab({ focusTrap: document });
  });
  it('should error on invalid params', async () => {
    // $FlowExpectedError[incompatible-exact]
    await user.tab(getByText(''));
    // $FlowExpectedError[prop-missing]
    await user.tab({ fail: true });
  });
});
