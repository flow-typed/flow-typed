declare module "datauri-download" {
  declare module.exports: (
    filename: string,
    type: string,
    data: string | ArrayBuffer | ArrayBufferView | Blob | DOMString
  ) => void;
}

declare module "datauri-download/index" {
  declare module.exports: $Exports<"datauri-download">;
}

declare module "datauri-download/index.js" {
  declare module.exports: $Exports<"datauri-download">;
}
