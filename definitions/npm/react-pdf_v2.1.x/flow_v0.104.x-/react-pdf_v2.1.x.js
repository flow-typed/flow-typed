/**
 * Document
 */

declare module "react-pdf" {
  declare type DocumentDefaultProps = {
    error: "Failed to load PDF file.",
    loading: "Loading PDF…",
    noData: "No PDF file specified.",
    ...
  };

  declare type DocumentProps = {
    // TODO: Improve
    file: File | string | {
      url: string,
      data: any,
      httpHeaders: Object,
      ...
    },
    children: React$Node,
    className?: string,
    error?: React$Node,
    inputRef?: (ref: ?HTMLElement) => mixed,
    loading?: React$Node,
    noData?: React$Node,
    // TODO: Improve
    onItemClick?: (page: ?Object) => void,
    onLoadError?: (error: Error) => void,
    // TODO: Improve
    onLoadSuccess?: (pdf: Object) => void,
    onSourceError?: (error: Error) => void,
    onSourceSuccess?: () => void,
    rotate?: number,
    ...
  };

  declare type DocumentState = { // TODO: Improve
  pdf: ?Object, ... };

  declare type PageDefaultProps = {
    renderAnnotations: true,
    renderMode: "canvas",
    renderTextLayer: true,
    scale: 1.0,
    ...
  };

  declare type PageProps = {
    className?: string,
    inputRef?: (ref: ?HTMLElement) => mixed,
    onLoadError?: (error: Error) => void,
    // TODO: Improve
    onLoadSuccess?: (pdf: Object) => void,
    onRenderError?: (error: Error) => void,
    onRenderSuccess?: () => void,
    onGetAnnotationsError?: (error: Error) => void,
    // TODO: Improve
    onGetAnnotationsSuccess?: (annotations: any) => void,
    onGetTextError?: (error: Error) => void,
    // TODO: Improve
    onGetTextSuccess?: (items: any) => void,
    pageIndex?: number,
    pageNumber?: number,
    renderAnnotations?: boolean,
    renderTextLayer?: boolean,
    rotate?: number,
    scale?: number,
    width?: number,
    ...
  };

  declare type PageState = { // TODO: Improve
  page: ?Object, ... };

  declare type OutlineProps = {
    className?: string,
    // TODO: Improve
    onItemClick: (page: Object) => void,
    onLoadError?: (error: Error) => void,
    onLoadSuccess?: () => void,
    onParseError?: (error: Error) => void,
    // TODO: Improve
    onParseSuccess?: (outline: Object) => void,
    ...
  };

  declare type OutlineState = { // TODO: Improve
  outline: ?Array<any>, ... };

  declare type SetOptions = (options: {|
    cMapUrl?: string,
    cMapPacked?: boolean,
    disableWorker?: boolean,
    workerSrc?: string
  |}) => void;

  declare export class Document extends React$Component<DocumentProps, DocumentState> {
    static defaultProps: DocumentDefaultProps;
  }

  declare export class Page extends React$Component<PageProps, PageState> {
    static defaultProps: PageDefaultProps;
  }

  declare export class Outline extends React$Component<OutlineProps, OutlineState> {}

  declare export var setOptions: SetOptions;
}

declare module "react-pdf/build/entry.webpack" {
  declare module.exports: $Exports<"react-pdf">;
}

declare module "react-pdf/build/entry.noworker" {
  declare module.exports: $Exports<"react-pdf">;
}
