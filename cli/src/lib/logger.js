// @flow
import colors from 'colors';

const bulletPoint = `  • `;
const arrow = `    └> `;
const genericRowPad = `       `;

const shouldNewLine = (condition: boolean) => (condition ? '\n' : '');

const createListItem = (values: Array<string>): string => {
  const [first, second, ...rest] = values;
  let value = `${bulletPoint}${first}${shouldNewLine(!!second)}`;
  if (second) {
    value += `${arrow}${second}${shouldNewLine(rest.length > 0)}`;
  }
  if (rest.length > 0) {
    rest.forEach((r, i) => {
      value += `${genericRowPad}${r}${shouldNewLine(i !== rest.length - 1)}`;
    });
  }
  return colors.bold(value);
};

export const listItem = (...values: Array<string | void>): void => {
  const validItems: Array<string> = values
    .map(o => {
      if (!o) return '';
      return o;
    })
    .filter(o => !!o);
  console.log(createListItem(validItems));
};
