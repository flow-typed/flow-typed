// @flow
import { describe, it } from 'flow-typed-test';

const Table = require('cli-table');

describe('cli-table', () => {
  it('instantiate', () => {
    const table = new Table({
      head: ['TH 1 label', 'TH 2 label'],
      colWidths: [100, 200],
    });
    new Table({
      rows: [
        ['foo', '7 minutes ago'],
        ['bar', '8 minutes ago'],
      ],
    });
    new Table()

    // $FlowExpectedError[incompatible-call]
    new Table('test');
    // $FlowExpectedError[prop-missing]
    new Table({ foo: 'bar' });
  });

  it('can use array functions', () => {
    const table = new Table();

    table.push(
      ['First value', 'Second value'],
      ['First value', 'Second value'],
    );
    table.push(
      { 'Some key': 'Some value' },
      { 'Another key': 'Another value' },
    );
    table.push(
      { 'Left Header 1': ['Value Row 1 Col 1', 'Value Row 1 Col 2'] },
      { 'Left Header 2': ['Value Row 2 Col 1', 'Value Row 2 Col 2'] },
    );
    table.unshift();
    // $FlowExpectedError[incompatible-call]
    table.splice();
  });

  it('can toString', () => {
    new Table().toString();
  });

  it('has static version variable', () => {
    (Table.version: string);
  });

  it('can use custom chars', () => {
    new Table({
      chars: {
        'top': '═',
        'top-mid': '╤',
        'top-left': '╔',
        'top-right': '╗',
        'bottom': '═' ,
        'bottom-mid': '╧',
        'bottom-left': '╚',
        'bottom-right': '╝',
        'left': '║' ,
        'left-mid': '╟',
        'mid': '─',
        'mid-mid': '┼',
        'right': '║',
        'right-mid': '╢',
        'middle': '│',
      }
    });
  });
});
