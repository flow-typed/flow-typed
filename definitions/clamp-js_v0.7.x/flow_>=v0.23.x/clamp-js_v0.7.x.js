type ClampOptions = {
  clamp?: number|string;
  useNativeClamp?: bool,
  truncationChar?: string,
  truncationHTML?: string,
  splitOnChars?: Array<string>,
  animate?: bool,
}

declare module 'Clamp-js' {
  declare function exports(element: HTMLElement, options?: ClampOptions): void;
}
