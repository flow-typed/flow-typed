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
  it('should add hook', () => {
    DOMPurify.addHook('beforeSanitizeElements', (currentNode, data, config) => {
      return currentNode;
    });

    // $ExpectError
    DOMPurify.addHook('invalidHookName', (currentNode, data, config) => {
      return currentNode;
    });
  });

  it('should sanitize', () => {
    const clean = DOMPurify.sanitize(dirty);
    clean.toLowerCase();
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

    const clean = DOMPurify.sanitize(dirty, {
      ALLOWED_ATTR: ['href', 'src'],
      ALLOWED_TAGS: ['a', 'img', 'h1'],
    });
    clean.toUpperCase();
  });

  it('should sanitize to HTMLBodyElement', () => {
    const clean = DOMPurify.sanitize(dirty, { RETURN_DOM: true });
    clean.childNodes;
  });

  it('should sanitize to DocumentFragment', () => {
    const clean = DOMPurify.sanitize(dirty, { RETURN_DOM_FRAGMENT: true });

    const rootNode = window.document.createElement('div');
    rootNode.appendChild(clean);
  });
});
