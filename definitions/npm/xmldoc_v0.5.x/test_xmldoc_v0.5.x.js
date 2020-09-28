/* @flow */
import xmldoc from 'xmldoc';
import type { $XmlElement } from 'xmldoc';

const xmlNode: $XmlElement = new xmldoc.XmlDocument('<some>xml</some');

// $FlowExpectedError xml should be string
const badXml = new xmldoc.XmlDocument(123);

const bookXml: $XmlElement = new xmldoc.XmlDocument('<book><author><name isProper="true">George R. R. Martin</name></author></book>');

const author: $XmlElement = bookXml.firstChild;

// $FlowExpectedError should return an XmlElement
const authorString: string = bookXml.descendantWithPath('author.name');

const nameNode: $XmlElement = bookXml.firstChild.firstChild;

const bookString = bookXml.toString({ preserveWhitespace: true });

const thingsXml: $XmlElement = new xmldoc.XmlDocument('<stuff><thing a="foo"><thing a="bar"><thing a="baz"></stuff>');

thingsXml.eachChild((child, i) => console.log(`${String(child.attr.a)})}: ${i}`));

// $FlowExpectedError requires iterator function
thingsXml.eachChild();

thingsXml.eachChild((child, i) => {
  // $FlowExpectedError should return a number
  const childLine: string = child.line;
});
