type FilesToString = (files: File|Array<File>) => string;
type DrawImageOptions = {
  srcX: number,
  srcY: number,
  srcWidth: number,
  srcHeight: number,
}

type DropzoneOptions = {
  url: string|FilesToString,
  method?: 'post'|'put'|FilesToString,
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
  resize?: (file: File) => DrawImageOptions,
  init?: Function,
  acceptedFiles?: string,
  autoProcessQueue?: bool,
  previewTemplate?: string,
  forceFallback?: bool,
  fallback?: Function,
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
    static constructor(selector: string, options: DropzoneOptions): Dropzone;
    static autoDiscover: bool;
    static confirm(question: string, accepted: Function, rejected?: Function): void;
    disable(): void;
    enable(): void;
    files: Array<File>;
    getAcceptedFiles(): Array<File>;
    getQueuedFiles(): Array<File>;
    getRejectedFiles(): Array<File>;
    getUploadingFiles(): Array<File>;
    off(event: string, fn: Function): void;
    on(event: string, fn: Function): void;
    processQueue(): void;
    removeAllFiles(cancel?: bool): void;
    removeFile(file: File): void;
    destroy(): void;
  }
  declare var exports: Class<Dropzone>;
}
