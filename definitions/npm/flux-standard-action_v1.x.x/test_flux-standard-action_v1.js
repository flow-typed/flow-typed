// @flow
import { isFSA, isError } from 'flux-standard-action';


(isFSA(): boolean);
// $ExpectError boolean is incompatible with type number
(isFSA(): number);

(isError(): boolean);
// $ExpectError boolean is incompatible with type number
(isError(): number);
