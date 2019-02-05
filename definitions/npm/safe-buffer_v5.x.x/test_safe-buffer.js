import { Buffer as SafeBuffer } from 'safe-buffer';

const d: Buffer = new SafeBuffer('hey');
const d1: Buffer = SafeBuffer.from('hey');
