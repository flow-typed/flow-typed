type npm$clampJs$ClampOptions = {
  clamp?: number|string;
  useNativeClamp?: bool,
  truncationChar?: string,
  truncationHTML?: string,
  splitOnChars?: Array<string>,
  animate?: bool,
}

declare module 'clamp-js' {
  declare function exports(element: HTMLElement, options?: npm$clampJs$ClampOptions): void;
}
