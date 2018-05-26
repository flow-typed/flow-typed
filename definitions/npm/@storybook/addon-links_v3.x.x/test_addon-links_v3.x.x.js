// @flow

import { describe, it } from 'flow-typed-test';

import React from 'react';
import { linkTo, hrefTo } from '@storybook/addon-links';
import LinkTo from '@storybook/addon-links/react';

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
    <div onClick={linkTo('', '')} />;
  });

  it('should error on invalid args', () => {
    // $ExpectError
    linkTo();

    // $ExpectError
    linkTo({});

    // $ExpectError
    linkTo(true, true);
  });
});

describe('The `hrefTo` function', () => {
  it('should accept string arguments', () => {
    hrefTo('', '');
  });

  it('should error on invalid args', () => {
    // $ExpectError
    hrefTo();

    // $ExpectError
    hrefTo({});

    // $ExpectError
    hrefTo(true, true);
  });

  it('returns a Promised string', () => {
    hrefTo('', '').then(result => (result: string));
  });

  it('should error on invalid Promise result', () => {
    // $ExpectError
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
    // $ExpectError
    <LinkTo kind={123} story={true}>
      Test
    </LinkTo>;
  });
});
