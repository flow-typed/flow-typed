// @flow
import colors from 'colors';

const bulletPoint = `  • `;
const arrow = `    └> `;
const genericRowPad = `       `;

const createListItem = (values: Array<string>): string => {
  const [first, second, ...rest] = values;
  let value = `${bulletPoint}${first}\n`;
  if (second) {
    value += `${arrow}${second}\n`;
  }
  if (rest.length > 0) {
    rest.forEach((r, i) => {
      value += `${genericRowPad}${r}${i === rest.length - 1 ? '' : '\n'}`;
    });
  }
  return colors.bold(value);
};

export const listItem = (...values: Array<string>): void => {
  console.log(createListItem(values));
};
