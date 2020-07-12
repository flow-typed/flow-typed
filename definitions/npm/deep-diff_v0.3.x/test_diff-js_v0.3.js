import diff from 'deep-diff';
import type { Difference } from 'deep-diff';

(diff('', ''): ?Difference[]);
(diff({}, {}): ?Difference[]);
const A: ?Difference[] = diff.diff(1, 2);

if (A) {
  // $FlowExpectedError needs difference
  diff.applyChange({}, {});
  diff.applyChange({}, {}, A[0]);
  // $FlowExpectedError needs difference
  diff.revertChange({}, {});
  diff.revertChange({}, {}, A[0])
}
