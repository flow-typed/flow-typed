/* @flow */

import hljs from 'highlight.js'

hljs.highlight('lang', 'code');
var prop = hljs.highlight('lang', 'code', true);
hljs.highlight('lang', 'code', false, prop.top);
// $FlowExpectedError string. This type is incompatible with Continuation
hljs.highlight('lang', 'code', false, 'string');

prop = hljs.highlightAuto('code', ['js']);
hljs.highlightAuto('code');

var result: string = hljs.fixMarkup('code');
// $FlowExpectedError number. This type is incompatible with string
var result2: number = hljs.fixMarkup('code');

// $FlowExpectedError number. This type is incompatible with Object
hljs.configure(1);

hljs.initHighlighting();
hljs.initHighlightingOnLoad();

hljs.registerLanguage('name', (hljs) => {
  // $FlowExpectedError number. This type is incompatible with Object
  hljs.calls();

  return { aliases: [], keywords: { keyword: '', literal: '', built_in: '' }, contains: [] };
});

var langs: Array<string> = hljs.listLanguages();

hljs.getLanguage('name');
// $FlowExpectedError number. This type is incompatible with string
hljs.getLanguage(1);
