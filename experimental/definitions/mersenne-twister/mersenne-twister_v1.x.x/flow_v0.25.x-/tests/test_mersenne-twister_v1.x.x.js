/* @flow */
/* eslint-disable */

import MersenneTwister from 'mersenne-twister';

const g1 = new MersenneTwister();
const x1: number = g1.random_int();

// $ExpectError number. This type is incompatible with string
const x2: string = g1.random_int();

const g2 = new MersenneTwister(456);
const g3 = new MersenneTwister([456, 789]);

// $ExpectError string. This type is incompatible with number|array type
const g4 = new MersenneTwister('foo');
