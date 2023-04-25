// @flow

declare module 'fuse.js' {
  declare export default typeof Fuse;
  declare class Fuse<T> {
    constructor(
      list: $ReadOnlyArray<T>,
      options?: Fuse$IFuseOptions<T>,
      index?: Fuse$FuseIndex<T>
    ): this;

    /**
     * Search function for the Fuse instance.
     *
     * ```typescript
     * const list: MyType[] = [myType1, myType2, etc...]
     *
     * const options: Fuse.IFuseOptions<MyType> = {
     *  keys: ['key1', 'key2']
     * }
     *
     * const myFuse = new Fuse(list, options)
     * let result = myFuse.search('pattern')
     * ```
     * @param pattern The pattern to search
     * @param options `Fuse.FuseSearchOptions`
     * @returns An array of search results
     */
    search<R>(
      pattern: string | Fuse$Expression,
      options?: Fuse$FuseSearchOptions
    ): Fuse$FuseResult<R>[];
    setCollection(docs: $ReadOnlyArray<T>, index?: Fuse$FuseIndex<T>): void;

    /**
     * Adds a doc to the end the list.
     */
    add(doc: T): void;

    /**
     * Removes all documents from the list which the predicate returns truthy for,
     * and returns an array of the removed docs.
     * The predicate is invoked with two arguments: (doc, index).
     */
    remove(predicate: (doc: T, idx: number) => boolean): T[];

    /**
     * Removes the doc at the specified index.
     */
    removeAt(idx: number): void;

    /**
     * Returns the generated Fuse index
     */
    getIndex(): Fuse$FuseIndex<T>;

    /**
     * Return the current version.
     */
    static version: string;

    /**
     * Use this method to pre-generate the index from the list, and pass it
     * directly into the Fuse instance.
     *
     * _Note that Fuse will automatically index the table if one isn't provided
     * during instantiation._
     *
     * ```typescript
     * const list: MyType[] = [myType1, myType2, etc...]
     *
     * const index = Fuse.createIndex<MyType>(
     *  keys: ['key1', 'key2']
     *  list: list
     * )
     *
     * const options: Fuse.IFuseOptions<MyType> = {
     *  keys: ['key1', 'key2']
     * }
     *
     * const myFuse = new Fuse(list, options, index)
     * ```
     * @param keys The keys to index
     * @param list The list from which to create an index
     * @param options ?
     * @returns An indexed list
     */
    static createIndex<U>(
      keys: Array<Fuse$FuseOptionKey<U>>,
      list: $ReadOnlyArray<U>,
      options?: Fuse$FuseIndexOptions<U>
    ): Fuse$FuseIndex<U>;
    static parseIndex<U>(
      index: any,
      options?: Fuse$FuseIndexOptions<U>
    ): Fuse$FuseIndex<U>;
    static config: typeof Fuse$config;
    static FuseIndex: typeof Fuse$FuseIndex;
  }

  declare export class Fuse$FuseIndex<T> {
    constructor(options?: Fuse$FuseIndexOptions<T>): this;
    setSources(docs: $ReadOnlyArray<T>): void;
    setKeys(keys: $ReadOnlyArray<string>): void;
    setIndexRecords(records: Fuse$FuseIndexRecords): void;
    create(): void;
    add(doc: T): void;
    toJSON(): {
      keys: $ReadOnlyArray<string>,
      records: Fuse$FuseIndexRecords,
      ...
    };
  }

  declare type Fuse$FuseGetFunction<T> = (
    obj: T,
    path: string | string[]
  ) => $ReadOnlyArray<string> | string;

  declare export type Fuse$FuseIndexOptions<T> = {
    getFn: Fuse$FuseGetFunction<T>,
    ...
  };

  declare export type Fuse$FuseSortFunctionItem = {
    [key: string]:
      | {
          $: string,
          ...
        }
      | {
          $: string,
          idx: number,
          ...
        }[],
    ...
  };

  declare export type Fuse$FuseSortFunctionMatch = {
    score: number,
    key: string,
    value: string,
    indices: $ReadOnlyArray<number>[],
    ...
  };

  declare export type Fuse$FuseSortFunctionMatchList = {
    ...Fuse$FuseSortFunctionMatch,
    ...{
      idx: number,
      ...
    },
    ...
  };

  declare export type Fuse$FuseSortFunctionArg = {
    idx: number,
    item: Fuse$FuseSortFunctionItem,
    score: number,
    matches?: (Fuse$FuseSortFunctionMatch | Fuse$FuseSortFunctionMatchList)[],
    ...
  };

  declare export type Fuse$FuseSortFunction = (
    a: Fuse$FuseSortFunctionArg,
    b: Fuse$FuseSortFunctionArg
  ) => number;

  declare type Fuse$RecordEntryObject = {
    v: string,
    n: number,
    ...
  };

  declare type Fuse$RecordEntryArrayItem = $ReadOnlyArray<{
    ...Fuse$RecordEntryObject,
    ...{
      i: number,
      ...
    },
    ...
  }>;

  declare type Fuse$RecordEntry = {
    [key: string]: Fuse$RecordEntryObject | Fuse$RecordEntryArrayItem,
    ...
  };

  declare type Fuse$FuseIndexObjectRecord = {
    i: number,
    $: Fuse$RecordEntry,
    ...
  };

  declare type Fuse$FuseIndexStringRecord = {
    i: number,
    v: string,
    n: number,
    ...
  };

  declare type Fuse$FuseIndexRecords =
    | $ReadOnlyArray<Fuse$FuseIndexObjectRecord>
    | $ReadOnlyArray<Fuse$FuseIndexStringRecord>;

  declare export type Fuse$FuseOptionKeyObject<T> = {
    name: string | string[],
    weight?: number,
    getFn?: (obj: T) => $ReadOnlyArray<string> | string,
    ...
  };

  declare export type Fuse$FuseOptionKey<T> =
    | Fuse$FuseOptionKeyObject<T>
    | string
    | string[];

  declare interface RequiredIFuseOptions<T> {
    /**
     * Indicates whether comparisons should be case sensitive.
     */
    isCaseSensitive: boolean;

    /**
     * Determines how close the match must be to the fuzzy location (specified by `location`). An exact letter match which is `distance` characters away from the fuzzy location would score as a complete mismatch. A `distance` of `0` requires the match be at the exact `location` specified. A distance of `1000` would require a perfect match to be within `800` characters of the `location` to be found using a `threshold` of `0.8`.
     */
    distance: number;

    /**
     * When true, the matching function will continue to the end of a search pattern even if a perfect match has already been located in the string.
     */
    findAllMatches: boolean;

    /**
     * The function to use to retrieve an object's value at the provided path. The default will also search nested paths.
     */
    getFn: Fuse$FuseGetFunction<T>;

    /**
     * When `true`, search will ignore `location` and `distance`, so it won't matter where in the string the pattern appears.
     */
    ignoreLocation: boolean;

    /**
     * When `true`, the calculation for the relevance score (used for sorting) will ignore the `field-length norm`.
     */
    ignoreFieldNorm: boolean;

    /**
     * Determines how much the `field-length norm` affects scoring. A value of `0` is equivalent to ignoring the field-length norm. A value of `0.5` will greatly reduce the effect of field-length norm, while a value of `2.0` will greatly increase it.
     */
    fieldNormWeight: number;

    /**
     * Whether the matches should be included in the result set. When `true`, each record in the result set will include the indices of the matched characters. These can consequently be used for highlighting purposes.
     */
    includeMatches: boolean;

    /**
     * Whether the score should be included in the result set. A score of `0`indicates a perfect match, while a score of `1` indicates a complete mismatch.
     */
    includeScore: boolean;

    /**
     * List of keys that will be searched. This supports nested paths, weighted search, searching in arrays of `strings` and `objects`.
     */
    keys: Array<Fuse$FuseOptionKey<T>>;

    /**
     * Determines approximately where in the text is the pattern expected to be found.
     */
    location: number;

    /**
     * Only the matches whose length exceeds this value will be returned. (For instance, if you want to ignore single character matches in the result, set it to `2`).
     */
    minMatchCharLength: number;

    /**
     * Whether to sort the result list, by score.
     */
    shouldSort: boolean;

    /**
     * The function to use to sort all the results. The default will sort by ascending relevance score, ascending index.
     */
    sortFn?: Fuse$FuseSortFunction;

    /**
     * At what point does the match algorithm give up. A threshold of `0.0` requires a perfect match (of both letters and location), a threshold of `1.0` would match anything.
     */
    threshold: number;

    /**
     * When `true`, it enables the use of unix-like search commands. See [example](/examples.html#extended-search).
     */
    useExtendedSearch: boolean;
  }
  declare export type Fuse$IFuseOptions<T> = $Shape<RequiredIFuseOptions<T>>;

  declare type Fuse$RangeTuple = [number, number];

  declare export type Fuse$FuseResultMatch = {
    indices: $ReadOnlyArray<Fuse$RangeTuple>,
    key?: string,
    refIndex?: number,
    value?: string,
    ...
  };

  declare export type Fuse$FuseSearchOptions = {
    limit: number,
    ...
  };

  declare export type Fuse$FuseResult<T> = {
    item: T,
    refIndex: number,
    score?: number,
    matches?: $ReadOnlyArray<Fuse$FuseResultMatch>,
    ...
  };

  declare export type Fuse$Expression =
    | {
        [key: string]: string,
        ...
      }
    | {
        $path: $ReadOnlyArray<string>,
        $val: string,
        ...
      }
    | {
        $and?: Fuse$Expression[],
        ...
      }
    | {
        $or?: Fuse$Expression[],
        ...
      };

  declare export var Fuse$config: RequiredIFuseOptions<any>;
}
