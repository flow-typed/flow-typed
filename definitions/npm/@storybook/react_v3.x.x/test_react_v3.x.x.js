// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('div', module)
  .add('empty', () => (
    <div />
  ))
  // $ExpectError
  .add(123, () => (
    <div />
  ))
  // $ExpectError
  .aad('empty', () => (
    <div />
  ));
