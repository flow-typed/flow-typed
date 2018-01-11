import type { Callback } from "callback.flow"

interface Source<x, a> {
  (end: boolean, callback: Callback<x | true, a>): void;
}

interface Through<-x, x2, -a, a2> {
  <x, a>(Source<x, a>): Source<x2, a2>;
}

interface Sink<x, a> {
  (Source<x, a>): void;
}

interface Pull {
  // (Source<x1, a1>, ...Through<*, *, *, *>, Sink<x, a>) => void
  // Note we've entyped up to 8 through streams if you want more join them
  // through `pull` and stick one instead.
  <x1, x2, x3, x4, x5, x6, x7, x, a1, a2, a3, a4, a5, a6, a7, a>(
    Source<x, a>,
    Sink<x, a>
  ): void;
  <x1, x2, x3, x4, x5, x6, x7, x, a1, a2, a3, a4, a5, a6, a7, a>(
    Source<x1, a1>,
    Through<x1, x, a1, a>,
    Sink<x, a>
  ): void;
  <x1, x2, x3, x4, x5, x6, x7, x, a1, a2, a3, a4, a5, a6, a7, a>(
    Source<x1, a1>,
    Through<x1, x2, a1, a2>,
    Through<x2, x, a2, a>,
    Sink<x, a>
  ): void;
  <x1, x2, x3, x4, x5, x6, x7, x, a1, a2, a3, a4, a5, a6, a7, a>(
    Source<x1, a1>,
    Through<x1, x2, a1, a2>,
    Through<x2, x3, a2, a3>,
    Through<x2, x3, a2, a3>,
    Through<x3, x, a3, a>,
    Sink<x, a>
  ): void;
  <x1, x2, x3, x4, x5, x6, x7, x, a1, a2, a3, a4, a5, a6, a7, a>(
    Source<x1, a1>,
    Through<x1, x2, a1, a2>,
    Through<x2, x3, a2, a3>,
    Through<x2, x3, a2, a3>,
    Through<x3, x4, a3, a4>,
    Through<x4, x, a4, a>,
    Sink<x, a>
  ): void;
  <x1, x2, x3, x4, x5, x6, x7, x, a1, a2, a3, a4, a5, a6, a7, a>(
    Source<x1, a1>,
    Through<x1, x2, a1, a2>,
    Through<x2, x3, a2, a3>,
    Through<x2, x3, a2, a3>,
    Through<x3, x4, a3, a4>,
    Through<x4, x5, a4, a5>,
    Through<x5, x, a5, a>,
    Sink<x, a>
  ): void;
  <x1, x2, x3, x4, x5, x6, x7, x, a1, a2, a3, a4, a5, a6, a7, a>(
    Source<x1, a1>,
    Through<x1, x2, a1, a2>,
    Through<x2, x3, a2, a3>,
    Through<x2, x3, a2, a3>,
    Through<x3, x4, a3, a4>,
    Through<x4, x5, a4, a5>,
    Through<x5, x6, a5, a6>,
    Through<x6, x, a6, a>,
    Sink<x, a>
  ): void;
  <x1, x2, x3, x4, x5, x6, x7, x, a1, a2, a3, a4, a5, a6, a7, a>(
    Source<x1, a1>,
    Through<x1, x2, a1, a2>,
    Through<x2, x3, a2, a3>,
    Through<x2, x3, a2, a3>,
    Through<x3, x4, a3, a4>,
    Through<x4, x5, a4, a5>,
    Through<x5, x6, a5, a6>,
    Through<x6, x7, a6, a7>,
    Through<x7, x, a7, a>,
    Sink<x, a>
  ): void;

  // (Source<x1, a1>, ...Through<*, *, *, *>) => Source<x, a>
  // Again we allow up to 8 through streams if you need more use multiple
  // `pull`'s.
  <x1, x2, x3, x4, x5, x6, x7, x, a1, a2, a3, a4, a5, a6, a7, a>(
    Source<x1, a1>,
    Through<x1, x, a1, a>
  ): Source<x, a>;
  <x1, x2, x3, x4, x5, x6, x7, x, a1, a2, a3, a4, a5, a6, a7, a>(
    Source<x1, a1>,
    Through<x1, x2, a1, a2>,
    Through<x2, x, a2, a>
  ): Source<x, a>;
  <x1, x2, x3, x4, x5, x6, x7, x, a1, a2, a3, a4, a5, a6, a7, a>(
    Source<x1, a1>,
    Through<x1, x2, a1, a2>,
    Through<x2, x3, a2, a3>,
    Through<x3, x, a3, a>
  ): Source<x, a>;
  <x1, x2, x3, x4, x5, x6, x7, x, a1, a2, a3, a4, a5, a6, a7, a>(
    Source<x1, a1>,
    Through<x1, x2, a1, a2>,
    Through<x2, x3, a2, a3>,
    Through<x3, x4, a3, a4>,
    Through<x4, x, a4, a>
  ): Source<x, a>;
  <x1, x2, x3, x4, x5, x6, x7, x, a1, a2, a3, a4, a5, a6, a7, a>(
    Source<x1, a1>,
    Through<x1, x2, a1, a2>,
    Through<x2, x3, a2, a3>,
    Through<x3, x4, a3, a4>,
    Through<x4, x5, a4, a5>,
    Through<x5, x, a5, a>
  ): Source<x, a>;
  <x1, x2, x3, x4, x5, x6, x7, x, a1, a2, a3, a4, a5, a6, a7, a>(
    Source<x1, a1>,
    Through<x1, x2, a1, a2>,
    Through<x2, x3, a2, a3>,
    Through<x3, x4, a3, a4>,
    Through<x4, x5, a4, a5>,
    Through<x5, x6, a5, a6>,
    Through<x6, x, a6, a>
  ): Source<x, a>;
  <x1, x2, x3, x4, x5, x6, x7, x, a1, a2, a3, a4, a5, a6, a7, a>(
    Source<x1, a1>,
    Through<x1, x2, a1, a2>,
    Through<x2, x3, a2, a3>,
    Through<x3, x4, a3, a4>,
    Through<x4, x5, a4, a5>,
    Through<x5, x6, a5, a6>,
    Through<x6, x7, a6, a7>,
    Through<x7, x, a7, a>
  ): Source<x, a>;

  // (...Through<x, *, a, *>, Sink<*, *>) => Sink<x, a>
  <x1, x2, x3, x4, x5, x6, x7, x, a1, a2, a3, a4, a5, a6, a7, a>(
    Through<x, x1, a, a1>,
    Sink<x1, a1>
  ): Sink<x, a>;
  <x1, x2, x3, x4, x5, x6, x7, x, a1, a2, a3, a4, a5, a6, a7, a>(
    Through<x, x1, a, a1>,
    Through<x1, x2, a1, a2>,
    Sink<x2, a2>
  ): Sink<x, a>;
  <x1, x2, x3, x4, x5, x6, x7, x, a1, a2, a3, a4, a5, a6, a7, a>(
    Through<x, x1, a, a1>,
    Through<x1, x2, a1, a2>,
    Through<x2, x3, a2, a3>,
    Sink<x3, a3>
  ): Sink<x, a>;
  <x1, x2, x3, x4, x5, x6, x7, x, a1, a2, a3, a4, a5, a6, a7, a>(
    Through<x, x1, a, a1>,
    Through<x1, x2, a1, a2>,
    Through<x2, x3, a2, a3>,
    Through<x3, x4, a3, a4>,
    Sink<x4, a4>
  ): Sink<x, a>;
  <x1, x2, x3, x4, x5, x6, x7, x, a1, a2, a3, a4, a5, a6, a7, a>(
    Through<x, x1, a, a1>,
    Through<x1, x2, a1, a2>,
    Through<x2, x3, a2, a3>,
    Through<x3, x4, a3, a4>,
    Through<x4, x5, a4, a5>,
    Sink<x5, a5>
  ): Sink<x, a>;
  <x1, x2, x3, x4, x5, x6, x7, x, a1, a2, a3, a4, a5, a6, a7, a>(
    Through<x, x1, a, a1>,
    Through<x1, x2, a1, a2>,
    Through<x2, x3, a2, a3>,
    Through<x3, x4, a3, a4>,
    Through<x4, x5, a4, a5>,
    Through<x5, x6, a5, a6>,
    Sink<x6, a6>
  ): Sink<x, a>;
  <x1, x2, x3, x4, x5, x6, x7, x, a1, a2, a3, a4, a5, a6, a7, a>(
    Through<x, x1, a, a1>,
    Through<x1, x2, a1, a2>,
    Through<x2, x3, a2, a3>,
    Through<x3, x4, a3, a4>,
    Through<x4, x5, a4, a5>,
    Through<x5, x6, a5, a6>,
    Through<x6, x7, a6, a7>,
    Sink<x7, a7>
  ): Sink<x, a>;
  // (Through<x1, *, a1, *> ...Through<*, *, *, *> Through<*, x, *, a>) => Through<x1, x, a1, a>
  <x1, x2, x3, x4, x5, x6, x7, x, a1, a2, a3, a4, a5, a6, a7, a>(
    Through<x1, x2, a1, a2>,
    Through<x2, x, a2, a>
  ): Through<x1, x, a1, a>;
  <x1, x2, x3, x4, x5, x6, x7, x, a1, a2, a3, a4, a5, a6, a7, a>(
    Through<x1, x2, a1, a2>,
    Through<x2, x3, a2, a3>,
    Through<x3, x, a3, a>
  ): Through<x1, x, a1, a>;
  <x1, x2, x3, x4, x5, x6, x7, x, a1, a2, a3, a4, a5, a6, a7, a>(
    Through<x1, x2, a1, a2>,
    Through<x2, x3, a2, a3>,
    Through<x3, x4, a3, a4>,
    Through<x4, x, a4, a>
  ): Through<x1, x, a1, a>;
  <x1, x2, x3, x4, x5, x6, x7, x, a1, a2, a3, a4, a5, a6, a7, a>(
    Through<x1, x2, a1, a2>,
    Through<x2, x3, a2, a3>,
    Through<x3, x4, a3, a4>,
    Through<x4, x5, a4, a5>,
    Through<x5, x, a5, a>
  ): Through<x1, x, a1, a>;
  <x1, x2, x3, x4, x5, x6, x7, x, a1, a2, a3, a4, a5, a6, a7, a>(
    Through<x1, x2, a1, a2>,
    Through<x2, x3, a2, a3>,
    Through<x3, x4, a3, a4>,
    Through<x4, x5, a4, a5>,
    Through<x5, x6, a5, a6>,
    Through<x6, x, a6, a>
  ): Through<x1, x, a1, a>;
  <x1, x2, x3, x4, x5, x6, x7, x, a1, a2, a3, a4, a5, a6, a7, a>(
    Through<x1, x2, a1, a2>,
    Through<x2, x3, a2, a3>,
    Through<x3, x4, a3, a4>,
    Through<x4, x5, a4, a5>,
    Through<x5, x6, a5, a6>,
    Through<x6, x7, a6, a7>,
    Through<x7, x, a7, a>
  ): Through<x1, x, a1, a>;
}

interface PullStream extends Pull {
  // Sink
  drain: Drain;
  onEnd: OnEnd;
  log: Log;
  find: Find;
  reduce: Reduce;
  collect: Collect;
  concat: Concat;

  // Source
  count: Count;
  empty: Empty;
  error: Fail;
  infinite: Generate;
  keys: Keys;
  once: Once;
  values: Values;

  // Through
  map: Map;
  asyncMap: AsyncMap;
  filter: Filter;
  filterNot: Filter;
  through: Inspect;
  take: Take;
  unique: Unique;
  nonUnique: Unique;
  flatten: Flatten;
}

declare module "pull-stream" {
  declare export type Source = Source
  declare export type Through = Through
  declare export type Sink = Sink

  declare export default PullStream
}

declare module "pull-stream/index" {
  declare export default PullStream
}

declare module "pull-stream/pull" {
  declare export default Pull
}

interface Collect {
  <x, a>(Callback<x, a[]>): Sink<x, a>;
}

declare module "pull-stream/sinks/collect" {
  declare export default Collect
}

interface Concat {
  <x>(Callback<x, string>): Sink<x, string>;
}

declare module "pull-stream/sinks/concat" {
  declare export default Concat
}

interface Drain {
  <x, a>(op?: (a) => false | true | void, done?: Callback<x>): Sink<x, a>;
}

declare module "pull-stream/sinks/drain" {
  declare export default Drain
}

interface Find {
  <x, a>((a) => boolean, Callback<x, a | null>): Sink<x, a>;
}

declare module "pull-stream/sinks/find" {
  declare export default Find
}

declare module "pull-stream/sinks/index" {
  declare export var drain: Drain
  declare export var onEnd: OnEnd
  declare export var log: Log
  declare export var find: Find
  declare export var reduce: Reduce
  declare export var collect: Collect
  declare export var concat: Concat

  declare export type Sink = Sink
}

interface Log {
  <x, a>(Callback<x>): Sink<x, a>;
}

declare module "pull-stream/sinks/log" {
  declare export default Log
}

interface OnEnd {
  <x, a>(Callback<x>): Sink<x, a>;
}

declare module "pull-stream/sinks/on-end" {
  declare export default OnEnd
}

interface Reduce {
  <x, a, m>((m, a) => m, m, Callback<x>): Sink<x, a>;
}

declare module "pull-stream/sinks/reduce" {
  declare export default Reduce
}

interface Count {
  <x>(number): Source<x, number>;
}

declare module "pull-stream/sources/count" {
  declare export default Count
}

interface Empty {
  <x, a>(): Source<x, a>;
}

declare module "pull-stream/sources/empty" {
  declare export default Empty
}

interface Fail {
  <x, a>(error: x): Source<x, a>;
}

declare module "pull-stream/sources/error" {
  declare export default Fail
}

declare module "pull-stream/sources/index" {
  declare export var keys: Keys
  declare export var once: Once
  declare export var values: Values
  declare export var count: Count
  declare export var infinite: Generate
  declare export var empty: Empty
  declare export var error: Fail

  declare export type Source = Source
}

interface Generate {
  <x, a>(generate: () => a): Source<x, a>;
  <x>(): Source<x, number>;
}

declare module "pull-stream/sources/infinite" {
  declare export default Generate
}

interface Keys {
  <x, a>(a[], onAbort?: Callback<x>): Source<x, string>;
  <x, object>(object, onAbort?: Callback<x>): Source<x, $Keys<object>>;
}

declare module "pull-stream/sources/keys" {
  declare export default Keys
}

interface Once {
  <x, a>(a, onAbort?: Callback<x>): Source<x, a>;
}

declare module "pull-stream/sources/once" {
  declare export default Once
}

interface Values {
  <x, a>(a[], onAbort?: Callback<x>): Source<x, a>;
  <x, object>(object, onAbort?: Callback<x>): Source<x, $Values<object>>;
}

declare module "pull-stream/sources/values" {
  declare export default Values
}

interface AsyncMap {
  <x, y, a, b>((a, Callback<y, b>) => void): Through<x, y, a, b>;
}

declare module "pull-stream/throughs/async-map" {
  declare export default AsyncMap
}

declare module "pull-stream/throughs/filter-not" {
  declare export default Filter
}

interface Filter {
  <x, a>((a) => boolean): Through<x, x, a, a>;
}

declare module "pull-stream/throughs/filter" {
  declare export default Filter
}

interface Flatten {
  <x, a>(): Through<x, x, a[] | Source<x, a>, a>;
}

declare module "pull-stream/throughs/flatten" {
  declare export default Flatten
}

declare module "pull-stream/throughs/index" {
  declare export var map: Map
  declare export var asyncMap: AsyncMap
  declare export var filter: Filter
  declare export var filterNot: Filter
  declare export var through: Inspect
  declare export var take: Take
  declare export var unique: Unique
  declare export var nonUnique: Unique
  declare export var flatten: Flatten

  declare export type Through = Through
}

interface Map {
  <x, a, b>(f: (a) => b): Through<x, x, a, b>;
}

declare module "pull-stream/throughs/map" {
  declare export default Map
}

declare module "pull-stream/throughs/non-unique" {
  declare export default Unique
}

interface Take {
  <x, a>((a) => boolean, ?{ last?: boolean }): Through<x, x, a, a>;
}

declare module "pull-stream/throughs/take" {
  declare export default Take
}

interface Inspect {
  <x, a>(?(a) => mixed, ?Callback<x>): Through<x, x, a, a>;
}

declare module "pull-stream/throughs/through" {
  declare export default Inspect
}

interface Unique {
  <x, a, b>(string | RegExp | (a => b)): Through<x, x, a, a>;
}

declare module "pull-stream/throughs/unique" {
  declare export default Unique
}
