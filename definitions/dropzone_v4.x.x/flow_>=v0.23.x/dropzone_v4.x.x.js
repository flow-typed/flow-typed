type dropzone$FilesToString = (files: File|Array<File>) => string;
type dropzone$DrawImageOptions = {
  srcX: number,
  srcY: number,
  srcWidth: number,
  srcHeight: number,
}

type dropzone$DropzoneOptions = {
  url: string|dropzone$FilesToString,
  method?: 'post'|'put'|dropzone$FilesToString,
  parallelUploads?: number,
  maxFilesize?: number,
  filesizeBase?: number,
  paramName?: string,
  uploadMultiple?: bool,
  headers?: {[key: string]: string},
  addRemoveLinks?: bool,
  previewsContainer?: HTMLElement|string,
  clickable?: bool,
  createImageThumbnails?: bool,
  maxThumbnailFilesize?: number,
  thumbnailWidth?: number,
  thumbnailHeight?: number,
  maxFiles?: number,
  resize?: (file: File) => dropzone$DrawImageOptions,
  init?: () => mixed,
  acceptedFiles?: string,
  autoProcessQueue?: bool,
  previewTemplate?: string,
  forceFallback?: bool,
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
  dictMaxFilesExceeded?: string,
}

declare module 'dropzone' {
  declare class Dropzone {
    static constructor(selector: string, options: dropzone$DropzoneOptions): Dropzone;
    static autoDiscover: bool;
    static confirm(question: string, accepted: () => mixed, rejected?: () => mixed): void;
    disable(): void;
    enable(): void;
    files: Array<File>;
    getAcceptedFiles(): Array<File>;
    getQueuedFiles(): Array<File>;
    getRejectedFiles(): Array<File>;
    getUploadingFiles(): Array<File>;
    off(event: string, fn: (...args: Array<any>) => mixed): void;
    on(event: string, fn: (...args: Array<any>) => mixed): void;
    processQueue(): void;
    removeAllFiles(cancel?: bool): void;
    removeFile(file: File): void;
    destroy(): void;
  }
  declare var exports: Class<Dropzone>;
}
