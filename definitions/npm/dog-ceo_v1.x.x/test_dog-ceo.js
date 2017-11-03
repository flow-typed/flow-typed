// @flow

import { Breed } from 'dog-ceo';

Breed.list((error?: Error, list?: string[]) => {});

Breed.getRandomImageUrl((error?: Error, url?: string) => {});

// $ExpectError
(new Breed());

const breed: Breed = new Breed('shiba');
(breed.identifier: string);

const subbreed: Breed = new Breed('foo', 'bar');
(subbreed.identifier: string);

breed.getImageUrls((error?: Error, urls?: string[]) => {});
breed.getRandomImageUrl((error?: Error, url?: string) => {});
