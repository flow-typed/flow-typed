declare module 'safe-buffer' {
  import type { Buffer as NodeBuffer } from 'buffer';
  declare export var Buffer: NodeBuffer;
}
