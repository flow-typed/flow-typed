// @flow
import { describe, it } from 'flow-typed-test';
import pell from 'pell';

describe('#pell', () => {
  it('should import correctly', () => {
    const { init, exec } = require('pell');
  });

  it('should create an instance', () => {
    const $element = document.getElementById('container');
    const $output = document.createElement('div');

    if (!$element) {
      return;
    }

    pell.init({
      onChange: html => {
        $output.innerHTML = html;
      },
      element: $element,
      defaultParagraphSeparator: 'p',
      styleWithCSS: false,
      actions: [
        'bold',
        {
          name: 'italic',
          icon: 'It',
          title: 'Italic',
        },
        {
          name: 'ulist',
          icon: '☰',
          title: 'Bulleted list',
        },
        {
          title: 'custom',
          icon: 'ƒ',
          result: () => {
            $output.style.border = '1px solid red';
            return false;
          },
        },
      ],
      classes: {
        actionbar: 'custom-action-bar',
        button: 'custom-button',
      },
    });
  });

  it('should fail with invalid DOM element', () => {
    //$FlowExpectedError
    pell.init({
      onChange: () => {},
      element: document.getElementById('invalid_element'),
    });
  });

  it('should return nested DOM element', () => {
    const $element = document.getElementById('container');

    if (!$element) {
      return;
    }

    const $el = pell.init({
      onChange: () => {},
      element: $element,
    });

    $el.style.border = '1px solid #880088';
    $el.content.style.border = '1px solid #008800';
  });

  it('should fail with invalid actions', () => {
    const $element = document.getElementById('container');
    if (!$element) {
      return;
    }

    //$FlowExpectedError
    pell.init({
      onChange: () => {},
      element: $element,
      actions: ['invalid_action'],
    });

    //$FlowExpectedError
    pell.init({
      onChange: () => {},
      element: $element,
      actions: [
        {
          name: 'invalid_action',
        },
      ],
    });
  });
});
