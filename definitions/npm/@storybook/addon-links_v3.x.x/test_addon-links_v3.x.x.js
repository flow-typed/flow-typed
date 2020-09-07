// @flow

import { describe, it } from 'flow-typed-test';

import React from 'react';
import { linkTo, hrefTo } from '@storybook/addon-links';
import LinkTo from '@storybook/addon-links/react';

const Button = (props: {
  onClick: (SyntheticMouseEvent<HTMLButtonElement>) => void,
  ...
}) => (
  <button type="button" {...props}>
    Click me
  </button>
);

const Select = (props: {
  onChange: (SyntheticInputEvent<HTMLSelectElement>) => void,
  ...
}) => (
  <select {...props}>
    <option>First</option>
    <option>Second</option>
  </select>
);

describe('The `linkTo` function', () => {
  it('should accept string arguments', () => {
    linkTo('');
    linkTo('', '');
  });

  it('should accept callback agruments', () => {
    linkTo(() => '', () => '');
    linkTo('', evt => evt.currentTarget.value);
  });

  it('should returns an event handler', () => {
    <button onClick={linkTo('', '')} />;
    <Button onClick={linkTo('', '')} />;
    <select onChange={linkTo('', e => e.currentTarget.value)}>
      <option>First</option>
      <option>Second</option>
    </select>;
    <Select onChange={linkTo('', e => e.currentTarget.value)} />;
  });

  it('should error on invalid args', () => {
    // $FlowExpectedError
    linkTo();

    // $FlowExpectedError
    linkTo({});

    // $FlowExpectedError
    linkTo(true, true);
  });
});

describe('The `hrefTo` function', () => {
  it('should accept string arguments', () => {
    hrefTo('', '');
  });

  it('should error on invalid args', () => {
    // $FlowExpectedError
    hrefTo();

    // $FlowExpectedError
    hrefTo({});

    // $FlowExpectedError
    hrefTo(true, true);
  });

  it('returns a Promised string', () => {
    hrefTo('', '').then(result => (result: string));
  });

  it('should error on invalid Promise result', () => {
    // $FlowExpectedError
    hrefTo('', '').then(result => (result: boolean));
  });
});

describe('The `LinkTo` component', () => {
  it('should accept valid properties', () => {
    <LinkTo
      kind=""
      story=""
      target="_blank"
      title=""
      style={{ color: 'tomato' }}
    >
      Test
    </LinkTo>;
  });

  it('should error on invalid properties', () => {
    // $FlowExpectedError
    <LinkTo kind={123} story={true}>
      Test
    </LinkTo>;
  });
});
