import xmlEscape from "xml-escape";

const result: string = xmlEscape("<>'\"&");

// $FlowExpectedError
xmlEscape(123);

// $FlowExpectedError
(xmlEscape("foo"): number);
