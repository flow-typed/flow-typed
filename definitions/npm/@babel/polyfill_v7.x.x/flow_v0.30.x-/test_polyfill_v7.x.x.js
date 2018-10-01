// @flow
import '@babel/polyfill';

// This should fail but couldn't make it to do so
import defaultValue from '@babel/polyfill';

// $ExpectError does not export anything
import { namedExport } from '@babel/polyfill';
