declare module "datauri-download" {
  declare module.exports: (
    filename: string,
    type: string,
    data: string | ArrayBuffer | Blob
  ) => void;
}

declare module "datauri-download/index" {
  declare module.exports: $Exports<"datauri-download">;
}

declare module "datauri-download/index.js" {
  declare module.exports: $Exports<"datauri-download">;
}
