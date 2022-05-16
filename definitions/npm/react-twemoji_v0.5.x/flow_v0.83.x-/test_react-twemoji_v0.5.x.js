// @flow
import { describe, test } from 'flow-typed-test';
import * as React from 'react';
import Twemoji from 'react-twemoji';

describe('react-twemoji', () => {
  test('basic', () => {
    (): React.Node => (
      <Twemoji options={{ className: 'twemoji' }}>
        <p>😂<span>😉</span></p>
      </Twemoji>
    );
  });

  test('all props are optional', () => {
    (): React.Node => (
      <Twemoji />
    );
  });

  test('props take the right arg if passed', () => {
    (): React.Node => (
      <Twemoji
        noWrapper={false}
      />
    );

    (): React.Node => (
      <Twemoji
        // $FlowExpectedError[incompatible-type]
        noWrapper="test"
      />
    );

    (): React.Node => (
      <Twemoji
        tag="test"
      />
    );

    (): React.Node => (
      <Twemoji
        // $FlowExpectedError[incompatible-type]
        tag={true}
      />
    );

    // Passing cb function into options
    (): React.Node => (
      <Twemoji
        options={() => {
          return '';
        }}
      />
    );

    (): React.Node => (
      <Twemoji
        options={() => {
          return false;
        }}
      />
    );

    (): React.Node => (
      <Twemoji
        options={() => {
          // $FlowExpectedError[incompatible-type]
          return true;
        }}
      />
    );
    // ========================

    // Passing object into options
    (): React.Node => (
      <Twemoji
        options={{
          base: 'test',
          ext: 'test',
          className: 'test',
          size: 'test',
          folder: 'test',
          callback: () => 'test',
          attributes: () => ({}),
        }}
      />
    );

    (): React.Node => (
      <Twemoji
        options={{
          size: 123,
        }}
      />
    );

    (): React.Node => (
      <Twemoji
        // $FlowExpectedError[incompatible-type]
        options={{
          size: true,
        }}
      />
    );

    (): React.Node => (
      <Twemoji
        // $FlowExpectedError[incompatible-type]
        options={{
          foo: 'bar',
        }}
      />
    );
    // ========================
  });
});
