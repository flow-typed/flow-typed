// @flow
import {
  assign,
  assignIn,
  assignWith,
  at,
  bindAll,
  bindKey,
  castArray,
  chain,
  chunk,
  compact,
  concat,
  cond,
  conforms,
  constant,
  countBy,
  create,
  defaults,
  defaultsDeep,
  difference,
  differenceBy,
  differenceWith,
  drop,
  dropRight,
  dropRightWhile,
  dropWhile,
  fill,
  filter,
  flatMap,
  flatMapDeep,
  flatMapDepth,
  flatten,
  flattenDeep,
  flattenDepth,
  flow,
  flowRight,
  fromPairs,
  functions,
  functionsIn,
  groupBy,
  initial,
  intersection,
  intersectionBy,
  invert,
  invertBy,
  invokeMap,
  iteratee,
  keyBy,
  keys,
  keysIn,
  map,
  mapKeys,
  mapValues,
  matches,
  matchesProperty,
  merge,
  mergeWith,
  method,
  methodOf,
  nthArg,
  omit,
  omitBy,
  orderBy,
  over,
  overArgs,
  overEvery,
  overSome,
  partition,
  pick,
  pickBy,
  property,
  propertyOf,
  pull,
  pullAll,
  pullAllBy,
  pullAllWith,
  pullAt,
  rangeRight,
  reject,
  remove,
  reverse,
  sampleSize,
  set,
  setWith,
  shuffle,
  slice,
  sortBy,
  sortedUniq,
  sortedUniqBy,
  split,
  tail,
  take,
  takeRight,
  takeRightWhile,
  takeWhile,
  toArray,
  toPairs,
  toPairsIn,
  toPath,
  toPlainObject,
  transform,
  union,
  unionBy,
  unionWith,
  uniq,
  uniqBy,
  uniqWith,
  unset,
  unzip,
  unzipWith,
  update,
  updateWith,
  values,
  valuesIn,
  without,
  words,
  wrap,
  xor,
  xorBy,
  xorWith,
  zip,
  zipObject,
  zipObjectDeep,
  zipWith,
  entries,
  entriesIn,
  extend,
  extendWith,
  camelCase,
  capitalize,
  clamp,
  clone,
  cloneDeep,
  cloneDeepWith,
  cloneWith,
  deburr,
  defaultTo,
  endsWith,
  eq,
  escape,
  escapeRegExp,
  find,
  findIndex,
  findKey,
  findLast,
  findLastIndex,
  findLastKey,
  forEach,
  forEachRight,
  forIn,
  forInRight,
  forOwn,
  forOwnRight,
  get,
  gt,
  gte,
  has,
  hasIn,
  head,
  identity,
  includes,
  indexOf,
  invoke,
  isArguments,
  isArray,
  isArrayBuffer,
  isArrayLike,
  isArrayLikeObject,
  isBoolean,
  isBuffer,
  isDate,
  isElement,
  isEmpty,
  isEqual,
  isEqualWith,
  isError,
  isFinite,
  isFunction,
  isInteger,
  isLength,
  isMap,
  isMatch,
  isMatchWith,
  isNaN,
  isNative,
  isNil,
  isNull,
  isNumber,
  isObject,
  isObjectLike,
  isPlainObject,
  isRegExp,
  isSafeInteger,
  isSet,
  isString,
  isSymbol,
  isTypedArray,
  isUndefined,
  isWeakMap,
  isWeakSet,
  join,
  kebabCase,
  last,
  lastIndexOf,
  lowerCase,
  lowerFirst,
  lt,
  lte,
  max,
  min,
  stubArray,
  stubFalse,
  stubObject,
  stubString,
  stubTrue,
  nth,
  noop,
  now,
  pad,
  padEnd,
  padStart,
  reduce,
  reduceRight,
  repeat,
  replace,
  result,
  runInContext,
  sample,
  snakeCase,
  some,
  sortedIndex,
  sortedIndexBy,
  sortedIndexOf,
  sortedLastIndex,
  sortedLastIndexBy,
  sortedLastIndexOf,
  startCase,
  startsWith,
  template,
  times,
  toFinite,
  toInteger,
  toLength,
  toLower,
  toNumber,
  toSafeInteger,
  toString,
  toUpper,
  trim,
  trimEnd,
  trimStart,
  truncate,
  unescape,
  uniqueId,
  upperCase,
  upperFirst,
  each,
  eachRight,
  first,
} from "lodash-es";

(assign(): {});
(assignIn(): {});
(assignWith(): {});
(at(): Array<*>);
(bindAll(): void);
(bindKey(): Function);
(castArray(): Array<*>);
(chain(null): null);
(chunk(null, null): Array<*>);
(compact(null): Array<*>);
(concat(): Array<*>);
(cond(null): Function);
(conforms(null): Function);
(constant(null): Function);
(countBy(null, null): {});
(create(null, null): {});
(defaults(): {});
(defaultsDeep(): {});
(difference(): Array<*>);
(differenceBy(): Array<*>);
(differenceWith(): Array<*>);
(drop(null, null): Array<*>);
(dropRight(null, null): Array<*>);
(dropRightWhile(null, null): Array<*>);
(dropWhile(null, null): Array<*>);
(fill(null, null, null, null): Array<*>);
(filter(null, null): Array<*>);
(flatMap(null, null): Array<*>);
(flatMapDeep(null, null): Array<*>);
(flatMapDepth(null, null, null): Array<*>);
(flatten(null): Array<*>);
(flattenDeep(null): Array<*>);
(flattenDepth(null, null): Array<*>);
(flow(): Function);
(flowRight(): Function);
(fromPairs(null): {});
(functions(null): Array<*>);
(functionsIn(null): Array<*>);
(groupBy(null, null): {});
(initial(null): Array<*>);
(intersection(): Array<*>);
(intersectionBy(): Array<*>);
(invert(null, null): {});
(invertBy(null, null): {});
(invokeMap(): Array<*>);
(iteratee(null): Function);
(keyBy(null, null): {});
(keys(null): Array<*>);
(keysIn(null): Array<*>);
(map(null, null): Array<*>);
(mapKeys(null, null): {});
(mapValues(null, null): {});
(matches(null): Function);
(matchesProperty(null, null): Function);
(merge(): {});
(mergeWith(): {});
(method(): Function);
(methodOf(): Function);
(nthArg(null): Function);
(omit(): {});
(omitBy(null, null): {});
(orderBy(null, null, null): Array<*>);
(over(): Function);
(overArgs(): Function);
(overEvery(): Function);
(overSome(): Function);
(partition(null, null): [Array<*>,Array<*>]);
(pick(): {});
(pickBy(null, null): {});
(property(null): Function);
(propertyOf(null): Function);
(pull(): void);
(pullAll(null, null): null);
(pullAllBy(null, null, null): null);
(pullAllWith(null, null, null): null);
(pullAt(): Array<*>);
(rangeRight(null, null, null): Array<*>);
(reject(null, null): Array<*>);
(remove(null, null): Array<*>);
(reverse(null): null);
(sampleSize(null, null): Array<*>);
(set(null, null, null): null);
(setWith(null, null, null, null): null);
(shuffle(null): Array<*>);
(slice(null, null, null): Array<*>);
(sortBy(): Array<*>);
(sortedUniq(null): Array<*>);
(sortedUniqBy(null, null): Array<*>);
(split(null, null, null): Array<*>);
(tail(null): Array<*>);
(take(null, null): Array<*>);
(takeRight(null, null): Array<*>);
(takeRightWhile(null, null): Array<*>);
(takeWhile(null, null): Array<*>);
(toArray(null): Array<*>);
(toPairs(null): Array<*>);
(toPairsIn(null): Array<*>);
(toPath(null): Array<*>);
(toPlainObject(null): {});
(transform(null, null, null): {});
(union(): Array<*>);
(unionBy(): Array<*>);
(unionWith(): Array<*>);
(uniq(null): Array<*>);
(uniqBy(null, null): Array<*>);
(uniqWith(null, null): Array<*>);
(unset(null, null): true);
(unzip(null): Array<*>);
(unzipWith(null, null): Array<*>);
(update(null, null, null): null);
(updateWith(null, null, null, null): null);
(values(null): Array<*>);
(valuesIn(null): Array<*>);
(without(): Array<*>);
(words(null, null): Array<*>);
(wrap(null, null): Function);
(xor(): Array<*>);
(xorBy(): Array<*>);
(xorWith(): Array<*>);
(zip(): Array<*>);
(zipObject(null, null): {});
(zipObjectDeep(null, null): {});
(zipWith(): Array<*>);
(entries(null): Array<*>);
(entriesIn(null): Array<*>);
(extend(): Object);
(extendWith(): Object);
(camelCase(null): '');
(capitalize(null): '');
(clamp(null, null, null): 0);
(clone(null): null);
(cloneDeep(null): null);
(cloneDeepWith(null, null): null);
(cloneWith(null, null): null);
(deburr(null): '');
(defaultTo(null, null): null);
(endsWith(null, null, null): false);
(eq(null, null): boolean);
(escape(null): '');
(escapeRegExp(null): '');
(find(null, null, null): void);
(findIndex(null, null, null): -1);
(findKey(null, null): void);
(findLast(null, null, null): void);
(findLastIndex(null, null, null): -1);
(findLastKey(null, null): void);
(forEach(null, null): null);
(forEachRight(null, null): null);
(forIn(null, null): null);
(forInRight(null, null): null);
(forOwn(null, null): null);
(forOwnRight(null, null): null);
(get(null, null, null): null);
(gt(null, null): boolean);
(gte(null, null): boolean);
(has(null, null): false);
(hasIn(null, null): false);
(head(null): void);
(identity(null): null);
(includes(null, null, null): false);
(indexOf(null, null, null): -1);
(invoke(): void);
(isArguments(null): false);
(isArray(null): false);
(isArrayBuffer(null): false);
(isArrayLike(null): false);
(isArrayLikeObject(null): false);
(isBoolean(null): false);
(isBuffer(): false);
(isDate(null): false);
(isElement(null): false);
(isEmpty(null): true);
(isEqual(null, null): boolean);
(isEqualWith(null, null, null): boolean);
(isError(null): false);
(isFinite(null): false);
(isFunction(null): false);
(isInteger(null): false);
(isLength(null): false);
(isMap(null): false);
(isMatch(null, null): boolean);
(isMatchWith(null, null, null): boolean);
(isNaN(null): false);
(isNative(null): false);
(isNil(null): true);
(isNull(null): true);
(isNumber(null): false);
(isObject(null): false);
(isObjectLike(null): false);
(isPlainObject(null): false);
(isRegExp(null): false);
(isSafeInteger(null): false);
(isSet(null): false);
(isString(null): false);
(isSymbol(null): false);
(isTypedArray(null): false);
(isUndefined(null): false);
(isWeakMap(null): false);
(isWeakSet(null): false);
(join(null, null): '');
(kebabCase(null): '');
(last(null): void);
(lastIndexOf(null, null, null): -1);
(lowerCase(null): '');
(lowerFirst(null): '');
(lt(null, null): boolean);
(lte(null, null): boolean);
(max(null): void);
(min(null): void);
(stubArray(): Array<*>);
(stubFalse(): false);
(stubObject(): {});
(stubString(): '');
(stubTrue(): true);
(nth(null, null): void);
(noop(): void);
(now(): number);
(pad(null, null, null): string);
(padEnd(null, null, null): string);
(padStart(null, null, null): string);
(reduce(null, null): void | null);
(reduceRight(null, null): void | null);
(repeat(null, null): '');
(replace(): '');
(result(null, null, null): null);
(runInContext(null): Function);
(sample(null): void);
(snakeCase(null): '');
(some(null, null): false);
(sortedIndex(null, null): 0);
(sortedIndexBy(null, null, null): 0);
(sortedIndexOf(null, null): -1);
(sortedLastIndex(null, null): 0);
(sortedLastIndexBy(null, null, null): 0);
(sortedLastIndexOf(null, null): -1);
(startCase(null): '');
(startsWith(null, null, null): false);
(template(null, null): Function);
(times(null, null): Array<*>);
(toFinite(null): 0);
(toInteger(null): 0);
(toLength(null): 0);
(toLower(null): '');
(toNumber(null): 0);
(toSafeInteger(null): 0);
(toString(null): '');
(toUpper(null): '');
(trim(null, null): '');
(trimEnd(null, null): '');
(trimStart(null, null): '');
(truncate(null, null): '');
(unescape(null): '');
(uniqueId(null): string);
(upperCase(null): '');
(upperFirst(null): '');
(each(null, null): null);
(eachRight(null, null): null);
(first(null): void);
