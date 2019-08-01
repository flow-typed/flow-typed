declare module "quill-delta" {
  declare type Operation = {
    insert?: string | Object,
    retain?: number,
    delete?: number,
    attributes?: Object
  };

  declare class Delta {
    ops: Operation[],

    constructor(): Delta,
    constructor(ops: Operation[]): Delta,
    constructor(delta: { ops: Operation[] }): Delta,

    insert(text: string, attributes?: Object): Delta,
    insert(embed: Object, attributes?: Object): Delta,

    delete(length: number): Delta,

    retain(length: number, attributes?: Object): Delta,

    concat(other: Delta): Delta,

    diff(other: Delta, index?: number): Delta,

    eachLine(
      predicate: (line: Delta, attributes: Object, i: number) => void,
      newLine?: string
    ): void,

    filter(predicate: (op: Operation) => boolean): Operation[],

    forEach(predicate: (op: Operation) => void): void,

    length(): number,

    map<M>(predicate: (op: Operation) => M): M[],

    partition(
      predicate: (op: Operation) => boolean
    ): [Operation[], Operation[]],

    reduce<R>(
      predicate: (previousValue: R, op: Operation) => R,
      initialValue: R
    ): R,

    slice(): Delta,
    slice(start: number): Delta,
    slice(start: number, end: number): Delta,

    compose(other: Delta): Delta,

    transform(other: Delta, priority?: boolean): Delta,
    transform(index: number): number,

    transformPosition(index: number): number
  }

  declare module.exports: Class<Delta>;
}
