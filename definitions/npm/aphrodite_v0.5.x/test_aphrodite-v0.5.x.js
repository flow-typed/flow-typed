import {
  css,
  StyleSheet,
  StyleSheetServer,
  StyleSheetTestUtils
} from 'aphrodite';

const styles = StyleSheet.create({
  foo: {
    backgroundColor: 'red',
  },
  bar: {
    backgroundColor: 'green',
    fontSize: 12,
  },
  hover: {
    ':hover': {
      backgroundColor: 'green',
    },
  },
  big: {
    '@media (min-width: 800px)': {
      fontSize: 14,
    }
  },
});

const fooClassName = css(styles.foo);
const bigClassName = css(styles.big);

// $FlowExpectedError
css(4);

// $FlowExpectedError
StyleSheet.create('.foo { background-color: red }');

const content = StyleSheetServer.renderStatic(() => `
  <!doctype html>
  <html>
    <body>
      My App as a string
    </body>
  </html>
`);
console.log(content.html, content.css);

StyleSheetTestUtils.suppressStyleInjection();
StyleSheetTestUtils.clearBufferAndResumeStyleInjection();

declare var x: number;

css(false);
// $FlowExpectedError
css(true);
css(true && styles.big);
// $FlowExpectedError
css(x && styles.big);
css(Boolean(x) && styles.big);
