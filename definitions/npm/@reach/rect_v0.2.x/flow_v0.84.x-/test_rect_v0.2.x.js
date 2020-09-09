// @flow

import React from 'react';
import {createRef, useRef} from 'react';
import Rect, {useRect} from '@reach/rect';
import {it, describe} from 'flow-typed-test';

describe('@reach/rect', () => {
  describe('useRect', function () {
    it('accepts an element ref', function () {
      useRect(createRef<?HTMLElement>());
      useRect(useRef<?HTMLElement>());

      // $FlowExpectedError
      useRect(useRef<string>());
      // $FlowExpectedError
      useRect({});
    });

    it('accepts observe flag', function () {
      useRect(useRef<?HTMLElement>(), true);
      useRect(useRef<?HTMLElement>(), false);

      // $FlowExpectedError
      useRect(useRef<?HTMLElement>(), 1);
      // $FlowExpectedError
      useRect(useRef<?HTMLElement>(), 'foo');
      // $FlowExpectedError
      useRect(useRef<?HTMLElement>(), []);
    });
  });

  describe('Rect', function () {
    it('accepts required children function', function () {
      <Rect>{() => null}</Rect>;

      // $FlowExpectedError
      <Rect>foo</Rect>;
      // $FlowExpectedError
      <Rect/>;
    });

    it('accepts optional onChange handler', function () {
      (<Rect onChange={rect => console.log(rect)}>{() => null}</Rect>);

      // $FlowExpectedError
      (<Rect onChange={1}>{() => null}</Rect>);
    });

    it('accepts optional observe flag', function () {
      <Rect observe>{() => null}</Rect>;
      <Rect observe={false}>{() => null}</Rect>;

      // $FlowExpectedError
      <Rect observe={1}>{() => null}</Rect>;
    });
  });
});
