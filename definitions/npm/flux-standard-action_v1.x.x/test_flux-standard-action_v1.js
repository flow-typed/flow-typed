// @flow
import { isFSA, isError } from 'flux-standard-action';
import type { FluxStandardAction as FSA } from 'flux-standard-action';

(isFSA(): boolean);
// $ExpectError boolean is incompatible with type number
(isFSA(): number);

(isError(): boolean);
// $ExpectError boolean is incompatible with type number
(isError(): number);

type AddActionFSA = FSA<'add', { id: number }[], { time: Date }>;

const action: AddActionFSA = {
  type: 'add',
  payload: [{ id: 2 }],
  meta: {
    time: new Date(10000),
  },
};


const failAction: AddActionFSA = {
  // $ExpectError expected string literal `add`, got `fail` instead string literal `add`
  type: 'fail',
  // $ExpectError object literal. This type is incompatible with array type
  payload: { id: 2 },
  // $ExpectError string. This type is incompatible with object type
  meta: 'fails'
};
