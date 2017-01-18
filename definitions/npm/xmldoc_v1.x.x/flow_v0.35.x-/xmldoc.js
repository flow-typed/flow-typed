/**
 * Flowtype definitions for xmldoc
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'xmldoc' {
    declare export class XmlDocument {
        constructor(xmlString: string): this;
        eachChild(func: (child: XmlElement, index?: number, array?: XmlElement[]) => void): void;
        childNamed(name: string): XmlElement;
        childrenNamed(name: string): XmlElement[];
        childWithAttribute(name: string, value?: string): XmlElement;
        descendantWithPath(path: string): XmlElement;
        valueWithPath(path: string): string;
        toString(opts?: XmlOptions): string
    }
    declare export class XmlElement {
        eachChild(func: (child: XmlElement, index?: number, array?: XmlElement[]) => void): void;
        childNamed(name: string): XmlElement;
        childrenNamed(name: string): XmlElement[];
        childWithAttribute(name: string, value?: string): XmlElement;
        descendantWithPath(path: string): XmlElement;
        valueWithPath(path: string): string;
        toString(opts?: XmlOptions): string
    }
    declare export interface XmlOptions {
        compressed?: boolean,
            trimmed?: boolean,
            preserveWhitespace?: boolean
    }
}