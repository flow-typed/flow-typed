// @flow

import { describe, it } from "flow-typed-test";

import xmldom from 'xmldom'
import type { $Node, $Element, $Attr, $ElementList, $Document, DOMParser, DOMImplementation } from 'xmldom'

describe('xmldom', () => {
  it('can use DOMParser objects', () => {
    const parser: DOMParser = new xmldom.DOMParser();

    var doc: $Document = parser.parseFromString('<some small="test">xml</some>');
  });

  it('can create DOMParser with options', () => {
    const parser: DOMParser = new xmldom.DOMParser(
      { errorHandler: { error: (e) => console.log(e) } });
  });

  it('can serialize documents', () => {
    const doc: $Document = (new xmldom.DOMParser()).parseFromString('<root><elt attr=42></elt></root>');
    var str: string = (new xmldom.XMLSerializer()).serializeToString(doc.documentElement);
  });

  it('can parse documents', () => {
    const doc: $Document = (new xmldom.DOMParser()).parseFromString('<root><elt attr=42></elt></root>');
  });

  it('can create documents', () => {
    const implem: DOMImplementation = new xmldom.DOMImplementation();
    const newDoc: $Document = implem.createDocument('root');

    var root: $Element = newDoc.documentElement;

    var node: $Node = newDoc.createTextNode('text');
    root.appendChild(node);

    var comment: $Node = newDoc.createComment('comment');
    root.insertBefore(comment, node);

    var cdata: $Node = newDoc.createCDATASection('content');
    root.replaceChild(cdata, comment);

    var attr: $Attr = newDoc.createAttribute('name');
    attr.value = "42";
    attr.name = "newName";
    root.setAttributeNode(attr);

    var elt: $Element = newDoc.createElement("test");
    elt.setAttribute("eltAttr", "42");
    root.appendChild(elt);
  });

  it('can navigate documents', () => {
    const parser: DOMParser = new xmldom.DOMParser();
    const doc: $Document = parser.parseFromString('<root><elt attr=42></elt></root>');

    doc.documentElement.nodeName === 'root';
    doc.documentElement.nodeType === 1;

    var nodes: $ElementList = doc.getElementsByTagName('elt');
    nodes = doc.documentElement.getElementsByTagName('elt');

    (nodes.item(0): $Element);
    nodes.item(0).hasAttribute('attr');
    nodes.item(0).getAttribute('attr');
    nodes.item(0).getAttributeNode('attr').nodeValue === '42';
    nodes.item(0).getAttributeNode('attr').value === '42';
    nodes.item(0).parentNode === doc.documentElement;
  });
});
