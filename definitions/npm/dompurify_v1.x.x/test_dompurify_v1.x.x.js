// @flow
import { describe, it } from 'flow-typed-test';
import createDOMPurify from 'dompurify';

const DOMPurify = createDOMPurify();
const dirty = `
<div>
  <h1>
    Hello, <a href="#" name="world">World</a>
  </h1>
  <img src="hello.png" alt="world" />
</div>`;

describe('#createDOMPurify', () => {
  it('should add/remove hook', () => {
    DOMPurify.addHook('beforeSanitizeElements', (currentNode, data, config) => {
      return currentNode;
    });

    // $ExpectError
    DOMPurify.addHook('invalidHookName', (currentNode, data, config) => {
      return currentNode;
    });

    DOMPurify.removeHook('beforeSanitizeElements');
    DOMPurify.removeHooks('beforeSanitizeElements');
    DOMPurify.removeAllHooks();
  });

  it('should sanitize', () => {
    const clean: string = DOMPurify.sanitize(dirty);
  });

  it('should sanitize to string', () => {
    // $ExpectError
    DOMPurify.sanitize(dirty, {
      ALLOWED_TAGS: ['invalid'],
    });

    // $ExpectError
    DOMPurify.sanitize(dirty, {
      INVALID_ARG: 42,
    });

    const clean: string = DOMPurify.sanitize(dirty, {
      ALLOWED_ATTR: ['href', 'src'],
      ALLOWED_TAGS: ['a', 'img', 'h1'],
    });
  });

  it('should sanitize to HTMLBodyElement', () => {
    const clean: HTMLBodyElement = DOMPurify.sanitize(dirty, { RETURN_DOM: true });
  });

  it('should sanitize to DocumentFragment', () => {
    const clean: DocumentFragment = DOMPurify.sanitize(dirty, { RETURN_DOM_FRAGMENT: true });
  });
});
