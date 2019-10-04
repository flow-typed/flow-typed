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

      // $ExpectError
      useRect(useRef<string>());
      // $ExpectError
      useRect({});
    });

    it('accepts observe flag', function () {
      useRect(useRef<?HTMLElement>(), true);
      useRect(useRef<?HTMLElement>(), false);

      // $ExpectError
      useRect(useRef<?HTMLElement>(), 1);
      // $ExpectError
      useRect(useRef<?HTMLElement>(), 'foo');
      // $ExpectError
      useRect(useRef<?HTMLElement>(), []);
    });
  });

  describe('Rect', function () {
    it('accepts required children function', function () {
      <Rect>{() => null}</Rect>;

      // $ExpectError
      <Rect>foo</Rect>;
      // $ExpectError
      <Rect/>;
    });

    it('accepts optional onChange handler', function () {
      (<Rect onChange={rect => console.log(rect)}>{() => null}</Rect>);

      // $ExpectError
      (<Rect onChange={1}>{() => null}</Rect>);
    });

    it('accepts optional observe flag', function () {
      <Rect observe>{() => null}</Rect>;
      <Rect observe={false}>{() => null}</Rect>;

      // $ExpectError
      <Rect observe={1}>{() => null}</Rect>;
    });
  });
});
