//@flow

import React from 'react';
import Toggle from 'react-toggled';
import { describe, it } from 'flow-typed-test';

it('defaultOn prop should be boolean', () => {
  // $ExpectError
  <Toggle defaultOn={2}><div /></Toggle>;
  <Toggle defaultOn><div /></Toggle>;
});

it('on prop should be boolean', () => {
  // $ExpectError
  <Toggle on={2}><div /></Toggle>;
  <Toggle on><div /></Toggle>;
});

it('onToggle prop should be a function', () => {
  // $ExpectError
  <Toggle onToggle={2}><div /></Toggle>;
  <Toggle onToggle={() => {}}><div /></Toggle>;
});

it('require children prop', () => {
  // $ExpectError
  <Toggle />;

  <Toggle><div /></Toggle>;

  <Toggle>
    {({ on, setOn, setOff, getTogglerProps, getInputTogglerProps, getElementTogglerProps, toggle }) => (
      <div>
        <button {...getTogglerProps()} onClick={setOn}/>
        <div {...getElementTogglerProps()}/>
        <input type="checkbox" {...getInputTogglerProps()}/>
      </div>
    )}
  </Toggle>;

  const overrides = { onClick: () => {} };
  // getTogglerProps, getInputTogglerProps and getElementTogglerProps can take an optional argument
  <Toggle>
    {({ on, setOn, setOff, getTogglerProps, getInputTogglerProps, getElementTogglerProps, toggle }) => (
      <div>
        <button {...getTogglerProps(overrides)} onClick={setOn}/>
        <div {...getElementTogglerProps(overrides)}/>
        <input type="checkbox" {...getInputTogglerProps(overrides)}/>
      </div>
    )}
  </Toggle>
});
