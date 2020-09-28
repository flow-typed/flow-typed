import escapeHtml from "escape-html";

const html: string = escapeHtml("foo & bar");

// $FlowExpectedError
escapeHtml(42);

// $FlowExpectedError
(escapeHtml("foo & bar"): number);
