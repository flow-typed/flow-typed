// @flow
/**
 * Flowtype definitions for xml-parser
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'xml-parser' {
    declare module.exports: typeof parse
    declare     export interface parse$Document {
        declaration: parse$Declaration,
            root: parse$Node
    }

    declare     export interface parse$Declaration {
        attributes: parse$Attributes
    }

    declare     export interface parse$Node {
        name: string,
            attributes: parse$Attributes,
            children: parse$Node[],
            content?: string
    }

    declare     export interface parse$Attributes {
        [name: string]: string
    }
}