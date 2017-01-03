/**
 * Flowtype definitions for dot-object
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare type DotObject$DotConstructor = {
    new(separator: string): DotObject$Dot
} & DotObject$Dot


declare interface DotObject$ModifierFunctionWrapper {
    (arg: any): any
}

declare interface DotObject$Dot {

    /**
     * Copy a property from one object to another object.
     * 
    If the source path does not exist (undefined)
    the property on the other object will not be set.
     * @param  
     * @param  
     * @param  
     * @param  
     * @param  
     * @param  
    */
    copy(
            source: string,
            target: string,
            obj1: any,
            obj2: any,
            mods?: DotObject$ModifierFunctionWrapper | Array<DotObject$ModifierFunctionWrapper>,
            merge?: boolean): void,

        /**
         * Convert object to dotted-key/value pair
         * 
        Usage:

           var tgt = dot.dot(obj)

           or

           var tgt = {}
           dot.dot(obj, tgt)
         * @param  source object
         * @param  target object
        */
        dot(obj: any, tgt: any): void,

        /**
         * Remove value from an object using dot notation.
         * @param  
         * @param  
         * @return  The removed value
         */
        del(path: string, obj: any): any,

        /**
         * Move a property from one place to the other.
         * 
        If the source path does not exist (undefined)
        the target property will not be set.
         * @param  
         * @param  
         * @param  
         * @param  
         * @param  
        */
        move(
            source: string,
            target: string,
            obj: any,
            mods?: DotObject$ModifierFunctionWrapper | Array<DotObject$ModifierFunctionWrapper>,
            merge?: boolean): void,

        /**
         * Converts an object with dotted-key/value pairs to it's expanded version
         * 
        Optionally transformed by a set of modifiers.

        Usage:

           var row = {
             'nr': 200,
             'doc.name': '  My Document  '
           }

           var mods = {
             'doc.name': [_s.trim, _s.underscored]
           }

           dot.object(row, mods)
         * @param  
         * @param  
        */
        object(
            obj: any,
            mods?: DotObject$ModifierFunctionWrapper | Array<DotObject$ModifierFunctionWrapper>): void,

        /**
         * Pick a value from an object using dot notation.
         * 
        Optionally remove the value
         * @param  
         * @param  
         * @param  
        */
        pick(path: string, obj: any, remove?: boolean): void,

        /**
         * Remove value from an object using dot notation.
         * @param  
         * @param  
         * @return  The removed value
         */
        remove(path: string, obj: any): any,

        /**
         * 
         * @param  dotted path
         * @param  value to be set
         * @param  object to be modified
         * @param  optional modifier
         */
        str(
            path: string,
            v: any,
            obj: Object,
            mods?: DotObject$ModifierFunctionWrapper | Array<DotObject$ModifierFunctionWrapper>): void,

        /**
         * Transfer a property from one object to another object.
         * 
        If the source path does not exist (undefined)
        the property on the other object will not be set.
         * @param  
         * @param  
         * @param  
         * @param  
         * @param  
         * @param  
        */
        transfer(
            source: string,
            target: string,
            obj1: any,
            obj2: any,
            mods?: DotObject$ModifierFunctionWrapper | Array<DotObject$ModifierFunctionWrapper>,
            merge?: boolean): void,

        /**
         * Transform an object
         * 
        Usage:

           var obj = {
             "id": 1,
         "some": {
         "thing": "else"
         }
           }

           var transform = {
             "id": "nr",
         "some.thing": "name"
           }

           var tgt = dot.transform(transform, obj)
         * @param  Transform recipe
         * @param  Object to be transformed
         * @param  modifiers for the target
        */
        transform(
            recipe: any,
            obj: any,
            mods?: DotObject$ModifierFunctionWrapper | Array<DotObject$ModifierFunctionWrapper>): void
}
declare var dot: DotObject$DotConstructor;
declare module 'dot-object' {
    declare module.exports: typeof dot
}