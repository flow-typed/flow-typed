declare module 'keymirror' {
  declare module.exports: <O>(obj: O) =>  $ObjMapi<O, <K>(k:K) => K>;
}
