import escapeHtml from "escape-html";

const html: string = escapeHtml("foo & bar");

// $ExpectError
escapeHtml(42);

// $ExpectError
(escapeHtml("foo & bar"): number);
