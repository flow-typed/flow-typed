// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('div', module)
  .add('empty', () => (
    <div />
  ))
  .add('unwrapping arguments', ({ kind, story }) => (
    <div>{kind} {story}</div>
  ))
  // $ExpectError
  .add('unwrapping too many arguments', ({ kind, story, foo }) => (
    <div>{kind} {story} {foo}</div>
  ))
  // $ExpectError
  .add(123, () => (
    <div />
  ))
  // $ExpectError
  .aad('empty', () => (
    <div />
  ));
