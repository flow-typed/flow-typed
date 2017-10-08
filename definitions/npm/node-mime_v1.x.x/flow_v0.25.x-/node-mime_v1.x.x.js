declare module 'mime' {
  declare type MimeMap = {
    [mimeType: string]: string[]
  }
  
  declare module.exports: {
    define(map: MimeMap): void;
    load(file: string): void;
    lookup(path: string, fallback?: string): string;
    extension(mimeType: string): string;
    default_type: string;
    charsets: {
      lookup: (mimeType: string, fallback: string) => string
    }
  };
}