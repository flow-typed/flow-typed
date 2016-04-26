declare module 'dropzone' {
  declare type FilesToString = (files: File|Array<File>) => string;
  declare type DrawImageOptions = {
    srcX: number,
    srcY: number,
    srcWidth: number,
    srcHeight: number,
  }
  declare type DropzoneOptions = {
    acceptedFiles?: string,
    addRemoveLinks?: bool,
    autoProcessQueue?: bool,
    clickable?: bool,
    createImageThumbnails?: bool,
    dictCancelUpload?: string,
    dictCancelUploadConfirmation?: string,
    dictDefaultMessage?: string,
    dictFallbackMessage?: string,
    dictFallbackText?: string,
    dictFileTooBig?: string,
    dictInvalidFileType?: string,
    dictMaxFilesExceeded?: string,
    dictRemoveFile?: string,
    dictResponseError?: string,
    fallback?: () => mixed,
    filesizeBase?: number,
    forceFallback?: bool,
    headers?: {[key: string]: string},
    init?: () => mixed,
    maxFiles?: number,
    maxFilesize?: number,
    maxThumbnailFilesize?: number,
    method?: 'post'|'put'|FilesToString,
    parallelUploads?: number,
    paramName?: string,
    previewsContainer?: HTMLElement|string,
    previewTemplate?: string,
    resize?: (file: File) => DrawImageOptions,
    thumbnailHeight?: number,
    thumbnailWidth?: number,
    uploadMultiple?: bool,
    url: string|FilesToString,
  }
  declare class Dropzone {
    constructor(selector: string, options: DropzoneOptions): Dropzone;
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
  declare var exports: typeof Dropzone;
}
