// @flow
import algoliasearchImport from 'algoliasearch';

function syncImportTests() {
  const searchIndex = algoliasearchImport('', '').initIndex('');
  searchIndex.search('test').then(result => console.warn(result.hits));
  // $ExpectError
  searchIndex.search('test').nonPromiseProperty;
}

function requireTests() {
  const algoliasearch = require('algoliasearch');
  const searchIndex = algoliasearch('', '').initIndex('');
  searchIndex.search('test').then(result => console.warn(result.hits));
  // $ExpectError
  searchIndex.search('test').nonPromiseProperty;
}

async function asyncImportTests() {
  const algoliasearch = await import('algoliasearch');
  const searchIndex = algoliasearch('', '').initIndex('');
  searchIndex.search('test').then(result => console.warn(result.hits));
  // $ExpectError
  searchIndex.search('test').nonPromiseProperty;
}
