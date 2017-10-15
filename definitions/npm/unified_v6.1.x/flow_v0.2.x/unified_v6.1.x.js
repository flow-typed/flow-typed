type Unified$processor = {
    data(key:string, value:mixed):function,
    freeze():function,
    attachers:Array,
    use(value:mixed):function,
    parse(doc:mixed):function,
    stringify(node:mixed,doc:mixed):function,
    run(node:mixed,file:mixed,callback:function):function,
    runSync(node:mixed, file:mixed):function,
    process(doc:mixed, callback:function):function,
    processSync(doc:mixed):function
}

declare module 'unified' {
    declare class Unified {
        unified():Unified$processor
    }

    declare var exports: Unified
}