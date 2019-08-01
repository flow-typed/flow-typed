// @flow
import React from 'react';
import { action, storiesOf } from '@kadira/storybook';

storiesOf('div', module)
  .add('empty', () => (
    <div onClick={action('click')} />
  ))
  // $ExpectError
  .aad('empty', () => (
    <div />
  ));
