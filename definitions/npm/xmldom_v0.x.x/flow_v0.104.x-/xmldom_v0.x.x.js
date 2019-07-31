declare module 'xmldom' {

  declare class Node {
    nodeName: string;
    nodeValue: string;

    nodeName: string;
    nodeType: number;
    parentNode: Node;
    childNodes: NodeList;
    firstChild: Node;
    lastChild: Node;
    previousSibling: Node;
    nextSibling: Node;
    attributes: { [string]: Attr, ... };
    ownerDocument: Document;
    namespaceURI: string;
    localName: string;

    insertBefore(newChild: Node, refChild: Node): Node;
    replaceChild(newChild: Node, oldChild: Node): Node;
    removeChild(oldChild: Node): Node;
    appendChild(newChild: Node): Node;
    hasChildNodes(): bool;
    cloneNode(deep: bool): Node;
    normalize(): void;
    isSupported(feature: string, version: string): bool;
    hasAttributes(): bool;
  }
  declare export type $Node = Node;

  declare class Document extends Node {
    doctype: any;
    implementation: DOMImplementation;
    documentElement: Element;

    createElement(tagName: string): Element;
    // createDocumentFragment()
    createTextNode(data: string): Node;
    createComment(data: string): Node;
    createCDATASection(data: string): Node;
    createProcessingInstruction(target: string, data: string): any;
    createAttribute(name: string): Attr;
 	  createEntityReference(name: string): any;
    getElementsByTagName(tagname: string): ElementList
  }
  declare export type $Document = Document;

  declare class Element extends Node {
    tagName: string;
    textContent: string; /* level 3 */

    getAttribute(name: string): string;
    setAttribute(name: string, value: string): void;
    removeAttribute(name: string): void;
    getAttributeNode(name: string): Attr;
    setAttributeNode(newAttr: Attr): Attr;
    removeAttributeNode(oldAttr: Attr): Attr;
    hasAttribute(name: string): bool;
    getElementsByTagName(name: string): ElementList
  }
  declare export type $Element = Element;

  declare class Attr extends Node {
    value: string;
    name: string;
  }
  declare export type $Attr = Attr;

  declare class NodeList {
    length: number;
    item(index: number): Node;
  }
  declare export type $NodeList = NodeList;

  declare class ElementList {
    length: number;
    item(index: number): Element;
  }
  declare export type $ElementList = ElementList;

  declare export class DOMParser {
    constructor(options?: {
      locator?: {...},
      errorHandler?: {
        warning?: (warn: Error) => any,
        error?: (error: Error) => any,
        fatalError?: (error: Error) => any,
        ...
      },
      ...
    }): DOMParser;

      parseFromString(xmlsource: string, mimeType?: string): Document;
  }

  declare export class DOMImplementation {
    createDocument(namespaceURI?: string, qualifiedName?: string, doctype?: string): Document;
  }

  declare export class XMLSerializer {
    serializeToString(node: Node): string;
  }
  declare export type $XMLSerializer = XMLSerializer;

  declare export default {
    DOMParser: typeof DOMParser,
    DOMImplementation: typeof DOMImplementation,
    XMLSerializer: typeof XMLSerializer,
    ...
  };
}
