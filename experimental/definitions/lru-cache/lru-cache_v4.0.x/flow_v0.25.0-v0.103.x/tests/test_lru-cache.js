/* @flow */

import type {LRUCache} from 'lru-cache';

import LRU from 'lru-cache';

const cache: LRUCache<string, number> = LRU({});

cache.set('5', 5);

// $ExpectError
cache.set(5, 5);
// $ExpectError
cache.set('5', '5');

(cache.get('3'): number);
// $ExpectError
(cache.get('3'): string);

// $ExpectError
LRU({max: {}});
