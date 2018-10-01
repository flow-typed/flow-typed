import xmlEscape from "xml-escape";

const result: string = xmlEscape("<>'\"&");

// $ExpectError
xmlEscape(123);

// $ExpectError
(xmlEscape("foo"): number);
