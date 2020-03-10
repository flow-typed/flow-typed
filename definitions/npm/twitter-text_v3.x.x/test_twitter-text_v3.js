/* @flow */

import { describe, it } from 'flow-typed-test';
import {
    autoLink,
    extractEntitiesWithIndices,
    parseTweet,
} from 'twitter-text';

describe('autoLink', () => {
    it('should accept string text', () => {
        autoLink('text');
    });
    it('should accept object options', () => {
        autoLink('text', undefined);
        autoLink('text', {
            targetBlank: true,
            suppressNoFollow: true,
            hashtagClass: 'hashtag',
            hashtagUrlBase: '/search/hashtag',
        });
    });
    it('should return string', () => {
        const linkedText: string = autoLink('text');
    });

    it('should not accept non-string required text', () => {
        // $ExpectError
        autoLink(undefined);
        // $ExpectError
        autoLink(null);
        // $ExpectError
        autoLink(0);
        // $ExpectError
        autoLink({});
    });
    it('should not accept non-object options', () => {
        // $ExpectError
        autoLink('text', null);
        // $ExpectError
        autoLink('text', 0);
    });
    it('should not accept unknown options', () => {
        // $ExpectError
        autoLink('text', {edit: 'tweets'});
    });
});

describe('extractEntitiesWithIndices', () => {
    it('should accept string text', () => {
        extractEntitiesWithIndices('text');
    });
    it('should return entities with indices of arity 2', () => {
        const entitiesWithIndices = extractEntitiesWithIndices('text');
        entitiesWithIndices && entitiesWithIndices[0].indices[0];
        entitiesWithIndices && entitiesWithIndices[0].indices[1];
        // $ExpectError
        entitiesWithIndices && entitiesWithIndices[0].indices[2];
    });

    it('should not accept non-string required text', () => {
        // $ExpectError
        extractEntitiesWithIndices(undefined);
        // $ExpectError
        extractEntitiesWithIndices(null);
        // $ExpectError
        extractEntitiesWithIndices(0);
        // $ExpectError
        extractEntitiesWithIndices({});
    });
});

describe('parseTweet', () => {
    it('should accept string text', () => {
        parseTweet('text');
    });
    it('should accept exact config options', () => {
        parseTweet('text', undefined);
        // $ExpectError
        parseTweet('text', {something: 'unknown'});
    });

    it('should not accept non-string required text', () => {
        // $ExpectError
        parseTweet(undefined);
        // $ExpectError
        parseTweet(null);
        // $ExpectError
        parseTweet(0);
        // $ExpectError
        parseTweet({});
    });
});