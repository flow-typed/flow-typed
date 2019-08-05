declare module "datauri-download" {
  declare module.exports: (
    filename: string,
    type: string,
    data: string | ArrayBuffer | Blob
  ) => void;
}
