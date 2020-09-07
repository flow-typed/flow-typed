declare module 'supports-color' {
  declare module.exports: false |
    { level: 1, hasBasic: true, has256: false, has16m: false } |
    { level: 2, hasBasic: true, has256: true, has16m: false } |
    { level: 3, hasBasic: true, has256: true, has16m: true };
}
