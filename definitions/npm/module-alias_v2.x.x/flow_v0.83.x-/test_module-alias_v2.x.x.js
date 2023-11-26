// @flow
import { describe, test } from 'flow-typed-test';
import moduleAlias from 'module-alias';

describe('module-alias', () => {
  test('default', () => {
    (moduleAlias(): void);
    moduleAlias('test');
    moduleAlias({
      base: 'test',
    });

    // $FlowExpectedError[incompatible-cast]
    (moduleAlias(): string);
    // $FlowExpectedError[incompatible-call]
    moduleAlias(123);
    // $FlowExpectedError[incompatible-call]
    moduleAlias({});
    // $FlowExpectedError[incompatible-call]
    moduleAlias({ foo: 'bar' });
  });

  test('isPathMatchesAlias', () => {
    (moduleAlias.isPathMatchesAlias('test', 'test'): boolean);

    // $FlowExpectedError[incompatible-call]
    moduleAlias.isPathMatchesAlias();
    // $FlowExpectedError[incompatible-call]
    moduleAlias.isPathMatchesAlias(123);
    // $FlowExpectedError[incompatible-call]
    moduleAlias.isPathMatchesAlias('test', 123);
    // $FlowExpectedError[incompatible-cast]
    (moduleAlias.isPathMatchesAlias('test', 'test'): string);
  });

  test('addPath', () => {
    (moduleAlias.addPath('test'): void);

    // $FlowExpectedError[incompatible-call]
    moduleAlias.addPath();
    // $FlowExpectedError[incompatible-call]
    moduleAlias.addPath(123);
    // $FlowExpectedError[incompatible-cast]
    (moduleAlias.addPath('test'): string);
  });

  test('addAlias', () => {
    (moduleAlias.addAlias('test', 'test'): void);

    // $FlowExpectedError[incompatible-call]
    moduleAlias.addAlias();
    // $FlowExpectedError[incompatible-call]
    moduleAlias.addAlias(123);
    // $FlowExpectedError[incompatible-call]
    moduleAlias.addAlias('test', 123);
    // $FlowExpectedError[incompatible-cast]
    (moduleAlias.addAlias('test', 'test'): string);
  });

  test('addAliases', () => {
    (moduleAlias.addAliases({ foo: 'bar' }): void);

    // $FlowExpectedError[incompatible-call]
    moduleAlias.addAliases();
    // $FlowExpectedError[incompatible-call]
    moduleAlias.addAliases(123);
    // $FlowExpectedError[incompatible-call]
    moduleAlias.addAliases({ foo: 123 });
    // $FlowExpectedError[incompatible-cast]
    (moduleAlias.addAliases({ foo: 'bar' }): string);
  });

  test('reset', () => {
    (moduleAlias.reset(): void);

    // $FlowExpectedError[extra-arg]
    moduleAlias.reset(123);
    // $FlowExpectedError[incompatible-cast]
    (moduleAlias.reset(): string);
  });
});
