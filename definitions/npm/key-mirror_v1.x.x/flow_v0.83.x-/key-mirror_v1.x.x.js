declare module 'key-mirror' {
  declare module.exports: <O>(obj: O) =>  $ObjMapi<O, <K>(k:K) => K>;
}
