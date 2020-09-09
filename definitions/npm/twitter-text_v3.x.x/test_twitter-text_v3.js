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
        // $FlowExpectedError
        autoLink(undefined);
        // $FlowExpectedError
        autoLink(null);
        // $FlowExpectedError
        autoLink(0);
        // $FlowExpectedError
        autoLink({});
    });
    it('should not accept non-object options', () => {
        // $FlowExpectedError
        autoLink('text', null);
        // $FlowExpectedError
        autoLink('text', 0);
    });
    it('should not accept unknown options', () => {
        // $FlowExpectedError
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
        // $FlowExpectedError
        entitiesWithIndices && entitiesWithIndices[0].indices[2];
    });

    it('should not accept non-string required text', () => {
        // $FlowExpectedError
        extractEntitiesWithIndices(undefined);
        // $FlowExpectedError
        extractEntitiesWithIndices(null);
        // $FlowExpectedError
        extractEntitiesWithIndices(0);
        // $FlowExpectedError
        extractEntitiesWithIndices({});
    });
});

describe('parseTweet', () => {
    it('should accept string text', () => {
        parseTweet('text');
    });
    it('should accept exact config options', () => {
        parseTweet('text', undefined);
        // $FlowExpectedError
        parseTweet('text', {something: 'unknown'});
    });

    it('should not accept non-string required text', () => {
        // $FlowExpectedError
        parseTweet(undefined);
        // $FlowExpectedError
        parseTweet(null);
        // $FlowExpectedError
        parseTweet(0);
        // $FlowExpectedError
        parseTweet({});
    });
});