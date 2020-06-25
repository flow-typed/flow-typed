// @flow
import { isFSA, isError } from 'flux-standard-action';
import type { FluxStandardAction as FSA } from 'flux-standard-action';

(isFSA(): boolean);
// $FlowExpectedError boolean is incompatible with type number
(isFSA(): number);

(isError(): boolean);
// $FlowExpectedError boolean is incompatible with type number
(isError(): number);

type AddActionFSA = FSA<'add', { id: number }[], { time: Date }>;

const action: AddActionFSA = {
  type: 'add',
  payload: [{ id: 2 }],
  meta: {
    time: new Date(10000),
  },
};


// $FlowExpectedError
const failAction: AddActionFSA = {
  // $FlowExpectedError expected string literal `add`, got `fail` instead string literal `add`
  type: 'fail',
  payload: { id: 2 },
  meta: 'fails'
};
