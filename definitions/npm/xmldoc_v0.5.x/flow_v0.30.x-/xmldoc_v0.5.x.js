declare module 'xmldoc' {
  declare type ToStringOptions = {
    compressed?: boolean,
    trimmed?: boolean,
    preserveWhitespace?: boolean
  };

  declare class XmlElement {
    name: string;
    attr: { [key: string]: mixed };
    val: string;
    isValCdata: boolean;
    isValComment: boolean;
    children: [XmlElement];
    firstChild: XmlElement;
    lastChild: XmlElement;
    line: number;
    column: number;
    position: number;
    startTagPosition: number;

    eachChild(iteratee: (child:XmlElement, index:number, array:[XmlElement])=>void, context?:this): void;
    childNamed(name: string): XmlElement | void;
    childrenNamed(name: string): [XmlElement];
    childWithAttribute(name: string, value: mixed): XmlElement | void;
    descendantWithPath(path: string): XmlElement | void;
    valueWithPath(path: string): string | void;
    toString(options?: ToStringOptions): string;
  }

  declare class XmlDocument extends XmlElement {
    constructor(xml: string): XmlElement;
  }

  declare type $XmlElement = XmlElement;

  declare module.exports: {
    XmlDocument: typeof XmlDocument,
  };
}
