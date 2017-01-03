// @flow
/**
 * Flowtype definitions for sass-graph
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */


declare var npm$namespace$SassGraph: {
    parseFile: typeof SassGraph$parseFile,
    parseDir: typeof SassGraph$parseDir,
}
declare export interface SassGraph$Options {
    loadPath?: string[],
        extensions?: string[]
}

declare type SassGraph$Node = {
    [filepath: string]: {
        imports: string[],
        importedBy: string[],
        modified: string
    }
};


/**
 * 
 * @class  Graph
 */
declare export interface SassGraph$Graph {
    dir: string,
        loadPaths: string[],
        extensions: string[],
        index: SassGraph$Node,

        /**
         * Add a sass file to the graph
         * @param  Path to the file to visit
         * @param  Parent filepath
         */
        addFile(filepath: string, parent?: string): void,

        /**
         * visits all files that are ancestors of the provided file
         * @param  Path to the file to visit
         * @param  Called when a node is visited
         */
        visitAncestors(filepath: string, callback: (edge: string, node: SassGraph$Node) => any): void,

        /**
         * Visits all files that are descendents of the provided file
         * @param  Path to the file to visit
         * @param  Called when a node is visited
         */
        visitDescendents(filepath: string, callback: (edge: string, node: SassGraph$Node) => any): void,

        /**
         * A generic visitor that uses an edgeCallback to find the edges to traverse
         * for a node
         * @param  Path to the file to visit
         * @param  Called when a node is visited
         * @param  Called when we reach an edge
         * @param  Visited edges
         */
        visit(
            filepath: string,
            callback: (edge: string, node: SassGraph$Node) => any,
            edgeCallback: (errorMsg: string, node: SassGraph$Node) => any,
            visited?: string[]): void
}


/**
 * 
 * @function  {parseFile} Get the dependency tree of a single file
 * @param  Path to file which should be parsed
 * @param  Parsing options
 * @return  
 */
declare export function SassGraph$parseFile(filepath: string, options?: SassGraph$Options): SassGraph$Graph


/**
 * 
 * @function  {parseDir} Get the dependency tree of all sass files in a folder
 * @param  Folder which should be parsed
 * @param  Parsing options
 * @return  
 */
declare export function SassGraph$parseDir(dirpath: string, options?: SassGraph$Options): SassGraph$Graphdeclare module 'sass-graph' {
    declare module.exports: typeof SassGraph
}