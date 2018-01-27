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

// $ExpectError
stripIndent();
// $ExpectError
stripIndent(null);
// $ExpectError
stripIndent("bad");
stripIndent`
  Good
`;

// $ExpectError
html();
// $ExpectError
html(null);
// $ExpectError
html(0);
// $ExpectError
html("bad");
html`
  good
`;

// $ExpectError
source();
// $ExpectError
source(null);
// $ExpectError
source(0);
// $ExpectError
source("bad");
source`
  good
`;

// $ExpectError
codeBlock();
// $ExpectError
codeBlock(null);
// $ExpectError
codeBlock(0);
// $ExpectError
codeBlock("bad");
codeBlock`
  good
`;

// $ExpectError
safeHtml();
// $ExpectError
safeHtml(null);
// $ExpectError
safeHtml(0);
// $ExpectError
safeHtml("bad");
safeHtml`
  good
`;

// $ExpectError
oneLine();
// $ExpectError
oneLine(null);
// $ExpectError
oneLine(0);
// $ExpectError
oneLine("bad");
oneLine`
  good
`;

// $ExpectError
oneLineTrim();
// $ExpectError
oneLineTrim(null);
// $ExpectError
oneLineTrim(0);
// $ExpectError
oneLineTrim("bad");
oneLineTrim`
  good
`;

// $ExpectError
oneLineCommaLists();
// $ExpectError
oneLineCommaLists(null);
// $ExpectError
oneLineCommaLists(0);
// $ExpectError
oneLineCommaLists("bad");
oneLineCommaLists`
  good
`;

// $ExpectError
oneLineCommaListsOr();
// $ExpectError
oneLineCommaListsOr(null);
// $ExpectError
oneLineCommaListsOr(0);
// $ExpectError
oneLineCommaListsOr("bad");
oneLineCommaListsOr`
  good
`;

// $ExpectError
oneLineCommaListsAnd();
// $ExpectError
oneLineCommaListsAnd(null);
// $ExpectError
oneLineCommaListsAnd(0);
// $ExpectError
oneLineCommaListsAnd("bad");
oneLineCommaListsAnd`
  good
`;

// $ExpectError
stripIndent();
// $ExpectError
stripIndent(null);
// $ExpectError
stripIndent(0);
// $ExpectError
stripIndent("bad");
stripIndent`
  good
`;

// $ExpectError
stripIndents();
// $ExpectError
stripIndents(null);
// $ExpectError
stripIndents(0);
// $ExpectError
stripIndents("bad");
stripIndents`
  good
`;

// $ExpectError
inlineLists();
// $ExpectError
inlineLists(null);
// $ExpectError
inlineLists(0);
// $ExpectError
inlineLists("bad");
inlineLists`
  good
`;

// $ExpectError
oneLineInlineLists();
// $ExpectError
oneLineInlineLists(null);
// $ExpectError
oneLineInlineLists(0);
// $ExpectError
oneLineInlineLists("bad");
oneLineInlineLists`
  good
`;

// $ExpectError
commaLists();
// $ExpectError
commaLists(null);
// $ExpectError
commaLists(0);
// $ExpectError
commaLists("bad");
commaLists`
  good
`;

// $ExpectError
commaListsOr();
// $ExpectError
commaListsOr(null);
// $ExpectError
commaListsOr(0);
// $ExpectError
commaListsOr("bad");
commaListsOr`
  good
`;

// $ExpectError
commaListsAnd();
// $ExpectError
commaListsAnd(null);
// $ExpectError
commaListsAnd(0);
// $ExpectError
commaListsAnd("bad");
commaListsAnd`
  good
`;

// $ExpectError
const templateTag2 = new TemplateTag(null);
// $ExpectError
const templateTag3 = new TemplateTag('bad');
const templateTag4 = new TemplateTag(trimResultTransformer);
const templateTag5 = new TemplateTag(
  trimResultTransformer,
  stripIndentTransformer
);
