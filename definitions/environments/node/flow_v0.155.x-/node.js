// https://nodejs.org/api/esm.html#node-imports

declare module 'node:assert' {
  declare module.exports: $Exports<'assert'>;
}

declare module 'node:assert/strict' {
  declare module.exports: $Exports<'assert'>['strict'];
}

declare module 'node:events' {
  declare module.exports: $Exports<'events'>;
}

declare module 'node:fs' {
  declare module.exports: $Exports<'fs'>;
}

declare module 'node:os' {
  declare module.exports: $Exports<'os'>;
}

declare module 'fs/promises' {
  declare module.exports: $Exports<'fs'>['promises'];
}

declare module 'node:fs/promises' {
  declare module.exports: $Exports<'fs'>['promises'];
}

declare module 'node:path' {
  declare module.exports: $Exports<'path'>;
}

declare module 'process' {
  declare module.exports: Process;
}

declare module 'node:process' {
  declare module.exports: $Exports<'process'>;
}

declare module 'node:util' {
  declare module.exports: $Exports<'util'>;
}

declare module 'node:url' {
  declare module.exports: $Exports<'url'>;
}
