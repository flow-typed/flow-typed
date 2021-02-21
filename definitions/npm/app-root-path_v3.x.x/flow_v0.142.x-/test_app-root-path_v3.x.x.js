// @flow
import { it, describe } from 'flow-typed-test';
const RootPath = require('app-root-path');

describe('app-root-path', () => {
  it('types path', () => {
    (RootPath.path: string);
    // $FlowExpectedError[incompatible-cast] should be string
    (RootPath.path: number);
  });

  it('types resolve', () => {
    (RootPath.resolve('test'): string);
    // $FlowExpectedError[incompatible-call] should accept string only
    RootPath.resolve(1);
    // $FlowExpectedError[incompatible-call] needs one param
    RootPath.resolve();
    // $FlowExpectedError[incompatible-cast] should return a string
    (RootPath.resolve(''): number);
  });

  it('types require', () => {
    RootPath.require('test');
    // $FlowExpectedError[incompatible-call] should accept string only
    RootPath.require(1);
    // $FlowExpectedError[incompatible-call] needs one param
    RootPath.require();
  });

  it('types setPath', () => {
    (RootPath.setPath('test'): void);
    // $FlowExpectedError[incompatible-call] should accept string only
    RootPath.setPath(1);
    // $FlowExpectedError[incompatible-call] needs one param
    RootPath.setPath();
    // $FlowExpectedError[incompatible-cast] should return void
    (RootPath.setPath(''): number);
  });

  it('types toString', () => {
    (RootPath.toString(): string);
    // $FlowExpectedError[incompatible-call] accepts no params
    RootPath.toString(1);
    // $FlowExpectedError[incompatible-cast] should return string
    (RootPath.toString(): number);
  });

  it('can be used directly as a string', () => {
    const a = `${RootPath}`;
  });
});
