/**
 * Document
 */

declare module "react-pdf" {
  declare type DocumentDefaultProps = {
    error: "Failed to load PDF file.",
    loading: "Loading PDF…",
    noData: "No PDF file specified."
  };

  declare type DocumentProps = {
    file: File | string | { url: string, data: any, httpHeaders: Object }, // TODO: Improve
    children: React$Node,
    className?: string,
    error?: React$Node,
    inputRef?: (ref: ?HTMLElement) => mixed,
    loading?: React$Node,
    noData?: React$Node,
    onItemClick?: (page: ?Object) => void, // TODO: Improve
    onLoadError?: (error: Error) => void,
    onLoadSuccess?: (pdf: Object) => void, // TODO: Improve
    onSourceError?: (error: Error) => void,
    onSourceSuccess?: () => void,
    rotate?: number
  };

  declare type DocumentState = {
    pdf: ?Object // TODO: Improve
  };

  declare type PageDefaultProps = {
    renderAnnotations: true,
    renderMode: "canvas",
    renderTextLayer: true,
    scale: 1.0
  };

  declare type PageProps = {
    className?: string,
    inputRef?: (ref: ?HTMLElement) => mixed,
    onLoadError?: (error: Error) => void,
    onLoadSuccess?: (pdf: Object) => void, // TODO: Improve
    onRenderError?: (error: Error) => void,
    onRenderSuccess?: () => void,
    onGetAnnotationsError?: (error: Error) => void,
    onGetAnnotationsSuccess?: (annotations: any) => void, // TODO: Improve
    onGetTextError?: (error: Error) => void,
    onGetTextSuccess?: (items: any) => void, // TODO: Improve
    pageIndex?: number,
    pageNumber?: number,
    renderAnnotations?: boolean,
    renderTextLayer?: boolean,
    rotate?: number,
    scale?: number,
    width?: number
  };

  declare type PageState = {
    page: ?Object // TODO: Improve
  };

  declare type OutlineProps = {
    className?: string,
    onItemClick: (page: Object) => void, // TODO: Improve
    onLoadError?: (error: Error) => void,
    onLoadSuccess?: () => void,
    onParseError?: (error: Error) => void,
    onParseSuccess?: (outline: Object) => void // TODO: Improve
  };

  declare type OutlineState = {
    outline: ?Array<any> // TODO: Improve
  };

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
