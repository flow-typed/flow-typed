type $npm$dropzone$FilesToString = (files: File | Array<File>) => string;
type $npm$dropzone$DrawImageOptions = {
  srcX: number,
  srcY: number,
  srcWidth: number,
  srcHeight: number
};

type $npm$dropzone$DropzoneOptions = {
  url: string | $npm$dropzone$FilesToString,
  method?: "post" | "put" | $npm$dropzone$FilesToString,
  parallelUploads?: number,
  maxFilesize?: number,
  filesizeBase?: number,
  paramName?: string,
  uploadMultiple?: boolean,
  headers?: { [key: string]: string },
  addRemoveLinks?: boolean,
  previewsContainer?: HTMLElement | string,
  clickable?: boolean,
  createImageThumbnails?: boolean,
  maxThumbnailFilesize?: number,
  thumbnailWidth?: number,
  thumbnailHeight?: number,
  maxFiles?: number,
  resize?: (file: File) => $npm$dropzone$DrawImageOptions,
  init?: () => mixed,
  acceptedFiles?: string,
  autoProcessQueue?: boolean,
  previewTemplate?: string,
  forceFallback?: boolean,
  fallback?: () => mixed,
  dictDefaultMessage?: string,
  dictFallbackMessage?: string,
  dictFallbackText?: string,
  dictInvalidFileType?: string,
  dictFileTooBig?: string,
  dictResponseError?: string,
  dictCancelUpload?: string,
  dictCancelUploadConfirmation?: string,
  dictRemoveFile?: string,
  dictMaxFilesExceeded?: string
};

declare module "dropzone" {
  declare class Dropzone {
    files: Array<File>;

    static constructor(
      selector: string,
      options: $npm$dropzone$DropzoneOptions
    ): Dropzone;
    static autoDiscover: boolean;
    static confirm(
      question: string,
      accepted: () => mixed,
      rejected?: () => mixed
    ): void;
    destroy(): void;
    disable(): void;
    enable(): void;
    getAcceptedFiles(): Array<File>;
    getQueuedFiles(): Array<File>;
    getRejectedFiles(): Array<File>;
    getUploadingFiles(): Array<File>;
    off(event: string, fn: (...args: Array<any>) => mixed): void;
    on(event: string, fn: (...args: Array<any>) => mixed): void;
    processQueue(): void;
    removeAllFiles(cancel?: boolean): void;
    removeFile(file: File): void;
  }
  declare module.exports: Class<Dropzone>;
}
