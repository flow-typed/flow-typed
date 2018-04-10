// @flow
import algoliasearch from 'algoliasearch';

const searchIndex = algoliasearch('', '').initIndex('');
searchIndex.search('test').then((result) => console.warn(result.hits));

// $ExpectError
searchIndex.search('test').nonPromiseProperty;
