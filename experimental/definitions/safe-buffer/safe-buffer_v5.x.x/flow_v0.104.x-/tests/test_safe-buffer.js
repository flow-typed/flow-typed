import { Buffer as SafeBuffer } from 'safe-buffer';
import { it } from 'flow-typed-test';

it('should be node buffer', () => {
  const d: Buffer = new SafeBuffer('hey');
  const d1: Buffer = SafeBuffer.from('hey');
});
