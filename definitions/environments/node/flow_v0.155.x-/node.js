// https://nodejs.org/api/fs.html#promises-api

declare module 'fs/promises' {
  declare module.exports: $Exports<'fs'>['promises'];
}

// https://nodejs.org/api/esm.html#node-imports

declare module 'node:events' {
  declare module.exports: $Exports<'events'>;
}

declare module 'node:fs' {
  declare module.exports: $Exports<'fs'>;
}

declare module 'node:fs/promises' {
  declare module.exports: $Exports<'fs'>['promises'];
}

declare module 'node:os' {
  declare module.exports: $Exports<'os'>;
}

declare module 'node:path' {
  declare module.exports: $Exports<'path'>;
}

declare module 'node:util' {
  declare module.exports: $Exports<'util'>;
}

declare module 'node:url' {
  declare module.exports: $Exports<'url'>;
}
