declare type $npm$mime$TypeMap = {[mime: string]: Array<string>};

declare class $npm$mime$Mime {
  constructor(...typeMap: Array<$npm$mime$TypeMap>): void;

  define(typeMap: $npm$mime$TypeMap, force?: boolean): void;
  getExtension(mime: string): ?string;
  getType(path: string): ?string;
}

declare module 'mime' {
  declare type TypeMap = $npm$mime$TypeMap;
  declare module.exports: $npm$mime$Mime;
}

declare module 'mime/lite' {
  declare type TypeMap = $npm$mime$TypeMap;
  declare module.exports: $npm$mime$Mime;
}

declare module 'mime/Mime' {
  declare type TypeMap = $npm$mime$TypeMap;
  declare module.exports: typeof $npm$mime$Mime;
}
