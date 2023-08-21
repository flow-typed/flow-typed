// @flow
import { describe, it } from 'flow-typed-test';
import {
  StyleSheet,
  StyleSheetServer,
  StyleSheetTestUtils,
  minify,
  css,
  flushToStyleTag,
  injectAndGetClassName,
  defaultSelectorHandlers,
  reset,
  resetInjectedStyle,
} from 'aphrodite';
import {
  StyleSheet as noImportantStyleSheet,
  css as noImportantCss,
} from 'aphrodite/no-important';

describe('aphrodite', () => {
  it('can create styles', () => {
    const styles = StyleSheet.create({
      test: {
        // $FlowExpectedError[incompatible-call] does not accept numbers
        color: 0,
      },
      test1: {
        backgroundColor: 'black',
      },
    });
    const s: string = css(styles.test, styles.test1);
  });

  it('renderStatic', () => {
    const func = () => '';
    const rendered = StyleSheetServer.renderStatic(func);
    rendered.html.toUpperCase();
    rendered.css.content.toUpperCase();
    rendered.css.renderedClassNames.map((o) => o.toUpperCase());
  });

  it('suppressStyleInjection', () => {
    StyleSheetTestUtils.suppressStyleInjection();
    // $FlowExpectedError[extra-arg] takes no args
    StyleSheetTestUtils.suppressStyleInjection('test');
  });

  it('clearBufferAndResumeStyleInjection', () => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    // $FlowExpectedError[extra-arg] takes no args
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection('test');
  });

  it('getBufferedStyles', () => {
    const t: Array<string> = StyleSheetTestUtils.getBufferedStyles();
    // $FlowExpectedError[extra-arg] takes no args
    StyleSheetTestUtils.getBufferedStyles('test');
  });

  it('minify', () => {
    minify(true);
    // $FlowExpectedError[incompatible-call]
    minify('test');
  });

  it('flushToStyleTag', () => {
    flushToStyleTag();
    // $FlowExpectedError[extra-arg] takes no args
    flushToStyleTag('test');
  });

  it('injectAndGetClassName & defaultSelectorHandlers', () => {
    const t: string = injectAndGetClassName(true, [], defaultSelectorHandlers);
    // $FlowExpectedError[incompatible-call]
    injectAndGetClassName(true, [], '');
  });

  it('reset', () => {
    reset();
    // $FlowExpectedError[extra-arg]
    reset('test');
  });

  it('resetInjectedStyle', () => {
    const t: void = resetInjectedStyle('test');
    // $FlowExpectedError[incompatible-call]
    resetInjectedStyle();
  });

  it('pass refined objects into the style', () => {
    const test: {| color: string |} = { color: 'black' };

    const styles = StyleSheet.create({
      test: test,
    });
  });
});

describe('aphrodite/no-important', () => {
  it('should work as normal', () => {
    const styles = noImportantStyleSheet.create({
      test: {
        // $FlowExpectedError[incompatible-call] does not accept numbers
        color: 0,
      },
    });
    const s: string = noImportantCss(styles.test);
  });
});
