// @flow

let tests = [
  // createElement
  function (document: Document) {
    document.createElement('canvas') as HTMLCanvasElement;
    const link = document.createElement('link') as HTMLLinkElement;
    link.rel = 'some_rel';
    // $FlowExpectedError[prop-missing]
    link.potato = 'potato';
    document.createElement('option') as HTMLOptionElement;
    document.createElement('select') as HTMLSelectElement;
    document.querySelector('select') as HTMLSelectElement | null;
    document.createElement('hr') as HTMLHRElement; // GH #3752
    document.createElement('custom') as Element;
  },

  // createElementNS
  function (document: Document) {
    document.createElementNS('http://www.w3.org/1999/xhtml', 'canvas') as HTMLCanvasElement;
    const link = document.createElementNS('http://www.w3.org/1999/xhtml', 'link') as HTMLLinkElement;
    link.rel = 'some_rel';
    // $FlowExpectedError[prop-missing]
    link.potato = 'potato';
    document.createElementNS('http://www.w3.org/1999/xhtml', 'option') as HTMLOptionElement;
    document.createElementNS('http://www.w3.org/1999/xhtml', 'select') as HTMLSelectElement;
    document.querySelector('select') as HTMLSelectElement | null;
    document.createElementNS('http://www.w3.org/1999/xhtml', 'hr') as HTMLHRElement; // GH #3752
    document.createElementNS('http://www.w3.org/1999/xhtml', 'custom') as Element;
  },

  // getElementsByTagName
  function (document: Document) {
    const anchors = document.getElementsByTagName('a');
    for (const anchor of anchors) {
      anchor as HTMLAnchorElement;
      anchor.charset = 'utf-8';
      // $FlowExpectedError[prop-missing]
      anchor.potato = 'potato';
    }

    const potatoes = document.getElementsByTagName('potato');
    for (const potato of potatoes) {
      potato as Element;
    }
  },

  // getElementsByTagNameNS
  function (document: Document) {
    const anchors = document.getElementsByTagNameNS('http://www.w3.org/1999/xhtml', 'a');
    for (const anchor of anchors) {
      anchor as HTMLAnchorElement;
      anchor.charset = 'utf-8';
      // $FlowExpectedError[prop-missing]
      anchor.potato = 'potato';
    }

    const potatoes = document.getElementsByTagNameNS('http://www.w3.org/1999/xhtml', 'potato');
    for (const potato of potatoes) {
      potato as Element;
    }
  },

  // querySelector, querySelectorAll
  function (document: Document) {
    const form = document.querySelector('form');
    if (form != null) {
      form.method = 'POST';
    }

    const forms = document.querySelectorAll('form');
    for (const form of forms) {
      form.method = 'GET';
    }
  },

  function (document: Document) {
    document.head as HTMLHeadElement | null;
  },
];
