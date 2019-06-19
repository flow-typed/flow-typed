import diff from 'deep-diff';
import type { Difference } from 'deep-diff';

(diff('', ''): ?Difference[]);
(diff({}, {}): ?Difference[]);
const A: ?Difference[] = diff.diff(1, 2);

if (A) {
  // $ExpectError needs difference
  diff.applyChange({}, {});
  diff.applyChange({}, {}, A[0]);
  // $ExpectError needs difference
  diff.revertChange({}, {});
  diff.revertChange({}, {}, A[0])
}
