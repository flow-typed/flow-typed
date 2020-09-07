/* @flow */

import type {LRUCache} from 'lru-cache';

import LRU from 'lru-cache';

const cache: LRUCache<string, number> = LRU({});

cache.set('5', 5);

// $FlowExpectedError
cache.set(5, 5);
// $FlowExpectedError
cache.set('5', '5');

(cache.get('3'): number);
// $FlowExpectedError
(cache.get('3'): string);

// $FlowExpectedError
LRU({max: {}});
