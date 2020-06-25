// @flow

import {
  html,
  source,
  codeBlock,
  safeHtml,
  oneLine,
  oneLineTrim,
  oneLineCommaLists,
  oneLineCommaListsOr,
  oneLineCommaListsAnd,
  stripIndent,
  stripIndents,
  inlineLists,
  oneLineInlineLists,
  commaLists,
  commaListsOr,
  commaListsAnd,
  TemplateTag,
  trimResultTransformer,
  stripIndentTransformer
} from "common-tags";

// $FlowExpectedError
stripIndent();
// $FlowExpectedError
stripIndent(null);
// $FlowExpectedError
stripIndent("bad");
stripIndent`
  Good
`;

// $FlowExpectedError
html();
// $FlowExpectedError
html(null);
// $FlowExpectedError
html(0);
// $FlowExpectedError
html("bad");
html`
  good
`;

// $FlowExpectedError
source();
// $FlowExpectedError
source(null);
// $FlowExpectedError
source(0);
// $FlowExpectedError
source("bad");
source`
  good
`;

// $FlowExpectedError
codeBlock();
// $FlowExpectedError
codeBlock(null);
// $FlowExpectedError
codeBlock(0);
// $FlowExpectedError
codeBlock("bad");
codeBlock`
  good
`;

// $FlowExpectedError
safeHtml();
// $FlowExpectedError
safeHtml(null);
// $FlowExpectedError
safeHtml(0);
// $FlowExpectedError
safeHtml("bad");
safeHtml`
  good
`;

// $FlowExpectedError
oneLine();
// $FlowExpectedError
oneLine(null);
// $FlowExpectedError
oneLine(0);
// $FlowExpectedError
oneLine("bad");
oneLine`
  good
`;

// $FlowExpectedError
oneLineTrim();
// $FlowExpectedError
oneLineTrim(null);
// $FlowExpectedError
oneLineTrim(0);
// $FlowExpectedError
oneLineTrim("bad");
oneLineTrim`
  good
`;

// $FlowExpectedError
oneLineCommaLists();
// $FlowExpectedError
oneLineCommaLists(null);
// $FlowExpectedError
oneLineCommaLists(0);
// $FlowExpectedError
oneLineCommaLists("bad");
oneLineCommaLists`
  good
`;

// $FlowExpectedError
oneLineCommaListsOr();
// $FlowExpectedError
oneLineCommaListsOr(null);
// $FlowExpectedError
oneLineCommaListsOr(0);
// $FlowExpectedError
oneLineCommaListsOr("bad");
oneLineCommaListsOr`
  good
`;

// $FlowExpectedError
oneLineCommaListsAnd();
// $FlowExpectedError
oneLineCommaListsAnd(null);
// $FlowExpectedError
oneLineCommaListsAnd(0);
// $FlowExpectedError
oneLineCommaListsAnd("bad");
oneLineCommaListsAnd`
  good
`;

// $FlowExpectedError
stripIndent();
// $FlowExpectedError
stripIndent(null);
// $FlowExpectedError
stripIndent(0);
// $FlowExpectedError
stripIndent("bad");
stripIndent`
  good
`;

// $FlowExpectedError
stripIndents();
// $FlowExpectedError
stripIndents(null);
// $FlowExpectedError
stripIndents(0);
// $FlowExpectedError
stripIndents("bad");
stripIndents`
  good
`;

// $FlowExpectedError
inlineLists();
// $FlowExpectedError
inlineLists(null);
// $FlowExpectedError
inlineLists(0);
// $FlowExpectedError
inlineLists("bad");
inlineLists`
  good
`;

// $FlowExpectedError
oneLineInlineLists();
// $FlowExpectedError
oneLineInlineLists(null);
// $FlowExpectedError
oneLineInlineLists(0);
// $FlowExpectedError
oneLineInlineLists("bad");
oneLineInlineLists`
  good
`;

// $FlowExpectedError
commaLists();
// $FlowExpectedError
commaLists(null);
// $FlowExpectedError
commaLists(0);
// $FlowExpectedError
commaLists("bad");
commaLists`
  good
`;

// $FlowExpectedError
commaListsOr();
// $FlowExpectedError
commaListsOr(null);
// $FlowExpectedError
commaListsOr(0);
// $FlowExpectedError
commaListsOr("bad");
commaListsOr`
  good
`;

// $FlowExpectedError
commaListsAnd();
// $FlowExpectedError
commaListsAnd(null);
// $FlowExpectedError
commaListsAnd(0);
// $FlowExpectedError
commaListsAnd("bad");
commaListsAnd`
  good
`;

// $FlowExpectedError
const templateTag2 = new TemplateTag(null);
// $FlowExpectedError
const templateTag3 = new TemplateTag('bad');
const templateTag4 = new TemplateTag(trimResultTransformer);
const templateTag5 = new TemplateTag(
  trimResultTransformer,
  stripIndentTransformer
);
